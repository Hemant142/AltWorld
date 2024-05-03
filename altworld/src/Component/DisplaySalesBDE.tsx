import React from "react";
import { Box, Heading, Image, Progress, Text, Center, Button, Stack } from "@chakra-ui/react";
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
        <Stack spacing={4}>
          <Box display={{ md: "flex" }} justifyContent={"space-between"} alignItems="center">
            <Box display={"flex"} gap={"2"}>
              <Image src={selectedData.avatar} width={{ base: "80px", md: "100px" }} />
              <Box textAlign={"left"}>
                <Heading as="h4" size="md" mb={1}>
                  {selectedData.name}
                </Heading>
                <Text color="#8894a6" fontSize={{ base: "sm", md: "md" }}>
                  {selectedData.email}
                </Text>
              </Box>
            </Box>
            <Heading color={selectedData.score > 50 ? "#3fc066" : "#eebd4d"}>
              {selectedData.score}%
            </Heading>
          </Box>
          {/* Progress Bars */}
          <Stack spacing={4}>
            {/* Behavioural */}
            <Box display="flex" alignItems="center">
              <Heading as="h6" size="xs" color="#8894a6" flexShrink={0} mr={2}>
                Behavioural
              </Heading>
              <Box flex="1"  ml={"12"}>
                <Progress
                  colorScheme={
                    selectedData.behavioural * 10 < 50 ? "yellow" : "green"
                  }
                  size="sm"
                  value={selectedData.behavioural * 10}
                />
              </Box>
              <Heading
               ml={"2"}
                as="h6"
                size="xs"
                color={selectedData.behavioural < 5 ? "#eebd4d" : "#3fc066"}
                fontWeight="bold"
              >
                {selectedData.behavioural}/10
              </Heading>
            </Box>
            {/* Communication */}
            <Box display="flex" alignItems="center">
              <Heading as="h6" size="xs" color="#8894a6" flexShrink={0} mr={2}>
                Communication
              </Heading>
              <Box flex="1"  ml={"6"} >
                <Progress
                  colorScheme={
                    selectedData.communication * 10 < 50 ? "yellow" : "green"
                  }
                  size="sm"
                  value={selectedData.communication * 10}
                />
              </Box>
              <Heading
              ml={"2"}
                as="h6"
                size="xs"
                color={selectedData.communication < 5 ? "#eebd4d" : "#3fc066"}
                fontWeight="bold"
              >
                {selectedData.communication}/10
              </Heading>
            </Box>
            {/* Situation Handling */}
            <Box display="flex" alignItems="center">
              <Heading as="h6" size="xs" color="#8894a6" flexShrink={0} mr={2}>
                Situation handling
              </Heading>
              <Box flex="1"  ml={"2"}>
                <Progress
                  colorScheme={
                    selectedData.situationHandling * 10 < 50
                      ? "yellow"
                      : "green"
                  }
                  size="sm"
                  value={selectedData.situationHandling * 10}
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
              >
                {selectedData.situationHandling}/10
              </Heading>
            </Box>
          </Stack>
          {/* Display the video */}
          <Center>
            <Box width={{ base: "100%", md: "80%" }}>
              <iframe title="naruto" src={selectedData.video} allowFullScreen />
            </Box>
          </Center>

          {/* About */}
          <Box textAlign={"left"}>
            <Heading as="h4" size="md">
              About
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>{loremText}</Text>
          </Box>

          <Box textAlign={"left"}>
            <Heading as="h4" size="md">
              Experience
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>{loremText}</Text>
          </Box>

          <Box textAlign={"left"}>
            <Heading as="h4" size="md">
              Hobbies
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>{loremText}</Text>
          </Box>

          <Box textAlign={"left"}>
            <Heading as="h4" size="md">
              Introduction
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>{loremText}</Text>
          </Box>

          {/* Shortlist button */}
          <Center>
            <Button colorScheme="teal" size="lg">
              SHORTLIST
            </Button>
          </Center>
        </Stack>
      ) : (
        <Text>No candidate selected</Text>
      )}
    </Box>
  );
};

export default DisplaySalesBDE;
