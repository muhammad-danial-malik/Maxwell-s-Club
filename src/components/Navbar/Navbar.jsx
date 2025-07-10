import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
        <Toolbar>
          {/* <Typography variant="h6" component="div" sx={{ color: '#f57c00', flexGrow: 1 }}>
                        Maxwell's Club */}
          {/* </Typography> */}
          <img
            src="/logo.png"
            alt="Section Background"
            style={{ width: "10%", height: "10%", marginRight: "16%" }}
          />

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Button color="inherit" sx={{ color: "#f57c00" }}>
              HOME
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#fff", "&:hover": { color: "#e65100" } }}
            >
              E-COMMERCE
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#fff", "&:hover": { color: "#e65100" } }}
            >
              TRAVEL
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#fff", "&:hover": { color: "#e65100" } }}
            >
              MEMBERSHIP
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: "#fff",
                backgroundColor: "#F4F4F40F",
                "&:hover": { color: "#e65100" },
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                color: "#fff",
                backgroundColor: "#F4F4F40F",
                "&:hover": { color: "#e65100" },
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                color: "#fff",
                backgroundColor: "#F4F4F40F",
                "&:hover": { color: "#e65100" },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f57c00",
                color: "#fff",
                borderRadius: "20px",
                padding: "6px 16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e65100",
                },
              }}
            >
              Login/Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
