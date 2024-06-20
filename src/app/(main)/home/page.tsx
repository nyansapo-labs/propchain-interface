import { Box } from "@chakra-ui/react";
import { COLORS } from "@/constants/theme";

import HeroSection from "./hero";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";

export default function HomeView() {
  return (
    <Box bg={COLORS.whiteBG} h="full" w="full">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
    </Box>
  );
}
