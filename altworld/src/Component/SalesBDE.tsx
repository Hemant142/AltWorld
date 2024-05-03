import { Box, Button, Heading, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { MdEdit } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { BsBoxFill } from "react-icons/bs";
let data=[
  {
  id:1,
  name:"Saurav Sing",
  avatar:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  video:"https://youtu.be/Q2buKtHF_sA?si=NRafkhUBCO8OICDp",
  email:"saurav@gmail.com",
  score:78,
  behavioural:9,
  communication:8,
  situationHandling:8
},
{
  id:2,
  name:"Pinku Sing",
  avatar:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  video:"https://youtu.be/Fjlsrgye0Cs?si=DzRse4hoS8uGUE6g",
  email:"pinku@gmail.com",
  score:72,
  behavioural:8,
  communication:8,
  situationHandling:8
},
{
  id:3,
  name:"Priyansh",
  avatar:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  video:"https://youtu.be/I6IAhXM-vps?si=h9M2p_42K-BJSq2n",
  email:"priyansh@gmail.com",
  score:64,
  behavioural:7,
  communication:6,
  situationHandling:6
},
{
  id:4,
  name:"Shriya",
  avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
  video:"https://youtu.be/GWGbOjlJDkU?si=Bw0XLQElplrt3JwI",
  email:"shriya@gmail.com",
  score:33,
  behavioural:3,
  communication:4,
  situationHandling:3
},
{
  id:5,
  name:"Saurav Sing",
  avatar:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  video:"https://youtu.be/i3ku5nx4tMU?si=icZsdqnTuwS3HHP6",
  email:"saurav@gmail.com",
  score:51,
  behavioural:3,
  communication:8,
  situationHandling:6
},
{
  id:6,
  name:"Mohini",
  avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
  video:"https://youtu.be/rF3VXg8UUus?si=ANi2ERTrPcP8GNHI",
  email:"mohini@gmail.com",
  score:44,
  behavioural:4,
  communication:5,
  situationHandling:4
}
]

export default function SalesBDE() {
  return (
    <Box width={"100%"}>
      <Box display="flex"  alignItems="center" justifyContent="space-between" width={"100%"} mb={"5"}>
        <Heading as='h6' size='md' >
          Sales BDE
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size='md' textAlign="right" color="#2ebd59" marginRight={"2"}>
            Active
          </Heading>
          <Button size="sm" boxShadow="lg" bg="white">
            <MdEdit/>
          </Button>
        </Box>
      </Box>
      <Box display="flex"  alignItems="center" justifyContent="space-between" width={"100%"} mb={"3"} >
        <Heading as='h6' size='sm' color="#8894a6" >
          Assignment Link
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size='sm' textAlign="right" color="#398eff" marginRight={"2"}>
            https://tiny/url/asknakdna/
          </Heading>
        </Box>
      </Box>
      <Box display="flex"  alignItems="center" justifyContent="space-between" width={"100%"} mb={"3"}>
        <Heading as='h6' size='sm' color="#8894a6" >
          Assignment Hour
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size='sm' textAlign="right" color="#8894a6" marginRight={"2"}>
            3 hours
          </Heading>
        </Box>
      </Box>
      <Box display="flex"  alignItems="center" justifyContent="space-between" width={"100%"} mb={"3"}>
        <Heading as='h6' size='sm' color="#8894a6" >
          Assignment Ends at
        </Heading>
        <Box display={"flex"} alignItems="center">
          <Heading as='h6' size='sm' textAlign="right" color="#8894a6" marginRight={"2"}>
           11 March 2024
          </Heading>
        </Box>
      </Box>
      <Box display="flex"  alignItems="center" gap={"5"} width={"100%"} mt={"6"} >
        <Box> 
          <Button size="sm" bg="white" boxShadow="lg">
            <BsBoxFill/>TO REVIEW
          </Button>
        </Box>
       
        <Box> 
          <Button size="sm">
            <IoDocuments/>SHORTLISTED
          </Button>
        </Box>
      </Box>
      {/* Display table */}
      <Box>
      <TableContainer>
  <Table variant='striped'>
   
    <Thead>
      <Tr>
        <Th>CANDIDATE</Th>
        <Th isNumeric>SCORE</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((ele)=>(
        <Tr>
        <Td>
          <Box display={"flex"} gap={"2"}>
            <Image src={ele.avatar} width={"50px"} />
<Box>
<Heading as='h6' size='xs'>
    {ele.name}
  </Heading>
  <Text  color="#8894a6" fontSize='sm'>{ele.email}</Text>
</Box>
          </Box>
         
        </Td>
        <Td isNumeric>{ele.score>50?( <Heading as='h4' size='md' color={"#3fc066"}>
    {ele.score} %
  </Heading>):( <Heading as='h4' size='md' color={"#eebd4d"}>
    {ele.score}%
  </Heading>)}</Td>
      </Tr>
      ))}
      
     
    </Tbody>
  </Table>
</TableContainer>
      </Box>
    </Box>
  );
}
