import { Game } from '@/types';
import type { FacebookAccount, GalleryImage, ZaloGroup } from '@/types';

export const GAMES: Game[] = [
 {
    id: '16', name: 'Ta Là Cao Thủ Võ Lâm', slug: 'tlctvl', image: '/anhcode/gamectvolam/ctvolam.jpg',codes: [],
  },
  {
    id: '15', name: 'Tây Du VNG', slug: 'tauduvng', image: '/anhcode/gametayduvng/tayduvng.jpg',codes: [],
  },
  {
    id: '1', name: 'Haki Huyền Thoại', slug: 'Haki', image: '/anhcode/gamehaki/haki.jpg',codes: [
      { id: 'code1', name: 'Code Haki Huyền Thoại', image: '/anhcode/gamehaki/anhhaki.png' },
    ],
  },
  {
    id: '2', name: 'Hải Tặc Đại Chiến', slug: 'HTDC', image: '/anhcode/gamehtdc/hai-tac.jpg',codes: [
      { id: 'code1', name: 'Code Hải Tặc Đại Chiến', image: '/anhcode/gamehtdc/htdc1.jpg' },
      { id: 'code2', name: 'Code Hải Tặc Đại Chiến', image: '/anhcode/gamehtdc/htdc2.jpg' },
      { id: 'code3', name: 'Code Hải Tặc Đại Chiến', image: '/anhcode/gamehtdc/htdc3.jpg' },
    ],
  },
  {
    id: '3', name: 'Phong Hầu Tam Quốc', slug: 'phonghautamquoc', image: '/anhcode/gamephonghau/anhphonghau.jpg', codes: [
      { id: 'code1', name: 'Code Phong Hầu Tam Quốc', image: '/anhcode/gamephonghau/phonghau.jpg' },
    ],
    commonCodes: [
      { id: 'common1', code: 'PHONG2024', description: 'Code 1' },
      { id: 'common2', code: 'LETGO', description: 'Code 2' },
    ],
  },
  {
    id: '4', name: 'Siêu Hải Tặc', slug: 'sieu-hai-tac', image: '/anhcode/gamesieuhaitac/siêu hải tặc.jpg', codes: [
      { id: 'code1', name: 'Code Siêu Hải Tặc 1', image: '/anhcode/gamesieuhaitac/haitac.jpg' },
    ],
  },
  {
    id: '5', name: 'Vô Danh Giang Hồ', slug: 'vodanhgiangho', image: '/anhcode/gamevodanh/anhvodanh.jpg', codes: [
      { id: 'code1', name: 'Code vô danh giang hồ', image: '/anhcode/gamevodanh/codevodanh.jpg' },
    ],
  },
  {
    id: '6', name: 'Bửu Bối Truyền Kỳ', slug: 'buuboitruyenky', image: '/anhcode/gamebuuboi/buuboi.jpg', codes: [
      { id: 'code1', name: 'Code Bửu Bối Truyền Kỳ', image: '/anhcode/gamebuuboi/anhbuuboi.jpg' },
    ],
  },
  {
    id: '7', name: 'Samkok Tam Quốc', slug: 'samkok-tam-quoc', image: '/anhcode/gamesamkok/samkok.jpg', codes: [
      { id: 'code1', name: 'Code Samkok Tam Quốc', image: '/anhcode/gamesamkok/anhsamkok.jpg' },
    ],
  },
  {
    id: '8', name: 'Học Viện Huyền Thoại', slug: 'HVHT', image: '/anhcode/gamehocvien/hocvien.jpg', codes: [
      { id: 'code1', name: 'Code Học Viện Huyền Thoại', image: '/anhcode/gamehocvien/anhhocvien.jpg' },
    ],
  },
   {
   id: '9', name: 'ComBo Thức Tỉnh', slug: 'CBTT', image: '/anhcode/gamecombo/combo.jpg', codes: [],
   },
  {
    id: '10', name: 'Yulgang Tái Chiễn Võ Lâm', slug: 'Yulgang', image: '/anhcode/gameyulgang/yulgang.jpg', 
     codes: [ { id: 'code1', name: 'Code Yulgang Tái Chiễn Võ Lâm', image: '/anhcode/gameyulgang/anhyulgang.jpg' } ],
  },
  {
    id: '11', name: 'Pixel Đại Chiến', slug: 'pixel', image: '/anhcode/gamepixel/pixel.jpg',
    codes: [ { id: 'code1', name: 'Code Pixel Đại Chiến', image: '/anhcode/gamepixel/anhpixel.jpg' } ],
  },
  {
    id: '12', name: 'Rồng Thần Siêu Cấp', slug: 'RTSC', image: '/anhcode/gamerongthan/rongthan.jpg',
    codes: [
      { id: 'code1', name: 'Code Rồng Thần Siêu Cấp', image: '/anhcode/gamerongthan/fz12.png' },
    ],
  },
  {
    id: '13', name: 'MU Vĩnh Hằng', slug: 'MUVH', image: '/anhcode/gamemuvh/muvinhhang.jpg',
    codes: [
      { id: 'code1', name: 'Code MU Vĩnh Hằng', image: '/anhcode/gamemuvh/anhmuvinhhang.jpg' },
    ],
  },
  {
    id: '14', name: 'Chiến Tuyến Hướng Dương', slug: 'CTHD', image: '/anhcode/gamehuongduong/huongduong.jpg',
    codes: [
      { id: 'code1', name: 'Code Chiến Tuyến Hướng Dương', image: '/anhcode/gamehuongduong/anhhuongduong.jpg' },
    ],
  },
];

export const FACEBOOK_ACCOUNTS: FacebookAccount[] = [
  {
    id: '1',  name: 'Phạm Ngọc Đổng - FB Chính chủ',
    url: 'https://www.facebook.com/VMBFlyTravel/',
    image: 'avatar/avatar-dong.jpg',  followers: '50K+',
    description: 'Trang chính của Đổng - chia sẻ mã code game',
    verified: true, zaloUrl: 'https://zalo.me/0345367094',
  },
  {
    id: '2', name: 'Lương Cẩm Đào🍑 - FB Chính chủ',
    url: 'https://www.facebook.com/vantuan26052004/',
    image: 'avatar/avatar-dao.jpg', followers: '30K+',
    description: 'Trang chuyên chia sẻ code game và hướng dẫn',
    verified: true, zaloUrl: 'https://zalo.me/0837002627',
  },
  {
    id: '3', name: 'Bé Bự🍑',
    url: 'https://www.facebook.com/profile.php?id=100055972904390',
    image: 'avatar/bebu.jpg', followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true,  zaloUrl: 'https://zalo.me/0375828795',
  },
  {
    id: '4', name: 'Cẩm Đào🍑',
    url: 'https://www.facebook.com/cam.ao.242631/',
    image: 'avatar/avatar-camdao.jpg', followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true, zaloUrl: 'https://zalo.me/0837002627'
  },
  {
    id: '5', name: 'Cẩm Đào',
    url: 'https://www.facebook.com/profile.php?id=100069846480816',
    image: 'avatar/camdao.jpg', followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true, zaloUrl: 'https://zalo.me/0837002627'
  },
  {
    id: '6', name: 'Huỳnh Uyển Linh',
    url: 'https://www.facebook.com/profile.php?id=100089211395521',
    image: 'avatar/uyenlinh.jpg', followers: '25K+',
    description: 'Cộng đồng chia sẻ code game Việt Nam',
    verified: true, zaloUrl: 'https://zalo.me/0837002627'
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'bill/24.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '26', src: 'bill/25.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '27', src: 'bill/26.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '28', src: 'bill/27.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '29', src: 'bill/28.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '2', src: 'bill/bill1.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '3', src: 'bill/bill2.PNG', alt: 'bill', title: 'bill', description: '' },
  { id: '4', src: 'bill/bill3.PNG', alt: 'bill', title: 'bill', description: '' },
  { id: '5', src: 'bill/bill4.PNG', alt: 'bill', title: 'bill', description: '' },
  { id: '6', src: 'bill/3.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '7', src: 'bill/4.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '8', src: 'bill/5.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '9', src: 'bill/6.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '10', src: 'bill/7.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '11', src: 'bill/8.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '12', src: 'bill/9.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '13', src: 'bill/10.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '14', src: 'bill/11.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '15', src: 'bill/12.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '16', src: 'bill/13.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '17', src: 'bill/14.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '18', src: 'bill/15.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '19', src: 'bill/16.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '20', src: 'bill/17.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '21', src: 'bill/18.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '22', src: 'bill/19.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '23', src: 'bill/1.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '24', src: 'bill/2.jpg', alt: 'bill', title: 'bill', description: '' },
  { id: '25', src: 'bill/23.jpg', alt: 'bill', title: 'bill', description: '' },
];

export const GROUP_CARD: ZaloGroup[] = [
  {
    id: '0',
    name: 'Nhóm Zalo Thông Báo Code Mới',
    slug: 'tauduvng',
    image: '/anhcode/gametayduvng/zalotayduvng.jpg',
    link: 'https://zalo.me/g/lwcgwf624',
  },
  {
    id: '1',
    name: 'Code Haki Huyền Thoại',
    slug: 'Haki',
    image: '/anhcode/gamehaki/zalohaki.jpg',
    link: 'https://zalo.me/g/gzykr8yhmnadksoprhxn',
  },
  {
    id: '2',
    name: 'Code Hải Tặc Đại Chiến',
    slug: 'HTDC',
    image: '/anhcode/gamehtdc/zalohtdc.jpg',
    link: 'https://zalo.me/g/uzurwm662',
  },
  {
    id: '3',
    name: 'Code Phong Hầu Tam Quốc',
    slug: 'phonghautamquoc',
    image: '/anhcode/gamephonghau/zalophonghau.jpg',
    link: 'https://zalo.me/g/ftppqmnitrw1l3eifvjy',
  },
  {
    id: '4',
    name: 'Code Siêu Hải Tặc',
    slug: 'sieu-hai-tac',
    image: '/anhcode/gamesieuhaitac/zalosieuhaitac.jpg',
    link: 'https://zalo.me/g/syib33yds4oqqhyv1ewy',
  },
  {
    id: '5',
    name: 'Code Vô Danh Giang Hồ',
    slug: 'vodanhgiangho',
    image: '/anhcode/gamevodanh/zalovodanh.jpg',
    link: 'https://zalo.me/g/3bwnbrtphsl5qeosxquc',
  },
  {
    id: '6',
    name: 'Code Bửu Bối Truyền Kỳ',
    slug: 'buuboitruyenky',
    image: '/anhcode/gamebuuboi/zalobuuboi.jpg',
    link: 'https://zalo.me/g/mfhelf5hjkgyveoiwbca',
  },
  {
    id: '7',
    name: 'Code Samkok Tam Quốc',
    slug: 'samkok-tam-quoc',
    image: '/anhcode/gamesamkok/zalosamkok.jpg',
    link: 'https://zalo.me/g/lcyduu218',
  },
  {
    id: '8',
    name: 'Code Học Viện Huyền Thoại',
    slug: 'HVHT',
    image: '/anhcode/gamehocvien/zalohocvien.jpg',
    link: 'https://zalo.me/g/tnchjh219',
  },
  {
    id: '9',
    name: 'Code ComBo Thức Tỉnh',
    slug: 'CBTT',
    image: '/anhcode/gamecombo/zalocombo.png',
    link: 'https://zalo.me/g/vyzcws658',
  },
  {
    id: '10',
    name: 'Code Yulgang Tái Chiễn Võ Lâm',
    slug: 'Yulgang',
    image: '/anhcode/gameyulgang/zaloyulgang.jpg',
    link: 'https://zalo.me/g/0z10xk9k0srqzorwqtem',
  },
  {
    id: '11',
    name: 'Code Pixel Đại Chiến',
    slug: 'pixel',
    image: '/anhcode/gamepixel/zalopixel.jpg',
    link: 'https://zalo.me/g/muqicp826',
  },
  {
    id: '12',
    name: 'Code Rồng Thần Siêu Cấp',
    slug: 'RTSC',
    image: '/anhcode/gamerongthan/zalorongthan.jpg',
    link: 'https://zalo.me/g/ndrtor905',
  },
  {
    id: '13',
    name: 'Code MU Vĩnh Hằng',
    slug: 'MUVH',
    image: '/anhcode/gamemuvh/zalomuvh.jpg',
    link: 'https://zalo.me/g/fbqpct757',
  },
  {
    id: '14',
    name: 'Code Chiến Tuyến Hướng Dương',
    slug: 'CTHD',
    image: '/anhcode/gamehuongduong/zalohuongduong.jpg',
    link: 'https://zalo.me/g/vjtwiw286',
  },
  {
    id: '15',
    name: 'Ta Là Cao Thủ Võ Lâm - Zalo Code',
    slug: 'tlctvl',
    image: '/anhcode/gamectvolam/zaloctvolam.jpg',
    link: 'https://zalo.me/g/9q5utofximrs9pbnhvwh',
  },
];
