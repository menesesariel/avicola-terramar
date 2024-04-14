import { Typography, Grid, Link } from "@mui/material";

const ContactDetails = () => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <Typography>
        Si desea ponerse en contacto con nosotros, puede hacerlo a través de los
        siguientes medios:
      </Typography>
    </Grid>
    <Grid item>
      <Typography>
        <strong>Teléfono:</strong>
      </Typography>
      <Typography>(506) 8843-2960 / (506) 2430 3800</Typography>
    </Grid>
    <Grid item>
      <Typography>
        <strong>Correo electrónico:</strong>
      </Typography>
      <Typography>avicolaterramar@gmail.com</Typography>
    </Grid>
    <Grid item>
      <Typography>
        <strong>Dirección:</strong>
      </Typography>
      <Typography>La Ribera de Belén, Heredia</Typography>
    </Grid>
    <Grid item>
      <Typography>
        Para cualquier consulta o solicitud de pedido, puede comunicarse con
        nuestro representante de ventas.
      </Typography>
    </Grid>
    <Grid item>
      <Link
        href="https://wa.me/50688432960"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 2 }} // Using Material-UI's sx prop for styling
      >
        Contact via WhatsApp
      </Link>
    </Grid>
  </Grid>
);

export default ContactDetails;
