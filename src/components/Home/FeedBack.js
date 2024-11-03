import React from 'react';
import feedbacks from  '../../json/FeedBack.json'


function FeedBack() {
    const url = process.env.PUBLIC_URL;
    console.log (url);
    return (
        <div className="container text-center my-5">
            <h2 className="mb-4">Đánh giá của người tham gia</h2>
            <p className="text-black mt-3">Chúng tôi đã tham gia nhóm được một thời gian và hoạt động cùng nhóm có nhiều điều hữu ích. Về sức khỏe được nâng cao và về lối đánh cầu cũng được cải thiện tốt hơn.</p>
            <hr className="w-25 mx-auto" />
            <div className="row" id='feedback'>
                {
                    feedbacks.map((feedback) => (
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-lg border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <img 
                                            src={feedback.avatarUrl} 
                                            alt={feedback.name} 
                                            className="rounded-circle me-3" 
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                        />
                                        <div>
                                            <h5 className="card-title mb-0">{feedback.name}</h5>
                                            <p className="text-muted mb-0">Rating: {feedback.rating} ⭐</p>
                                        </div>
                                    </div>
                                    <p className="card-text text-start">"{feedback.complaint}"</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FeedBack;
