import React from 'react';
import faqs from '../../FAQs';
import "./Filtros.scss";
import Separador from '../Separador';

export default function Filtros({selected, onSelect, icons = {}}) {

  const entries = Object.entries(faqs);
  const activeClass = (val) => selected === val ? 'btn-filter active text-nowrap' : 'btn-filter text-nowrap';

  return (
    <div className='filtros-faqs'>
      <h1 className='section-title mb-4'>Filtrar por <b>categoría</b></h1>
      <Separador width="100px" color="--color-3" />
      <div className='d-flex justify-content-center my-4 flex-wrap'>
          <button
            className={activeClass('all')}
            onClick={() => onSelect('all')}
            type="button"
            aria-pressed={selected === 'all'}
          >
          <i className="bi bi-collection me-2" />
          Todas las categorías
        </button>
          {entries.map(([key, val]) => (
            <button
              key={key}
              className={activeClass(key)}
              onClick={() => onSelect(key)}
              type="button"
              aria-pressed={selected === key}
            >
              <i className={`${icons[key] ?? 'bi bi-list'} me-2`} />
              {val.name}
            </button>
          ))}
      </div>
    </div>
  )
}
