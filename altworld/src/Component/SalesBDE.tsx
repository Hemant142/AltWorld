import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsBoxFill } from "react-icons/bs";
import { Candidate } from "../types";
import { MdEdit } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";

interface SalesBDEProps {
  data: Candidate[];
  setSelectedData: React.Dispatch<React.SetStateAction<Candidate | null>>;
}

export default function SalesBDE({ data, setSelectedData }: SalesBDEProps) {
  const [selectedRow, setSelectedRow] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
    setSelectedData(data[index]);
  };

  return (
    <Box width={"100%"}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
       
        mb={isMobile ? "3" : "5"}
      >
        <Heading as="h6" size="xs" fontSize="20px">
          Sales BDE
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading
            as="h6"
            size="xs"
            fontSize="20px"
            textAlign="right"
            color="#2ebd59"
            marginRight={"2"}
          >
            Active
          </Heading>
          <Button
            size="xs"
            fontSize="xs"
            boxShadow="lg"
            bg="white"
          >
            <MdEdit />
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        mb={isMobile ? "2" : "3"}
      >
        <Heading as="h6" size="xs" fontSize="12px" color="#8894a6">
          Assignment Link
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading
            as="h6"
            size="xs"
            fontSize="12px"
            textAlign="right"
            color="#398eff"
            marginRight={"2"}
          >
            https://tiny/url/asknakdna/
          </Heading>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        mb={isMobile ? "2" : "3"}
      >
        <Heading as="h6" size="xs"  fontSize="13px" color="#8894a6">
          Assignment Hour
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading
            as="h6"
            size="xs"
            textAlign="right"
            color="#8894a6"
            fontSize="13px"
            marginRight={"2"}
          >
            3 hours
          </Heading>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        mb={isMobile ? "2" : "3"}
      >
        <Heading as="h6" size="xs" color="#8894a6"  fontSize="13px">
          Assignment Ends at
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading
           fontSize="13px"
            as="h6"
            size="xs"
            textAlign="right"
            color="#8894a6"
            marginRight={"2"}
          >
            11 March 2024
          </Heading>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={isMobile ? "3" : "5"}
        width={"100%"}
        mt={isMobile ? "4" : "6"}
        mb={isMobile ? "3" : "6"}
      >
        <Box>
          <Button
            size="xs"
            fontSize="xs"
            bg="white"
            boxShadow="lg"
            gap={"2"}
            onClick={() => handleRowClick(selectedRow!)}
          >
            <BsBoxFill /> TO REVIEW
          </Button>
        </Box>
        <Box>
          <Button
            size="xs"
            fontSize="xs"
            gap={"2"}
          >
            <IoDocuments /> SHORTLISTED
          </Button>
        </Box>
      </Box>
      {/* Display table */}
      <Box>
        <TableContainer>
          <Table variant="simple" size="xs">
            <Thead>
              <Tr>
                <Th>CANDIDATE</Th>
                <Th isNumeric>SCORE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((ele, index) => (
                <Tr
                  key={ele.id}
                  onClick={() => handleRowClick(index)}
                  _hover={{
                    bg: selectedRow === index ? "#e0e0e0" : "transparent",
                  }}
                  bg={selectedRow === index ? "#f0f0f0" : "transparent"}
                  cursor="pointer"
                >
                  <Td p="2">
                    <Box display={"flex"} gap="2">
                      <Image
                        src={ele.avatar}
                        width={isMobile ? "30px" : "50px"}
                      />
                      <Box>
                        <Heading as="h6" size="xs" mb={1}>
                          {ele.name}
                        </Heading>
                        <Text color="#8894a6" fontSize="xs">
                          {ele.email}
                        </Text>
                      </Box>
                    </Box>
                  </Td>
                  <Td isNumeric p="2">
                    <Heading
                      as="h4"
                      size="xs"
                      color={ele.score > 50 ? "#3fc066" : "#eebd4d"}
                    >
                      {ele.score}%
                    </Heading>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
