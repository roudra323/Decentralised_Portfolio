import {
  Flex,
  Text,
  VStack,
  Box,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";

function Projects() {
  return (
    <Box textAlign="center" pt={50}>
      <Text as="h3" fontSize="4xl" fontWeight="bold">
        Projects
      </Text>
      <Divider orientation="horizontal" />
      {/* Add your projects content here */}
    </Box>
  );
}

export default Projects;
