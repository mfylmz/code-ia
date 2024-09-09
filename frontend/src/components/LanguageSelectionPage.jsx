import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LanguageSelectionPage = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    navigate("/select-difficulty", { state: { language } });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <IconButton
        onClick={handleGoBack}
        color="primary"
        aria-label="go back"
        sx={{ position: "absolute", top: 16, left: 16 }}
      >
        <ArrowBackIcon sx={{ color: "white" }} />
      </IconButton>

      <Typography
        variant="p"
        gutterBottom
        sx={{
          color: "text.white",
          fontSize: "1.5rem",
          padding: "3rem",
          fontFamily: '"MonaLisa-Bold", sans-serif',
        }}
      >
        Select Your Programming Language
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontFamily: '"MonaLisa-Thin", sans-serif',
          backgroundColor: "secondary.light",
          color: "text.white",
          fontSize: { xs: "0.9rem", sm: "0.8" },
          maxWidth: "300px",
          width: "80%",
          height: "auto",
          padding: { xs: "10px 20px", sm: "10px 40px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: 2,
          "&:hover": {
            backgroundColor: "#FFC000",
          },
        }}
        onClick={() => handleLanguageSelect("JavaScript")}
      >
        JavaScript
      </Button>
      <Button
        variant="contained"
        sx={{
          fontFamily: '"MonaLisa-Thin", sans-serif',
          backgroundColor: "secondary.light",
          color: "text.white",
          fontSize: { xs: "0.9rem", sm: "0.8rem" },
          maxWidth: "300px",
          width: "80%",
          height: "auto",
          padding: { xs: "10px 20px", sm: "10px 40px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: 2,
          "&:hover": {
            backgroundColor: "	#0096FF",
          },
        }}
        onClick={() => handleLanguageSelect("Python")}
      >
        Python
      </Button>
      <Button
        variant="contained"
        sx={{
          fontFamily: '"MonaLisa-Thin", sans-serif',
          backgroundColor: "secondary.light",
          color: "text.white",
          fontSize: { xs: "0.9rem", sm: "0.8rem" },
          maxWidth: "300px",
          width: "80%",
          height: "auto",
          padding: { xs: "10px 20px", sm: "10px 40px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: 2,
          "&:hover": {
            backgroundColor: "#d8dc81",
          },
        }}
        onClick={() => handleLanguageSelect("Java")}
      >
        Java
      </Button>
    </Box>
  );
};

export default LanguageSelectionPage;
