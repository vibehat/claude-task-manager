import React from 'react';

export interface ContextSidebarProps {
  variant?:
    | 'bootstrap'
    | 'task-planning'
    | 'ai-handoff'
    | 'parallel-productivity'
    | 'ai-supervision';
}

interface SidebarSection {
  title: string;
  icon: string;
  items: { label: string; status?: string; badge?: string }[];
  active?: boolean;
}

export function ContextSidebar({ variant = 'task-planning' }: ContextSidebarProps) {
  const getVariantSections = (): SidebarSection[] => {
    switch (variant) {
      case 'bootstrap':
        return [
          {
            title: 'Right Now',
            icon: '🎯',
            items: [{ label: 'Bootstrap' }, { label: 'Research' }],
          },
          {
            title: 'Ideas',
            icon: '📝',
            items: [{ label: 'Notes' }, { label: 'Concepts' }],
          },
          {
            title: 'Research',
            icon: '📚',
            items: [{ label: 'Active', status: '●' }, { label: 'Archive' }],
          },
          {
            title: 'Quick',
            icon: '🔍',
            items: [{ label: 'Tasks' }, { label: 'Notes' }],
          },
          {
            title: 'AI Status',
            icon: '🤖',
            items: [{ label: 'Research' }, { label: 'Progress' }],
          },
        ];

      case 'task-planning':
        return [
          {
            title: 'Right Now',
            icon: '🎯',
            items: [
              { label: 'Plan', badge: '15' },
              { label: 'Ready', badge: '3' },
            ],
          },
          {
            title: 'My Tasks',
            icon: '📝',
            items: [
              { label: 'Doing', badge: '2' },
              { label: 'Review' },
              { label: 'Done', badge: '12' },
            ],
          },
          {
            title: 'Context & Notes',
            icon: '📚',
            items: [{ label: 'PRD' }, { label: 'Research' }, { label: 'Mockups' }],
          },
          {
            title: 'Views',
            icon: '🔍',
            items: [{ label: 'Timeline' }, { label: 'Calendar' }, { label: 'Reports' }],
          },
          {
            title: 'AI Tools',
            icon: '🤖',
            items: [{ label: 'Available' }, { label: 'Planning' }, { label: 'Archive' }],
          },
        ];

      case 'ai-handoff':
        return [
          {
            title: 'Right Now',
            icon: '🎯',
            items: [{ label: 'Package', status: '●' }, { label: 'Handoff' }],
          },
          {
            title: 'Context',
            icon: '📝',
            items: [
              { label: 'PRD', status: '●' },
              { label: 'Research', status: '●' },
              { label: 'Decisions' },
              { label: 'Mockups' },
            ],
          },
          {
            title: 'Links',
            icon: '📚',
            items: [{ label: 'Task 1', status: '●' }, { label: 'Task 3' }, { label: 'Task 4' }],
          },
          {
            title: 'Resources',
            icon: '🔍',
            items: [{ label: 'Docs', status: '●' }, { label: 'APIs' }, { label: 'Examples' }],
          },
          {
            title: 'AI Ready',
            icon: '🤖',
            items: [{ label: 'Package', status: '●' }, { label: 'Monitor' }, { label: 'History' }],
          },
        ];

      case 'parallel-productivity':
        return [
          {
            title: 'Right Now',
            icon: '🎯',
            items: [{ label: 'Planning' }, { label: 'Decisions' }],
          },
          {
            title: 'Progress',
            icon: '📊',
            items: [{ label: 'Q1 Done' }, { label: 'Q2 Plan', status: '●' }, { label: 'Roadmap' }],
          },
          {
            title: 'AI Status',
            icon: '🤖',
            items: [
              { label: 'Code Agent' },
              { label: 'Payment' },
              { label: '60% ✅' },
              { label: 'Research' },
              { label: 'Mobile' },
              { label: 'updating' },
              { label: 'Monitor' },
            ],
          },
          {
            title: 'Context',
            icon: '📚',
            items: [{ label: 'Q1 Data' }, { label: 'User Req' }, { label: 'Research' }],
          },
          {
            title: 'Views',
            icon: '🔍',
            items: [{ label: 'Timeline' }, { label: 'Priority' }, { label: 'Budget' }],
          },
        ];

      case 'ai-supervision':
        return [
          {
            title: 'Right Now',
            icon: '🎯',
            items: [{ label: 'Active', status: '●' }, { label: 'Guide' }],
          },
          {
            title: 'Claude',
            icon: '🤖',
            items: [{ label: 'Progress' }, { label: 'Updates' }, { label: 'Guidance' }],
          },
          {
            title: 'Human',
            icon: '💬',
            items: [{ label: 'Direction' }, { label: 'Feedback' }, { label: 'Refine' }],
          },
        ];

      default:
        return [
          {
            title: 'Right Now',
            icon: '🎯',
            items: [
              { label: 'Working', status: '●' },
              { label: 'Up Next', badge: '3' },
              { label: 'Context', status: '📊' },
            ],
          },
          {
            title: 'My Work',
            icon: '📋',
            items: [
              { label: 'To Do', badge: '89%' },
              { label: 'Doing', status: '●' },
              { label: 'Done', badge: '47' },
            ],
          },
          {
            title: 'Context',
            icon: '📚',
            items: [
              { label: 'Web', status: '●' },
              { label: 'Docs', status: '📄' },
              { label: 'Create', status: '✏️' },
            ],
          },
          {
            title: 'Big Picture',
            icon: '🏗️',
            items: [
              { label: 'Vision', status: '🎯' },
              { label: 'Roadmap', status: '📈' },
              { label: 'Insights', status: '📊' },
            ],
          },
          {
            title: 'AI Helper',
            icon: '🤖',
            items: [
              { label: 'Agents', status: '●' },
              { label: 'Context', status: '📦' },
              { label: 'History', status: '📜' },
            ],
          },
        ];
    }
  };

  const sections = getVariantSections();

  return (
    <aside className="w-[280px] bg-sidebar border-r border-border flex-shrink-0">
      <div className="h-full overflow-y-auto">
        <nav className="p-4 space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="space-y-2">
              {/* Section Header */}
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span>{section.icon}</span>
                <span>{section.title}</span>
              </div>

              {/* Section Items */}
              <ul className="pl-6 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.status && (
                        <span className="text-xs text-muted-foreground">{item.status}</span>
                      )}
                      <span className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-2 transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
