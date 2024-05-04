import { Box, Button, Divider, Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import { RiAddLargeFill } from "react-icons/ri";
import Logo from './Logo';
import { IoHome } from "react-icons/io5";

export default function SideBar() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {/* Logo and Welcome message */}
      <Flex alignItems="center" fontWeight="bold" mt={isMobile ? "2" : "4"} ml={isMobile ? "2" : "4"}>
        <Logo />
        <Text ml="2">Hi, AltWorld</Text>
      </Flex>
      <Divider my="4" borderWidth="1px" /* Set thicker border width */ />

      {/* Dashboard Link (Hidden on Mobile) */}
      {!isMobile && (
        <Flex alignItems="center">
          <Icon as={IoHome} boxSize="20px" color="#4fd1c5" /> {/* Set color of the icon */}
          <Text ml="2" fontWeight="bold">Dashboard</Text>
        </Flex>
      )}
      {!isMobile && <Divider my="4" />}

      {/* New Assignment Card */}
      <Box
        margin={"auto"}
        p="2"
        boxShadow="md"
        bg="#4fd1c5"
        borderRadius="lg"
        border="2px solid #4fd1c5"
        mt="4"
        maxW="250px" /* Reduced the maximum width */
        position="relative"
        overflow="hidden"
      >
        <Button
          color="black" /* Set text color to black */
          fontSize="14px" /* Reduced font size */
          borderRadius="md"
          bg="white" /* Set button color to white */
          px="1" /* Reduced horizontal padding */
          py="0.5" /* Reduced vertical padding */
          ml="2"
          mt="2"
          mb="2"
          position="absolute"
          top="0"
          left="3"
          width="auto" /* Set button width to adjust to content */
        >
          <Icon as={RiAddLargeFill} boxSize="18px" /> {/* Reduced icon size */}
        </Button>
        <Flex direction="column" p="4" color="white" textAlign="left" mt={isMobile ? "6" : "8"}>
          <Text fontWeight="bold">New Assignment ?</Text>
          <Text isTruncated>Select from pre-defined questions to have a quick turnaround.</Text>

          <Button
            bg="white" 
            fontSize="9px" 
            mt="3" 
            py="1" 
            maxWidth="200px" 
            maxHeight={"500px"}
            wordBreak="break-all" 
          >
            Create New Assignment
          </Button>
        </Flex>
        <Box
          position="absolute"
          bottom="-100px"
          right="-100px"
          transform="rotate(45deg)"
          width="300px"
          height="300px"
          bg="white"
          borderRadius="full"
          opacity="0.2"
          pointerEvents="none"
        />
      </Box>
    </Box>
  );
}
