import { Box } from "@chakra-ui/react";

export const ItemListContainer = ({products}) => {
    return(
      <Box
        width={"100vh"}
        height={"90vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
       >
        {products}
       </Box>
    );
};
