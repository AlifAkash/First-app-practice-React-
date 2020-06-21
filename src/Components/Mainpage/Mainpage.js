import React, { useState } from 'react';
import './Mainpage.css';
import Profile from '../Profile/Profile';
import Review from '../Review/Review';
import fakeData from '../../fakeData/fakeData';

const Mainpage = () => {
    const users = fakeData;
    const [profile, setProfile] = useState(users);
    const [review,setReview]=useState([]);

    const addButtonHandler = (profile) => {
        const newReview=[...review,profile];
        setReview(newReview);
    }

    return (
        <div className="main-container">
            <div className="profile-container">
                    {
                        profile.map(pf => <Profile 
                            addButtonHandler={addButtonHandler}
                            profile={pf}></Profile>)
                    }
            </div>
            <div className="review-container">
                <Review review={review}></Review>
            </div>
        </div>
    );
};

export default Mainpage;