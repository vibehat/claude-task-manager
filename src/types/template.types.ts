export interface Template {
  id: string;
  name: string;
  title: string;
  description?: string;
  category?: string;
  content: string;
  variables?: TemplateVariable[];
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}

export interface TemplateVariable {
  name: string;
  type: 'text' | 'date' | 'select' | 'textarea';
  label: string;
  description?: string;
  required?: boolean;
  defaultValue?: string;
  options?: string[]; // For select type
}

export interface TemplateMetadata {
  id: string;
  name: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  variableCount: number;
}

export interface CreateTemplateRequest {
  name: string;
  title: string;
  description?: string;
  category?: string;
  content: string;
  tags?: string[];
}

export type UpdateTemplateRequest = Partial<CreateTemplateRequest>;

export interface TemplateListResponse {
  templates: TemplateMetadata[];
  categories: string[];
  totalCount: number;
}

export interface TemplateContentResponse {
  template: Template;
}

export interface CreateNoteFromTemplateRequest {
  templateId: string;
  variables: Record<string, string>;
  title?: string;
  category?: string;
}

export interface TemplatePreviewRequest {
  templateId: string;
  variables: Record<string, string>;
}

export interface TemplatePreviewResponse {
  preview: string;
  title: string;
}
