import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from "@chakra-ui/react";
import SideBar from "../Component/SideBar";
import SalesBDE from "../Component/SalesBDE";
import DisplaySalesBDE from "../Component/DisplaySalesBDE";

export default function Dashboard() {
  return (
    <Flex bg="#f8f9fa">
      {/* Sidebar */}
      <Flex
        ml="2"
        direction={{ base: "column", lg: "row" }}
        width={{ base: "100%", lg: "20%" }}
        height={{ base: "auto", lg: "100vh" }}
        bg="#f8f9fa"
      >
        <SideBar />
      </Flex>

      {/* Main Content */}
      <Flex direction="column" flex="1" ml={"5"}>
        {/* Breadcrumbs */}
        <Box>
  <Breadcrumb mt="2" ml="5" mb="4" fontWeight="bold">
    <BreadcrumbItem>
      <BreadcrumbLink href="#" color="gray.500">
        Page
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Assignment</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>

  <Box fontWeight="bold">
    <Text ml="5" textAlign="left" fontSize="sm"> {/* Adjusted text size to "sm" */}
      Sales BDE
    </Text>
  </Box>
</Box>
        {/* SalesBDE and DisplaySalesBDE */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap="5"
          marginLeft="5"
          marginRight="5"
          mt={"5"}
        >
          {/* SalesBDE */}
          <Flex
            flex="1"
            bg="white"
            p="4"
            borderRadius="md"
            boxShadow="md"
            marginBottom={{ base: "4", lg: "0" }}
          >
            <SalesBDE />
          </Flex>

          {/* DisplaySalesBDE */}
          <Flex flex="1" bg="white" p="4" borderRadius="md" boxShadow="md">
            <DisplaySalesBDE />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
