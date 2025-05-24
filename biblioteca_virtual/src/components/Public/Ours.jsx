import React from 'react'

export default function Ours() {
  
  return (
    <div className="w3-container w3-padding-64" id="about-us">

      <h2 className="w3-center w3-text-red"><i className="fa fa-info-circle w3-margin-right"></i> Acerca de Nosotros</h2>
      
      <div className="w3-content w3-margin-top" style={{ maxWidth: "800px" }}>
        <p className="w3-large w3-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="w3-large w3-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <h3 className="w3-center w3-text-red w3-margin-top">Conoce a nuestro equipo</h3>
      
      <div className="w3-row-padding w3-center w3-margin-top" style={{ maxWidth: "900px", margin: "auto" }}>
        
        <div className="w3-third">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Ana Pérez" 
            className="w3-circle" 
            style={{width:"140px"}} 
          />
          <h4 className="w3-margin-top">Ana Pérez</h4>
          <p>Fundadora & CEO</p>
        </div>

        <div className="w3-third">
          <img 
            src="https://randomuser.me/api/portraits/men/34.jpg" 
            alt="Carlos Méndez" 
            className="w3-circle" 
            style={{width:"140px"}} 
          />
          <h4 className="w3-margin-top">Carlos Méndez</h4>
          <p>Editor Jefe</p>
        </div>

        <div className="w3-third">
          <img 
            src="https://randomuser.me/api/portraits/women/65.jpg" 
            alt="Lucía Gómez" 
            className="w3-circle" 
            style={{width:"140px"}} 
          />
          <h4 className="w3-margin-top">Lucía Gómez</h4>
          <p>Curadora de Contenidos</p>
        </div>
      </div>

    </div>
  )
}
