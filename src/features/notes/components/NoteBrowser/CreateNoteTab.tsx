import React from 'react';
import { CreateNote } from '../CreateNote';
import type { CreateNoteState } from '../CreateNote/CreateNote';

interface CreateNoteTabProps {
  onSave: (note: CreateNoteState) => void;
  onPublish: (note: CreateNoteState) => void;
  onCancel: () => void;
}

export function CreateNoteTab({
  onSave,
  onPublish,
  onCancel,
}: CreateNoteTabProps): React.JSX.Element {
  return <CreateNote onSave={onSave} onPublish={onPublish} onCancel={onCancel} />;
}
