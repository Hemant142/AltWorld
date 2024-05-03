import React, { useState } from 'react';
import { Box, Button, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useMediaQuery } from '@chakra-ui/react';
import { BsBoxFill } from "react-icons/bs";
import { Candidate } from '../types'; // Import the Candidate interface from types
import { MdEdit } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";

interface SalesBDEProps {
  data: Candidate[]; // Define the data prop as an array of Candidates
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
      <Box display="flex" alignItems="center" justifyContent="space-between" width={"100%"} mb={isMobile ? "3" : "5"}>
        <Heading as='h6' size={isMobile ? 'sm' : 'md'}>
          Sales BDE
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size={isMobile ? 'sm' : 'md'} textAlign="right" color="#2ebd59" marginRight={"2"}>
            Active
          </Heading>
          <Button size={isMobile ? "xs" : "sm"} boxShadow="lg" bg="white">
            <MdEdit />
          </Button>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" width={"100%"} mb={isMobile ? "2" : "3"}>
        <Heading as='h6' size={isMobile ? 'xs' : 'sm'} color="#8894a6">
          Assignment Link
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size={isMobile ? 'xs' : 'sm'} textAlign="right" color="#398eff" marginRight={"2"}>
            https://tiny/url/asknakdna/
          </Heading>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" width={"100%"} mb={isMobile ? "2" : "3"}>
        <Heading as='h6' size={isMobile ? 'xs' : 'sm'} color="#8894a6">
          Assignment Hour
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size={isMobile ? 'xs' : 'sm'} textAlign="right" color="#8894a6" marginRight={"2"}>
            3 hours
          </Heading>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" width={"100%"} mb={isMobile ? "2" : "3"}>
        <Heading as='h6' size={isMobile ? 'xs' : 'sm'} color="#8894a6">
          Assignment Ends at
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size={isMobile ? 'xs' : 'sm'} textAlign="right" color="#8894a6" marginRight={"2"}>
            11 March 2024
          </Heading>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={isMobile ? "3" : "5"} width={"100%"} mt={isMobile ? "4" : "6"} mb={isMobile ? "3" : "6"}>
        <Box>
          <Button size={isMobile ? "xs" : "sm"} bg="white" boxShadow="lg" gap={"2"} onClick={() => handleRowClick(selectedRow!)}>
            <BsBoxFill /> TO REVIEW
          </Button>
        </Box>
        <Box>
          <Button size={isMobile ? "xs" : "sm"} gap={"2"}>
            <IoDocuments /> SHORTLISTED
          </Button>
        </Box>
      </Box>
      {/* Display table */}
      <Box>
        <TableContainer>
          <Table variant='simple' size={isMobile ? "xs" : "sm"}>
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
                  _hover={{ bg: selectedRow === index ? '#e0e0e0' : 'transparent' }}
                  bg={selectedRow === index ? '#f0f0f0' : 'transparent'}
                  cursor="pointer"
                >
                  <Td p={isMobile ? "2" : "1"}>
                    <Box display={"flex"} gap={isMobile ? "1" : "2"}>
                      <Image src={ele.avatar} width={isMobile ? "30px" : "50px"} />
                      <Box>
                        <Heading as='h6' size={isMobile ? 'xs' : 'sm'} mb={1}>
                          {ele.name}
                        </Heading>
                        <Text color="#8894a6" fontSize={isMobile ? 'xs' : 'sm'}>{ele.email}</Text>
                      </Box>
                    </Box>
                  </Td>
                  <Td isNumeric p={isMobile ? "2" : "1"}>
                    <Heading as='h4' size={isMobile ? 'sm' : 'md'} color={ele.score > 50 ? "#3fc066" : "#eebd4d"}>
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
