import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
// import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px">
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
      <Stack
        direction={"row"}
        gap="40px"
        fontSize="24px"
        //  alignItems="flex-end"
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}>
          Home
        </a>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
