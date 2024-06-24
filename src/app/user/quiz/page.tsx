"use client";

import Quiz from "@/components/quiz/Quiz";
import { Fab } from "@mui/material";
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
          position: "fixed",
          top: "0",
          right: "0",
          margin: "10px",
        }}
      >
        <CloseOutlinedIcon />
      </Fab>
      <Quiz />
    </>
  );
};

export default Page;
