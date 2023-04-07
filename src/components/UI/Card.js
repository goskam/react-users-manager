import React from 'react';
import './Card.css';

const Card = (props) => {

    const classes = 'card ' + props.className;


    //could be
    //return (
    //    <div className={`card ${props.className}`}>{props.children}</div>
    //    )

    return (
        <>
        <div className={classes}>{props.children}</div>
        </>
    )
        
    

};

export default Card;