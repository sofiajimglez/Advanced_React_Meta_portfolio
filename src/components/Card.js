import { Box, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <Box bg='white' borderRadius='lg'>
    <Image src={imageSrc} alt={title} borderRadius='lg' />
    <Box p='5' display='flex' flexDirection='column' gap='3'>
      <Heading size='sm' color='black'>{title}</Heading>
      <Text color='gray'>{description}</Text>
      <Link href="#" target="_blank" color='black'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" color='black'></FontAwesomeIcon></Link>
    </Box>
  </Box>
};

export default Card;
