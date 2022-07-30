import React from "react";
import star from '../images/star.png'

export default function Card(props){
    console.log(props.id)
   let badgeText
   if(props.openSpots=== 0){
       badgeText = 'SOLD OUT'
   }else if(props.location  === 'Online'){
       badgeText = 'ONLINE'
   }
    return(
        
        <div className="card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray-part">
                    <span className="gray"> ({props.ratingNumber}) • </span>
                    <span className="gray">{props.location}</span>
                </span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
      
    )
}

