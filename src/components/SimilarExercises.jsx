
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'

export default function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  console.log(targetMuscleExercises)

  return (
    <Box sx={{
        mt:{
            lg:'100px',
            xs:'0'
        }
    }}>

        <Typography variant='h3' pl={3} m={5}>
            Exercises that target same muscle group
        </Typography>
        <Stack direction='row' sx={{p:'2', position:'relative'}}>
            {targetMuscleExercises.length && <HorizontalScrollbar data={targetMuscleExercises} />}
        </Stack>
        <Typography variant='h3' pl={3} m={5}>
            Exercises that use same Equipment
        </Typography>
        <Stack direction='row' sx={{p:'2', position:'relative'}}>
            {targetMuscleExercises.length && <HorizontalScrollbar data={equipmentExercises} />}
        </Stack>
    </Box>
  )
}
