import { useState } from "react";
import { Box } from "@mui/material";
import {
  HeroBanner,
  SearchExercises,
  Exercises,
} from "../components/components";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises 
       bodyPart={bodyPart}
       setExercises={setExercises}
       exercises={exercises} />
    </Box>
  );
};

export default Home;
