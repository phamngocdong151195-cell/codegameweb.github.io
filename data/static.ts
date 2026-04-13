import { Game } from '@/types';

export const GAMES: Game[] = [
  {
    id: '1',
    name: 'Haki Huyền Thoại',
    slug: 'haki',
    image: '/haki.jpg',
    codes: [
      { id: 'code1', name: 'Code Haki 1', image: '/code-haki-1.jpg' },
      { id: 'code2', name: 'Code Haki 2', image: '/code-haki-2.jpg' },
    ],
  },
  {
    id: '2',
    name: 'Hải tặc đại chiến',
    slug: 'hai-tac',
    image: '/hai-tac.jpg',
    codes: [
      { id: 'code3', name: 'Code Hải Tặc 1', image: '/code-hai-tac-1.jpg' },
    ],
  },
];
