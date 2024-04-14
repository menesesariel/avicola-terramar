import {
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import ContactDetails from "./components/ContactUs";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#333", // Adjust AppBar color to fit the dark theme better
        },
      },
    },
  },
});

const App = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionContent = {
    home: {
      title: "Bienvenidos a Avicola Terramar",
      text: "Nos enorgullece ofrecer productos de alta calidad y frescura para su hogar. En Avícola Terramar, nos tomamos muy en serio la seguridad alimentaria y cumplimos con las pautas mundiales de cuidado de datos personales para garantizar la privacidad y la confidencialidad de sus datos.",
      img: "/avicola.jpeg",
    },
    "about-us": {
      title: "Sobre Nosotros",
      text: "En Avícola Terramar, nos enorgullecemos de proveer carne de pollo fresca y huevos de calidad que cumplen con los más altos estándares de inocuidad y calidad. Nuestro equipo humano se encuentra debidamente capacitado en temas de manipulación de alimentos e inocuidad alimentaria, y hemos implementado diferentes procedimientos que aseguran la inocuidad y calidad del producto que ofrecemos.",
      img: "/about-us.jpeg",
    },
    "contact-us": {
      title: "Contáctenos",
      text: "Si desea ponerse en contacto con nosotros, puede hacerlo a través de los siguientes medios: Teléfono: (506) 8843-2960 / (506) 2430 3800 Correo electrónico: avicolaterramar@gmail.com Dirección: La Ribera de Belén, Heredia Para cualquier consulta o solicitud de pedido, puede comunicarse con nuestro representante de ventas.",
      contact: "https://wa.me/50688432960", // WhatsApp contact link
    },
  } as any;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <img
            src="/logoAT.png" // Assuming the logo is in the public folder
            alt="Avícola Terramar"
            style={{ marginRight: "20px", height: "64px" }} // Example styling, adjust as needed
          />
          {Object.keys(sectionContent).map((key, index) => (
            <Button
              color="inherit"
              key={key}
              onClick={() => scrollToSection(key)}
            >
              {index === 0 ? "Inicio" : sectionContent[key as any].title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          width: "100%",
          pt: "64px",
          minHeight: "100vh",
          background: "linear-gradient(45deg, #333 30%, #999 90%)", // Modern dark gradient background
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          {Object.entries(sectionContent).map(([key, value]: any, index) => (
            <Container
              key={key}
              id={key}
              sx={{
                minHeight: `calc(${index == 2 ? 90 : 100}vh - ${80}px)`,
                display: "flex",

                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                elevation={6}
                sx={{
                  m: 10,
                  p: 2,
                  flexGrow: 1,
                  maxWidth: 700,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "background.paper",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {value.title}
                </Typography>
                {key === "contact-us" ? (
                  <ContactDetails />
                ) : (
                  <Typography>{value.text}</Typography>
                )}

                {value.img && (
                  <Box
                    sx={{
                      width: "90%", // Width of the image container
                      height: "auto", // Height should be auto to maintain the aspect ratio of the image
                      pt: 3,
                      display: "flex",
                      justifyContent: "center", // Centers content horizontally
                      alignItems: "center", // Centers content vertically
                      overflow: "hidden", // Prevents overflow of content
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "100%", // Limits the image size to the container's width
                        maxHeight: "100%", // Limits the image size to the container's height
                        display: "block", // Ensures that the img is a block-level element for margin auto to work
                        margin: "auto", // Applies automatic margin to center the image within the Box
                      }}
                      src={value.img}
                      alt="Avicola Terramar"
                    />
                  </Box>
                )}
              </Paper>
            </Container>
          ))}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
