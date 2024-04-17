import { Box, Button, Typography } from "@mui/material";
// import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px">
      {/* <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        BodySync
      </Typography> */}
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}>
        Sweat, Smile and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={4}>
        Welcome to
        <span style={{ color: "#FF2625", fontWeight: "600" }}>
          {" "}
          BodySync
        </span>{" "}
        Your ultimate fitness companion for personalized workouts, expert
        advice, and motivation. Achieve your goals, track your progress, and
        join our community of health enthusiasts. Start your journey to a
        healthier, happier you today with
        <span style={{ color: "#FF2625", fontWeight: "600" }}> BodySync</span>.
      </Typography>
      {/* <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}>
        Explore Exercises
      </Button> */}
      {/* <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={"200px"}>
        Exercise
      </Typography> */}
      <img src={"HeroBannerImage"} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
