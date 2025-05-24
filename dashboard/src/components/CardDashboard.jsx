import React from 'react';

function CardDashboard({ iconClass, title, value, bgColor }) {
  return (
    <div className="card text-white mb-4" style={{ backgroundColor: bgColor }}>
      <div className="card-body d-flex align-items-center">
        <i className={`${iconClass} fa-2x me-3`}></i>
        <div>
          <h5 className="card-title">{title}</h5>
          <h3 className="card-text">{value}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardDashboard;
