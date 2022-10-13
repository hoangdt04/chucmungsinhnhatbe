const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const optionAllSongList = $('.option-all__songs-list');
const musicNowTym = $('.music-control__left-action-tym-box');
const volumeIcon = $('.music-control__right-volume-icon');
const audio = $('#audio');
// var sliderItems=Array.from($$('.option-all__song-slider-img'));
const sliderBox = $('.option-all__song-slider');
const sliderItems = $$('.option-all__song-slider-img');
const playBtn = $('.js__music-control__icon-play');
const thunbPlayerBox = $('.music-control__left');
const progress = $('#progress');
const remainTime = $('.js__music-control__progress-time-start');
const durationTime = $('.js__music-control__progress-time-duration');
const prevBtn = $('.js__music-control__icon2');
const nextBtn = $('.js__music-control__icon4');
const nameSong = $('.music-control__left-content-song');
const nameSinger = $('.music-control__left-content-singer');
const cdThumb = $('.music-control__left-img');
const playAllBtn = $('.js__playall-0');
const playAllBtn1 = $('.js__playall-1');
const randomBtn = $('.js__music-control__icon1');
const repeatBtn = $('.js__music-control__icon5');
const volumeProgress = $('#progress1');
const nextSongHeadding = $('.nextsong__fist');
const nextSongList = $('.nextsong__last-list');
const header = $('.header');
const mainContainer = $('.main-container');
const headerSetting = $('.header__setting');
const headerOverlay = $('.header__right-overlay');
const headerSettingList = $('.header__setting-list');

const themeModal = $('.theme-modal');
const themebtn = $('.header__theme');
const themeClosebtn = $('.theme-modal__close-btn');
const themeOverlay = $('.theme-modal__overlay');
const themeBody = $('.theme-modal__body');
const themeItems = $$('.js-theme-item');
const tabs = $$('.tabs-item');
const panes = $$('.panes-item');
const sideBarTabs = $$('.js__sidebar-tabs');
const containerPanes = $$('.js__container-panes');
const slidersDiscover = $$('.container-discover__slider-item');






var backgroundIndex= 0;
// x = 100  // center
// y = 50   // center
// r = 50   // radius
// a = 2    // angle (from 0 to Math.PI * 2)





const app = {
    // sliderIndex: 0,
    songsData : [
        {
            background: './assets/img/songs/sontung.jpg',
            name: 'Nơi Này Có Anh',
            singer: 'Sơn Tùng M-TP',
            pathSong: './assets/music/list-song/noinaycoanh.mp3',
            duration : '04:20',
        },
        
        {
            background: './assets/img/songs/emkhong.jpg',
            name: 'Em Không Hiểu',
            singer: 'Changg',
            pathSong: './assets/music/list-song/emkhong.mp3',
            duration : '04:13',
        },

        {
            background: './assets/img/songs/ngaykhong.jpg',
            name: 'Ngày Không Có Em',
            singer: 'Thịnk (Piano Version)',
            pathSong: './assets/music/list-song/ngaykhong.mp3',
            duration : '04:23',
        },

        {
            background: './assets/img/songs/tethat.jpg',
            name: 'Tệ Thật, Anh Nhớ Em',
            singer: 'Thanh Hưng',
            pathSong: './assets/music/list-song/tethat.mp3',
            duration : '05:38',
        },

        {
            background: './assets/img/songs/she.jpg',
            name: 'She Neva Knows',
            singer: ' JustaTee ',
            pathSong: './assets/music/list-song/she.mp3',
            duration : '04:28',
        },

        
        
        {
            background: './assets/img/songs/phailamsao.jpg',
            name: 'Phải Làm Sao Để Níu Kéo Một Người',
            singer: ' Sean x Tweny',
            pathSong: './assets/music/list-song/phailamsao.mp3',
            duration : '04:06',
        },

        {
            background: './assets/img/songs/loitambiet.png',
            name: 'Lời Tạm Biệt Chưa Nói',
            singer: '  Grey D, Orange, Kai Đinh x CaoTri',
            pathSong: './assets/music/list-song/loitambiet.mp3',
            duration : '03:01',
        },

        {
            background: './assets/img/songs/lanslide.jpg',
            name: 'Landslide',
            singer: 'Oh Wonder',
            pathSong: './assets/music/list-song/landslide.mp3',
            duration : '03:28',
        },

        

        {
            background: './assets/img/songs/all.jpg',
            name: 'All Of Me',
            singer: 'John Legend',
            pathSong: './assets/music/list-song/allofme.mp3',
            duration : '04:29',
        },
        {
            background: './assets/img/songs/tsl.jpg',
            name: '2ndTime',
            singer: 'TSL, Marzuz',
            pathSong: './assets/music/list-song/2ndtime.mp3',
            duration : '03:35',
        },
        {
            background: './assets/img/songs/2nd.jpg',
            name: 'Mai',
            singer: 'Marzuz',
            pathSong: './assets/music/list-song/mai.mp3',
            duration : '03:44',
        },
        
        {
            background: './assets/img/songs/head.jpg',
            name: ' Head In The Clouds',
            singer: ' Hayd ',
            pathSong: './assets/music/list-song/head.mp3',
            duration : '03:04',
        },

        {
            background: './assets/img/songs/baby.jpg',
            name: 'Angel Baby',
            singer: 'Troye Sivan',
            pathSong: './assets/music/list-song/baby.mp3',
            duration : '04:18',
        },

        {
            background: './assets/img/songs/pround.jpg',
            name: 'Proud Of You',
            singer: 'Fiona Fung',
            pathSong: './assets/music/list-song/pround.mp3',
            duration : '03:10',
        },

        {
            background: './assets/img/songs/little.jpg',
            name: 'A Little Love ',
            singer: 'Fiona Fung',
            pathSong: './assets/music/list-song/little.mp3',
            duration : '03:07',
        },

        {
            background: './assets/img/songs/aloha.jpg',
            name: ' Aloha',
            singer: ' Cool',
            pathSong: './assets/music/list-song/aloha.mp3',
            duration : '03:52',
        },

        {
            background: './assets/img/songs/let.jpg',
            name: ' Let Her Go ',
            singer: 'Passenger',
            pathSong: './assets/music/list-song/let.mp3',
            duration : '04:14',
        },

        {
            background: './assets/img/songs/atmy.png',
            name: 'At My Worst ',
            singer: 'Pink Sweat',
            pathSong: './assets/music/list-song/atmy.mp3',
            duration : '02:53',
        },

        {
            background: './assets/img/songs/until.jpg',
            name: ' Until You',
            singer: 'Shayne Ward',
            pathSong: './assets/music/list-song/until.mp3',
            duration : '04:08',
        },

        {
            background: './assets/img/songs/sofar.jpg',
            name: 'So Far Away',
            singer: 'Martin Garrix & David Guetta',
            pathSong: './assets/music/list-song/sofar.mp3',
            duration : '02:52',
        },

        {
            background: './assets/img/songs/memories.jpg',
            name: 'Memories',
            singer: ' Maroon 5',
            pathSong: './assets/music/list-song/memories.mp3',
            duration : '03:06',
        },

        {
            background: './assets/img/songs/anne.jpg',
            name: '2002',
            singer: 'Anne-Marie',
            pathSong: './assets/music/list-song/anne.mp3',
            duration : '03:07',
        },
        {
            background: './assets/img/songs/mylove.jpg',
            name: 'My Love',
            singer: 'Westlife',
            pathSong: './assets/music/list-song/mylove.mp3',
            duration : '03:53',
        },
        {
            background: './assets/img/songs/nothing.jpg',
            name: " Nothing's Gonna Change My Love For You",
            singer: 'George Benson',
            pathSong: './assets/music/list-song/nothing.mp3',
            duration : '03:49',
        },
        {
            background: './assets/img/songs/love.jpg',
            name: ' Love story',
            singer: ' Taylor Swif',
            pathSong: './assets/music/list-song/love.mp3',
            duration : '03:54',
        },
        
        
        {
            background: './assets/img/songs/cohenvoi.jpg',
            name: 'Có Hẹn Với Thanh Xuân',
            singer: 'MONSTAR',
            pathSong: './assets/music/list-song/cohen.mp3',
            duration : '03:38',
        },
        {
            background: './assets/img/songs/saigon.jpg',
            name: 'Sài Gòn Đau Lòng Quá',
            singer: 'Hứa Kim Tuyền x Hoàng Duyên',
            pathSong: './assets/music/list-song/saigon.mp3',
            duration : '05:08',
        },
        {
            background: './assets/img/songs/sinhra.jpg',
            name: 'Sinh Ra Đã Là Thứ Đối Lập Nhau',
            singer: 'Emcee L, Badbies',
            pathSong: './assets/music/list-song/sinhra.mp3',
            duration : '03:54',
        },
        {
            background: './assets/img/songs/sorang.jpg',
            name: 'Sợ Rằng Em Biết Anh Còn Yêu Em',
            singer: 'Juun Đăng Dũng',
            pathSong: './assets/music/list-song/sorang.mp3',
            duration : '05:22',
        },
        {
            background: './assets/img/songs/nangtho.jpg',
            name: 'Nàng Thơ',
            singer: 'Hoàng Dũng',
            pathSong: './assets/music/list-song/nangtho.mp3',
            duration : '04:14',
        },

        {
            background: './assets/img/songs/tuchoi.jpg',
            name: 'Từ Chối Nhẹ Nhàng Thôi',
            singer: 'Phúc Du x Bích Phương',
            pathSong: './assets/music/list-song/tuchoi.mp3',
            duration : '04:17',
        },

        {
            background: './assets/img/songs/duanao.jpg',
            name: 'Đứa Nào Làm Em Buồn?',
            singer: 'Phúc Du ft. Hoàng Dũng',
            pathSong: './assets/music/list-song/duanao.mp3',
            duration : '04:17',
        },

        {
            background: './assets/img/songs/xuanthi.jpg',
            name: 'Xuân Thì',
            singer: 'Hà Anh Tuấn',
            pathSong: './assets/music/list-song/xuanthi.mp3',
            duration : '05:46',
        },

        {
            background: './assets/img/songs/dapan.webp',
            name: 'Đáp Án Cuối Cùng',
            singer: 'Quân A.P',
            pathSong: './assets/music/list-song/dapan.mp3',
            duration : '04:51',
        },


        {
            background: './assets/img/songs/codon.jpg',
            name: 'Cô Đơn Không Muốn Về Nhà',
            singer: 'Mr. Siro ',
            pathSong: './assets/music/list-song/codon.mp3',
            duration : '03:15',
        },
        {
            background: './assets/img/songs/dunglo.jpg',
            name: ' Đừng Lo Anh Đợi Mà',
            singer: 'Mr. Siro',
            pathSong: './assets/music/list-song/dunglo.mp3',
            duration : '04:46',
        },
        {
            background: './assets/img/songs/daydut.jpg',
            name: 'Day Dứt Nỗi Đau',
            singer: 'Mr. Siro',
            pathSong: './assets/music/list-song/daydut.mp3',
            duration : '04:58',
        },
        {
            background: './assets/img/songs/duoinhung.jpg',
            name: 'Dưới Những Cơn Mưa',
            singer: 'Mr. Siro',
            pathSong: './assets/music/list-song/duoinhung.mp3',
            duration : '05:12',
        },
        {
            background: './assets/img/songs/guongmat.jpg',
            name: ' Gương Mặt Lạ Lẫm',
            singer: 'Mr. Siro',
            pathSong: './assets/music/list-song/guongmat.mp3',
            duration : '05:49',
        },
        {
            background: './assets/img/songs/motbuoc.jpg',
            name: ' Một Bước Yêu Vạn Dặm Đau',
            singer: 'Mr. Siro',
            pathSong: './assets/music/list-song/motbuoc.mp3',
            duration : '05:03',
        },

        {
            background: './assets/img/songs/langnghe.jpg',
            name: 'Lắng Nghe Nước Mắt',
            singer: ' Mr. Siro',
            pathSong: './assets/music/list-song/langnghe.mp3',
            duration : '05:39',
        },

        {
            background: './assets/img/songs/tulau.jpg',
            name: 'Tự Lau Nước Mắt ',
            singer: ' Mr. Siro',
            pathSong: './assets/music/list-song/tulau.mp3',
            duration : '05:22',
        },

        {
            background: './assets/img/songs/codau.jpg',
            name: 'Có Đâu Ai Ngờ',
            singer: ' Thu Cầm',
            pathSong: './assets/music/list-song/codau.mp3',
            duration : '03:39',
        },

        {
            background: './assets/img/songs/henmot.jpg',
            name: 'Hẹn Một Mai ',
            singer: ' Bùi Anh Tuấn',
            pathSong: './assets/music/list-song/henmot.mp3',
            duration : '04:47',
        },

        {
            background: './assets/img/songs/anhthuong.webp',
            name: ' Anh Thương Em Nhất Mà',
            singer: ' Lã. x Log x TiB',
            pathSong: './assets/music/list-song/anhthuong.mp3',
            duration : '04:50',
        },

        {
            background: './assets/img/songs/dieuchuanoi.jpg',
            name: 'Điều Chưa Nói',
            singer: ' Tùa',
            pathSong: './assets/music/list-song/dieuchuanoi.mp3',
            duration : '04:50',
        },

        {
            background: './assets/img/songs/baolau.jpg',
            name: 'Bao Lâu Ta Lại Yêu Một Người',
            singer: ' Doãn Hiếu',
            pathSong: './assets/music/list-song/baolau.mp3',
            duration : '03:55',
        },

        {
            background: './assets/img/songs/bonghoa.jpg',
            name: 'Bông Hoa Chẳng Thuộc Về Ta',
            singer: ' Việt',
            pathSong: './assets/music/list-song/bonghoa.mp3',
            duration : '03:36',
        },

        {
            background: './assets/img/songs/chila.jpg',
            name: 'Chỉ Là Muốn Nói (300)',
            singer: ' Khải',
            pathSong: './assets/music/list-song/chila.mp3',
            duration : '04:46',
        },

        {
            background: './assets/img/songs/cole.jpg',
            name: 'Có Lẽ Quá Khó Để Quên 1 Người',
            singer: '  1nG ft Nam Lee Dblue (Prod. 1nG)',
            pathSong: './assets/music/list-song/cole.mp3',
            duration : '04:48',
        },

        {
            background: './assets/img/songs/dalo.jpg',
            name: 'Đã Lỡ Yêu Em Nhiều',
            singer: 'JustaTee',
            pathSong: './assets/music/list-song/dalo.mp3',
            duration : '04:21',
        },

        {
            background: './assets/img/songs/conhu.jpg',
            name: 'Có Như Không Có',
            singer: 'Hiền Hồ',
            pathSong: './assets/music/list-song/conhu.mp3',
            duration : '04:33',
        },

        {
            background: './assets/img/songs/guianh.jpg',
            name: 'Gửi Anh Xa Nhớ',
            singer: 'Bích Phương',
            pathSong: './assets/music/list-song/guianh.mp3',
            duration : '04:16',
        },

        {
            background: './assets/img/songs/nghenhu.jpg',
            name: 'Nghe Như Tình Yêu',
            singer: 'Hieuthuhai',
            pathSong: './assets/music/list-song/nghenhu.mp3',
            duration : '03:13',
        },

        {
            background: './assets/img/songs/hengap.jpg',
            name: 'Hẹn Gặp Em Dưới Ánh Trăng',
            singer: ' Hurryking, Hieuthuhai, Manbo',
            pathSong: './assets/music/list-song/hengap.mp3',
            duration : '03:52',
        },

        {
            background: './assets/img/songs/cauhua.jpg',
            name: 'Câu Hứa Chưa Vẹn Tròn',
            singer: 'Phát Huy T4 x Hoàng green',
            pathSong: './assets/music/list-song/cauhua.mp3',
            duration : '04:34',
        },

        {
            background: './assets/img/songs/kemduyen.webp',
            name: 'Kém Duyên',
            singer: 'Rum x Nit x Masew',
            pathSong: './assets/music/list-song/kemduyen.mp3',
            duration : '03:45',
        },

        {
            background: './assets/img/songs/loduyen.jpg',
            name: 'Mashup Lỡ Duyên',
            singer: ' Rum x Nit',
            pathSong: './assets/music/list-song/loduyen.mp3',
            duration : '03:50',
        },


        {
            background: './assets/img/songs/thanhxuan.jpg',
            name: 'Thanh Xuân Ngọt Ngào',
            singer: ' Lễ Vũ',
            pathSong: './assets/music/list-song/thanhxuan.mp3',
            duration : '04:24',
        },

        {
            background: './assets/img/songs/aidauhay.webp',
            name: 'Ai Đâu Hay',
            singer: 'Sean x Luxofons',
            pathSong: './assets/music/list-song/aidauhay.mp3',
            duration : '05:56',
        },


        {
            background: './assets/img/songs/anhchieutan.jpg',
            name: 'Ánh Chiều Tàn',
            singer: 'D Empty x Poll',
            pathSong: './assets/music/list-song/anhchieutan.mp3',
            duration : '03:46',
        },

        {
            background: './assets/img/songs/emonkhong.jpg',
            name: 'Em Ổn Không',
            singer: 'Trịnh Thiên Ân x ViruSs x Soái Nhi',
            pathSong: './assets/music/list-song/emonkhong.mp3',
            duration : '05:19',
        },

        {
            background: './assets/img/songs/nuocmat.jpg',
            name: 'Nước Mắt Em Lau Bằng Tình Yêu Mới',
            singer: 'Da Lab ft Tóc Tiên',
            pathSong: './assets/music/list-song/nuocmat.mp3',
            duration : '04:27',
        },

        {
            background: './assets/img/songs/chivi.jpg',
            name: 'Chỉ Vì Quá Thương Em',
            singer: ' Hải Nam x Freak D',
            pathSong: './assets/music/list-song/chivi.mp3',
            duration : '05:12',
        },

        {
            background: './assets/img/songs/maichangthuoc.jpg',
            name: 'Mãi Chẳng Thuộc Về Nhau',
            singer: '  Bozitt',
            pathSong: './assets/music/list-song/maichangthuoc.mp3',
            duration : '06:20',
        },

        {
            background: './assets/img/songs/nhunggi.jpg',
            name: 'Những Gì Anh Nói',
            singer: 'Bozitt',
            pathSong: './assets/music/list-song/nhunggi.mp3',
            duration : '06:24',
        },

        {
            background: './assets/img/songs/noai.jpg',
            name: 'Nợ Ai Đó Lời Xin Lỗi',
            singer: ' Bozitt',
            pathSong: './assets/music/list-song/noai.mp3',
            duration : '05:37',
        },

        {
            background: './assets/img/songs/henyeu.jpg',
            name: 'Hẹn Yêu',
            singer: 'Duy Zuno',
            pathSong: './assets/music/list-song/henyeu.mp3',
            duration : '04:59',
        },
        {
            background: './assets/img/songs/ho.jpg',
            name: 'Họ Yêu Ai Mất Rồi',
            singer: 'Doãn Hiếu',
            pathSong: './assets/music/list-song/hoyeuai.mp3',
            duration : '04:46',
        },
        {
            background: './assets/img/songs/lieugio.jpg',
            name: 'Liệu Giờ',
            singer: '2T x Văn',
            pathSong: './assets/music/list-song/lieugio.mp3',
            duration : '04:18',
        },


        {
            background: './assets/img/songs/amtham.jpg',
            name: 'Âm Thầm Bên Em',
            singer: 'Sơn Tùng M-TP',
            pathSong: './assets/music/list-song/amtham.mp3',
            duration : '04:00',
        },

        {
            background: './assets/img/songs/lamnguoi.jpg',
            name: 'Làm Người Luôn Yêu Em',
            singer: 'Sơn Tùng M-TP',
            pathSong: './assets/music/list-song/lamnguoi.mp3',
            duration : '04:25',
        },

        {
            background: './assets/img/songs/khuonmat.jpg',
            name: 'Khuôn Mặt Đáng Thương',
            singer: 'Sơn Tùng M-TP',
            pathSong: './assets/music/list-song/khuonmat.mp3',
            duration : '04:30',
        },

        {
            background: './assets/img/songs/danhmatem.jpg',
            name: 'Đánh Mất Em',
            singer: 'Quang Đăng Trần',
            pathSong: './assets/music/list-song/danhmatem.mp3',
            duration : '03:48',
        },

        {
            background: './assets/img/songs/demngay.jpg',
            name: 'Đếm Ngày Xa Em',
            singer: 'Lou Hoàng, Only C',
            pathSong: './assets/music/list-song/demngayxaem.mp3',
            duration : '04:23',
        },

        {
            background: './assets/img/songs/yeu5.jpg',
            name: 'Yêu 5',
            singer: 'Rhymastic',
            pathSong: './assets/music/list-song/yeu5.mp3',
            duration : '04:10',
        },

        {
            background: './assets/img/songs/maimai.jpg',
            name: 'Mãi Mãi Không Phải Anh',
            singer: 'Thanh Bình',
            pathSong: './assets/music/list-song/maimai.mp3',
            duration : '05:55',
        },

        {
            background: './assets/img/songs/solam.jpg',
            name: 'Sợ Lắm 2',
            singer: 'NB3 Hoài Bảo x Freak D',
            pathSong: './assets/music/list-song/solam.mp3',
            duration : '04:03',
        },

        {
            background: './assets/img/songs/kedien.jpg',
            name: 'Kẻ Điên Tin Vào Tình Yêu',
            singer: 'Lil Zpoet',
            pathSong: './assets/music/list-song/kedien.mp3',
            duration : '04:46',
        },
        {
            background: './assets/img/songs/matmoc.jpg',
            name: 'Mặt Mộc',
            singer: 'Nguyên Ngọc x VAnh x Ân Nhi',
            pathSong: './assets/music/list-song/matmoc.mp3',
            duration : '03:26',
        },
        {
            background: './assets/img/songs/lamnguoi1.jpg',
            name: ' Làm Người Yêu Em Nhé Baby',
            singer: ' Wendy Thảo',
            pathSong: './assets/music/list-song/lamnguoi1.mp3',
            duration : '04:05',
        },
        {
            background: './assets/img/songs/motnha.jpg',
            name: ' Một Nhà',
            singer: 'Da Lab',
            pathSong: './assets/music/list-song/motnha.mp3',
            duration : '03:05',
        },
        {
            background: './assets/img/songs/ngatu.jpg',
            name: 'Ngã Tư Không Đèn',
            singer: 'Trang X Khoa Vũ',
            pathSong: './assets/music/list-song/ngatu.mp3',
            duration : '03:35',
        },
        {
            background: './assets/img/songs/homnay.jpg',
            name: ' Hôm Nay Tôi Buồn ',
            singer: 'Phùng Khánh Linh',
            pathSong: './assets/music/list-song/homnay.mp3',
            duration : '04:39',
        },
        {
            background: './assets/img/songs/nucuoi.jpg',
            name: 'Nụ Cười 18 20',
            singer: 'Doãn Hiếu',
            pathSong: './assets/music/list-song/nucuoi.mp3',
            duration : '03:59',
        },
        {
            background: './assets/img/songs/nguoiam.jpg',
            name: 'Người Âm Phủ',
            singer: ' Osad x Khánh Vy',
            pathSong: './assets/music/list-song/nguoiam.mp3',
            duration : '03:39',
        },
        {
            background: './assets/img/songs/saigon1.jpg',
            name: 'Sài Gòn Hôm Nay Mưa',
            singer: 'Hoàng Duyên',
            pathSong: './assets/music/list-song/saigon1.mp3',
            duration : '04:13',
        },

        {
            background: './assets/img/songs/khongquan.jpg',
            name: 'Không Quan Tâm',
            singer: ' Chi Dân',
            pathSong: './assets/music/list-song/khongquan.mp3',
            duration : '04:59',
        },

        {
            background: './assets/img/songs/suthat.jpg',
            name: 'Sự Thật Sau Một Lời Hứa',
            singer: ' Chi Dân',
            pathSong: './assets/music/list-song/suthat.mp3',
            duration : '04:56',
        },
        
        {
            background: './assets/img/songs/vephia.jpg',
            name: 'Về Phía Mưa',
            singer: 'Thế Bảo',
            pathSong: './assets/music/list-song/vephia.mp3',
            duration : '05:33',
        },

        {
            background: './assets/img/songs/troigiau.jpg',
            name: 'Trời Giấu Trời Mang Đi',
            singer: 'Amee x Viruss',
            pathSong: './assets/music/list-song/troigiau.mp3',
            duration : '04:24',
        },

        {
            background: './assets/img/songs/yeunhieu.jpg',
            name: 'Yêu Nhiều Ghen Nhiều',
            singer: 'Thanh Hưng',
            pathSong: './assets/music/list-song/yeunhieu.mp3',
            duration : '04:18',
        },


        {
            background: './assets/img/songs/waiting.jpg',
            name: 'Waiting For You',
            singer: 'MONO',
            pathSong: './assets/music/list-song/waiting.mp3',
            duration : '04:25',
        },

        {
            background: './assets/img/songs/saoem.jpg',
            name: 'Sao Em Lại Tắt Máy',
            singer: 'Phạm Nguyên Ngọc x Vanh',
            pathSong: './assets/music/list-song/saoem.mp3',
            duration : '03:21',
        },

        {
            background: './assets/img/songs/saulung.jpg',
            name: 'Sau Lưng Anh Có Ai Kìa',
            singer: 'Thiều Bảo Trâm',
            pathSong: './assets/music/list-song/saulung.mp3',
            duration : '05:13',
        },

        {
            background: './assets/img/songs/tamsu.jpg',
            name: 'Tâm Sự Tuổi 30',
            singer: 'Trịnh Thăng Bình',
            pathSong: './assets/music/list-song/tamsu.mp3',
            duration : '04:16',
        },
        {
            background: './assets/img/songs/nguoiay.jpg',
            name: 'Người Ấy',
            singer: 'Trịnh Thăng Bình',
            pathSong: './assets/music/list-song/nguoiay.mp3',
            duration : '04:13',
        },

        {
            background: './assets/img/songs/khacbiet.jpg',
            name: 'Khác Biệt To Lớn',
            singer: 'Trịnh Thăng Bình',
            pathSong: './assets/music/list-song/khacbiet.mp3',
            duration : '03:51',
        },
        
        {
            background: './assets/img/songs/sainguoi.jpg',
            name: 'Sai Người Sai Thời Điểm',
            singer: 'Thanh Hưng',
            pathSong: './assets/music/list-song/sainguoi.mp3',
            duration : '06:08',
        },

        {
            background: './assets/img/songs/thaytoi.jpg',
            name: 'Thay Tôi Yêu Cô Ấy',
            singer: 'Thanh Hưng',
            pathSong: './assets/music/list-song/thaytoi.mp3',
            duration : '05:29',
        },

        {
            background: './assets/img/songs/thithoi.jpg',
            name: 'Thì Thôi',
            singer: 'Reddy',
            pathSong: './assets/music/list-song/thithoi.mp3',
            duration : '05:52',
        },

        {
            background: './assets/img/songs/yeudonphuong.jpg',
            name: 'Yêu Đơn Phương',
            singer: 'OnlyC ft Karik',
            pathSong: './assets/music/list-song/yeudonphuong.mp3',
            duration : '03:19',
        },

        

        
        {
            background: './assets/img/songs/aino.webp',
            name: 'Ái Nộ',
            singer: 'Masew x Khoi Vu ft Minh Flute',
            pathSong: './assets/music/list-song/aino.mp3',
            duration : '04:05',
        },

        {
            background: './assets/img/songs/nguoi.jpg',
            name: 'Người Đáng Thương Là Anh',
            singer: 'Only C',
            pathSong: './assets/music/list-song/nguoidangthuong.mp3',
            duration : '05:12',
        },
        {
            background: './assets/img/songs/cuoidi.jpg',
            name: 'Cưới Đi',
            singer: '2T, ChangC',
            pathSong: './assets/music/list-song/cuoidi.mp3',
            duration : '03:52',
        },
        {
            background: './assets/img/songs/anhsao.jpg',
            name: 'Ánh Sao Và Bầu Trời',
            singer: 'T.R.I x Cá',
            pathSong: './assets/music/list-song/anhsao.mp3',
            duration : '04:20',
        },
        {
            background: './assets/img/songs/chill.jpg',
            name: 'Cứ Chill Thôi',
            singer: 'Chilies x Suni Hạ Linh',
            pathSong: './assets/music/list-song/cuchill.mp3',
            duration : '04:30',
        },
        {
            background: './assets/img/songs/chuyen.jpg',
            name: 'Chuyện Đôi Ta',
            singer: 'Emcee L x Muộii',
            pathSong: './assets/music/list-song/chuyendoita.mp3',
            duration : '03:28',
        },
        
        {
            background: './assets/img/songs/lalung.jpg',
            name: 'Lạ Lùng',
            singer: 'Vũ',
            pathSong: './assets/music/list-song/lalung.mp3',
            duration : '04:21',
        },
        
        {
            background: './assets/img/songs/buocqua.jpg',
            name: 'Bước Qua Mùa Cô Đơn',
            singer: 'Vũ',
            pathSong: './assets/music/list-song/buocqua.mp3',
            duration : '04:38',
        },
        
        {
            background: './assets/img/songs/nhammat.jpg',
            name: 'Nhắm Mắt Thấy Mùa Hè',
            singer: 'Nguyên Hà',
            pathSong: './assets/music/list-song/nhammat.mp3',
            duration : '04:38',
        },

        {
            background: './assets/img/songs/sayyoudo.jpg',
            name: 'Say You Do',
            singer: 'Tiên Tiên',
            pathSong: './assets/music/list-song/sayyoudo.mp3',
            duration : '03:40',
        },
       
        {
            background: './assets/img/songs/timem.jpg',
            name: 'Tìm Em',
            singer: 'Trịnh Đình Quang',
            pathSong: './assets/music/list-song/timem.mp3',
            duration : '03:42',
        },
        
        {
            background: './assets/img/songs/ucoanhday.jpg',
            name: 'Ừ Có Anh Đây',
            singer: 'Tino',
            pathSong: './assets/music/list-song/ucoanhday.mp3',
            duration : '06:09',
        },
        
        {
            background: './assets/img/songs/buocquanhau.jpg',
            name: 'Bước Qua Nhau',
            singer: 'Vũ',
            pathSong: './assets/music/list-song/buocquanhau.mp3',
            duration : '04:17',
        },

        {
            background: './assets/img/songs/nguoiyeukhoc.png',
            name: 'Khi Người Mình Yêu Khóc',
            singer: 'Phan Mạnh Quỳnh',
            pathSong: './assets/music/list-song/khinguoi.mp3',
            duration : '03:42',
        },

        {
            background: './assets/img/songs/thangtu.jpg',
            name: 'Tháng Tư Là Lời Nói Dối Của Em',
            singer: 'Hà Anh Tuấn',
            pathSong: './assets/music/list-song/thangtu.mp3',
            duration : '05:00',
        },

        {
            background: './assets/img/songs/chamkhe.jpg',
            name: 'Chạm Khẽ Tim Anh Một Chút Thôi',
            singer: 'Noo Phước Thịnh',
            pathSong: './assets/music/list-song/chamkhe.mp3',
            duration : '05:47',
        },

        {
            background: './assets/img/songs/coai.jpg',
            name: 'Có Ai Thương Em Như Anh',
            singer: ' Tóc Tiên x Touliver x Rap $onday',
            pathSong: './assets/music/list-song/coaithuong.mp3',
            duration : '03:45',
        },

        {
            background: './assets/img/songs/dauco.jpg',
            name: 'Dẫu Có Lỗi Lầm',
            singer: 'Reddy Cover',
            pathSong: './assets/music/list-song/dauco.mp3',
            duration : '03:59',
        },

        {
            background: './assets/img/songs/hongkong.jpg',
            name: 'HongKong1',
            singer: 'Nguyễn Trọng Tài x San Ji x Double X',
            pathSong: './assets/music/list-song/hongkong1.mp3',
            duration : '04:52',
        },

        {
            background: './assets/img/songs/loianh.png',
            name: 'Lời Anh Muốn Nói',
            singer: 'The Men',
            pathSong: './assets/music/list-song/loianh.mp3',
            duration : '04:41',
        },

        {
            background: './assets/img/songs/neulaanh.jpg',
            name: ' Nếu Là Anh',
            singer: 'The Men',
            pathSong: './assets/music/list-song/neulaanh.mp3',
            duration : '04:17',
        },

        {
            background: './assets/img/songs/emluon.jpg',
            name: 'Em Luôn Ở Trong Tâm Trí Anh',
            singer: 'The Men',
            pathSong: './assets/music/list-song/emluon.mp3',
            duration : '04:26',
        },

        {
            background: './assets/img/songs/chamday.jpg',
            name: 'Chạm Đáy Nỗi Đau',
            singer: ' Erik',
            pathSong: './assets/music/list-song/chamday.mp3',
            duration : '04:50',
        },

        {
            background: './assets/img/songs/yeuduockhong.jpg',
            name: 'Yêu Được Không',
            singer: ' Đức Phúc x Viruss',
            pathSong: './assets/music/list-song/yeuduockhong.mp3',
            duration : '05:08',
        },

        {
            background: './assets/img/songs/xindung.jpg',
            name: 'Xin Đừng Lặng Im ',
            singer: 'Soobin Hoàng Sơn',
            pathSong: './assets/music/list-song/xindung.mp3',
            duration : '04:07',
        },


        {
            background: './assets/img/songs/neungayay.jpg',
            name: 'Nếu Ngày Ấy',
            singer: 'Soobin Hoàng Sơn',
            pathSong: './assets/music/list-song/neungayay.mp3',
            duration : '04:52',
        },


        {
            background: './assets/img/songs/tusu.jpg',
            name: 'Tự Sự',
            singer: 'Orange',
            pathSong: './assets/music/list-song/tusu.mp3',
            duration : '04:17',
        },

        {
            background: './assets/img/songs/yeuthuong.jpg',
            name: 'Yêu Thương Ngày Đó',
            singer: 'Soobin Hoàng Sơn',
            pathSong: './assets/music/list-song/yeuthuong.mp3',
            duration : '04:22',
        },

        
        

        {
            background: './assets/img/songs/muadong.jpg',
            name: 'Mùa Đông Khóc',
            singer: ' Khánh Đơn',
            pathSong: './assets/music/list-song/muadong.mp3',
            duration : '03:33',
        },

        {
            background: './assets/img/songs/chieunay.jpg',
            name: 'Chiều Nay Không Có Mưa Bay',
            singer: ' Thế Phương VBK ( Acoustic)',
            pathSong: './assets/music/list-song/chieunay.mp3',
            duration : '05:12',
        },

        {
            background: './assets/img/songs/hayra.jpg',
            name: 'Hãy Ra Khỏi Người Đó Đi',
            singer: 'Phan Mạnh Quỳnh',
            pathSong: './assets/music/list-song/hayra.mp3',
            duration : '03:13',
        },

        {
            background: './assets/img/songs/saominh.jpg',
            name: 'Sao Mình Chưa Nắm Tay Nhau',
            singer: ' Yan Nguyễn',
            pathSong: './assets/music/list-song/saominh.mp3',
            duration : '04:44',
        },

        {
            background: './assets/img/songs/thangmay.jpg',
            name: 'Tháng Mấy Em Nhớ Anh',
            singer: ' Hà Anh Tuấn',
            pathSong: './assets/music/list-song/thangmay.mp3',
            duration : '06:09',
        },

        {
            background: './assets/img/songs/toithay.jpg',
            name: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',
            singer: '  Ái Phương',
            pathSong: './assets/music/list-song/toithay.mp3',
            duration : '03:12',
        },

        {
            background: './assets/img/songs/ngaychua.jpg',
            name: 'Ngày Chưa Giông Bão',
            singer: ' Bùi Lan Hương',
            pathSong: './assets/music/list-song/ngaychua.mp3',
            duration : '03:48',
        },

        {
            background: './assets/img/songs/cochang.jpg',
            name: 'Có Chàng Trai Viết Lên Cây',
            singer: ' Phan Mạnh Quỳnh',
            pathSong: './assets/music/list-song/cochang.mp3',
            duration : '05:10',
        },

        {
            background: './assets/img/songs/emmim.png',
            name: 'Em Mỉm Cười Trông Thật Đẹp',
            singer: 'Trịnh Đình Quang',
            pathSong: './assets/music/list-song/emmim.mp3',
            duration : '02:45',
        },


        {
            background: './assets/img/songs/tiktok.jpg',
            name: ':v',
            singer: 'vui vẻ khum quạo nka',
            pathSong: './assets/music/list-song/tiktok1.mp3',
            duration : '01:54',
        },

        {
            background: './assets/img/songs/tiktok1.jpg',
            name: ':3',
            singer: 'ngủ sớm đi đừng thức khuya nữa',
            pathSong: './assets/music/list-song/tiktok2.mp3',
            duration : '01:54',
        },
        
    ],
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    volume: 100,

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songsData[this.currentIndex];
            }
        })
    },


    

    toastSlide: function() {
        const toatMain = $('#toast');
        if (toatMain) {
            const toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = `
                <div class="toast__item">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span> Cậu cứ nghe nhạc đi á, đợi tớ cập nhật thêm nha, dù sao cũng chúc mừng sinh nhật cậu :3. Vui vẻ lên đi, đừng nghĩ linh tinh xong lại buồn đó đồ ngốc!!! </span>
                </div>
            `;
            toatMain.appendChild(toast);
            setTimeout(function() {
                toatMain.removeChild(toast);
            }, 3000)
        }
    },

    
   

    // THEME APPLY SKIN
    applyTheme: function() {
        themeItems.forEach((themeItem, index) => {
            themeItem.onclick = function() {
                if (index == 0) {
                    backgroundIndex = 0;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/0.svg)';
                    $('.main-music-control').style.backgroundImage = '';
                    $('.main-music-control').style.backgroundColor = '#3c999c';
                    $('.mobile-tab').style.backgroundColor = '#37075D';
                    $('.sidebar__add-playlist').style.backgroundColor = '#1fa4a9';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#4B206E';
                    $('.header__width-search-sub').style.backgroundColor = '#B2D8DB';
                    $('.header__width-search-sub').classList.add('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#B2D8DB';
                    $('.theme-modal__body').style.backgroundColor = '#B2D8DB';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#816399';
                    $('.main-sidebar').style.backgroundColor = 'hsla(0,0%,100%,0.05)';
                    $('.header__width-search-input').classList.remove('header__width-search-input--white');
                    $('.header__width-search-input').classList.add('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#816399";
                    $('.music__option-item.music__option-item--active').style.color = "#fff";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#fff';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = 'rgba(255, 255, 255, 0.5)';
                    })
                
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #fff";
                    })
                } else if (index == 1) {
                    backgroundIndex = 1;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    // $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/1.jpg)';
                    // $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#202020';
                    $('.mobile-tab').style.backgroundColor = '#202020';
                    $('.sidebar__add-playlist').style.backgroundColor = '#333333';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#3E3E3E';
                    $('.header__width-search-sub').style.backgroundColor = '#3E3E3E';
                    $('.header__width-search-sub').classList.add('header__width-search-sub--gray');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#3E3E3E';
                    $('.theme-modal__body').style.backgroundColor = '#3D3D3D';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#787878';
                    $('.main-sidebar').style.backgroundColor = 'hsla(0,0%,100%,0.05)';
                    $('.header__width-search-input').classList.remove('header__width-search-input--white');
                    $('.header__width-search-input').classList.add('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#787878";
                    $('.music__option-item.music__option-item--active').style.color = "#fff";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#fff';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = 'rgba(255, 255, 255, 0.5)';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#3E3E3E";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #fff";
                    })
                } else if (index == 2) {
                    backgroundIndex = 2;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/2.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#051740';
                    $('.mobile-tab').style.backgroundColor = '#051740';
                    $('.sidebar__add-playlist').style.backgroundColor = '#132958';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#1F3461';
                    $('.header__width-search-sub').style.backgroundColor = '#1F3461';
                    $('.header__width-search-sub').classList.add('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#1F3461';
                    $('.theme-modal__body').style.backgroundColor = '#192F60';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#637191';
                    $('.main-sidebar').style.backgroundColor = 'hsla(0,0%,100%,0.05)';
                    $('.header__width-search-input').classList.remove('header__width-search-input--white');
                    $('.header__width-search-input').classList.add('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#637191";
                    $('.music__option-item.music__option-item--active').style.color = "#fff";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#fff';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = 'rgba(255, 255, 255, 0.5)';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#1F3461";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #fff";
                    })
                } else if (index == 3) {
                    backgroundIndex = 3;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/3.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#D0CCC5';
                    $('.mobile-tab').style.backgroundColor = '#D0CCC5';
                    $('.sidebar__add-playlist').style.backgroundColor = '#DAD6D3';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#DAD6D3';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#E6E1DE';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#E5E2E0';
                    $('.main-sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#DAD6D3";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#E5E2E0";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                } else if (index == 4) {
                    backgroundIndex = 4;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/4.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#B4D0D0';
                    $('.mobile-tab').style.backgroundColor = '#B4D0D0';
                    $('.sidebar__add-playlist').style.backgroundColor = '#C9E4E6';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#C9E4E6';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#C9E4E6';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#D9ECEE';
                    $('.main-sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    
                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#C9E4E6";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#D9ECEE";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                } else if (index == 5) {
                    backgroundIndex = 5;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/5.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#F9C6C5';
                    $('.mobile-tab').style.backgroundColor = '#F9C6C5';
                    $('.sidebar__add-playlist').style.backgroundColor = '#F6E7E4';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#E6D2CD';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#F9C6C5';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#EEE0DC';
                    $('.main-sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#EEE0DC";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#E6D2CD";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                } else if (index == 6) {
                    backgroundIndex = 6;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/6.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#C6C4D1';
                    $('.mobile-tab').style.backgroundColor = '#C6C4D1';
                    $('.sidebar__add-playlist').style.backgroundColor = '#B1B0BA';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#B1B0BA';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#E2E7F5';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#C9C8CF';
                    $('.main-sidebar').style.backgroundColor = 'rgba(0,0,0,0.05)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#C9C8CF";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#B1B0BA";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                } else if (index == 7) {
                    backgroundIndex = 7;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/7.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#FFFFFF';
                    $('.mobile-tab').style.backgroundColor = '#FFFFFF';
                    $('.sidebar__add-playlist').style.backgroundColor = '#F2F2F2';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#F2F2F2';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#E6E1DE';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#FFFFFF';
                    $('.main-sidebar').style.backgroundColor = 'rgba(0,0,0,0.05)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#FFFFFF";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#F2F2F2";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                }
                
                app.verifyOptionTextColor();
            }
        });
    },

    // RENDER LIST MUSIC ITEM
    renderPlayList : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item0 ${index == this.currentIndex ? 'songs-item--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img js__songs-item-left-img-0">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden  js__sub-color">
                        <span>${song.name} </span>
                    </div>
                    <div class="songs-item-right mobile-hiden ">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER LIST MUSIC ITEM OPTION1
    renderPlayList1 : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item1 ${index == this.currentIndex ? 'songs-item--active songs-item-playbtn--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img js__songs-item-left-img-1">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} </span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART
    renderZingChart : function () {
        const htmls = this.songsData.map((song, index) => {
            return index < 10 ? `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item">
                    <div class="songs-item-left">
                        <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                        <span class="zingchart__item-left-line js__main-color">-</span>
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} </span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>` : ''
        })
        $('.js__zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART MORE
    renderZingChartMore : function () {
        const htmls = this.songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item">
                    <div class="songs-item-left">
                        <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                        <span class="zingchart__item-left-line">-</span>
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name}</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        $('.js__zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER HEADDING NEXT SONG 
    renderNextSongHeadding: function(playListElement, songs){
        const htmls = this.songsData.map((song, index) => {
            return index <= this.currentIndex ? `
            <!-- nextsong__fist-item-headding--active nextsong__fist-item-playbtn--active-->
            <div class="nextsong__fist-item nextsong__item ${audio.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    <div class="songs-item-left-img-playing-box">
                        <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                    </div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                    <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
                </div>
                <div class="nextsong__item-action">
                    <span class="nextsong__item-action-heart">
                        <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                        <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                    </span>
                    <span class="nextsong__item-action-dot">
                        <i class="fas fa-ellipsis-h "></i>
                    </span>
                </div>
            </div>` : ''
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER HEADDING NEXT SONG BAN ĐẦU
    renderNextSongHeaddingStart: function(playListElement, songs){
        const htmls = this.songsData.map((song, index) => {
            return index <= this.currentIndex ? `
            <!-- nextsong__fist-item-headding--active nextsong__fist-item-playbtn--active-->
            <div class="nextsong__fist-item nextsong__item nextsong__fist-item-playbtn--active ${audio.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    <div class="songs-item-left-img-playing-box">
                        <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                    </div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                    <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
                </div>
                <div class="nextsong__item-action">
                    <span class="nextsong__item-action-heart">
                        <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                        <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                    </span>
                    <span class="nextsong__item-action-dot">
                        <i class="fas fa-ellipsis-h "></i>
                    </span>
                </div>
            </div>` : ''
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER LIST NEXT SONG 
    renderNextSongList: function(playListElement) {
        if (this.currentIndex >= this.songsData.length - 1) {
            playListElement.innerHTML = `
            <span class="nextsong__last-item-end js__sub-color">
                Tớ đang thêm nhạc nè, cậu muốn nghe bài gì nào... Happy birthday.
            </span>`;
        } else {
            const htmls = this.songsData.map((song, index) => {
                return index > this.currentIndex ? `
                    <li class="nextsong__last-item nextsong__item" data-index="${index}">
                        <div class="nextsong__item-img" style="background-image: url(${song.background});">
                            <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                        </div>
                        <div class="nextsong__item-body">
                            <span class="nextsong__item-body-heading js__main-color">${song.name}</span>
                            <span class="nextsong__item-body-depsc js__sub-color">${song.singer}</span>
                        </div>
                        <div class="nextsong__item-action">
                            <span class="nextsong__item-action-heart">
                                <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                                <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                            </span>
                            <span class="nextsong__item-action-dot js__main-color">
                                <i class="fas fa-ellipsis-h "></i>
                            </span>
                        </div>
                    </li>` : ''
            })
            playListElement.innerHTML = htmls.join('');
        }
        
    },

    // RENDER LIST NEXT SONG RANDOM
    renderNextSongListRandom: function(playListElement) {
        const htmls =  `<span class="nextsong__option-random">
                            Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                        </span>`
        playListElement.innerHTML = htmls;
    },

    

    // KHI ACTIVE KHUẤT THÌ ĐƯA ITEM ACTIVE LÊN VIEW
    scrollToActiveSong: function () {
        setTimeout(() => {
          $(".songs-item--active").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 300);
    },

    // KHI ACTIVE KHUẤT THÌ ĐƯA NEXT SONG ITEM ACTIVE LÊN VIEW
    scrollToActiveNextSong: function () {
        // setTimeout(() => {
        //   $(".nextsong__fist-item-headding--active").scrollIntoView({
        //     behavior: "smooth",
        //     block: "nearest"
        //   });
        // }, 300);
    },

    RandomSong: function () {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.songsData.length);
        } while (newIndex === this.currentIndex);
    
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    loadCurrentSong: function () {
        nameSong.textContent = this.currentSong.name;
        $('.mobile-player__body-now-name').textContent = this.currentSong.name;
        nameSinger.textContent = this.currentSong.singer;
        $('.mobile-player__body-now-singer').textContent = this.currentSong.singer;
        $('.mobile-player__body-thumb').style.backgroundImage = `url('${this.currentSong.background}')`;
        $('.music-control__left-img').style.backgroundImage = `url('${this.currentSong.background}')`;
        this.displayDurationTime();
        audio.src = this.currentSong.pathSong;
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songsData.length) {
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.songsData.length - 1;
        }
        this.loadCurrentSong();
    },

    // ĐỊNH DẠNG LẠI THỜI GIAN CHO ĐẸP
    formatTime : function(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },

    // HIỂN THỊ REMAIN TIME TIME VÀO PLAYER
    displayRemainTime : function() {
        remainTime.textContent = this.formatTime(audio.currentTime);
        // on mobile
        $('.mobile-player__ctrl-progress-time-start').textContent = this.formatTime(audio.currentTime);
    },

    // HIỂN THỊ VÀ DURATION TIME VÀO PLAYER
    displayDurationTime : function() {
        // if (!audio.duration) {
        //     durationTime.textContent = "00:00";
        // } else {
        //     durationTime.textContent = this.formatTime(audio.duration);
        // }
        durationTime.textContent = this.currentSong.duration;
        $('.mobile-player__ctrl-progress-time-duration').textContent = this.currentSong.duration;
    },

    // render next song
    renderNexrSong: function() {
        this.renderNextSongHeadding(nextSongHeadding,this.songsData);
        this.renderNextSongList(nextSongList);
        themeItems[backgroundIndex].click();
    },

    verifyOptionTextColor: function() {
        $$('.music__option-item').forEach((tab, index) => {
            if(backgroundIndex === 0 || backgroundIndex === 1 || backgroundIndex === 2) {
                tab.style.color = '#fff'
            } else {
                tab.style.color = '#000'
            }
        })
    },

    // SỰ KIỆN VÀ XỬ LÝ
    handleEvents: function () {
        const _this = this;
        const songTyms = $$('.songs-item-right-tym');
        const songItems = $$('.js__song-item0');
        const nextSongsItem = $$('.nextsong__item');
        const playBtnIcons = $$('.js__songs-item-left-img-0');
        const playNextSongBtnIcons = $$('.nextsong__item-img');
        const songItemsOption1 = $$('.js__song-item1');
        const playBtnIconsOption1 = $$('.js__songs-item-left-img-1');
        const actionHeartNextSongs = $$('.nextsong__item-action-heart');
        const nextSongBox = $('.nextsong__box');

        var sliderIndex = 1;
        var sliderIndex1 = 1;
        var sliderLenght = _this.songsData.length;

        // KHI BẤM VÀO PLAYER ON MOBILE THÌ HIỆN PLAYER TO TRÊN ĐIỆN THOẠI
        $('.music-control__left').onclick = function() {
            $('.mobile-player').classList.add('active');
        }

        $('.mobile-player__headding-close').onclick = function() {
            $('.mobile-player').classList.remove('active');
        }

        // NHẤN MORE HIỂN THỊ 100 BÀI HÁT
        $('.js__zingchart__100more').onclick = function() {
            _this.renderZingChartMore();
            this.style.display = 'none';
        }

        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART
        sideBarTabs.forEach((tab, index) => {
            tab.onclick = function() {
                $('.js__sidebar-tabs.sidebar__item--active').classList.remove('sidebar__item--active');
                tab.classList.add('sidebar__item--active');
                containerPanes[0].style.display = "none";
                containerPanes[1].style.display = "none";
                containerPanes[2].style.display = "none";
                containerPanes[index].style.display = "block";
            }
        })

        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART TRÊN MOBILE
        $$('.js__mobile-tab__item').forEach((tab, index) => {
            tab.onclick = function() {
                $('.mobile-tab__item.active').classList.remove('active');
                tab.classList.add('active');
                containerPanes[0].style.display = "none";
                containerPanes[1].style.display = "none";
                containerPanes[2].style.display = "none";
                containerPanes[index].style.display = "block";
            }
        })

        // chuyển tab option
        tabs.forEach((tab, index) => {
            const pane = panes[index];
            $('.panes-item:not(.music__option-item--active)').style.backgroundColor = 'transparent';
            themeItems[backgroundIndex].click();
            _this.verifyOptionTextColor();
            tab.onclick = function() {
                $('.music__option-item.music__option-item--active').classList.remove('music__option-item--active');
                tab.classList.add('music__option-item--active')
                $('.panes-item.active').classList.remove('active');
                tabs[0].style.backgroundColor = 'transparent';
                tabs[1].style.backgroundColor = 'transparent';
                tabs[2].style.backgroundColor = 'transparent';
                tabs[3].style.backgroundColor = 'transparent';
                tab.style.backgroundColor = `var(--option-color-${backgroundIndex})`;
                pane.classList.add('active')
                // if (index === 1) {
                //     _this.renderPlayList1($('.option-music-list'),_this.songsData);
                // }
                $('.music__option-item.music__option-item--active').classList.remove('js__main-color');
            }
        })

        // khi mới mở web thì sẽ chọn hightlight dòng đầu tiên
        songItems[this.currentIndex].classList.add('songs-item-playbtn--active');

        
        songTyms.forEach((songTym, index) => {
            songTym.onclick = function() {
                songTym.classList.toggle('songs-item-right-tym--active');
            }
        });

        // CLICK TYM Ở NOW PLAYER
        musicNowTym.onclick = function() {
            this.classList.toggle('music-control__left-action-tym-box-active');
        }

        // BẬT TĂT MUTE Ở VOLUME
        volumeIcon.onclick = function() {
            _this.isMute = !_this.isMute;
            volumeIcon.classList.toggle('music-control__right--active', _this.isMute);
            if (_this.isMute) {
                audio.volume = 0;
                volumeProgress.value = 0;
            } else {
                audio.volume = _this.volume / 100;
                volumeProgress.value = _this.volume;
            }
        }

        // TĂNG GIẢM ÂM LƯỢNG
        volumeProgress.onchange = function(e) {
            _this.volume = e.target.value;
            audio.volume = e.target.value / 100;
            if (e.target.value == 0) {
                volumeIcon.classList.add('music-control__right--active')
                _this.isMute = true;
            } else {
                volumeIcon.classList.remove('music-control__right--active');
                _this.isMute = false;
            }
        }


        // XỬ LÝ CD QUAY/DỪNG
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        // XỬ LÝ CD QUAY/DỪNG TO TRÊN MOBILE
        const cdThumbAnimateMobile = $('.mobile-player__body-thumb').animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimateMobile.pause();

        //   LÀM SLIDER BÊN TAP CÁ NHÂN
        changeImage = function() {
            sliderItems.forEach((item,index) => {
                    // index == sliderIndex ? sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first') : index == sliderIndex + 1 ?  sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second'):sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-third');
                if (index == sliderIndex) {
                    sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first');
                    sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-first');
                } else if (index == sliderIndex + 1) {
                    sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                    sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                } else {
                    sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-third');
                    sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-third');
                }
                if (sliderIndex == sliderLenght - 1) {
                    sliderItems[0].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                    sliderItems[0].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                }
            })
            sliderIndex++;
            if (sliderIndex >=18) {
                sliderIndex = 0;
            }
        }
        setInterval(changeImage,2000);

        //   LÀM SLIDER BÊN TAP KHÁM PHÁ
        changeImage1Replate = function() {
            slidersDiscover.forEach((item,index) => {
                if (index == sliderIndex1) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-first');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-first');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-first');
                } else if (index == sliderIndex1 + 1) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
                } else if (index == sliderIndex1 + 2) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                } else {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-four');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-four');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-four');
                }
                if (sliderIndex1 == 2) {
                    slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                } else if (sliderIndex1 == 3) {
                    slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                }
            })
        }
        changeImage1 = function() {
            changeImage1Replate();
            sliderIndex1++;
            if (sliderIndex1 >= 4) {
                sliderIndex1 = 0;
            }
        }
        setInterval(changeImage1,5000);
        // khi bấm vào nut right của slider
        $('.js__container-discover__slider-right').onclick = function() {
            changeImage1();
        }
        // khi bấm vào nut left của slider
        $('.js__container-discover__slider-left').onclick = function() {
            changeImage1Replate();
            sliderIndex1--;
            if (sliderIndex1 < 0) {
                sliderIndex1 = 3;
            }
        }



        // XỬ LÝ KHI CLICK VÀO NÚT PLAY
        playBtn.onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        }

        // XỬ LÝ KHI CLICK VÀO NÚT PLAY ON MOBILE
        $('.js__mobile-player__ctrl-icon').onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        }

        // Khi song được play
        audio.onplay = function () {
            const nextSongsItemHeadding = $$('.nextsong__fist-item');

            _this.isPlaying = true;
            // player.classList.add("playing");
            cdThumbAnimate.play();
            cdThumbAnimateMobile.play();
            playBtn.classList.add('music-control__icon-play--active');
            $('.js__mobile-player__ctrl-icon').classList.add('music-control__icon-play--active');
            thunbPlayerBox.style.transform = "translateX(20px)";

            songItems[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            songItems[_this.currentIndex].classList.add('songs-item--active');            
            songItems[_this.currentIndex].classList.remove('songs-item-playbtn--active'); 

            songItemsOption1[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            songItemsOption1[_this.currentIndex].classList.add('songs-item--active');            
            songItemsOption1[_this.currentIndex].classList.remove('songs-item-playbtn--active'); 
            
            // songItemsOption1[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            
            const nextSongItems = $$('.nextsong__item')
            nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-headding--active');          
            nextSongItems[_this.currentIndex].classList.remove('nextsong__fist-item-playbtn--active');          
        };
  
        // KHI SONG BỊ PAUSE
        audio.onpause = function () {
            _this.isPlaying = false;
            cdThumbAnimate.pause();
            cdThumbAnimateMobile.pause();
            playBtn.classList.remove('music-control__icon-play--active');
            $('.js__mobile-player__ctrl-icon').classList.remove('music-control__icon-play--active');
            thunbPlayerBox.style.transform = "translateX(0)";
            songItems[_this.currentIndex].classList.remove('songs-item-playing--active-onplay');
            songItems[_this.currentIndex].classList.add('songs-item-playbtn--active');
            songItemsOption1[_this.currentIndex].classList.remove('songs-item-playing--active-onplay');
            songItemsOption1[_this.currentIndex].classList.add('songs-item-playbtn--active');
            const nextSongItems = $$('.nextsong__item')
            nextSongItems[_this.currentIndex].classList.remove('nextsong__fist-item-headding--active');
            nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-playbtn--active');          
        }

        // KHI TIẾN ĐỘ BÀI HÁT THAY ĐỔI
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent;
                // on mobile
                $('#progress2').value = progressPercent;
            }
            _this.displayRemainTime();
        }

        // KHI TUA SONG
        progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        }
        // KHI TUA SONG ON MOBILE
        $('#progress2').onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        }

        // XOÁ CÁC THUỘC TÍNH KHI ACTIVE CŨ
        deleteActive = function() {
            songItems.forEach((songItem, index) => {
                songItem.classList.remove('songs-item-playing--active-onplay');
                songItem.classList.remove('songs-item--active');
                songItem.classList.remove('songs-item-playbtn--active');
            });
        }

        deleteActive1 = function() {
            songItemsOption1.forEach((songItem, index) => {
                songItem.classList.remove('songs-item-playing--active-onplay');
                songItem.classList.remove('songs-item--active');
                songItem.classList.remove('songs-item-playbtn--active');
            });
        }


        // KHI NEXT SONG
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
            } else {
                _this.nextSong();
                _this.renderNexrSong();
            }
            audio.play();
            _this.scrollToActiveNextSong();
            _this.scrollToActiveSong();
            deleteActive();
            deleteActive1();
        }

        // KHI NEXT SONG ON MOBILE
        $('.js__mobile-player__ctrl-icon4').onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
            } else {
                _this.nextSong();
                _this.renderNexrSong();
            }
            audio.play();
            _this.scrollToActiveNextSong();
            _this.scrollToActiveSong();
            deleteActive();
            deleteActive1();
        }

        // KHI PREV SONG
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
                _this.scrollToActiveNextSong();
            } else {
                _this.prevSong();
                _this.renderNexrSong();
                _this.scrollToActiveNextSong();
            }
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
        }

        // KHI PREV SONG ON MOBILE
        $('.js__mobile-player__ctrl-icon2').onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
                _this.scrollToActiveNextSong();
            } else {
                _this.prevSong();
                _this.renderNexrSong();
                _this.scrollToActiveNextSong();
            }
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
        }

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-0
        playAllBtn.onclick = function() {
            _this.currentIndex = 0;
            _this.loadCurrentSong();
            audio.play();
            deleteActive();
            _this.scrollToActiveSong();
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
            } else {
                _this.renderNexrSong();
                // setTimeout(_this.scrollToActiveNextSong(), 2000);
                _this.scrollToActiveNextSong();
            }
        }

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-1
        playAllBtn1.onclick = function() {
            _this.currentIndex = 0;
            _this.loadCurrentSong();
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
            } else {
                _this.renderNexrSong();
                // setTimeout(_this.scrollToActiveNextSong(), 2000);
                _this.scrollToActiveNextSong();
            }
        }

        // KHI BẤM VÀO NÚT PLAY Ở THUMB BÀI BÁT Ở PHẦN TỔNG QUAN
        playBtnIcons.forEach((playBtnIcon, index) => {
            playBtnIcon.onclick = function() {
                if (_this.isPlaying && _this.currentIndex == index) {
                    audio.pause();
                } else if (!_this.isPlaying && _this.currentIndex == index) {
                    audio.play();
                } else if (_this.currentIndex != index) {
                    _this.currentIndex = index;
                    _this.loadCurrentSong();
                    audio.play();
                    deleteActive();
                    deleteActive1();
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
                if(_this.isRandom) {
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                    nextSongList.innerHTML = `
                        <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                        </span>`;
                } else if (!_this.isRandom && _this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = 'Muốn nghe bài gì nữa thì nhắn cho tớ nhé :3 Happy birthday.';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        });

        // KHI BẤM VÀO NÚT PLAY Ở THUMB BÀI BÁT Ở PHẦN MUSIC OPTION1
        playBtnIconsOption1.forEach((item, index) => {
            item.onclick = function() {
                if (_this.isPlaying && _this.currentIndex == index) {
                    audio.pause();
                } else if (!_this.isPlaying && _this.currentIndex == index) {
                    audio.play();
                } else if (_this.currentIndex != index) {
                    _this.currentIndex = index;
                    _this.loadCurrentSong();
                    audio.play();
                    deleteActive();
                    deleteActive1();
                    // _this.renderPlayList1($('.option-music-list'),_this.songsData);
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
                if(_this.isRandom) {
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                    nextSongList.innerHTML = `
                        <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                        </span>`;
                } else if (!_this.isRandom && _this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = 'Muốn nghe bài gì nữa thì nhắn cho tớ nhé :3 Happy birthday.';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        })

        // KHI CLICK VÀO NEXT SONG BOX
        nextSongBox.onclick = function (e) {
            const songNode = e.target.closest(".nextsong__item");
            if ( songNode) {
                if (e.target.closest(".nextsong__item-action-heart")) {
                    e.target.closest(".nextsong__item-action-heart").classList.toggle('nextsong__item-action-heart--unheart');   
                }
                if (e.target.closest(".nextsong__item-img")) {
                    if (_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                        audio.pause();
                        _this.isPlaying = false;
                        songNode.classList.remove('nextsong__fist-item-headding--active');
                    }else if (!_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                        audio.play();
                        _this.isPlaying = true;
                        songNode.classList.add('nextsong__fist-item-headding--active');
                        
                    }else if (Number(songNode.dataset.index) != _this.currentIndex) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong();
                        _this.renderNexrSong();
                        deleteActive();
                        _this.scrollToActiveSong();
                        audio.play();
                        _this.isPlaying = true;
                        const nextSongItems = $$('.nextsong__item')
                        nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-headding--active');
                    }  
                }
            }
        };

        // KHI CLICK DUP VÀO NEXT SONG BOX
        nextSongBox.ondblclick = function (e) {
            const songNode = e.target.closest(".nextsong__item:not(.nextsong__fist-item-headding--active)");
            if ( songNode) {
                if (_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                    audio.pause();
                    _this.isPlaying = false;
                    songNode.classList.remove('nextsong__fist-item-headding--active');
                }else if (!_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                    audio.play();
                    _this.isPlaying = true;
                    songNode.classList.add('nextsong__fist-item-headding--active');
                    
                }else if (Number(songNode.dataset.index) != _this.currentIndex) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.renderNexrSong();
                    deleteActive();
                    _this.scrollToActiveSong();
                    audio.play();
                    _this.isPlaying = true;
                    const nextSongItems = $$('.nextsong__item')
                    nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-headding--active');
                }  
            }
        };

        // KHI BẬT NÚT CHẠY RANDOM
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            if (_this.isRandom) {
                randomBtn.style.color = 'var(--primary-color)';
            } else {
                randomBtn.style.color = '#fff';
            }
            repeatBtn.classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
            } else {
                if (_this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = ' Tớ đang thêm nhạc nè, cậu muốn nghe bài gì nào... Happy birthday.';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        }

        // KHI BẬT NÚT CHẠY RANDOM ON MOBILE
        $('.js__mobile-player__ctrl-icon1').onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            $('.js__mobile-player__ctrl-icon1').classList.toggle("music-control__icon-random--active", _this.isRandom);
            if (_this.isRandom) {
                randomBtn.style.color = 'var(--primary-color)';
            } else {
                randomBtn.style.color = '#fff';
            }
            $('.js__mobile-player__ctrl-icon5').classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                    Bật chế độ random thì cần gì xem trước, cứ thế nghe thui ạ :)
                    </span>`;
            } else {
                if (_this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = ' Tớ đang thêm nhạc nè, cậu muốn nghe bài gì nào... Happy birthday.';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        }

        // KHI BẬT NÚT CHẠY REPEAT
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            // _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            repeatBtn.style.color = 'var(--primary-color)';
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            _this.renderNexrSong();
            _this.scrollToActiveNextSong();
        }

        // KHI BẬT NÚT CHẠY REPEAT ON MOBILE
        $('.js__mobile-player__ctrl-icon5').onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            // _this.setConfig("isRepeat", _this.isRepeat);
            $('.js__mobile-player__ctrl-icon5').classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            // $('.js__mobile-player__ctrl-icon5').style.color = 'var(--primary-color)';
            $('.js__mobile-player__ctrl-icon1').classList.toggle("music-control__icon-random--active", _this.isRandom);
            _this.renderNexrSong();
            _this.scrollToActiveNextSong();
        }

        // XỬ LÝ KHI AUDIO KẾT THÚC
        audio.onended = function () {
            if (_this.isRepeat) {
              audio.play();
            } else {
              nextBtn.click();
              _this.renderNexrSong();
              _this.scrollToActiveNextSong();
            }
        };

        // KHI CLICK DUP VÀO BÀI NHẠC THÌ PHÁT NHẠC
        songItems.forEach((songItem, index) => {
            songItem.ondblclick = function() {
                _this.currentIndex = index;
                _this.loadCurrentSong();
                deleteActive();
                deleteActive1();
                audio.play();

                if(_this.isRandom) {
                    // không render next song list
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
            
        })

        // KHI CLICK DUP VÀO BÀI NHẠC THÌ PHÁT NHẠC
        songItemsOption1.forEach((songItem, index) => {
            songItem.ondblclick = function() {
                _this.currentIndex = index;
                _this.loadCurrentSong();
                deleteActive();
                deleteActive1();
                audio.play();

                if(_this.isRandom) {
                    // không render next song list
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
            
        })

        // CUỘN LÊN THÌ LÀM TRONG THANH HEADER
        mainContainer.onscroll = function() {
            scrollTop = mainContainer.scrollY || mainContainer.scrollTop
            // if (scrollTop > 50) {
            //     header.classList.toggle('header--active');
            // }

            // làm cách này mà ko làm cách trên để tránh bị gật lag 
            if(scrollTop > 5) {
                Object.assign(header.style, {
                    backgroundColor: `var(--header-color-${backgroundIndex})`,
                    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                })
            } else {
                Object.assign(header.style, {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                })
            }
        };

        // KHI CLICK SETTING
        headerSetting.onclick = function(e) {
            headerSetting.classList.toggle('header__setting--active');
            headerOverlay.classList.remove('hiden');
            // headerSettingList.stopPropagation();
        }
        headerSettingList.onclick = function(e) {
            e.stopPropagation();
            headerOverlay.classList.add('hiden');
            headerSetting.classList.remove('header__setting--active');
        }
        headerOverlay.onclick = function() {
            headerSetting.classList.remove('header__setting--active');
            headerOverlay.classList.add('hiden');
        }

        // THEME MODAL
        themebtn.onclick = function() {
            themeModal.classList.toggle('theme-modal--avtive'); 
        }
        themeBody.onclick = function(e) {
            e.stopPropagation();
        }
        themeClosebtn.onclick = function() {
            themeModal.classList.remove('theme-modal--avtive'); 
        }
        themeOverlay.onclick = function() {
            themeModal.classList.remove('theme-modal--avtive'); 
        }

        // TOAST
        $$('.js__toast').forEach((item, index) => {
            item.onclick = function() {
                _this.toastSlide();
            }
        })
        
        
        
        

        
    },

    // QUAY NỐT NHẠC VỆ TINH
    // musicNote : function() {
    //     setInterval(function() {
    //         a = (a + Math.PI / 300) % (Math.PI * 2);
    //         var px = x + r * Math.cos(a);
    //         var py = y + r * Math.sin(a);
    //         document.querySelector('.vetinh-1').style.left = px + "px";
    //         document.querySelector('.vetinh-1').style.top = py + "px"; 
    //     })
    // },

    
        

    //=================================================================
    start: function() {
        // render ra danh sách nhạc ở phần tổng quan
        this.renderPlayList(optionAllSongList,this.songsData);
        // render ra danh sách nhạc ở phần tab music
        this.renderPlayList1($('.option-music-list'),this.songsData);
        // render next song
        this.renderNexrSong();
        // render next song start
        this.renderNextSongHeaddingStart(nextSongHeadding,this.songsData);
        // render zingchart
        this.renderZingChart();



        // Define các thuộc tính cho object
        this.defineProperties();

        // xử lý và sự kiện
        this.handleEvents(); 

        // hiển thị thời gian chạy và thời lượng của audio hiện tại
        this.displayDurationTime();

        // theme
        this.applyTheme();

        this.loadCurrentSong();

        // this.musicNote();
    }

}


const modalAdd = document.querySelector('#modalAdd');

const openModal = () => {
    modalAdd.style.display = 'flex';
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}

app.start();















