// Hooks
export {
  useTemplates,
  useTemplate,
  useCreateTemplate,
  useUpdateTemplate,
  useDeleteTemplate,
  useTemplatePreview,
} from './hooks/useTemplates';

// Components
export { TemplateBrowser } from './components/TemplateBrowser';
export { TemplateSelector } from './components/TemplateSelector';
export { TemplateCreator } from './components/TemplateCreator';
export { TemplateToNoteForm } from './components/TemplateToNoteForm';

// Types (re-export from main types)
export type {
  Template,
  TemplateVariable,
  TemplateMetadata,
  CreateTemplateRequest,
  UpdateTemplateRequest,
  TemplateListResponse,
  TemplateContentResponse,
  CreateNoteFromTemplateRequest,
  TemplatePreviewRequest,
  TemplatePreviewResponse,
} from '@/types/template.types';
