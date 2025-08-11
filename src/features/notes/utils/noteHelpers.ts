export function getNoteTypeIcon(fileName: string, content?: string): string {
  const name = fileName.toLowerCase();

  // Check for specific file patterns
  if (name === 'readme.md' || name === 'changelog.md' || name === 'license.md') {
    return '📖';
  }

  if (name.includes('api') || name.includes('endpoints') || name.includes('swagger')) {
    return '📋';
  }

  if (name.includes('bug') || name.includes('fix') || name.includes('issue')) {
    return '🐛';
  }

  if (name.includes('auth') || name.includes('security') || name.includes('jwt')) {
    return '💡';
  }

  if (name.includes('pattern') || name.includes('component') || name.includes('design')) {
    return '🎨';
  }

  if (name.includes('setup') || name.includes('config') || name.includes('install')) {
    return '⚙️';
  }

  if (name.includes('meeting') || name.includes('notes')) {
    return '📋';
  }

  if (name.includes('idea') || name.includes('feature') || name.includes('proposal')) {
    return '💭';
  }

  if (name.includes('test') || name.includes('spec') || name.includes('experiment')) {
    return '🧪';
  }

  if (name.includes('learn') || name.includes('tutorial') || name.includes('guide')) {
    return '📚';
  }

  // Check content for additional context if provided
  if (content) {
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes('bug report') || lowerContent.includes('issue')) {
      return '🐛';
    }
    if (lowerContent.includes('research') || lowerContent.includes('investigation')) {
      return '💡';
    }
    if (lowerContent.includes('meeting') || lowerContent.includes('discussion')) {
      return '📋';
    }
  }

  // Default icon for markdown files
  return '📄';
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffSecs < 60) {
    return 'just now';
  }

  if (diffMins < 60) {
    return `${diffMins}m ago`;
  }

  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }

  if (diffWeeks < 4) {
    return `${diffWeeks}w ago`;
  }

  if (diffMonths < 12) {
    return `${diffMonths}mo ago`;
  }

  return `${Math.floor(diffMonths / 12)}y ago`;
}

export function formatFileDirectory(directory: string): string {
  if (directory === '.' || directory === '') {
    return 'root';
  }
  return directory;
}

export function getCategoryIcon(categoryName: string): string {
  const name = categoryName.toLowerCase();

  if (name.includes('doc')) return '📖';
  if (name.includes('implementation') || name.includes('note')) return '💡';
  if (name.includes('config')) return '⚙️';
  if (name.includes('api')) return '📋';
  if (name.includes('bug')) return '🐛';
  if (name.includes('meeting')) return '📝';
  if (name.includes('research')) return '🔬';
  if (name.includes('plan') || name.includes('idea')) return '💭';

  return '📁';
}
