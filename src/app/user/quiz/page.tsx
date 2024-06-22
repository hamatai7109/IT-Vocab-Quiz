"use client";

import Quiz from "@/components/quiz/Quiz";
import { Box, Button, Container, Fab, Typography } from "@mui/material";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Page = () => {
  return (
    <>
      <Fab
        color="primary"
        size="small"
        href="home"
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          margin: "10px",
        }}
      >
        <CloseOutlinedIcon />
      </Fab>

      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "400px",
          padding: 3,
        }}
      >
        <Quiz />
      </Container>
    </>
  );
};

export default Page;
