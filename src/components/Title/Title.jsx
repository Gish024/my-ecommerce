import React from "react";
import './Title.css';

export const Title = (props) => {
    return (
        <h1>{props.greeting}</h1>
    );
}

export default Title;