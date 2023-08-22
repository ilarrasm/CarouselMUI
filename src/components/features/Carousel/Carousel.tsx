"use client";

import { Box, styled } from "@mui/material";
import Image from "next/image";
import React, { memo, useRef, useState } from "react";
import { ItemCarousel } from "./components/ItemCarousel/ItemCarousel";
import { useCarousel } from "./hooks/useCarousel";
import DotsContainer from "./components/DotsContainer/DotsContainer";

interface CarouselProps {
  images: string[];
}

const StyledContainerMaster = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
`;

const StyledContainerChildren = styled(Box)`
  position: relative;
  flex: 0 0 100%;
  transition: transform 2s ease-in-out;
  height: 100%;
`;


const Carousel = ({ images }: CarouselProps) => {
  const { handleTouchStart, handleTouchEnd, currentIndex, transition } =
    useCarousel(images.length);
  return (
    <StyledContainerMaster
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {currentIndex}
      <StyledContainerChildren>
        {images.map((src, positionIndex, array) => (
          <ItemCarousel
            currentIndex={currentIndex}
            indexElement={positionIndex}
            lengthElements={array.length}
            key={src + positionIndex}
          >
            <Image
              src={src}
              width={200}
              height={200}
              alt={`${positionIndex} alt`}
            />
          </ItemCarousel>
        ))}
        <DotsContainer itemsLength={images.length} itemActive={currentIndex} />
      </StyledContainerChildren>
    </StyledContainerMaster>
  );
};

export default memo(Carousel);

// si un imagen está activa debe tener transformX(0)
// la anterior a dicha foto debe tener transformX(-100%)
// la siguiente a dicha foto debe tener transformX(100%)
// si la primera imagen está activa, la última tendra transformX(-100%)
// si la ultima imagen está activa, la primera tendra transformX(100%)
