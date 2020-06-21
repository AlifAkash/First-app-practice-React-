import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
    const {img,name,address,salary,occupation,hobby}= props.profile;
    return (
        <div className="profile">
            <div className="img-container">
                <img src={img} alt="" className="responsive" />
            </div>
            <div className="description-container">
                <h3>{name}</h3>
                <p>From: {address}</p>
                <br/>
                <p>Work as: {occupation}</p>
                <p><small>Makes per month: {salary}</small></p>
                <p><small>Hobby: {hobby}</small></p>
                <button className="add-button" 
                    onClick={()=>props.addButtonHandler(props.profile)}
                >
                    <FontAwesomeIcon icon={faPlus} /> add to list
                </button>
            </div>
        </div>
    );
};

export default Profile;