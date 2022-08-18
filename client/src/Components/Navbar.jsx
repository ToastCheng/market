import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

import Add from "@mui/icons-material/Add";
//import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ProfileIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Forum";
import {
  IconButton,
  Typography,
  Button,
  styled,
  Toolbar,
  AppBar,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";

// contains searchbar and Post Request button

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: 10,
  margin: 5,
});

const IconsNav = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            component={Link}
            to="/"
            variant="h3"
            sx={{ display: { xs: "none", sm: "block" }, textDecoration: 'none', '&:visited': { color: 'white' } }}
          >
            MARKET
          </Typography>
          {/* <HomeIcon/> */}
          <IconsNav>
            {user ? (
              <IconButton component={Link} to="/account">
                <ProfileIcon margin={2} style={{ color: "black" }} />
              </IconButton>
            ) : (
              <Login />
            )}

            <FavoriteIcon style={{ color: "black" }} />
            <ChatIcon style={{ color: "black" }} />
            <Button
              component={Link}
              to="/post_request_items"
              variant="contained"
              color="primary"
              startIcon={<Add />}
            >
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                {" "}
                POST & REQUEST{" "}
              </Typography>
            </Button>
          </IconsNav>
        </StyledToolbar>
      </AppBar>
  );
}

export default Navbar;
