import React from "react";


const PhotoCard = (props) => {
    return (
    <div className="photo-card">
        <h1 className="display-3">{props.title}</h1>
        <h2>Date: {props.date}</h2>
        <p>By: {props.copyright}</p>
        <hr className="my-2" />
        <p>{props.explanation}</p>
        <img src={props.photo}/>
     
    </div>
    )
}

export default PhotoCard;