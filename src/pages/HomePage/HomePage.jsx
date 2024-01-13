import { Container, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'

function HomePage() {
  return (
    <Container
    maxW={"container.lg"}
    >
      <Flex gap={20}>
        <Box flex={2} py={10}>
            {/* feed post */}
            <FeedPosts/> 
        </Box>
        <Box 
        display={{base:"none",lg:"block"}}
        flex={3}
        mr={20}
        maxW={"300px"}
        >
            {/* suggest users */}
            suggested users
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage