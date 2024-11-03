import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const date = new Date().toLocaleDateString();
        setCurrentDate(date);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row text-left">
                    {/* Column 1: Logo and Company Info */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <Link to="/" className="navbar-brand">
                            <img
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729433981/logo1_tmdtl6.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxWidth: '150px', height: 'auto', borderRadius: '10px' }}
                            />
                        </Link>
                        <p className="text-white mt-3">SFP Badminton-Club</p>
                        <p className="text-white mt-3">Địa chỉ: 158 Hoàng Hoa Thám, phường 12, Tân Bình, HCM</p>
                        <p className="text-white mt-3">Email: SFPBadmintonClub@gmail.com</p>
                        <p className="text-white mt-3">Điện thoại: (+84) 904440810 (Mrs.Trang)</p>
                    </div>

                    {/* Column 2: About Us */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">About Us</h5>
                        <p className="text-white mt-3">
                            Nhóm cầu lông được thành lập vào năm 2019, luôn tìm kiếm những cá nhân đam mê môn thể thao này.
                            Đây cũng là sân chơi lành mạnh cho mọi lứa tuổi. Lợi ích của việc chơi cầu lông bao gồm cải thiện sức khỏe,
                            tăng cường sự nhanh nhẹn về tinh thần và rèn luyện phản xạ cho người chơi trong bộ môn này.
                        </p>
                    </div>

                    {/* Column 3: Our Location */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">Our Location</h5>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7055959396144!2d106.66529537475866!3d10.83366639228116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930b8f66d75%3A0x3e0b8f14a184d487!2s158%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m%2C%20Ph%C6%B0%E1%BB%9Dng%2012%2C%20T%C3%A2n%20B%C3%ACnh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1632104062439!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>

                    <div className="row text-left mt-4">
                        <div className="col-lg-4 col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold mb-3">SFP Badmonton-Club</h5>
                            <p className="text-white mt-3">Address: Hoang Hoa Tham Str, Ward 12, District Tan Binh</p>
                            <p className="text-white mt-3">Copyright 2024 - Anh Quoc Nguyen - Badminton Club</p>
                        </div>
                    </div>

                    {/* Column 3: Current Date and Time */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold mb-3">Today</h5>
                        <p className="text-white mt-3">
                            {currentDate} - {currentTime}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
