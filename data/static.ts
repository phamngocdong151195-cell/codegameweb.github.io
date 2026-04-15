import { Game } from '@/types';
import type { FacebookAccount, GalleryImage } from '@/types';

export const GAMES: Game[] = [
  {
    id: '1',
    name: 'Haki Huyền Thoại',
    slug: 'Haki',
    image: '/haki.jpg',
    codes: [
      { id: 'code1', name: 'Code Haki Huyền Thoại ', image: '/anhhaki.png' },
      { id: 'code2', name: 'Code Haki Huyền Thoại ', image: '/anhhaki2.png' },
    ],
  },
  {
    id: '2',
    name: 'Hải Tặc Đại Chiến',
    slug: 'HTDC',
    image: '/hai-tac.jpg',
    codes: [
      { id: 'code1', name: 'Code Hải Tặc Đại Chiến', image: '/htdc1.jpg' },
      { id: 'code1', name: 'Code Hải Tặc Đại Chiến', image: '/htdc2.jpg' },
      { id: 'code1', name: 'Code Hải Tặc Đại Chiến', image: '/htdc3.jpg' },

    ],
  },
  {
    id: '3',
    name: 'Phong Hầu Tam Quốc',
    slug: 'phonghautamquoc',
    image: '/anhphonghau.jpg',
    codes: [
      { id: 'code1', name: 'Code Phong Hầu Tam Quốc', image: '/phonghau.jpg' },
    ],
  },
    {
    id: '4',
    name: 'Siêu Hải Tặc',
    slug: 'sieu-hai-tac',
    image: '/siêu hải tặc.jpg',
    codes: [
      { id: 'code10', name: 'Code Siêu Hải Tặc 1', image: '/haitac.jpg' },
    ],
  },
  {
    id: '5',
    name: 'Vô Danh Giang Hồ',
    slug: 'vodanhgiangho',
    image: '/anhvodanh.jpg',
    codes: [
      { id: 'code1', name: 'Code vô danh giang hồ', image: '/codevodanh.jpg' },
    ],
  },
  {
    id: '6',
    name: 'Bửu Bối Truyền Kỳ',
    slug: 'buuboitruyenky',
    image: '/buuboi.jpg',
    codes: [
      { id: 'code1', name: 'Code Bửu Bối Truyền Kỳ', image: '/anhbuuboi.jpg' },
    ],
  },
  {
    id: '7',
    name: 'Samkok Tam Quốc',
    slug: 'samkok-tam-quoc',
    image: '/samkok.jpg',
    codes: [
      { id: 'code1', name: 'Code Samkok Tam Quốc', image: '/anhsamkok.jpg' },
    ],
  },
   {
    id: '8',
    name: 'Học Viện Huyền Thoại',
    slug: 'HVHT',
    image: '/hocvien.jpg',
    codes: [
      { id: 'code1', name: 'Code Học Viện Huyền Thoại', image: '/anhhocvien.jpg' },
    ],
  },
  {
    id: '9',
    name: 'ComBo Thức Tỉnh',
    slug: 'CBTT',
    image: '/combo.jpg',
    codes: [
      { id: 'code1', name: 'Code ComBo Thức Tỉnh', image: '/anhcombo.jpg' },
    ],
  },
  {
    id: '10',
    name: 'Yulgang Tái Chiễn Võ Lâm',
    slug: 'Yulgang',
    image: '/yulgang.jpg',
    codes: [
      { id: 'code1', name: 'Code Yulgang Tái Chiễn Võ Lâm', image: '/anhyulgang.jpg' },
    ],
  },
  {
    id: '11',
    name: 'Pixel Đại Chiến',
    slug: 'pixel',
    image: '/pixel.jpg',
    codes: [
      { id: 'code1', name: 'Code Pixel Đại Chiến', image: '/anhpixel.jpg' },
    ],
  },
  {
    id: '12',
    name: 'Rồng Thần Siêu Cấp',
    slug: 'RTSC',
    image: '/rongthan.jpg',
    codes: [
      { id: 'code1', name: 'Code Rồng Thần Siêu Cấp', image: '/anhrongthan.jpg' },
    ],
  },
  {
    id: '13',
    name: 'MU Vĩnh Hằng',
    slug: 'MUVH',
    image: '/muvinhhang.jpg',
    codes: [
      { id: 'code1', name: 'Code MU Vĩnh Hằng', image: '/anhmuvinhhang.jpg' },
    ],
  },
  {
    id: '14',
    name: 'Chiến Tuyến Hướng Dương',
    slug: 'CTHD',
    image: '/huongduong.jpg',
    codes: [
      { id: 'code1', name: 'Code Chiến Tuyến Hướng Dương', image: '/anhhuongduong.jpg' },
    ],
  },
];

export const FACEBOOK_ACCOUNTS: FacebookAccount[] = [
  {
    id: '1',
    name: 'Phạm Ngọc Đổng - FB Chính chủ',
    url: 'https://www.facebook.com/VMBFlyTravel/',
    image: '/avatar-dong.jpg',
    followers: '50K+',
    description: 'Trang chính của Đông - chia sẻ mã code game',
    verified: true,
    zaloUrl: 'https://zalo.me/0345367094',
  },
  {
    id: '2',
    name: 'Lương Cẩm Đào🍑 - FB Chính chủ',
    url: 'https://www.facebook.com/vantuan26052004/',
    image: '/avatar-dao.jpg',
    followers: '30K+',
    description: 'Trang chuyên chia sẻ code game và hướng dẫn',
    verified: true,
    zaloUrl: 'https://zalo.me/0837002627',
  },
  {
    id: '3',
    name: 'Cẩm Đào🍑',
    url: 'https://www.facebook.com/cam.ao.242631/',
    image: '/avatar-camdao.jpg',
    followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true,
    // zaloUrl: 'https://zalo.me/0375828795',
  },
  {
    id: '4',
    name: 'Cẩm Đào',
    url: 'https://www.facebook.com/profile.php?id=100069846480816',
    image: '/camdao.jpg',
    followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true,
    // zaloUrl: 'https://zalo.me/0375828795',
  },
  {
    id: '5',
    name: 'Huỳnh Uyển Linh',
    url: 'https://www.facebook.com/profile.php?id=100089211395521',
    image: '/uyenlinh.jpg',
    followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true,
    // zaloUrl: 'https://zalo.me/0375828795',
  },
  {
    id: '6',
    name: 'Bé Bự🍑',
    url: 'https://www.facebook.com/profile.php?id=100055972904390',
    image: '/bebu.jpg',
    followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true,
    // zaloUrl: 'https://zalo.me/0375828795',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: 'bill/bill1.jpg',
    alt: 'bill',
    title: 'bill',
    description: '',
  },
  {
    id: '1',
    src: 'bill/bill2.PNG',
    alt: 'bill',
    title: 'bill',
    description: '',
  },
  {
    id: '1',
    src: 'bill/bill3.PNG',
    alt: 'bill',
    title: 'bill',
    description: '',
  },
  {
    id: '1',
    src: 'bill/bill4.PNG',
    alt: 'bill',
    title: 'bill',
    description: '',
  },
];
