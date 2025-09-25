import React from 'react';
import "./ImageCard.scss";

export default function ImageCard({width, image, title, category, link}) {
  return (
    <div className={`col-lg-${width} col-12 image-card`}>
      <div style={{position: "relative"}}>
        <a href={link?link:"#"}>
          <img src={image} alt="" />
          <div className='overlay'>
            {/* <p className='category'>{category}</p> */}
            <h1 className='title'>{title}</h1>
          </div>
        </a>
      </div>
    </div>
  )
}
