import { Box, Typography, Container, Button } from "@mui/material";
function ForthSection() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000", // Black background
          minHeight: "500px", // Adjust height as needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        {/* Main Text Section */}
        <Container>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textTransform: "capitalize", mb: 2 }}
          >
            Ultimate <span style={{ color: "#046bd1" }}>Convenience</span> at
            Your Fingertips
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#5F5D5D" }}>
            Discover Seamless Shopping And Travel Experiences Designed For Your
            Busy Lifestyle
          </Typography>
        </Container>

        {/* Image Placeholder */}
        <Box
          sx={{
            width: "80%",
            height: "400px",
            backgroundColor: "#e0e0e0", // Placeholder background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            mb: 4,
          }}
        >
          <img
            src="/section04-bg.gif"
            alt="Section Background"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* AI Assistant Section */}
        <Container
          sx={{
            textAlign: "left",
            maxWidth: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "72%" }}>
            <Typography variant="h6" sx={{ color: "#1976d2", mb: 1 }}>
              PERSONAL AI ASSISTANT
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "#5F5D5D" }}>
              Get Instant Recommendations Tailored To Your Preferences. Our AI
              Assistant Learns Your Style, Needs, And Habits To Offer
              Suggestions That Perfectly Match Your Taste.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              textTransform: "uppercase",
              borderRadius: "20px",
              padding: "8px 20px",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 9.49998L11.5 7.99998L15.5 6.49848L17 2.5L18.5014 6.49848L22.5 7.99998L18.5014 9.49998L17 13.5L15.5 9.49998ZM7.49997 17.5L2.5 15.5L7.49997 13.5L9.49998 8.5L11.5 13.5L16.5 15.5L11.5 17.5L9.49998 22.5L7.49997 17.5Z"
                fill="white"
              />
            </svg>
            Chat with Our AI Assistant Now
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default ForthSection;
