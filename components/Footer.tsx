import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <Box component="section" marginX={"auto"} paddingX={{ sm: 4, md: 6 }}>
      <Divider
        variant="middle"
        sx={{
          width: "90%",
          height: "3px",
          backgroundColor: "#5F9EA0",
          margin: "auto",
          borderRadius: "4px",
        }}
      ></Divider>
      <Box
        marginX={"auto"}
        padding={4}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        textAlign={"center"}
        justifyContent={{ xs: "center", md: "space-between" }}
        width={"90%"}
      >
        <Box>
          <Typography variant="h6">© 2024 Arif Manawer</Typography>
        </Box>
        <Box paddingTop={{ xs: 2, md: 0 }}>
          <Link
            href="https://github.com/arifmanawer"
            target="_blank"
            paddingLeft={2}
          >
            <AiOutlineGithub color={"#5F9EA0"} size={30} cursor={"pointer"} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/arif-manawer/"
            target="_blank"
            paddingLeft={2}
          >
            <AiOutlineLinkedin color={"#5F9EA0"} size={30} cursor={"pointer"} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
