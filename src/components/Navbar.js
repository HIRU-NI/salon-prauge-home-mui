import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";

const navItems = ["Home", "About", "Services", "Shop"];

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "background.paper" }} position="static">
        <Toolbar>
          <img src={require("../assets/images/logo.png")} alt="logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "text.primary",
              paddingInlineStart: 2,
              fontWeight: 600,
            }}
          >
            SalonPrauge
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000", textTransform: 'capitalize' }}>
                {item}
              </Button>
            ))}
            <Button sx={{ bgcolor: "button.primary", color: "#fff", mx: 3, textTransform: 'capitalize' }}>
              Book now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
