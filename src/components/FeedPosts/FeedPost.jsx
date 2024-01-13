import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

function FeedPost() {
  return (
    <>
    <PostHeader/>
    {/* post body */}
    <Box>
        <Image src='/img1.png' alt='user profile pic'/>
    </Box>
    <PostFooter/>
    </>
  )
}

export default FeedPost