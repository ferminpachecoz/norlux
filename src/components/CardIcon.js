import React from 'react';
import "./CardIcon.scss";

export default function CardIcon({lightIcon, darkIcon, title, subtitle, description}) {
  return (
    <div className='card-icon'>
      <div className='icon-container'>
        <img className="icon icon--dark"  src={`/icons/${darkIcon}`}  alt={title} />
        <img className="icon icon--light" src={`/icons/${lightIcon}`} alt={title} />
      </div>
      <p className='title'>{title}</p>
      <p className='subtitle'>{subtitle}</p>
      <p className='description'>{description}</p>
      <div className="pbar">
        <div className="pbar__fill" />
      </div>
    </div>
  )
}
