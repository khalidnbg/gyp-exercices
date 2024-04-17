import React from "react";
import { Box, Stack } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyPart }) => (
  <Box mt={4} sx={{ display: "flex", overflowX: "auto" }}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        ml={2} // Add spacing between items
      >
        {isBodyPart ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </Box>
);

export default HorizontalScrollbar;
