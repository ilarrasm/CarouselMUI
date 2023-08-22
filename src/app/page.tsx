"use client";
import Carousel from "@dbwear/components/features/Carousel/Carousel";
import { Box, styled } from "@mui/material";

const MainStyled = styled(Box)`
  display: grid;
  width: 100%;
  height: 100vh;
`;

const IMGS = [
  "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1594578254908-1a00d0c9d2b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=673&q=80",
  "https://images.unsplash.com/photo-1616020453784-a24fa9845b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1558386621-37b91293b289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

export default function Home() {
  return (
    <MainStyled>
      {IMGS.length}
      <Carousel images={IMGS} />
    </MainStyled>
  );
}
