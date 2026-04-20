import { Game } from '@/types';
import type { FacebookAccount, GalleryImage, ZaloGroup } from '@/types';

export const GAME_DATA = {
  games: [
    {
      id: '18', name: 'Total Football VNG', slug: 'FootballVNG',
      image: '/anhcode/gamecFootball/Football.jpg', codes: []
    },
    {
      id: '16', name: 'Ta Là Cao Thủ Võ Lâm', slug: 'tlctvl',
      image: '/anhcode/gamectvolam/ctvolam.jpg', codes: []
    },
    {
      id: '17', name: 'Huyền Thoại Làng Lá', slug: 'htll',
      image: '/anhcode/gamelangla/langla.jpg', codes: []
    },
    {
      id: '15', name: 'Tây Du VNG', slug: 'tauduvng',
      image: '/anhcode/gametayduvng/tayduvng.jpg', codes: []
    },
    {
      id: '1', name: 'Haki Huyền Thoại', slug: 'Haki',
      image: '/anhcode/gamehaki/haki.jpg',
      codes: [
        { id: 'code1', name: 'Code Haki Huyền Thoại', image: '/anhcode/gamehaki/anhhaki.png' },
      ]
    },
    {
      id: '2', name: 'Hải Tặc Đại Chiến', slug: 'HTDC',
      image: '/anhcode/gamehtdc/hai-tac.jpg',
      codes: [
        { id: 'code1', name: 'Code Hải Tặc Đại Chiến', image: '/anhcode/gamehtdc/htdc1.jpg' },
        { id: 'code2', name: 'Code Hải Tặc Đại Chiến', image: '/anhcode/gamehtdc/htdc2.jpg' },
        { id: 'code3', name: 'Code Hải Tặc Đại Chiến', image: '/anhcode/gamehtdc/htdc3.jpg' },
      ]
    },
    {
      id: '3', name: 'Phong Hầu Tam Quốc', slug: 'phonghautamquoc',
      image: '/anhcode/gamephonghau/anhphonghau.jpg',
      codes: [
        { id: 'code1', name: 'Code Phong Hầu Tam Quốc', image: '/anhcode/gamephonghau/phonghau.jpg' },
      ],
      commonCodes: [
        { id: 'common1', code: 'PHONG2024', description: 'Code 1' },
        { id: 'common2', code: 'LETGO', description: 'Code 2' },
      ]
    },
    {
      id: '4', name: 'Siêu Hải Tặc', slug: 'sieu-hai-tac',
      image: '/anhcode/gamesieuhaitac/siêu hải tặc.jpg',
      codes: [
        { id: 'code1', name: 'Code Siêu Hải Tặc 1', image: '/anhcode/gamesieuhaitac/haitac.jpg' },
      ]
    },
    {
      id: '5', name: 'Vô Danh Giang Hồ', slug: 'vodanhgiangho',
      image: '/anhcode/gamevodanh/anhvodanh.jpg',
      codes: [
        { id: 'code1', name: 'Code vô danh giang hồ', image: '/anhcode/gamevodanh/codevodanh.jpg' },
      ]
    },
    {
      id: '6', name: 'Bửu Bối Truyền Kỳ', slug: 'buuboitruyenky',
      image: '/anhcode/gamebuuboi/buuboi.jpg',
      codes: [
        { id: 'code1', name: 'Code Bửu Bối Truyền Kỳ', image: '/anhcode/gamebuuboi/anhbuuboi.jpg' },
      ]
    },
    {
      id: '7', name: 'Samkok Tam Quốc', slug: 'samkok-tam-quoc',
      image: '/anhcode/gamesamkok/samkok.jpg',
      codes: [
        { id: 'code1', name: 'Code Samkok Tam Quốc', image: '/anhcode/gamesamkok/anhsamkok.jpg' },
      ]
    },
    {
      id: '8', name: 'Học Viện Huyền Thoại', slug: 'HVHT',
      image: '/anhcode/gamehocvien/hocvien.jpg',
      codes: [
        { id: 'code1', name: 'Code Học Viện Huyền Thoại', image: '/anhcode/gamehocvien/anhhocvien.jpg' },
      ]
    },
    {
      id: '9', name: 'ComBo Thức Tỉnh', slug: 'CBTT',
      image: '/anhcode/gamecombo/combo.jpg', codes: []
    },
    {
      id: '10', name: 'Yulgang Tái Chiễn Võ Lâm', slug: 'Yulgang',
      image: '/anhcode/gameyulgang/yulgang.jpg',
      codes: [
        { id: 'code1', name: 'Code Yulgang Tái Chiễn Võ Lâm', image: '/anhcode/gameyulgang/anhyulgang.jpg' },
      ]
    },
    {
      id: '11', name: 'Pixel Đại Chiến', slug: 'pixel',
      image: '/anhcode/gamepixel/pixel.jpg',
      codes: [
        { id: 'code1', name: 'Code Pixel Đại Chiến', image: '/anhcode/gamepixel/anhpixel.jpg' },
      ]
    },
    {
      id: '12', name: 'Rồng Thần Siêu Cấp', slug: 'RTSC',
      image: '/anhcode/gamerongthan/rongthan.jpg',
      codes: [
        { id: 'code1', name: 'Code Rồng Thần Siêu Cấp', image: '/anhcode/gamerongthan/fz12.png' },
      ]
    },
    {
      id: '13', name: 'MU Vĩnh Hằng', slug: 'MUVH',
      image: '/anhcode/gamemuvh/muvinhhang.jpg',
      codes: [
        { id: 'code1', name: 'Code MU Vĩnh Hằng', image: '/anhcode/gamemuvh/anhmuvinhhang.jpg' },
      ]
    },
    {
      id: '14', name: 'Chiến Tuyến Hướng Dương', slug: 'CTHD',
      image: '/anhcode/gamehuongduong/huongduong.jpg',
      codes: [
        { id: 'code1', name: 'Code Chiến Tuyến Hướng Dương', image: '/anhcode/gamehuongduong/anhhuongduong.jpg' },
      ]
    },
  ] as Game[],
  groups: [
    {
      id: '0', name: 'Nhóm Zalo Thông Báo Code Mới', slug: 'tauduvng',
      image: '/anhcode/gametayduvng/zalotayduvng.jpg', link: 'https://zalo.me/g/lwcgwf624'
    },
    {
      id: '1', name: 'Code Haki Huyền Thoại', slug: 'Haki',
      image: '/anhcode/gamehaki/zalohaki.jpg', link: 'https://zalo.me/g/gzykr8yhmnadksoprhxn'
    },
    {
      id: '2', name: 'Code Hải Tặc Đại Chiến', slug: 'HTDC',
      image: '/anhcode/gamehtdc/zalohtdc.jpg', link: 'https://zalo.me/g/uzurwm662'
    },
    {
      id: '3', name: 'Code Phong Hầu Tam Quốc', slug: 'phonghautamquoc',
      image: '/anhcode/gamephonghau/zalophonghau.jpg', link: 'https://zalo.me/g/ftppqmnitrw1l3eifvjy'
    },
    {
      id: '4', name: 'Code Siêu Hải Tặc', slug: 'sieu-hai-tac',
      image: '/anhcode/gamesieuhaitac/zalosieuhaitac.jpg', link: 'https://zalo.me/g/syib33yds4oqqhyv1ewy'
    },
    {
      id: '5', name: 'Code Vô Danh Giang Hồ', slug: 'vodanhgiangho',
      image: '/anhcode/gamevodanh/zalovodanh.jpg', link: 'https://zalo.me/g/3bwnbrtphsl5qeosxquc'
    },
    {
      id: '6', name: 'Code Bửu Bối Truyền Kỳ', slug: 'buuboitruyenky',
      image: '/anhcode/gamebuuboi/zalobuuboi.jpg', link: 'https://zalo.me/g/mfhelf5hjkgyveoiwbca'
    },
    {
      id: '7', name: 'Code Samkok Tam Quốc', slug: 'samkok-tam-quoc',
      image: '/anhcode/gamesamkok/zalosamkok.jpg', link: 'https://zalo.me/g/lcyduu218'
    },
    {
      id: '8', name: 'Code Học Viện Huyền Thoại', slug: 'HVHT',
      image: '/anhcode/gamehocvien/zalohocvien.jpg', link: 'https://zalo.me/g/tnchjh219'
    },
    {
      id: '9', name: 'Code ComBo Thức Tỉnh', slug: 'CBTT',
      image: '/anhcode/gamecombo/zalocombo.png', link: 'https://zalo.me/g/vyzcws658'
    },
    {
      id: '10', name: 'Code Yulgang Tái Chiễn Võ Lâm', slug: 'Yulgang',
      image: '/anhcode/gameyulgang/zaloyulgang.jpg', link: 'https://zalo.me/g/0z10xk9k0srqzorwqtem'
    },
    {
      id: '11', name: 'Code Pixel Đại Chiến', slug: 'pixel',
      image: '/anhcode/gamepixel/zalopixel.jpg', link: 'https://zalo.me/g/muqicp826'
    },
    {
      id: '12', name: 'Code Rồng Thần Siêu Cấp', slug: 'RTSC',
      image: '/anhcode/gamerongthan/zalorongthan.jpg', link: 'https://zalo.me/g/ndrtor905'
    },
    {
      id: '13', name: 'Code MU Vĩnh Hằng', slug: 'MUVH',
      image: '/anhcode/gamemuvh/zalomuvh.jpg', link: 'https://zalo.me/g/fbqpct757'
    },
    {
      id: '14', name: 'Code Chiến Tuyến Hướng Dương', slug: 'CTHD',
      image: '/anhcode/gamehuongduong/zalohuongduong.jpg', link: 'https://zalo.me/g/vjtwiw286'
    },
    {
      id: '15', name: 'Ta Là Cao Thủ Võ Lâm - Zalo Code', slug: 'tlctvl',
      image: '/anhcode/gamectvolam/zaloctvolam.jpg', link: 'https://zalo.me/g/9q5utofximrs9pbnhvwh'
    },
    {
      id: '17', name: 'Huyền Thoại Làng Lá - Zalo Code', slug: 'htll',
      image: '/anhcode/gamectvolam/zalolangla.jpg', link: 'https://zalo.me/g/mqmejb541'
    },
    {
      id: '18', name: 'Total Football VNG - Zalo Code', slug: 'FootballVNG',
      image: '/anhcode/gamecFootball/zaloFootball.jpg', link: 'https://zalo.me/g/gsddibersp4cye4lkufd'
    },
  ] as ZaloGroup[]
};

 