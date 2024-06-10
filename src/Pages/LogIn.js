import React from 'react';
import Logo from '../assets/images/marvic_logo.png';
import Footer from '../components/Footer';


const Login = () => {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">

              <div className="card" style={{ borderRadius: '1rem', backgroundColor: '#7895D6' }}>
                <div className="card-body p-4 text-center">

                  <div className="mb-md-3 mt-md-2 pb-3">
                  <img src={Logo} alt="Logo empresa" width="100" height="100" className="d-inline-block align-text-top" style={{borderRadius: '50px'}}/>


                    <h2 className="fw-bold mb-2 p-4" style={{ fontSize: '1.5rem' }}>Iniciar sesión</h2>

                    <div className="form-outline form-white mb-3">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-3">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    <p className="small mb-3 pb-lg-1"><a className="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

                    <button className="login-button" type="submit">Login</button>
                  </div>
                  <div>
                    <p className="mb-0">No tienes una cuenta? <a href="#!" className="text-white-50 fw-bold">crear una</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Login;
