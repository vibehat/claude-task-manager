import useSWR from 'swr';
import type {
  TemplateListResponse,
  TemplateContentResponse,
  CreateTemplateRequest,
  UpdateTemplateRequest,
  TemplatePreviewRequest,
  TemplatePreviewResponse,
} from '@/types/template.types';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};

// Hook to fetch all templates
export function useTemplates(category?: string, limit?: number) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (limit) params.set('limit', limit.toString());

  const queryString = params.toString();
  const url = `/api/templates${queryString ? `?${queryString}` : ''}`;

  const { data, error, mutate } = useSWR<TemplateListResponse>(url, fetcher);

  return {
    templates: data?.templates || [],
    categories: data?.categories || [],
    totalCount: data?.totalCount || 0,
    isLoading: !error && !data,
    error,
    refetch: mutate,
  };
}

// Hook to fetch a specific template
export function useTemplate(slug: string | null) {
  const { data, error, mutate } = useSWR<TemplateContentResponse>(
    slug ? `/api/templates/${slug}` : null,
    fetcher
  );

  return {
    template: data?.template || null,
    isLoading: !error && !data && !!slug,
    error,
    refetch: mutate,
  };
}

// Hook to create a new template
export function useCreateTemplate() {
  const createTemplate = async (templateData: CreateTemplateRequest) => {
    const response = await fetch('/api/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(templateData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create template');
    }

    return response.json();
  };

  return { createTemplate };
}

// Hook to update a template
export function useUpdateTemplate() {
  const updateTemplate = async (slug: string, templateData: UpdateTemplateRequest) => {
    const response = await fetch(`/api/templates/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(templateData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update template');
    }

    return response.json();
  };

  return { updateTemplate };
}

// Hook to delete a template
export function useDeleteTemplate() {
  const deleteTemplate = async (slug: string) => {
    const response = await fetch(`/api/templates/${slug}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete template');
    }

    return response.json();
  };

  return { deleteTemplate };
}

// Hook to preview template with variables
export function useTemplatePreview() {
  const previewTemplate = async (slug: string, variables: Record<string, string>) => {
    const response = await fetch(`/api/templates/${slug}/preview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ templateId: slug, variables } as TemplatePreviewRequest),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to preview template');
    }

    return response.json() as Promise<TemplatePreviewResponse>;
  };

  return { previewTemplate };
}
