import { Box, Typography, Grid, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
    <Box
      sx={{
        backgroundColor: '#212121', // Dark background
        color: '#fff',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo and Description */}
        <Grid item size={3}>
          <Typography variant="h6" sx={{ color: '#f57c00', mb: 1 }}>
            Maxwell's Club
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button sx={{ color: '#bdbdbd', minWidth: 'unset', p: 0, mr: 1 }}>
              <FacebookIcon />
            </Button>
            <Button sx={{ color: '#bdbdbd', minWidth: 'unset', p: 0, mr: 1 }}>
              <TwitterIcon />
            </Button>
            <Button sx={{ color: '#bdbdbd', minWidth: 'unset', p: 0 }}>
              <LinkedInIcon />
            </Button>
          </Box>
        </Grid>

        {/* Company Section */}
        <Grid item size={2}>
          <Typography variant="subtitle1" sx={{ color: '#f57c00', mb: 1 }}>
            COMPANY
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            Career
          </Typography>
        </Grid>

        {/* Help Section */}
        <Grid item size={2}>
          <Typography variant="subtitle1" sx={{ color: '#f57c00', mb: 1 }}>
            HELP
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            Customer Support
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            Terms & Conditions
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            Privacy Policy
          </Typography>
        </Grid>

        {/* FAQ Section */}
        <Grid item size={2}>
          <Typography variant="subtitle1" sx={{ color: '#f57c00', mb: 1 }}>
            FAQ
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            Account
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            Manage Cart
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            Orders
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            Payments
          </Typography>
        </Grid>

        {/* Resources Section */}
        <Grid item size={2}>
          <Typography variant="subtitle1" sx={{ color: '#f57c00', mb: 1 }}>
            RESOURCES
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            E-Commerce
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1 }}>
            For Sellers
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            Blog
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdbdbd' }}>
            Join Us
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ mt: 4, borderTop: '1px solid #424242', pt: 2, display:'flex', justifyContent:'space-between', width: '80%', margin: '0 auto' }}>
        <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 2 }}>
          Maxwell Club 2025. All Rights Reserved
        </Typography>
        <Box>
          <Typography variant="body2" sx={{ color: '#bdbdbd', mr: 2, display: 'inline' }}>
            Download the App
          </Typography>
          <Button
            sx={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              p: '5px 10px',
              mr: 1,
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            <Typography variant="body2" sx={{ color: '#000' }}>
              GET IT ON
            </Typography>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              sx={{ height: '20px', ml: 1 }}
            />
          </Button>
          <Button
            sx={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              p: '5px 10px',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            <Typography variant="body2" sx={{ color: '#000' }}>
              Download on the
            </Typography>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              sx={{ height: '20px', ml: 1 }}
            />
          </Button>
        </Box>
      </Box>
    </Box>

    
    </>
  )
}

export default Footer