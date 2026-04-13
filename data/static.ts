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
    {
    id: '4',
    name: 'Siêu Hải Tặc',
    slug: 'sieu-hai-tac',
    image: '/Game/siêu hải tặc.jpg',
    codes: [
      { id: 'code1', name: 'Code Siêu Hải Tặc 1', image: '/Game/haitac.jpg' },
    ],
  },
  {
    id: '5',
    name: 'Vô Danh Giang Hồ',
    slug: 'vo-danh-giang-ho',
    image: '/Game/anhvodanh.jpg',
    codes: [
      { id: 'code1', name: 'Code vô danh giang hồ', image: '/Game/codevodanh.jpg' },
    ],
  },
];
