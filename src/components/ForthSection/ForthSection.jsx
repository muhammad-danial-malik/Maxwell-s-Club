import { Box, Typography, Container, Button } from '@mui/material';
function ForthSection() {
  return (
    <>

      <Box
        sx={{
          backgroundColor: '#000', // Black background
          minHeight: '500px', // Adjust height as needed
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
        }}
      >
        {/* Main Text Section */}
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'capitalize', mb: 2 }}>
            Ultimate <span style={{ color: "#046bd1" }}>Convenience</span> at Your Fingertips
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Discover Seamless Shopping And Travel Experiences Designed For Your Busy Lifestyle
          </Typography>
        </Container>

        {/* Image Placeholder */}
        <Box
          sx={{
            width: '80%',
            height: '400px',
            backgroundColor: '#e0e0e0', // Placeholder background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: 4,
          }}
        >
          <img src="/section04-bg.gif" alt="Section Background" style={{ width: '100%', height: '100%' }} />
        </Box>

        {/* AI Assistant Section */}
        <Container sx={{ textAlign: 'left', maxWidth: '800px', display:'flex', justifyContent:'center', alignItems:'center' }}>
          <Box sx={{width:'72%'}}>
            <Typography variant="h6" sx={{ color: '#1976d2', mb: 1 }}>
              PERSONAL AI ASSISTANT
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Get Instant Recommendations Tailored To Your Preferences. Our AI Assistant Learns Your Style, Needs, And Habits To Offer Suggestions That Perfectly Match Your Taste.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1976d2',
              textTransform: 'uppercase',
              borderRadius: '20px',
              padding: '8px 20px',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            Chat with Our AI Assistant Now
          </Button>
        </Container>
      </Box>

    </>
  )
}

export default ForthSection