import { Box, Button, Divider, Flex, Icon, Text } from '@chakra-ui/react';
import { IoHome } from "react-icons/io5";
import Logo from './Logo';
import { RiAddLargeFill } from "react-icons/ri";

export default function SideBar() {
  return (
    <Box>
      {/* Logo and Welcome message */}
      <Flex alignItems="center" fontWeight="bold" mt={"2"}>
        <Logo />
        <Text ml="2" >Hi, AltWorld</Text>
      </Flex>
      <Divider my="4" borderWidth="1px" /* Set thicker border width */ />

      {/* Dashboard Link */}
      <Flex alignItems="center">
        <Icon as={IoHome} boxSize="20px" color="#4fd1c5" /> {/* Set color of the icon */}
        <Text ml="2" fontWeight="bold" >Dashboard</Text>
      </Flex>
      <Divider my="4" />

      {/* New Assignment Card */}
      <Box
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
          fontSize="16px"
          borderRadius="md"
          bg="white" /* Set button color to white */
          px="2"
          ml="2"
          mt="2"
          mb="2"
          py="1"
          position="absolute"
          top="0"
          left="3"
        >
          <RiAddLargeFill/>
        </Button>
        <Flex direction="column" p="4" color="white" textAlign="left" mt={"8"}>
          <Text fontWeight="bold">New Assignment ?</Text>
          <Text>Select from pre-defined questions to have a quick turnaround.</Text>
          <Button bg="white"  mt="4">Create New Assignment</Button>
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
