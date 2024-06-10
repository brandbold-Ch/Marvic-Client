import Dog2 from '../assets/images/OIG2.jpeg';
import { title, info } from '../assets/globalStylesPages';


const Services = () => {
  return (
    <section id="services">
      <div className="card w-100 h-100" style={{ backgroundColor: '#8D529F' }}>
        <div className="row h-100">
          <div className="col-md-6 p-5 mb-4">
            <div className="card-body">
              <h1 className="card-title p-5 display-1" style={{...title }}>Clínica veterinaria Marvic</h1>
              <p className="card-text" style={{...info }}>Somos Marvic, un equipo de veterinarios apasionados por el bienestar de las mascotas.<br />
                Cada día trabajamos con dedicación para asegurar su salud y felicidad.
                Nos esforzamos <br/> para crear relaciones de confianza con los dueños, brindando apoyo constante y atención personalizada.<br />
                En MARVIC, nuestra vocación es cuidar de las mascotas y mejorar sus vidas,<br/> haciendo que cada momento cuente para ellos y sus familias.
              </p>
            </div>
            </div>
            <div className="col-md-6">
              <img src={Dog2} className="img-fluid rounded h-100 w-100" alt="imagen de una mascota" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
