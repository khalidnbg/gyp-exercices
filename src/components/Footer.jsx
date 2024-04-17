import { Box, Stack, Typography, IconButton } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import { Home, Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          margin: "0 20px",
        }}>
        {/* <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        /> */}
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          BodySync
        </Typography>
      </Link>
      <Stack direction="row" spacing={2}>
        <IconButton color="primary" aria-label="Home" href="/">
          <Home />
        </IconButton>
        <IconButton color="primary" aria-label="Facebook" href="">
          <Facebook />
        </IconButton>
        <IconButton color="primary" aria-label="Twitter" href="">
          <Twitter />
        </IconButton>
        <IconButton color="primary" aria-label="Instagram" href="">
          <Instagram />
        </IconButton>
      </Stack>
    </Stack>
    {/* <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px">
      Made with ❤️ by NBG
    </Typography> */}
  </Box>
);

export default Footer;
