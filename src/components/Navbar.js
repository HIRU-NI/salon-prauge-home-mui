import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { React, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    index: 1,
    name: "Home",
    path: "/",
    id: "",
  },
  {
    index: 1,
    name: "About",
    path: "/",
    id: "about",
  },
  {
    index: 1,
    name: "Services",
    path: "/",
    id: "services",
  },
  {
    index: 1,
    name: "Shop",
    path: "/",
    id: "services",
  },
];

const Navbar = ({ aboutRef, servicesRef }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { targetId } = location.state || {}; //ID of the element to scroll to

  useEffect(() => {
    console.log(targetId)
    if (targetId === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    if (targetId === "services") {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [targetId, aboutRef, servicesRef]);

  return (
    <>
      <AppBar
        sx={{ bgcolor: "background.paper", boxShadow: "none" }}
        position="static"
      >
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
              <Button
                key={`${item.name} ${item.index}`}
                sx={{ color: "#000", textTransform: "capitalize", mx: 3 }}
                onClick={() => {
                  location.state = { targetId: item.id };
                  console.log(location.state)
                  navigate(item.path);
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button
              sx={{
                bgcolor: "button.primary",
                color: "#fff",
                mx: 3,
                textTransform: "capitalize",
              }}
              onClick={() => navigate("/booking")}
            >
              Book now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
