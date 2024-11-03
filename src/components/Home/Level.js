import React from 'react';
import '../../Style/Level.css'; // Optional: For custom styling

const Level = () => {
    return (
        <div className="level-container">
            <h2 style={{ textAlign: 'center'}}>Bảng xếp hạng Trình độ</h2>
            
            <section className="level-section">
                <h2>Average</h2>
                <p>Chúng tôi là những người đánh lâu năm, click video.</p>
                <a href="https://www.youtube.com/watch?v=X1FT0IgQKo4" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://img.youtube.com/vi/X1FT0IgQKo4/hqdefault.jpg" 
                        alt="Average Video Thumbnail" 
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </a>
            </section>

            <section className="level-section">
                <h2>Below Average</h2>
                <p>Chúng tôi chơi cũng được vài năm, click video.</p>
                <a href="https://www.youtube.com/watch?v=XANZJtRduRw" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://img.youtube.com/vi/XANZJtRduRw/hqdefault.jpg" 
                        alt="Below Average Video Thumbnail" 
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </a>
            </section>

            <section className="level-section">
                <h2>Weak Plus</h2>
                <p>Chúng tôi đã chơi hơn một năm, click video.</p>
                <a href="https://www.youtube.com/watch?v=h0Hw7B5YGcw" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://img.youtube.com/vi/h0Hw7B5YGcw/hqdefault.jpg" 
                        alt="Weak Plus Video Thumbnail" 
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </a>
            </section>

            <section className="level-section">
                <h2>Weak</h2>
                <p>Chúng tôi mới bắt đầu chơi dưới một năm, click video.</p>
                <a href="https://www.youtube.com/watch?v=-VCuDB2bwKk" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://img.youtube.com/vi/-VCuDB2bwKk/hqdefault.jpg" 
                        alt="Weak Video Thumbnail" 
                        style={{ width: '100%', maxWidth: '300px' }}
                    />
                </a>
            </section>
        </div>
    );
};

export default Level;
