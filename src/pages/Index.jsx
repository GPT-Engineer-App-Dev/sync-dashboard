import { Box, Container, Heading, Text, VStack, Badge } from "@chakra-ui/react";

const mockData = [
  {
    customerName: "Customer A",
    recentActivity: "synced",
    errors: 2
  },
  {
    customerName: "Customer B",
    recentActivity: "failed",
    errors: 5
  },
  {
    customerName: "Customer C",
    recentActivity: "synced",
    errors: 0
  }
];

const activityColor = {
  synced: "green",
  failed: "red"
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>Shopify Product Sync Dashboard</Heading>
      <VStack spacing={5} align="stretch">
        {mockData.map((data, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading size="md">{data.customerName}</Heading>
            <Text mt={2}>
              Recent Activity: <Badge colorScheme={activityColor[data.recentActivity]}>{data.recentActivity}</Badge>
            </Text>
            <Text mt={1}>
              Errors: <Badge colorScheme={data.errors > 0 ? "red" : "green"}>{data.errors}</Badge>
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;