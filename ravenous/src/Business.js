import React from 'react';
import './Business.css';
import defaultBusiness from './Data';

function Business(props){
    return (
        <div className="Business">
            <img src={props.imageSrc} alt=''/>
            <h2>{props.name}</h2>
            <div className="Business-information">
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p>{`${props.state} ${props.zipcode}`}</p>
            </div>
            <div className="Business-reviews">
                <h3>{props.category}</h3>
                <p className="rating">{props.rating} stars</p>
                <p>{props.reviewCount} reviews</p>
            </div>
        </div>
    );
}

export default Business;