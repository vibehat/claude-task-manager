import { LexoRank } from '@/libs/client/utils';
import type { LabelInterface } from './labels';
import { labels } from './labels';
import type { Priority } from './priorities';
import { priorities } from './priorities';
import type { Tag } from './tags';
import { tags } from './tags';
import type { Status } from './StatusIcon';
import { status } from './StatusIcon';
import type { User } from './users';
import { users } from './users';

export interface Task {
   id: string;
   identifier: string;
   title: string;
   description: string;
   status: Status;
   priority: Priority;
   labels: LabelInterface[];
   createdAt: string;
   cycleId: string;
   tag?: Tag;
   subtasks?: string[];
   rank: string;
   dueDate?: string;
}

// generates issues ranks using LexoRank algorithm.
export const ranks: string[] = [];
const generateIssuesRanks = () => {
   const firstRank = new LexoRank('a3c');
   ranks.push(firstRank.toString());
   for (let i = 1; i < 30; i++) {
      const previousRank = LexoRank.from(ranks[i - 1]);
      const currentRank = previousRank.increment();
      ranks.push(currentRank.toString());
   }
};
generateIssuesRanks();

export const tasks: Task[] = [
   {
      id: '1',
      identifier: 'LNUI-101',
      title: 'Refactor Button component for full accessibility compliance',
      description: '',
      status: status[5],
      priority: priorities[2],
      labels: [labels[0]],
      createdAt: '2025-03-08',
      cycleId: '42',
      tag: tags[0],
      rank: ranks[0],
   },
   {
      id: '2',
      identifier: 'LNUI-204',
      title: 'Optimize animations for smoother UI transitions',
      description: '',
      status: status[2],
      priority: priorities[1],
      labels: [labels[1]],
      createdAt: '2025-03-12',
      cycleId: '42',
      subtasks: ['1', '3'],
      rank: ranks[1],
   },
   {
      id: '3',
      identifier: 'LNUI-309',
      title: 'Implement dark mode toggle with system preferences support',
      description: '',
      status: status[3],
      priority: priorities[1],
      labels: [labels[2]],
      createdAt: '2025-03-14',
      cycleId: '42',
      tag: tags[1],
      rank: ranks[2],
   },
   {
      id: '4',
      identifier: 'LNUI-415',
      title: 'Design new modal system with focus trapping',
      description: '',
      status: status[1],
      priority: priorities[2],
      labels: [labels[3]],
      createdAt: '2025-03-09',
      cycleId: '42',
      tag: tags[2],
      rank: ranks[3],
   },
   {
      id: '5',
      identifier: 'LNUI-501',
      title: 'Enhance responsiveness of Navbar',
      description: '',
      status: status[1],
      priority: priorities[3],
      labels: [labels[4]],
      createdAt: '2025-03-10',
      cycleId: '42',
      tag: tags[4],
      subtasks: ['8', '9'],
      rank: ranks[4],
   },
   {
      id: '6',
      identifier: 'LNUI-502',
      title: 'Optimize loading time of Footer',
      description: '',
      status: status[2],
      priority: priorities[0],
      labels: [labels[5]],
      createdAt: '2025-03-11',
      cycleId: '42',
      tag: tags[5],
      rank: ranks[5],
   },
   {
      id: '7',
      identifier: 'LNUI-503',
      title: 'Refactor Sidebar for better accessibility',
      description: '',
      status: status[3],
      priority: priorities[1],
      labels: [labels[6]],
      createdAt: '2025-03-12',
      cycleId: '42',
      tag: tags[5],
      rank: ranks[6],
   },
   {
      id: '8',
      identifier: 'LNUI-504',
      title: 'Implement new Card component design',
      description: '',
      status: status[4],
      priority: priorities[3],
      labels: [labels[7]],
      createdAt: '2025-03-13',
      cycleId: '42',
      tag: tags[6],
      rank: ranks[7],
   },
   {
      id: '9',
      identifier: 'LNUI-505',
      title: 'Improve Tooltip interactivity',
      description: '',
      status: status[1],
      priority: priorities[2],
      labels: [labels[8]],
      createdAt: '2025-03-14',
      cycleId: '42',
      tag: tags[6],
      rank: ranks[8],
   },
   {
      id: '10',
      identifier: 'LNUI-506',
      title: 'Redesign Dropdown for mobile devices',
      description: '',
      status: status[2],
      priority: priorities[1],
      labels: [labels[9]],
      createdAt: '2025-03-15',
      cycleId: '42',
      tag: tags[7],
      rank: ranks[9],
   },
   {
      id: '11',
      identifier: 'LNUI-507',
      title: 'Fix Form validation issues',
      description: '',
      status: status[3],
      priority: priorities[1],
      labels: [labels[10]],
      createdAt: '2025-03-16',
      cycleId: '42',
      tag: tags[7],
      rank: ranks[10],
   },
   {
      id: '12',
      identifier: 'LNUI-508',
      title: 'Update Modal animations',
      description: '',
      status: status[0],
      priority: priorities[2],
      labels: [labels[9]],
      createdAt: '2025-03-17',
      cycleId: '42',
      tag: tags[8],
      rank: ranks[11],
   },
   {
      id: '13',
      identifier: 'LNUI-509',
      title: 'Revamp Button states and interactions',
      description: '',
      status: status[5],
      priority: priorities[1],
      labels: [labels[3]],
      createdAt: '2025-03-18',
      cycleId: '42',
      tag: tags[8],
      rank: ranks[12],
   },
   {
      id: '14',
      identifier: 'LNUI-510',
      title: 'Streamline Input component styling',
      description: '',
      status: status[2],
      priority: priorities[2],
      labels: [labels[9]],
      createdAt: '2025-03-19',
      cycleId: '42',
      tag: tags[9],
      rank: ranks[13],
   },
   {
      id: '15',
      identifier: 'LNUI-511',
      title: 'Integrate new Select component behavior',
      description: '',
      status: status[3],
      priority: priorities[1],
      labels: [labels[4]],
      createdAt: '2025-03-20',
      cycleId: '42',
      tag: tags[9],
      rank: ranks[14],
   },
   {
      id: '16',
      identifier: 'LNUI-512',
      title: 'Enhance Breadcrumb navigation usability',
      description: '',
      status: status[0],
      priority: priorities[3],
      labels: [labels[5]],
      createdAt: '2025-03-21',
      cycleId: '42',
      tag: tags[9],
      rank: ranks[15],
   },
   {
      id: '17',
      identifier: 'LNUI-513',
      title: 'Refactor Accordion for smoother transitions',
      description: '',
      status: status[1],
      priority: priorities[2],
      labels: [labels[3]],
      createdAt: '2025-03-22',
      cycleId: '42',
      tag: tags[0],
      rank: ranks[16],
   },
   {
      id: '18',
      identifier: 'LNUI-514',
      title: 'Implement Carousel with lazy loading',
      description: '',
      status: status[2],
      priority: priorities[1],
      labels: [labels[6]],
      createdAt: '2025-03-23',
      cycleId: '42',
      tag: tags[0],
      rank: ranks[17],
   },
   {
      id: '19',
      identifier: 'LNUI-515',
      title: 'Optimize Grid layout for responsive design',
      description: '',
      status: status[3],
      priority: priorities[2],
      labels: [labels[7]],
      createdAt: '2025-03-24',
      cycleId: '42',
      tag: tags[0],
      rank: ranks[18],
   },
   {
      id: '20',
      identifier: 'LNUI-516',
      title: 'Update Typography system for clarity',
      description: '',
      status: status[4],
      priority: priorities[3],
      labels: [labels[5]],
      createdAt: '2025-03-25',
      cycleId: '42',
      tag: tags[0],
      rank: ranks[19],
   },
   {
      id: '21',
      identifier: 'LNUI-517',
      title: 'Improve Color scheme consistency',
      description: '',
      status: status[1],
      priority: priorities[0],
      labels: [labels[5]],
      createdAt: '2025-03-26',
      cycleId: '42',
      tag: tags[1],
      rank: ranks[20],
   },
   {
      id: '22',
      identifier: 'LNUI-518',
      title: 'Design new Icon set for better scalability',
      description: '',
      status: status[2],
      priority: priorities[1],
      labels: [labels[5]],
      createdAt: '2025-03-27',
      cycleId: '42',
      tag: tags[1],
      rank: ranks[21],
   },
   {
      id: '23',
      identifier: 'LNUI-519',
      title: 'Fix Notification system timing',
      description: '',
      status: status[3],
      priority: priorities[2],
      labels: [labels[8]],
      createdAt: '2025-03-28',
      cycleId: '42',
      tag: tags[4],
      rank: ranks[22],
   },
   {
      id: '24',
      identifier: 'LNUI-520',
      title: 'Enhance Loading indicator performance',
      description: '',
      status: status[0],
      priority: priorities[1],
      labels: [labels[9]],
      createdAt: '2025-03-29',
      cycleId: '42',
      tag: tags[3],
      rank: ranks[23],
   },
   {
      id: '25',
      identifier: 'LNUI-521',
      title: 'Refactor Progress bar animations',
      description: '',
      status: status[5],
      priority: priorities[2],
      labels: [labels[6]],
      createdAt: '2025-03-30',
      cycleId: '42',
      tag: tags[3],
      rank: ranks[24],
   },
   {
      id: '26',
      identifier: 'LNUI-522',
      title: 'Optimize Table component sorting',
      description: '',
      status: status[2],
      priority: priorities[3],
      labels: [labels[7]],
      createdAt: '2025-03-31',
      cycleId: '42',
      tag: tags[6],
      rank: ranks[25],
   },
   {
      id: '27',
      identifier: 'LNUI-523',
      title: 'Improve Pagination logic',
      description: '',
      status: status[3],
      priority: priorities[0],
      labels: [labels[8]],
      createdAt: '2025-04-01',
      cycleId: '42',
      tag: tags[6],
      rank: ranks[26],
   },
   {
      id: '28',
      identifier: 'LNUI-524',
      title: 'Implement Search bar with auto-complete',
      description: '',
      status: status[0],
      priority: priorities[1],
      labels: [labels[5]],
      createdAt: '2025-04-02',
      cycleId: '42',
      tag: tags[5],
      rank: ranks[27],
   },
   {
      id: '29',
      identifier: 'LNUI-525',
      title: 'Update Alert system for critical notifications',
      description: '',
      status: status[1],
      priority: priorities[2],
      labels: [labels[9]],
      createdAt: '2025-04-03',
      cycleId: '42',
      tag: tags[5],
      rank: ranks[28],
   },
   {
      id: '30',
      identifier: 'LNUI-526',
      title: 'Revise Overlay for better usability',
      description: '',
      status: status[2],
      priority: priorities[3],
      labels: [labels[8]],
      createdAt: '2025-04-04',
      cycleId: '42',
      tag: tags[1],
      rank: ranks[29],
   },
];

export function groupTasksByStatus(tasks: Task[]): Record<string, Task[]> {
   return tasks.reduce<Record<string, Task[]>>((acc, task) => {
      const statusId = task.status.id;

      if (!acc[statusId]) {
         acc[statusId] = [];
      }

      acc[statusId].push(task);

      return acc;
   }, {});
}

export function sortTasksByPriority(tasks: Task[]): Task[] {
   const priorityOrder: Record<string, number> = {
      'urgent': 0,
      'high': 1,
      'medium': 2,
      'low': 3,
      'no-priority': 4,
   };

   return tasks
      .slice()
      .sort((a, b) => priorityOrder[a.priority.id] - priorityOrder[b.priority.id]);
}
