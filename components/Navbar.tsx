"use client";

import React, { useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Link } from "react-scroll";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

type NavItem = {
  label: string;
  page: string;
};

const navItems: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "Projects" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useNextTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const isDarkMode = currentTheme === "dark";
  const isSmallScreen = useMediaQuery("(max-width:960px)");

  const handleThemeToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        padding: { xs: "16px", sm: "40px" },
        position: "fixed",
        top: 0,
        zIndex: 50,
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        backgroundColor: isDarkMode ? "#1a202c" : "#ffffff",
        borderBottom: isDarkMode ? "1px solid #4a5568" : "none",
        color: isDarkMode ? "white" : "#2d3748",
      }}
      component="header"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Arif Manawer
          </Typography>
        </Box>
        {isSmallScreen ? (
          <IconButton onClick={() => setNavbar(!navbar)} color="inherit">
            {navbar ? <IoMdClose /> : <IoMdMenu />}
          </IconButton>
        ) : (
          <Box display="flex" alignItems="center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.page}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                style={{ margin: "0 10px", cursor: "pointer" }}
              >
                {item.label}
              </Link>
            ))}
            <IconButton onClick={handleThemeToggle} color="inherit">
              {isDarkMode ? <RiSunLine /> : <RiMoonFill />}
            </IconButton>
          </Box>
        )}
      </Box>
      {isSmallScreen && (
        <Collapse in={navbar}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: isDarkMode ? "#1a202c" : "#ffffff",
              borderBottom: isDarkMode ? "1px solid #4a5568" : "none",
              color: isDarkMode ? "white" : "#2d3748",
            }}
          >
            <List>
              {navItems.map((item, index) => (
                <ListItem key={index} onClick={() => setNavbar(false)}>
                  <Link
                    to={item.page}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </Link>
                </ListItem>
              ))}
              <ListItem onClick={handleThemeToggle}>
                <IconButton color="inherit">
                  {isDarkMode ? (
                    <RiSunLine size={25} />
                  ) : (
                    <RiMoonFill size={25} />
                  )}
                </IconButton>
              </ListItem>
            </List>
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;
