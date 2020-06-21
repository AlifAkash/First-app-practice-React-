import React from 'react';
import './Review.css';

const Review = (props) => {
    const review = props.review;
    console.log(review);
    let total=0;
    for (let i = 0; i < review.length; i++) {
        const profile = review[i];
        total= total + profile.salary;
    }
    
    return (
        <div>
            <h2 className="first-line">Your Summary</h2>
            <p>Added: {review.length}</p>
            <p>Your friend's total salary: {total}</p>
        </div>
    );
};

export default Review;