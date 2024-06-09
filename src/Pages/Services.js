import Dog2 from '../assets/images/estilist-dog.jpg';


const Services = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100'>
      <div className="card w-100 h-100" style={{backgroundColor:'#60CE94'}}>
        <div className="row g-0 h-100">
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title p-4 display-1" style={{color: '#2F4858'}}>Conoce nuestros servicios</h1>
                   <p className="card-text" style={{color: '#FFFFFF'}}>En Marvic priorizamos el bienestar <br />
                    de tu mascota con cariño y profesionalidad.<br />
                    Nuestro equipo crea un ambiente acogedor y seguro, <br />
                    ofreciendo atención personalizada y de alta calidad.<br />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={Dog2} class="img-fluid rounded-start h-100 w-100 " alt="imagen de una mascota" />
              </div>
          </div>
      </div>
    </div>
  );
}

export default Services
