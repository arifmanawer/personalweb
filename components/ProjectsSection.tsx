"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { Box, Divider, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const projects = [
  {
    title: "StockedUp",
    description:
      "A simple inventory tracker that allows users to add, edit, and delete items from their inventory.",
    image: "/stockup.png",
    github: "https://github.com/arifmanawer/inventory-tracker",
    link: "https://inventory-tracker-teal.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [hover, setHover] = useState(false);
  const [projectlink, setProjectLink] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component={"section"} id="projects">
      <Box paddingBottom={{ xs: 6, md: 12 }} paddingTop={{ md: 10 }}>
        <Typography variant="h3" textAlign={"center"} fontWeight={"bold"}>
          Projects
        </Typography>
        <Divider
          variant="middle"
          sx={{
            width: "100px",
            height: "6px",
            backgroundColor: "#5F9EA0",
            margin: "auto",
            borderRadius: "4px",
            marginTop: "14px",
          }}
        ></Divider>

        <Box display={"flex"} flexDirection={"column"} marginTop={10}>
          {projects.map((project, index) => {
            return (
              <Box key={index}>
                <Box
                  display={"flex"}
                  flexDirection={{ xs: "column", md: "row" }}
                  marginX={10}
                  marginBottom={10}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={{ xs: 4, md: 10 }}
                >
                  <Box
                    width={{ md: 1 / 2 }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      src={project.image}
                      alt=""
                      width={isSmallScreen ? 350 : 400}
                      height={isSmallScreen ? 192.5 : 220}
                      style={{
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </Box>
                  <Box
                    width={{ md: 1 / 2 }}
                    textAlign={{ md: "left", xs: "center" }}
                    alignItems={{ md: "left", xs: "center" }}
                  >
                    <Typography variant="h5" fontWeight={"bold"}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" marginTop={2}>
                      {project.description}
                    </Typography>
                    <Box
                      marginTop={2}
                      display={"flex"}
                      flexDirection={"row"}
                      gap={2}
                      justifyContent={{ md: "left", xs: "center" }}
                    >
                      <Box>
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            style={{
                              color: "#5F9EA0",
                              cursor: "pointer",
                              transform: hover ? "scale(1.1)" : "scale(1)",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                          />
                        </Link>
                      </Box>
                      <Box>
                        <Link href={project.link} target="_blank">
                          <FaLink
                            size={30}
                            style={{
                              color: "#5F9EA0",
                              cursor: "pointer",
                              transform: projectlink
                                ? "scale(1.1)"
                                : "scale(1)",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={() => setProjectLink(true)}
                            onMouseLeave={() => setProjectLink(false)}
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
