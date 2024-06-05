import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import dogImage from '../assets/images/puppy-3979350_640.jpg'; // Asegúrate de tener la imagen en la ruta correcta
import '../assets/styles/Main.css';

const Main = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={4} className="landing-page-root">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Clínica Veterinaria Marvic
            </Typography>
            <Typography variant="body1" paragraph>
              Somos Marvic, un equipo de veterinarios apasionados por el bienestar de las mascotas.
              Cada día trabajamos con dedicación para asegurar su salud y felicidad.
            </Typography>
            <Typography variant="body1" paragraph>
              Nos esforzamos por crear relaciones de confianza con los dueños, brindando apoyo constante y atención personalizada.
            </Typography>
            <Typography variant="body1" paragraph>
              En Marvic, nuestra vocación es cuidar de las mascotas y mejorar sus vidas, haciendo que cada momento cuente para ellos y sus familias.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={dogImage} alt="Dog" className="landing-page-image" />
          </Grid>
        </Grid>
      </Container>
      <Box className="landing-page-footer">
        <Typography variant="body2">
          © 2024 Marvic Veterinaria. Todos los derechos reservados.
        </Typography>
      </Box>
    </>
  );
};

export default Main;
