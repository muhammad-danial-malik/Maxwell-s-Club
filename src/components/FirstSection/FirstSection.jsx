import { Box, Typography, Container } from '@mui/material'

function FirstSection() {
  return (
    <>

      <Box
        sx={{
          backgroundColor: '#ab47bc', // Purple background color
          height: '550px', // Adjust height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          color: '#fff',
          textAlign: 'left',
          width: '100%',
        }}

      >
        {/* Left Section: Text and Hashtag */}
        <Box sx={{ position: 'absolute', bottom: '100px', left: '50px' }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
            #1 Save Money
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
            Shop smarter, save more, live better
          </Typography>
        </Box>

        {/* Right Section: Placeholder for Image */}
        <Box
          sx={{
            width: '100%',
            maxWidth: "100%",
            height: '550px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="/section02-bg.jpg" alt="Section Background" style={{ width: '100%', height: '100%' }} />
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
          <Typography sx={{ color: '#fff', mb: 1 }}>01</Typography>
          <Box sx={{ height: '30px', width: '2px', backgroundColor: '#fff', mb: 1 }}></Box>
          <Typography sx={{ color: '#fff' }}>03</Typography>
        </Box>
      </Box>

    </>
  )
}

export default FirstSection