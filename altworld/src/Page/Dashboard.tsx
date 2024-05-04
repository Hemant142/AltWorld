import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import SideBar from "../Component/SideBar";
import SalesBDE from "../Component/SalesBDE";
import DisplaySalesBDE from "../Component/DisplaySalesBDE";
import { useState } from "react";

interface Candidate {
  id: number;
  name: string;
  avatar: string;
  video: string;
  email: string;
  score: number;
  behavioural: number;
  communication: number;
  situationHandling: number;
}

const data: Candidate[] = [
  {
    id: 1,
    name: "Saurav Sing",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    video: "https://www.youtube.com/embed/Q2buKtHF_sA?si=97E56KY2YT35q6ji",
    email: "saurav@gmail.com",
    score: 78,
    behavioural: 9,
    communication: 8,
    situationHandling: 8,
  },
  {
    id: 2,
    name: "Pinku Sing",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    video: "https://www.youtube.com/embed/gCfzeONu3Mo?si=UuIqQOcP2Ot1Dagv",
    email: "pinku@gmail.com",
    score: 72,
    behavioural: 8,
    communication: 8,
    situationHandling: 8,
  },
  {
    id: 3,
    name: "Priyansh",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    video: "https://www.youtube.com/embed/Fjlsrgye0Cs?si=E_ZEm60fTt2ZC_ap",
    email: "priyansh@gmail.com",
    score: 64,
    behavioural: 7,
    communication: 6,
    situationHandling: 6,
  },
  {
    id: 4,
    name: "Shriya",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    video: "https://www.youtube.com/embed/I6IAhXM-vps?si=g-0Ib-_fTVGUJYQh",
    email: "shriya@gmail.com",
    score: 33,
    behavioural: 3,
    communication: 4,
    situationHandling: 3,
  },
  {
    id: 5,
    name: "Saurav Singh",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    video: "https://www.youtube.com/embed/QGHBq5OEsBM?si=qXM-0fUtubRUyKVa",
    email: "saurav@gmail.com",
    score: 51,
    behavioural: 3,
    communication: 8,
    situationHandling: 6,
  },
  {
    id: 6,
    name: "Mohini",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    video: "https://www.youtube.com/embed/GeZU5JgomiE?si=nS33SyqWJiBmh_fx",
    email: "mohini@gmail.com",
    score: 44,
    behavioural: 4,
    communication: 5,
    situationHandling: 4,
  },
];

export default function Dashboard() {
  const [selectedData, setSelectedData] = useState<Candidate | null>(data[0]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex bg="#f8f9fa" direction={isMobile ? "column" : "row"}>
      {/* Sidebar */}
      <Flex
        ml="2"
        direction="column"
        width={isMobile ? "100%" : "13%"}
        height="100vh"
        bg="#f8f9fa"
      >
        <SideBar />
      </Flex>

      {/* Main Content */}
      <Flex
        direction="column"
        flex="1"
        ml={isMobile ? undefined : "1"}
        mr={isMobile ? undefined : "2"}
      >
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
            <Text ml="5" textAlign="left" fontSize="sm">
              Sales BDE
            </Text>
          </Box>
        </Box>

        {/* SalesBDE and DisplaySalesBDE */}
        <Flex
          direction={isMobile ? "column" : "row"}
          gap="2"
          marginLeft={isMobile ? undefined : "5"}
          marginRight={isMobile ? undefined : "5"}
          mt={isMobile ? "5" : undefined}
        >
          {/* SalesBDE */}
          <Flex
            flex={isMobile ? "1" : "30%"}
            bg="white"
            p="4"
            borderRadius="md"
            boxShadow="md"
          >
            <SalesBDE data={data} setSelectedData={setSelectedData} />
          </Flex>

          {/* DisplaySalesBDE */}
          <Flex
            flex={isMobile ? "1" : "60%"}
            bg="white"
            p="4"
            borderRadius="md"
            boxShadow="md"
          >
            <DisplaySalesBDE selectedData={selectedData} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
