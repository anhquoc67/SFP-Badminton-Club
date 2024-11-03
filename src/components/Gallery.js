import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../json/Gallery.json'; // Adjust the path to the actual location of your JSON file
import '../App.css'; // Make sure to import the CSS file

function Gallery() {
    return (
        <div>
            {/* Videos using iframe for YouTube Shorts */}
            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1730440571/event5_kjqkwd.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1730440555/event_fjpftl.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1730440554/event3_ewxy1b.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://res.cloudinary.com/duj4e3i6z/video/upload/v1730440554/event1_uarlu2.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            {/* Image Gallery */}
            {images.map((image, index) => (
                <img
                    key={index}
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}

export default Gallery;
