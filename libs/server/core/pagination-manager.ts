import { z } from 'zod';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';
import { getGlobalTaskCache } from '../performance/performance-cache';

// Pagination configuration interfaces
export interface PaginationConfig {
   defaultPageSize: number;
   maxPageSize: number;
   enableCaching: boolean;
   cacheTime: number;
   enableVirtualization: boolean;
   preloadPages: number;
   enableInfiniteScroll: boolean;
   sortOptions: SortOption[];
   filterOptions: FilterOption[];
}

export interface SortOption {
   field: string;
   label: string;
   type: 'string' | 'number' | 'date' | 'boolean';
   defaultDirection?: 'asc' | 'desc';
}

export interface FilterOption {
   field: string;
   label: string;
   type: 'select' | 'multiselect' | 'range' | 'search' | 'date' | 'boolean';
   options?: { value: any; label: string }[];
   defaultValue?: any;
}

export interface PaginationRequest {
   page: number;
   pageSize: number;
   sortBy?: string;
   sortDirection?: 'asc' | 'desc';
   filters?: Record<string, any>;
   search?: string;
   includeMetadata?: boolean;
}

export interface PaginationResponse<T> {
   data: T[];
   pagination: {
      currentPage: number;
      pageSize: number;
      totalItems: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startIndex: number;
      endIndex: number;
   };
   sort?: {
      field: string;
      direction: 'asc' | 'desc';
   };
   filters?: Record<string, any>;
   metadata?: {
      loadTime: number;
      cacheHit: boolean;
      totalQueryTime: number;
      dataSource: string;
      lastUpdated: number;
   };
}

export interface VirtualizedConfig {
   itemHeight: number;
   containerHeight: number;
   overscan: number;
   enableDynamicHeight: boolean;
}

export interface VirtualizedResult<T> {
   visibleItems: T[];
   startIndex: number;
   endIndex: number;
   totalHeight: number;
   offsetTop: number;
}

// Validation schemas
const paginationRequestSchema = z.object({
   page: z.number().min(1).max(10000),
   pageSize: z.number().min(1).max(1000),
   sortBy: z.string().optional(),
   sortDirection: z.enum(['asc', 'desc']).optional(),
   filters: z.record(z.any()).optional(),
   search: z.string().max(500).optional(),
   includeMetadata: z.boolean().optional(),
});

const virtualizedConfigSchema = z.object({
   itemHeight: z.number().min(1).max(1000),
   containerHeight: z.number().min(1).max(10000),
   overscan: z.number().min(0).max(100),
   enableDynamicHeight: z.boolean().optional(),
});

// Default configurations for different data types
const DEFAULT_CONFIGS: Record<string, PaginationConfig> = {
   tasks: {
      defaultPageSize: 50,
      maxPageSize: 200,
      enableCaching: true,
      cacheTime: 5 * 60 * 1000, // 5 minutes
      enableVirtualization: true,
      preloadPages: 1,
      enableInfiniteScroll: true,
      sortOptions: [
         { field: 'id', label: 'Task ID', type: 'string', defaultDirection: 'asc' },
         { field: 'title', label: 'Title', type: 'string', defaultDirection: 'asc' },
         { field: 'status', label: 'Status', type: 'string', defaultDirection: 'asc' },
         { field: 'priority', label: 'Priority', type: 'string', defaultDirection: 'desc' },
         { field: 'createdAt', label: 'Created', type: 'date', defaultDirection: 'desc' },
         { field: 'updatedAt', label: 'Updated', type: 'date', defaultDirection: 'desc' },
      ],
      filterOptions: [
         {
            field: 'status',
            label: 'Status',
            type: 'multiselect',
            options: [
               { value: 'pending', label: 'Pending' },
               { value: 'in-progress', label: 'In Progress' },
               { value: 'done', label: 'Done' },
               { value: 'blocked', label: 'Blocked' },
               { value: 'cancelled', label: 'Cancelled' },
            ],
         },
         {
            field: 'priority',
            label: 'Priority',
            type: 'multiselect',
            options: [
               { value: 'high', label: 'High' },
               { value: 'medium', label: 'Medium' },
               { value: 'low', label: 'Low' },
            ],
         },
         {
            field: 'search',
            label: 'Search',
            type: 'search',
         },
      ],
   },

   files: {
      defaultPageSize: 100,
      maxPageSize: 500,
      enableCaching: true,
      cacheTime: 10 * 60 * 1000, // 10 minutes
      enableVirtualization: true,
      preloadPages: 0,
      enableInfiniteScroll: false,
      sortOptions: [
         { field: 'name', label: 'Name', type: 'string', defaultDirection: 'asc' },
         { field: 'size', label: 'Size', type: 'number', defaultDirection: 'desc' },
         { field: 'modified', label: 'Modified', type: 'date', defaultDirection: 'desc' },
         { field: 'type', label: 'Type', type: 'string', defaultDirection: 'asc' },
      ],
      filterOptions: [
         {
            field: 'type',
            label: 'File Type',
            type: 'multiselect',
            options: [
               { value: 'json', label: 'JSON' },
               { value: 'md', label: 'Markdown' },
               { value: 'txt', label: 'Text' },
               { value: 'yaml', label: 'YAML' },
            ],
         },
      ],
   },

   logs: {
      defaultPageSize: 25,
      maxPageSize: 100,
      enableCaching: false, // Don't cache logs
      cacheTime: 0,
      enableVirtualization: true,
      preloadPages: 0,
      enableInfiniteScroll: true,
      sortOptions: [
         { field: 'timestamp', label: 'Time', type: 'date', defaultDirection: 'desc' },
         { field: 'level', label: 'Level', type: 'string', defaultDirection: 'desc' },
         { field: 'component', label: 'Component', type: 'string', defaultDirection: 'asc' },
      ],
      filterOptions: [
         {
            field: 'level',
            label: 'Log Level',
            type: 'multiselect',
            options: [
               { value: 'error', label: 'Error' },
               { value: 'warn', label: 'Warning' },
               { value: 'info', label: 'Info' },
               { value: 'debug', label: 'Debug' },
            ],
         },
      ],
   },
};

// Main pagination manager class
export class PaginationManager<T = any> {
   private config: PaginationConfig;
   private cache = getGlobalTaskCache();
   private errorHandler = getGlobalErrorHandler();
   private dataSource: string;
   private lastQuery: PaginationRequest | null = null;
   private preloadedPages = new Map<string, PaginationResponse<T>>();

   constructor(dataSource: string, config?: Partial<PaginationConfig>) {
      this.dataSource = dataSource;
      this.config = {
         ...(DEFAULT_CONFIGS[dataSource] || DEFAULT_CONFIGS.tasks),
         ...config,
      };
   }

   // Main pagination method
   async paginate(
      request: PaginationRequest,
      dataProvider: (req: PaginationRequest) => Promise<{ data: T[]; total: number }>
   ): Promise<PaginationResponse<T>> {
      const startTime = Date.now();

      try {
         // Validate request
         const validationResult = paginationRequestSchema.safeParse(request);
         if (!validationResult.success) {
            throw new Error(`Invalid pagination request: ${validationResult.error.message}`);
         }

         // Normalize request
         const normalizedRequest = this.normalizeRequest(request);

         // Generate cache key
         const cacheKey = this.generateCacheKey(normalizedRequest);

         // Check cache if enabled
         if (this.config.enableCaching && this.config.cacheTime > 0) {
            const cachedResult = await this.cache.get<PaginationResponse<T>>(cacheKey);
            if (cachedResult.hit && cachedResult.value) {
               // Update metadata for cache hit
               const response = cachedResult.value;
               if (response.metadata) {
                  response.metadata.cacheHit = true;
                  response.metadata.loadTime = Date.now() - startTime;
               }

               // Preload adjacent pages in background
               this.preloadAdjacentPages(normalizedRequest, dataProvider);

               return response;
            }
         }

         // Fetch data from provider
         const queryStartTime = Date.now();
         const result = await dataProvider(normalizedRequest);
         const queryTime = Date.now() - queryStartTime;

         // Build pagination response
         const response = this.buildPaginationResponse(
            result.data,
            result.total,
            normalizedRequest,
            {
               loadTime: Date.now() - startTime,
               cacheHit: false,
               totalQueryTime: queryTime,
               dataSource: this.dataSource,
               lastUpdated: Date.now(),
            }
         );

         // Cache result if enabled
         if (this.config.enableCaching && this.config.cacheTime > 0) {
            await this.cache.set(cacheKey, response, this.config.cacheTime);
         }

         // Store last query for preloading
         this.lastQuery = normalizedRequest;

         // Preload adjacent pages in background
         this.preloadAdjacentPages(normalizedRequest, dataProvider);

         return response;
      } catch (error) {
         const paginationError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Pagination error: ${error.message}`,
            {
               dataSource: this.dataSource,
               request: request,
               component: 'PaginationManager',
            },
            error as Error
         );

         await this.errorHandler.handleError(paginationError, true);

         // Return empty result on error
         return this.buildPaginationResponse([], 0, request, {
            loadTime: Date.now() - startTime,
            cacheHit: false,
            totalQueryTime: 0,
            dataSource: this.dataSource,
            lastUpdated: Date.now(),
         });
      }
   }

   // Virtualization support for large datasets
   async virtualizeData(
      data: T[],
      config: VirtualizedConfig,
      scrollTop = 0
   ): Promise<VirtualizedResult<T>> {
      try {
         // Validate virtualization config
         const validationResult = virtualizedConfigSchema.safeParse(config);
         if (!validationResult.success) {
            throw new Error(`Invalid virtualization config: ${validationResult.error.message}`);
         }

         const { itemHeight, containerHeight, overscan, enableDynamicHeight } = config;

         // Calculate visible range
         const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
         const visibleCount = Math.ceil(containerHeight / itemHeight) + overscan * 2;
         const endIndex = Math.min(data.length - 1, startIndex + visibleCount);

         // Get visible items
         const visibleItems = data.slice(startIndex, endIndex + 1);

         // Calculate total height and offset
         const totalHeight = data.length * itemHeight;
         const offsetTop = startIndex * itemHeight;

         return {
            visibleItems,
            startIndex,
            endIndex,
            totalHeight,
            offsetTop,
         };
      } catch (error) {
         const virtualizationError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Virtualization error: ${error.message}`,
            {
               dataSource: this.dataSource,
               config,
               component: 'PaginationManager',
            },
            error as Error
         );

         await this.errorHandler.handleError(virtualizationError, true);

         // Return all data as fallback
         return {
            visibleItems: data,
            startIndex: 0,
            endIndex: data.length - 1,
            totalHeight: data.length * (config.itemHeight || 50),
            offsetTop: 0,
         };
      }
   }

   // Infinite scroll support
   async loadNextPage(
      currentResponse: PaginationResponse<T>,
      dataProvider: (req: PaginationRequest) => Promise<{ data: T[]; total: number }>
   ): Promise<PaginationResponse<T> | null> {
      if (!currentResponse.pagination.hasNextPage) {
         return null;
      }

      const nextPageRequest: PaginationRequest = {
         page: currentResponse.pagination.currentPage + 1,
         pageSize: currentResponse.pagination.pageSize,
         sortBy: currentResponse.sort?.field,
         sortDirection: currentResponse.sort?.direction,
         filters: currentResponse.filters,
      };

      return this.paginate(nextPageRequest, dataProvider);
   }

   // Search and filtering
   async search(
      query: string,
      fields: string[],
      dataProvider: (req: PaginationRequest) => Promise<{ data: T[]; total: number }>
   ): Promise<PaginationResponse<T>> {
      const searchRequest: PaginationRequest = {
         page: 1,
         pageSize: this.config.defaultPageSize,
         search: query,
         filters: { searchFields: fields },
      };

      return this.paginate(searchRequest, dataProvider);
   }

   // Advanced filtering
   async filter(
      filters: Record<string, any>,
      dataProvider: (req: PaginationRequest) => Promise<{ data: T[]; total: number }>
   ): Promise<PaginationResponse<T>> {
      const filterRequest: PaginationRequest = {
         page: 1,
         pageSize: this.config.defaultPageSize,
         filters,
      };

      return this.paginate(filterRequest, dataProvider);
   }

   // Sorting
   async sort(
      field: string,
      direction: 'asc' | 'desc',
      dataProvider: (req: PaginationRequest) => Promise<{ data: T[]; total: number }>
   ): Promise<PaginationResponse<T>> {
      const sortRequest: PaginationRequest = {
         page: 1,
         pageSize: this.config.defaultPageSize,
         sortBy: field,
         sortDirection: direction,
      };

      return this.paginate(sortRequest, dataProvider);
   }

   // Private helper methods

   private normalizeRequest(request: PaginationRequest): PaginationRequest {
      return {
         page: Math.max(1, request.page),
         pageSize: Math.min(
            this.config.maxPageSize,
            Math.max(1, request.pageSize || this.config.defaultPageSize)
         ),
         sortBy: request.sortBy,
         sortDirection: request.sortDirection || 'asc',
         filters: request.filters || {},
         search: request.search?.trim(),
         includeMetadata: request.includeMetadata !== false,
      };
   }

   private generateCacheKey(request: PaginationRequest): string {
      const keyData = {
         dataSource: this.dataSource,
         page: request.page,
         pageSize: request.pageSize,
         sortBy: request.sortBy,
         sortDirection: request.sortDirection,
         filters: request.filters,
         search: request.search,
      };

      const keyString = JSON.stringify(keyData, Object.keys(keyData).sort());
      return `pagination:${Buffer.from(keyString).toString('base64')}`;
   }

   private buildPaginationResponse(
      data: T[],
      totalItems: number,
      request: PaginationRequest,
      metadata: PaginationResponse<T>['metadata']
   ): PaginationResponse<T> {
      const totalPages = Math.ceil(totalItems / request.pageSize);
      const currentPage = request.page;
      const startIndex = (currentPage - 1) * request.pageSize;
      const endIndex = Math.min(startIndex + request.pageSize - 1, totalItems - 1);

      return {
         data,
         pagination: {
            currentPage,
            pageSize: request.pageSize,
            totalItems,
            totalPages,
            hasNextPage: currentPage < totalPages,
            hasPreviousPage: currentPage > 1,
            startIndex,
            endIndex,
         },
         sort: request.sortBy
            ? {
                 field: request.sortBy,
                 direction: request.sortDirection || 'asc',
              }
            : undefined,
         filters: request.filters,
         metadata: request.includeMetadata ? metadata : undefined,
      };
   }

   private async preloadAdjacentPages(
      request: PaginationRequest,
      dataProvider: (req: PaginationRequest) => Promise<{ data: T[]; total: number }>
   ): Promise<void> {
      if (this.config.preloadPages === 0) {
         return;
      }

      // Preload in background without waiting
      setTimeout(async () => {
         try {
            const preloadPromises: Promise<void>[] = [];

            // Preload next pages
            for (let i = 1; i <= this.config.preloadPages; i++) {
               const nextPageRequest = { ...request, page: request.page + i };
               const cacheKey = this.generateCacheKey(nextPageRequest);

               // Only preload if not already cached
               const cached = await this.cache.get(cacheKey);
               if (!cached.hit) {
                  preloadPromises.push(
                     this.paginate(nextPageRequest, dataProvider)
                        .then((result) => {
                           this.preloadedPages.set(cacheKey, result);
                        })
                        .catch(() => {
                           // Ignore preload errors
                        })
                  );
               }
            }

            // Preload previous pages
            for (let i = 1; i <= this.config.preloadPages; i++) {
               const prevPage = request.page - i;
               if (prevPage >= 1) {
                  const prevPageRequest = { ...request, page: prevPage };
                  const cacheKey = this.generateCacheKey(prevPageRequest);

                  // Only preload if not already cached
                  const cached = await this.cache.get(cacheKey);
                  if (!cached.hit) {
                     preloadPromises.push(
                        this.paginate(prevPageRequest, dataProvider)
                           .then((result) => {
                              this.preloadedPages.set(cacheKey, result);
                           })
                           .catch(() => {
                              // Ignore preload errors
                           })
                     );
                  }
               }
            }

            await Promise.allSettled(preloadPromises);
         } catch (error) {
            // Ignore preload errors
            console.warn('Preload error:', error);
         }
      }, 100); // Small delay to not block main request
   }

   // Public utility methods

   // Get pagination configuration
   getConfig(): PaginationConfig {
      return { ...this.config };
   }

   // Update configuration
   updateConfig(newConfig: Partial<PaginationConfig>): void {
      this.config = { ...this.config, ...newConfig };
   }

   // Get available sort options
   getSortOptions(): SortOption[] {
      return [...this.config.sortOptions];
   }

   // Get available filter options
   getFilterOptions(): FilterOption[] {
      return [...this.config.filterOptions];
   }

   // Clear cache for this data source
   async clearCache(): Promise<void> {
      const pattern = new RegExp(`^pagination:.*${this.dataSource}`);
      await this.cache.deleteByPattern(pattern);
      this.preloadedPages.clear();
   }

   // Get pagination statistics
   getStats() {
      return {
         dataSource: this.dataSource,
         config: this.config,
         lastQuery: this.lastQuery,
         preloadedPagesCount: this.preloadedPages.size,
      };
   }
}

// Specialized pagination managers for different data types
export class TaskPaginationManager extends PaginationManager {
   constructor(config?: Partial<PaginationConfig>) {
      super('tasks', config);
   }

   async paginateTasks(
      request: PaginationRequest,
      taskProvider: (req: PaginationRequest) => Promise<{ data: any[]; total: number }>
   ): Promise<PaginationResponse<any>> {
      return this.paginate(request, taskProvider);
   }

   async searchTasks(
      query: string,
      taskProvider: (req: PaginationRequest) => Promise<{ data: any[]; total: number }>
   ): Promise<PaginationResponse<any>> {
      return this.search(query, ['title', 'description', 'details'], taskProvider);
   }

   async filterTasksByStatus(
      statuses: string[],
      taskProvider: (req: PaginationRequest) => Promise<{ data: any[]; total: number }>
   ): Promise<PaginationResponse<any>> {
      return this.filter({ status: statuses }, taskProvider);
   }
}

export class FilePaginationManager extends PaginationManager {
   constructor(config?: Partial<PaginationConfig>) {
      super('files', config);
   }

   async paginateFiles(
      request: PaginationRequest,
      fileProvider: (req: PaginationRequest) => Promise<{ data: any[]; total: number }>
   ): Promise<PaginationResponse<any>> {
      return this.paginate(request, fileProvider);
   }
}

export class LogPaginationManager extends PaginationManager {
   constructor(config?: Partial<PaginationConfig>) {
      super('logs', config);
   }

   async paginateLogs(
      request: PaginationRequest,
      logProvider: (req: PaginationRequest) => Promise<{ data: any[]; total: number }>
   ): Promise<PaginationResponse<any>> {
      return this.paginate(request, logProvider);
   }
}

// Utility functions for pagination
export const PaginationUtils = {
   // Calculate total pages
   calculateTotalPages: (totalItems: number, pageSize: number): number => {
      return Math.ceil(totalItems / pageSize);
   },

   // Calculate start and end indices
   calculateIndices: (page: number, pageSize: number, totalItems: number) => {
      const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
      return { startIndex, endIndex };
   },

   // Generate page numbers for pagination UI
   generatePageNumbers: (currentPage: number, totalPages: number, maxVisible = 5): number[] => {
      const pages: number[] = [];
      const half = Math.floor(maxVisible / 2);

      let start = Math.max(1, currentPage - half);
      const end = Math.min(totalPages, start + maxVisible - 1);

      // Adjust start if end is at the boundary
      if (end - start + 1 < maxVisible) {
         start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
         pages.push(i);
      }

      return pages;
   },

   // Create pagination request from URL parameters
   fromURLParams: (params: URLSearchParams): PaginationRequest => {
      return {
         page: parseInt(params.get('page') || '1', 10),
         pageSize: parseInt(params.get('pageSize') || '50', 10),
         sortBy: params.get('sortBy') || undefined,
         sortDirection: (params.get('sortDirection') as 'asc' | 'desc') || undefined,
         search: params.get('search') || undefined,
         filters: params.get('filters') ? JSON.parse(params.get('filters')!) : undefined,
      };
   },

   // Convert pagination request to URL parameters
   toURLParams: (request: PaginationRequest): URLSearchParams => {
      const params = new URLSearchParams();

      params.set('page', request.page.toString());
      params.set('pageSize', request.pageSize.toString());

      if (request.sortBy) params.set('sortBy', request.sortBy);
      if (request.sortDirection) params.set('sortDirection', request.sortDirection);
      if (request.search) params.set('search', request.search);
      if (request.filters && Object.keys(request.filters).length > 0) {
         params.set('filters', JSON.stringify(request.filters));
      }

      return params;
   },
};

// Export default configurations
export { DEFAULT_CONFIGS as PaginationConfigs };
