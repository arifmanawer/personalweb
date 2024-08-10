import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      mx={"auto"}
      maxWidth={{ base: "3xl", md: "5xl" }}
      px={{ sm: "6", md: "4" }}
    >
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </Box>
  );
}
