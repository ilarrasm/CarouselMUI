import { Box } from "@mui/material";
import React from "react";

interface DotsContainerProps {
  itemsLength: number;
  itemActive: number;
}

const arrayEmpty = (length: number) => {
  const array = new Array(length);
  return array;
};

const DotsContainer = ({ itemsLength, itemActive }: DotsContainerProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap="1rem"
      position="absolute"
      bottom="20%"
      zIndex="999"
      width="100%"
    >
      {[...arrayEmpty(itemsLength)].map((_e, i) => (
        <Box
          width="15px"
          height="15px"
          bgcolor={itemActive === i ? "red" : "green"}
          key={`dotCarouselMobile-item-${0}`}
        />
      ))}
    </Box>
  );
};

export default DotsContainer;
