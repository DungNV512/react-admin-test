const data = [
    {
        cover: "http://baomoi-photo-2-td.zadn.vn/w720x480/17/07/06/61/22691593/3_275000.gif",
        lid: "news:5:1:b8126dbb4ce887f9070b8ffd7eb82dbd",
        count: 7,
        title: "CSGT nói về nghi vấn đuổi công nông khiến tài xế tử vong",
        url: "http://tinmoi24.vn/csgt-noi-ve-nghi-van-duoi-cong-nong-khien-tai-xe-tu-vong/news-5-1-b8126dbb4ce887f9070b8ffd7eb82dbd",
        postime: 1499331720000
    },
    {
        cover: "http://baomoi-photo-1-td.zadn.vn/w720x480/17/07/03/293/22663566/9_505970.png",
        lid: "news:5:10:56987c59e258a849d9301ec741dffb28",
        count: 6,
        title: "Cụ bà bị bỏ rơi trong trời mưa gió: 'Cháu tôi đưa đi bằng xe hơi và cho tôi 100.000 đồng'",
        url: "http://tinmoi24.vn/cu-ba-bi-bo-roi-trong-troi-mua-gio-chau-toi-dua-di-bang-xe-hoi-va-cho-toi-100000-dong/news-5-10-56987c59e258a849d9301ec741dffb28",
        postime: 1499043612000
    },
    {
        cover: "http://baomoi-photo-3-td.zadn.vn/w720x480/17/07/06/94/22691114/2_110508.jpg",
        lid: "news:5:8:60b1d23dbda7dc24f26b2f2ff477f65e",
        count: 5,
        title: "Nhiều chuyến bay ở Nội Bài bị chậm do nhân viên mặt đất 'ốm' đồng loạt",
        url: "http://tinmoi24.vn/nhieu-chuyen-bay-o-noi-bai-bi-cham-do-nhan-vien-mat-dat-om-dong-loat/news-5-8-60b1d23dbda7dc24f26b2f2ff477f65e",
        postime: 1499328441000
    },
    {
        cover: "http://sohanews.sohacdn.com/zoom/600_315/2017/hinh-1499316264673-134-0-347-405-crop-1499316273484.jpg",
        lid: "news:21:1:f3d481f30ccf7c9e1977d37dd40424b3",
        count: 4,
        title: "Sự thật thông tin tài xế xe công nông tử vong do bị CSGT truy đuổi ở Hà Nội",
        url: "http://tinmoi24.vn/su-that-thong-tin-tai-xe-xe-cong-nong-tu-vong-do-bi-csgt-truy-duoi-o-ha-noi/news-21-1-f3d481f30ccf7c9e1977d37dd40424b3",
        postime: 1499316840000
    },
    {
        cover: "http://images.tienphong.vn/Uploaded/tuoanh/2017_07_06/d1_QZXK.jpg",
        lid: "news:22:11:0f7a10df8b61b2eb0092b5729e8d3105",
        count: 3,
        title: "Khủng bố lên kế hoạch tấn công hóa học rồi đổ lỗi cho chính phủ Syria",
        url: "http://tinmoi24.vn/khung-bo-len-ke-hoach-tan-cong-hoa-hoc-roi-do-loi-cho-chinh-phu-syria/news-22-11-0f7a10df8b61b2eb0092b5729e8d3105",
        postime: 1499349658000
    },
    {
        cover: "http://img.f31.vnecdn.net/2017/07/06/taukhach-1499329962_500x300.jpg",
        lid: "news:1:1:e3f33fb788600b06fa1e7ca258dfb90b",
        count: 3,
        title: "Đường sắt sẽ có phòng VIP, suất ăn như máy bay",
        url: "http://tinmoi24.vn/duong-sat-se-co-phong-vip-suat-an-nhu-may-bay/news-1-1-e3f33fb788600b06fa1e7ca258dfb90b",
        postime: 1499332558000
    },
    {
        cover: "http://img.f27.kinhdoanh.vnecdn.net/2017/07/05/xang-Ngoc-Thanh-1661-1499242234_500x300.jpg",
        lid: "news:1:3:80e89aad59e5d1a0e14ec4ff59ed9f30",
        count: 3,
        title: "Giá xăng giảm từ 17h chiều nay",
        url: "http://tinmoi24.vn/gia-xang-giam-tu-17h-chieu-nay/news-1-3-80e89aad59e5d1a0e14ec4ff59ed9f30",
        postime: 1499248200000
    },
    {
        cover: "http://baomoi-photo-3-td.zadn.vn/w720x480/17/07/06/283/22687568/17_135138.jpg",
        lid: "news:5:7:42e43117a3f6f25f69eef2b203358384",
        count: 3,
        title: "Bị chê không bằng Phạm Hương, Hoa hậu Đỗ Mỹ Linh đáp trả?",
        url: "http://tinmoi24.vn/bi-che-khong-bang-pham-huong-hoa-hau-do-my-linh-dap-tra/news-5-7-42e43117a3f6f25f69eef2b203358384",
        postime: 1499304480000
    },
    {
        cover: "http://a8.vietbao.vn/images/vn888/hot/v2014/best_f14059d414-1-minh-beo-tuyen-sinh-3-ngoisao.vn-w534-h260.JPG.jpeg",
        lid: "news:70:7:5b7bf7e4bd6e1a65d73cfe49dd01bfd6",
        count: 2,
        title: "Minh Béo trơ trẽn đăng đàn tuyển thí sinh thi game show",
        url: "http://tinmoi24.vn/minh-beo-tro-tren-dang-dan-tuyen-thi-sinh-thi-game-show/news-70-7-5b7bf7e4bd6e1a65d73cfe49dd01bfd6",
        postime: 1499388000000
    },
    {
        cover: "http://img.f29.vnecdn.net/2017/07/06/hon-20-nguoi-mat-tich-khi-sang-2569-5986-1499344677_500x300.jpg",
        lid: "news:1:1:61117b696df6f83aad95bb881d5ea2a4",
        count: 2,
        title: "Hơn 20 người Việt thiệt mạng khi lao động chui ở Trung Quốc",
        url: "http://tinmoi24.vn/hon-20-nguoi-viet-thiet-mang-khi-lao-dong-chui-o-trung-quoc/news-1-1-61117b696df6f83aad95bb881d5ea2a4",
        postime: 1499345100000
    }
]