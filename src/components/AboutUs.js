function AboutUs() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center'}}> About Us</h1>
            <div className="row text-center my-5">
                <div className="col-md-4">
                    {/* Đảm bảo rằng đường dẫn tới hình ảnh là chính xác */}
                    <img 
                        src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729464169/ban2_ohlmhm.png" 
                        alt="Fan" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }} 
                    />
                </div>
                <div className="text-left col-md-8">
                    <h2>Giới Thiệu SFP Badminton-Club</h2>
                    <p>
                        Nhóm cầu lông được thành lập vào năm 2019, luôn tìm kiếm những cá nhân đam mê môn thể thao này. Đây cũng là sân chơi lành mạnh cho mọi lứa tuổi. Lợi ích của việc chơi cầu lông bao gồm cải thiện sức khỏe, tăng cường sự nhanh nhẹn về tinh thần và rèn luyện phản xạ cho người chơi trong bộ môn này.
                    </p>
                </div>
            </div>

            {/* Đảm bảo cấu trúc HTML hợp lệ */}
            <hr />

            <div className="row my-5">
                <div className="col-md-6">
                    <h2>Khai mac giải đấu</h2>
                    <p>
                        BTC xin thông báo tới các lông thủ trong group, hôm nay là ngày khai mạc giải cầu lông tháng 10.SFP thường xuyên tổ chức các buổi tập luyện, thi đấu nội bộ và giao hữu với các nhóm cầu lông khác. Với phương châm "Chơi vì sức khỏe, chơi vì đam mê", SFP không chỉ là nơi để nâng cao kỹ năng mà còn là không gian để xây dựng tình bạn và gắn kết giữa các thành viên.
                    </p>
                </div>
                <div className="col-md-6">
                    {/* Add the image here */}
                    <img 
                        src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729464169/ban3_khobxv.png" // Replace with the correct path
                        alt="Our Fan Design" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover', width: 'auto' }} 
                    />
                </div>
            </div>

            <hr />

            <div className="row text-center my-5">
                <div className="col-md-4">
                    <h2>Lịch sử SFP Badminton-Club</h2>
                    <p>
                    SFP Badminton-Club là một nhóm cầu lông đầy nhiệt huyết và gắn kết, tập hợp những người yêu thích cầu lông từ các cấp độ kỹ năng khác nhau. Nhóm được thành lập với mong muốn tạo ra một cộng đồng vui vẻ, nơi các thành viên có thể rèn luyện sức khỏe, giao lưu và chia sẻ niềm đam mê với bộ môn thể thao này.
                    </p>
                </div>
                <div className="col-md-6">
                    {/* Add the image here */}
                    <img 
                        src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729592825/khaimac_obi6ee.jpg" // Replace with the correct path
                        alt="Our Fan Design" 
                        className="img-fluid rounded" 
                        style={{ maxHeight: '300px', objectFit: 'cover', width: 'auto' }} 
                    />
                </div>
            </div>
            <hr />

            <div className="row text-left my-5">
                <div className="col-md-12">
                    <h2 className="text-center">Meet Our Team</h2>
                    <p>
                        Our team is the heart of the organization, bringing together diverse talents and expertise to drive innovation and excellence in air circulation solutions. These elite members consistently provide various solutions that meet customer needs.
                        <ol>
                            <li>Nguyen Anh Quoc</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
