import { Box, Typography } from "@mui/material";

const SeventhSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundImage: 'url("vr-metaverse-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        px: 2,
        paddingleft: "20px",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2,paddingTop: "35px" }}>
        VR Metaverse
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "medium", mb: 4 }}>
        Shopping
      </Typography>
      <Box
        component="img"
        src="comming-soon.gif"
        alt="Random placeholder"
        sx={{
          width: "200px",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default SeventhSection;
