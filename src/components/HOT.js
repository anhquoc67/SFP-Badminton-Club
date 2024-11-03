import React from 'react';
import '../Style/HOT.css'; // Importing CSS file for styling

const HOT = () => {
  const products = [
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1730439529/boctham_cgrtqz.jpg",
      name: "Ms. Nhung",
      price: "$100", // Giá sản phẩm
      description: "Đây là người may mắn đầu tiên bóc trúng giải đặt biệt.😁",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1730439529/boctham1_qwu6oy.jpg",
      name: "Mr. Nam",
      price: "$120", // Giá sản phẩm
      description: "Đây là người may mắn tiếp theo được giải đặc biệt tối đêm nay.😜",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1730439528/traigiai_jcvzvv.jpg",
      name: "Mr. Toản",
      price: "$80", // Giá sản phẩm
      description: "Trao giải muộn nhưng vẫn được trao giải nhé!👍",
    },
    {
      src: "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413593/bn8_v0kwk7.jpg",
      name: "Mrs. Trang",
      price: "$90", // Giá sản phẩm
      description: "Đây là BTC giải đấu 20/10/2024 cho mọi người trong Group. Người phụ nữ trưởng nhóm của Group!❤️",
    }
  ];

  return (
    <div className="HOT">
      <h2>Tiệc sau đấu giải & Minigame</h2>
      <hr />
      <div className="image-gallery">
        {products.map((product, index) => (
          <div key={index} className="image-item">
            <img src={product.src} alt={`HOT ${index + 1}`} className="img-fluid" />
            <div className="overlay"></div> {/* Thay đổi chữ thành "HOT" */}
            <p className="product-name">{product.name}</p> {/* Hiển thị tên nhân vật */}
            <p className="product-description">{product.description}</p> {/* Hiển thị giá sản phẩm */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HOT;
