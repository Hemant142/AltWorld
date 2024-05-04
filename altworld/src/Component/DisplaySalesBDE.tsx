import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Center,
  Button,
  Stack,
} from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar"; // Importing ProgressBar from the package
import { Candidate } from "../types"; // Import the Candidate interface from types
import { loremIpsum } from "lorem-ipsum";

interface DisplaySalesBDEProps {
  selectedData: Candidate | null;
}

const DisplaySalesBDE: React.FC<DisplaySalesBDEProps> = ({ selectedData }) => {
  const loremText = loremIpsum({
    count: 10, // Number of words
    units: "words", // Generate Lorem Ipsum words
  });

  return (
    <Box width={"100%"}>
      {selectedData ? (
        <Box display={"flex"} gap={"2%"}>
          <Stack spacing={4} width={{ base: "100%", md: "50%", lg: "50%" }}>
            <Box
              display={{ md: "flex" }}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Box display={"flex"} gap={"2"} alignItems={"center"}>
                <Image
                  src={selectedData.avatar}
                  borderRadius="lg"
                  height={{ base: "60px", md: "70px", lg: "70px" }}
                  width={{ base: "60px", md: "80px", lg: "80px" }}
                />
                <Box textAlign={"left"}>
                  <Heading as="h4" size="sm" mb={1}>
                    {selectedData.name}
                  </Heading>
                  <Text color="#8894a6" fontSize={{ base: "xs", md: "sm" }}>
                    {selectedData.email}
                  </Text>
                </Box>
              </Box>
              <Heading
                color={selectedData.score > 50 ? "#3fc066" : "#eebd4d"}
                as="h5"
                size="sm"
                fontSize="30px"
              >
                {selectedData.score}%
              </Heading>
            </Box>
            {/* Progress Bars */}
            <Stack spacing={4}>
              {/* Behavioural */}
              <Box display="flex" alignItems="center">
                <Heading
                  as="h6"
                  size="xs"
                  color="#8894a6"
                  flexShrink={0}
                  mr={2}
                >
                  Behavioural
                </Heading>
                <Box flex="1" ml={"12"}>
                  <ProgressBar
                    isLabelVisible={false}
                    completed={selectedData.behavioural * 10}
                    bgColor={
                      selectedData.behavioural < 5 ? "#eebd4d" : "#3fc066"
                    }
                    height="10px"
                  />
                </Box>
                <Heading
                  ml={"2"}
                  as="h6"
                  size="xs"
                  color={selectedData.behavioural < 5 ? "#eebd4d" : "#3fc066"}
                  fontWeight="bold"
                  fontSize="xs"
                >
                  {selectedData.behavioural}/10
                </Heading>
              </Box>
              {/* Communication */}
              <Box display="flex" alignItems="center">
                <Heading
                  as="h6"
                  size="xs"
                  color="#8894a6"
                  flexShrink={0}
                  mr={2}
                >
                  Communication
                </Heading>
                <Box flex="1" ml={"6"}>
                  <ProgressBar
                    isLabelVisible={false}
                    completed={selectedData.communication * 10}
                    bgColor={
                      selectedData.communication < 5 ? "#eebd4d" : "#3fc066"
                    }
                    height="10px"
                  />
                </Box>
                <Heading
                  ml={"2"}
                  as="h6"
                  size="xs"
                  color={selectedData.communication < 5 ? "#eebd4d" : "#3fc066"}
                  fontWeight="bold"
                  fontSize="xs"
                >
                  {selectedData.communication}/10
                </Heading>
              </Box>
              {/* Situation Handling */}
              <Box display="flex" alignItems="center">
                <Heading
                  as="h6"
                  size="xs"
                  color="#8894a6"
                  flexShrink={0}
                  mr={2}
                >
                  Situation handling
                </Heading>
                <Box flex="1" ml={"2"}>
                  <ProgressBar
                    isLabelVisible={false}
                    completed={selectedData.situationHandling * 10}
                    bgColor={
                      selectedData.situationHandling < 5 ? "#eebd4d" : "#3fc066"
                    }
                    height="10px"
                  />
                </Box>
                <Heading
                  ml={"2"}
                  as="h6"
                  size="xs"
                  color={
                    selectedData.situationHandling < 5 ? "#eebd4d" : "#3fc066"
                  }
                  fontWeight="bold"
                  fontSize="xs"
                >
                  {selectedData.situationHandling}/10
                </Heading>
              </Box>
            </Stack>
            {/* About */}
            <Box textAlign={"left"}>
              <Heading as="h4" size="sm">
                About
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }}>{loremText}</Text>
            </Box>
            <Box textAlign={"left"}>
              <Heading as="h4" size="sm">
                Experience
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }}>{loremText}</Text>
            </Box>
            <Box textAlign={"left"}>
              <Heading as="h4" size="sm">
                Hobbies
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }}>{loremText}</Text>
            </Box>
            <Box textAlign={"left"}>
              <Heading as="h4" size="sm">
                Introduction
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }}>{loremText}</Text>
            </Box>
            {/* Shortlist button */}
            <Center>
              <Button colorScheme="teal" size="sm" w="200px">
                {" "}
                {/* Adjusted button width */}
                SHORTLIST
              </Button>
            </Center>
          </Stack>
          <Box
            maxWidth={{ base: "100%", md: "50%", lg: "50%" }}
            borderRadius={"lg"}
          >
            <Image
              borderRadius={"lg"}
              src={selectedData.avatar}
              height={"100%"}
              width={"100%"}
            />
          </Box>
        </Box>
      ) : (
        <Text>No candidate selected</Text>
      )}
    </Box>
  );
};

export default DisplaySalesBDE;
