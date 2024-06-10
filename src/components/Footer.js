const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h5 className="text-light">Redes Sociales</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/Veterinariamarvic/">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="text-light">Dirección</h5>
                        <p className="text-light">Santos Degollado, Revolución &, Francisco Villa, 30740 Tapachula de Córdova y Ordóñez, Chis.</p>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="text-light">Desarrollado por brandbold</h5>
                        <p className="text-light">brandbold</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
