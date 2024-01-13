import { Avatar, Box,Text, Flex } from '@chakra-ui/react'
import React from 'react'

function PostHeader() {
  return (
    <Flex  justifyContent={"space-between"} my={2} alignItems={'center'} width={"full"}>
        <Flex alignItems={'center'} gap={2} size={'sm'}>
            <Avatar src='./img1.png' alt ='userProfilePic'  />
            <Flex fontSize={12} fontWeight={'bold'} gap={2}> 
                yash ghugardare
                <Box color={"gray.500"}>
                • 1w
                </Box>
            </Flex>
            <Box
            cursor={"pointer"}>
                <Text
                fontSize={12}
                color={"blue.500"}
                fontWeight={"bold"}
                _hover={{
                    color : "white",
                }}
                transition={"0.2s ease-in "}
                >Unfollow </Text>
            </Box>
        </Flex>
    </Flex>
  )
}

export default PostHeader