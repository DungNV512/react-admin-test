const data= [
    {
        cover: "http://baomoi-photo-3-td.zadn.vn/w720x480/17/07/06/301/22687610/1_113292.jpg",
        lid: "news:5:5:821b7db6cc0ddb21ed286fa2bf3511a4",
        count: 23528,
        title: "28 tỉnh, thành công bố điểm thi THPT quốc gia",
        url: "http://tinmoi24.vn/28-tinh-thanh-cong-bo-diem-thi-thpt-quoc-gia/news-5-5-821b7db6cc0ddb21ed286fa2bf3511a4",
        postime: 1499304120000
    },
    {
        lid: "invalid",
        count: 21045
    },
    {
        cover: "http://sohanews.sohacdn.com/zoom/600_315/2017/104484435-rtx36z7n-1910x1000-1499267148424-0-0-999-1899-crop-1499267166636.jpg",
        lid: "news:21:3:9a14b4952cf726bbe06972f1eedaff51",
        count: 15007,
        title: "Ông Trump rơi vào tình cảnh "trớ trêu" khi Triều Tiên bất ngờ tuyên bố thử thành công ICBM",
        url: "http://tinmoi24.vn/ong-trump-roi-vao-tinh-canh-tro-treu-khi-trieu-tien-bat-ngo-tuyen-bo-thu-thanh-cong-icbm/news-21-3-9a14b4952cf726bbe06972f1eedaff51",
        postime: 1499301361000
    },
    {
        cover: "http://sohanews.sohacdn.com/zoom/600_315/2017/hinh-1499316264673-134-0-347-405-crop-1499316273484.jpg",
        lid: "news:21:1:f3d481f30ccf7c9e1977d37dd40424b3",
        count: 11170,
        title: "Sự thật thông tin tài xế xe công nông tử vong do bị CSGT truy đuổi ở Hà Nội",
        url: "http://tinmoi24.vn/su-that-thong-tin-tai-xe-xe-cong-nong-tu-vong-do-bi-csgt-truy-duoi-o-ha-noi/news-21-1-f3d481f30ccf7c9e1977d37dd40424b3",
        postime: 1499316840000
    },
    {
        cover: "http://static.new.tuoitre.vn/tto/i/s490/2017/07/06/anh-1-1499339111.jpg",
        lid: "news:31:3:9c51f6f7128bdbd2cc3f4ebb8210a20c",
        count: 11154,
        title: "Gần 100 cảnh sát ập vô sới bạc trực tuyến ở TP.HCM",
        url: "http://tinmoi24.vn/gan-100-canh-sat-ap-vo-soi-bac-truc-tuyen-o-tphcm/news-31-3-9c51f6f7128bdbd2cc3f4ebb8210a20c",
        postime: 1499340240000
    },
    {
        cover: "http://img.f29.vnecdn.net/2017/07/06/hon-20-nguoi-mat-tich-khi-sang-2569-5986-1499344677_500x300.jpg",
        lid: "news:1:1:61117b696df6f83aad95bb881d5ea2a4",
        count: 9573,
        title: "Hơn 20 người Việt thiệt mạng khi lao động chui ở Trung Quốc",
        url: "http://tinmoi24.vn/hon-20-nguoi-viet-thiet-mang-khi-lao-dong-chui-o-trung-quoc/news-1-1-61117b696df6f83aad95bb881d5ea2a4",
        postime: 1499345100000
    },
    {
        cover: "http://sohanews.sohacdn.com/zoom/600_315/2017/anh5-1499312788045-55-0-401-660-crop-1499312802633.jpg",
        lid: "news:21:1:91c32ac8036403c886227b685f27c6ff",
        count: 9402,
        title: "Bác sĩ bệnh viện đa khoa Hòa Bình rơi nước mắt khi biết tin bác sĩ Lương được tại ngoại",
        url: "http://tinmoi24.vn/bac-si-benh-vien-da-khoa-hoa-binh-roi-nuoc-mat-khi-biet-tin-bac-si-luong-duoc-tai-ngoai/news-21-1-91c32ac8036403c886227b685f27c6ff",
        postime: 1499316660000
    },
    {
        cover: "http://img.f30.vnecdn.net/2017/07/05/65062-1499248987_500x300.jpg",
        lid: "news:1:2:bb37e2df0544e40a2c8df732c88a9742",
        count: 8207,
        title: "Làm việc tới chết ở Hàn Quốc",
        url: "http://tinmoi24.vn/lam-viec-toi-chet-o-han-quoc/news-1-2-bb37e2df0544e40a2c8df732c88a9742",
        postime: 1499318225000
    },
    {
        cover: "http://baomoi-photo-3-td.zadn.vn/w720x480/17/07/06/94/22691114/2_110508.jpg",
        lid: "news:5:8:60b1d23dbda7dc24f26b2f2ff477f65e",
        count: 7643,
        title: "Nhiều chuyến bay ở Nội Bài bị chậm do nhân viên mặt đất 'ốm' đồng loạt",
        url: "http://tinmoi24.vn/nhieu-chuyen-bay-o-noi-bai-bi-cham-do-nhan-vien-mat-dat-om-dong-loat/news-5-8-60b1d23dbda7dc24f26b2f2ff477f65e",
        postime: 1499328441000
    },
    {
        cover: "http://media.tiin.vn//archive/imageslead/278/201707/20170706/thumb4_022903361671179.png",
        lid: "news:27:4:547ce969a570ad58eafe9f42361e45d8",
        count: 6279,
        title: "Nữ sinh 27,25 điểm vẫn trượt, năm 2 phải bỏ thi, năm 3 'phục thù' với 28,75 khối C",
        url: "http://tinmoi24.vn/nu-sinh-2725-diem-van-truot-nam-2-phai-bo-thi-nam-3-phuc-thu-voi-2875-khoi-c/news-27-4-547ce969a570ad58eafe9f42361e45d8",
        postime: 1499343360000
    }
]