import { Box, Typography, Container, Grid } from "@mui/material";

function SecondSection() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        {/* Main Text Section */}
        <Container>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
          >
            SAVE MONEY, SHOP SMART & TRAVEL SMART
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Unlock Exclusive Deals On Everything From Fashion To Tech. Shop With
            Confidence And Save Big On Premium Products And Services.
          </Typography>
        </Container>

        {/* Main Image Placeholder */}
        <Box
          sx={{
            width: "90%",
            height: "450px",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            mb: 4,
          }}
        >
          <img
            src="/shop-mart-main.gif"
            alt="Section Background"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Bottom Icon Grid */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/bt-1.gif"
                alt="Section Background"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/bt-2.gif"
                alt="Section Background"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/bt-3.gif"
                alt="Section Background"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/bt-4.gif"
                alt="Section Background"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/bt-5.gif"
                alt="Section Background"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="/bt-6.gif"
                alt="Section Background"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "scale(1.3)",
                  transformOrigin: "center",
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="/bt-7.gif"
                alt="Section Background"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "scale(1.2)",
                  transformOrigin: "center",
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "145px",
                height: "120px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/bt-8.gif"
                alt="Section Background"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SecondSection;
