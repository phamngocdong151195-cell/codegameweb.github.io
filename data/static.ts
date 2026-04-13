import { Game } from '@/types';

export const GAMES: Game[] = [
  {
    id: '1',
    name: 'Haki Huyền Thoại',
    slug: 'haki',
    image: '/Game/haki.jpg',
    codes: [
      { id: 'code1', name: 'Code Haki 1', image: '/Game/haki.jpg' },
      { id: 'code2', name: 'Code Haki 2', image: '/Game/haki.jpg' },
    ],
  },
  {
    id: '2',
    name: 'Hải tặc đại chiến',
    slug: 'hai-tac',
    image: '/Game/hai-tac.jpg',
    codes: [
      { id: 'code3', name: 'Code Hải Tặc 1', image: '/Game/hai-tac.jpg' },
    ],
  },
  {
    id: '3',
    name: 'Phong Hầu Tam Quốc',
    slug: 'phong-hau',
    image: '/Game/phonghau.jpg',
    codes: [
      { id: 'code3', name: 'Code Hải Tặc 1', image: '/Game/phonghau.jpg' },
    ],
  },
];
