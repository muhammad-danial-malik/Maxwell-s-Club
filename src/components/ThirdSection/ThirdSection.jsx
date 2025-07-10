import { Box, Typography, Container, Grid, Button } from '@mui/material';

function ThirdSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1558591710-1ea1a0101610?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'blur(8px)',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 4, md: 8 },
          color: '#fff',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Section with Images and Names */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Meet Casey, Your Shopping Buddy
            </Typography>
            <Box sx={{ mb: 4 }}>
              {[
                {
                  name: 'Emma Styles',
                  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
                },
                {
                  name: 'Liam Tech',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
                },
                {
                  name: 'Sophia Trends',
                  image: 'https://images.unsplash.com/photo-1524504383359-3c1b16d3a7af?auto=format&fit=crop&w=300&q=80',
                },
              ].map((person, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={person.image}
                    alt={person.name}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      mr: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="h6">{person.name}</Typography>
                </Box>
              ))}
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                },
              }}
            >
              Join the Future
            </Button>
          </Grid>
          {/* Right Section Placeholder */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: '80%',
                mx: { xs: 'auto', md: 0 },
              }}
            >
              Discover exclusive deals on fashion, tech, and more with Casey, your AI shopping assistant. Shop smart, save big, and stay trendy!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Bottom Right Fixed Image */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: { xs: 100, md: 150 },
          height: { xs: 100, md: 150 },
          zIndex: 3,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80"
          alt="Product Preview"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        />
      </Box>
    </Box>
  );
}

export default ThirdSection;