"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const HomeSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component="section">
      <Box
        display={"flex"}
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        marginTop={10}
        marginBottom={{ xs: 2, md: 10 }}
        py={10}
        paddingTop={{ xs: 10, md: 25 }}
      >
        <Box width={{ md: 1 / 2 }} mt={2}>
          <Image src="/arif_circle.png" alt="" width={400} height={400} />
        </Box>
        <Box
          mt={{ md: 2 }}
          width={{ md: 3 / 5 }}
          display={"flex"}
          flexDirection={"column"}
          textAlign={{ md: "left", xs: "center" }}
          marginTop={{ md: 0, xs: 4 }}
        >
          <Typography variant={isSmallScreen ? "h3" : "h2"} fontWeight={"bold"}>
            Hi, I'm Arif!
          </Typography>
          <Typography
            variant={isSmallScreen ? "body1" : "h5"}
            marginTop={4}
            marginBottom={4}
          >
            I am an aspiring Software Engineer based in New York City. I am
            working towards using technology to make projects that are
            meaningful and help make life easier.
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Link
          to="/about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            }}
          >
            <HiArrowDown size={35} />
          </motion.div>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeSection;
