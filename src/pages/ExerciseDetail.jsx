import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  Detail,
  ExerciseVideos,
  SimilarExercises,
} from "../components/components";
import {
  fetchData,
  ExercisesOptions,
  youtubeOptions,
} from "../utils/FetchData";
const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        ExercisesOptions
      );
      setexerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,
        ExercisesOptions
      );
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
        ExercisesOptions
      );
      setEquipmentExercises(equipmentExerciseData);
    };

    fetchExerciseData();
  }, [
    id,
    exerciseDetail.name,
    exerciseDetail.target,
    exerciseDetail.equipment,
  ]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
