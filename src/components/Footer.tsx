import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      width: "100%",
      bgcolor: "background.paper",
      color: "grey.500",
      p: 3,
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      © 2023 AvicolaTerramar SA. Todos los derechos reservados.
    </Typography>
    <Typography variant="body2">
      <Typography variant="body2">
        <a
          href="/privacy-document.pdf"
          download="Aviso_de_Privacidad_AvicolaTerramar"
        >
          Aviso de privacidad
        </a>
      </Typography>
    </Typography>
  </Box>
);

export default Footer;
