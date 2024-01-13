import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

function PageLayout({ children }) {
  // current URL
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* sidebar on the left side */}
      {pathname !== "/auth" ? (
        <Box w={{base:"70px",md:"240px"}}>
          <SideBar />
        </Box>
      ) : null}
      {/* page content on the right side */}
      <Box
      flex={1}
      w = {{base:"calc(100% -70px)",md:"calc(100%-240px)"}}
      >{children}</Box>
    </Flex>
  );
}

export default PageLayout;
