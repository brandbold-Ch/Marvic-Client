import DOG from '../assets/images/puppy.jpg'
import Layout from "../components/Layout"


const Index = () => {
  return (
    <>
      <Layout>
        <div className='container-fluid d-flex justify-content-center align-items-center vh-100'>
          <div className="card w-100 h-100" style={{backgroundColor:'#02A7A1'}}>
            <div className="row g-0 h-100">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title p-4">Clinica veterinaria MARVIC</h5>
                  <p className="card-text">Somos Marvic, un equipo de veterinarios apasionados por el bienestar de las mascotas.<br />
                    Cada día trabajamos con dedicación para asegurar su salud y felicidad.<br />
                    Nos esforzamos para crear relaciones de confianza con los dueños, brindando apoyo constante y atención personalizada.<br />
                    En MARVIC, nuestra vocación es cuidar de las mascotas y mejorar sus vidas, haciendo que cada momento cuente para ellos y sus familias.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={DOG} class="img-fluid rounded-start h-100 w-100 " alt="imagen de una mascota" />
              </div>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
