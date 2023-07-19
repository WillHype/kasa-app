import React from "react";
import "./_index.scss";
 
function banner(props){
    return(
        <div className={props.classes.container}>
            <img className="banner__img" src={props.image} alt="paysage"/>
            {props.text && <h1 className="banner__txt">{props.text}</h1>}
        </div>
    )
}
export default banner;