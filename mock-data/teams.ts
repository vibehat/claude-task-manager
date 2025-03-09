import { Project, projects } from './projects';
import { User, users } from './users';

export interface Team {
   id: string;
   name: string;
   icon: string;
   joined: boolean;
   color: string;
   members: User[];
   projects: Project[];
}

export const teams: Team[] = [
   {
      id: 'CORE',
      name: 'LNDev Core',
      icon: '🛠️',
      joined: true,
      color: '#FF0000',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'DESIGN',
      name: 'Design System',
      icon: '🎨',
      joined: true,
      color: '#00FF00',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'PERFOMANCE',
      name: 'Performance Lab',
      icon: '☀️',
      joined: true,
      color: '#0000FF',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'UX',
      name: 'UX Team',
      icon: '👨🏼‍🎨',
      joined: false,
      color: '#FF00FF',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'DATA',
      name: 'Data Science',
      icon: '📊',
      joined: false,
      color: '#0000FF',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'MOBILE',
      name: 'Mobile Development',
      icon: '📱',
      joined: false,
      color: '#0000FF',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'WEB',
      name: 'Web Development',
      icon: '🌐',
      joined: false,
      color: '#0000FF',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
   {
      id: 'UI',
      name: 'UI/UX Team',
      icon: '👨🏼‍🎨',
      joined: false,
      color: '#FF00FF',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[1], projects[1], projects[2], projects[3]],
   },
];
