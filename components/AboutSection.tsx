import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "Python" },
  { skill: "C++" },
  { skill: "Firebase" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "VSCode" },
  { skill: "Chakra UI" },
  { skill: "Material UI" },
];

const AboutSection = () => {
  return (
    <Box component={"section"} id="about">
      <Box paddingBottom={{ xs: 6, md: 12 }} paddingTop={{ xs: 3, md: 10 }}>
        <Typography variant="h3" textAlign={"center"} fontWeight={"bold"}>
          About Me
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
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          marginY={5}
          textAlign={{ xs: "center", md: "left" }}
          padding={{ xs: 2, md: 5 }}
          alignItems={"stretch"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            width={{ md: 1 / 2 }}
            paddingX={{ sm: 5, md: 4 }}
          >
            <Typography
              variant="h5"
              textAlign={{ xs: "center", md: "left" }}
              fontWeight={"bold"}
            >
              A Little Bit About Me ...
            </Typography>
            <Typography variant="body1" marginTop={2}>
              I am Junior at the City College of New York studying Computer
              Science.
            </Typography>
            <Typography variant="body1" marginTop={2}>
              I am currently working as a Technical Intern at ConEdison and have
              previously worked as a SWE Intern at Students Who Code.
            </Typography>
            <Typography variant="body1" marginTop={2}>
              In my spare time, I enjoy playing basketball, playing games, and
              spending time outside with friends and family.
            </Typography>
            <Typography variant="body1" marginTop={2}>
              I am highly motivated and always looking to learn new things and
              open to new opportunities.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            height={"100%"}
            marginY={{ xs: 5, md: 0 }}
            width={{ md: 1 / 2 }}
            paddingX={{ md: 4 }}
          >
            <Typography
              variant="h5"
              textAlign={{ xs: "center", md: "left" }}
              fontWeight={"bold"}
            >
              My Skills
            </Typography>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              flexDirection={"row"}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {skills.map((item, index) => {
                return (
                  <Box
                    key={index}
                    bgcolor={"#5F9EA0"}
                    paddingX={4}
                    paddingY={2}
                    marginRight={2}
                    marginTop={2}
                    borderRadius={2}
                    fontSize={"semibold"}
                  >
                    {item.skill}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
