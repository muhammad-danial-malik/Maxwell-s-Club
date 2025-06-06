import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
    return (
        <>

            <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
                <Toolbar>

                    {/* <Typography variant="h6" component="div" sx={{ color: '#f57c00', flexGrow: 1 }}>
                        Maxwell's Club */}
                    {/* </Typography> */}
                <img src="/logo.png" alt="Section Background" style={{ width: '10%', height: '10%', marginRight:'16%'  }} />
                
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <Button color="inherit" sx={{ color: '#f57c00' }}>HOME</Button>
                        <Button color="inherit" sx={{ color: '#fff' }}>E-COMMERCE</Button>
                        <Button color="inherit" sx={{ color: '#fff' }}>TRAVEL</Button>
                        <Button color="inherit" sx={{ color: '#fff' }}>MEMBERSHIP</Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
                        <IconButton color="inherit" sx={{ color: '#fff' }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit" sx={{ color: '#fff' }}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="inherit" sx={{ color: '#fff' }}>
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton color="inherit" sx={{ color: '#fff' }}>
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit" sx={{ color: '#fff' }}>
                            <PersonIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar