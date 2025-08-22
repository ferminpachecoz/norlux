import React from 'react';
import "./Acordion.scss";

export default function Acordion({icon, title, array, accordionId}) {
  return (
    <div className='acordion'>
      <div className='d-flex align-items-center mb-4'>
        <span className='icon-container'>
          <i className={icon}></i>
        </span>
        <h2>{title}</h2>
      </div>
      <div className='accordion' id={accordionId}>
        {
          array.map((item,index)=>{
            const headingId = `${accordionId}-heading-${index}`;
            const collapseId = `${accordionId}-collapse-${index}`;
            return (
            <div className="accordion-item" key={item.id ?? index}>
              <h2 className="accordion-header" id={headingId}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                  {item.pregunta}
                </button>
              </h2>
              <div 
                id={collapseId}
                className="accordion-collapse collapse" 
                aria-labelledby={headingId}
                data-bs-parent={`#${accordionId}`}
              >
                <div className="accordion-body">
                  {item.respuesta}
                </div>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
