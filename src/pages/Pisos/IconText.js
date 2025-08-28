import React from 'react';
import "./IconText.scss";

export default function IconText({array, gutter, cols, imgSize}) {
  return (
    <div className={`icon-text row ${cols?"row-cols-"+cols:"row-cols-3"} ${gutter?"g-"+gutter: "g-5"}`}>
      {
        array.map((item, index)=>(
          <div className='col' key={index} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <img src={`/Decks/icons/${item.image}`} alt={item.text} style={{width: imgSize?imgSize: "100%"}} />
            <p>{item.text}</p>
          </div>
        ))
      }
    </div>
  )
}
