
import {Box, Typography, Stack, Pagination} from '@mui/material'
import ExerciseCard from './ExerciseCard'
import {useState,useEffect} from 'react'
import { ExercisesOptions, fetchData } from '../utils/FetchData';


export default function Exercises({bodyPart, exercises, setExercises}){

    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);

    // Search with category
    useEffect(()=>{

        // for category wise searches 
        const fetchExerciseData = async()=>{
            // console.log('fetching exercise data..')
            let exerciseData = [];

            if(bodyPart === 'all'){
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', ExercisesOptions)
            }else{
                exerciseData = await  fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,ExercisesOptions)
            }

            //manipulate setExercises for catagory search 

            setExercises(exerciseData)
        };

        fetchExerciseData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[bodyPart])

    //pagination

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate =(event,value) =>{
        setCurrentPage(value);
        window.scrollTo({top:1800, behavior:'smooth'})
    }






    return(
        <Box id="exercises" sx={{mt:{lg:'109px'}}} mt='50px' p='20px'>
            
            <Typography variant='h4' fontWeight='bold' sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='46px' >Showing Results</Typography>

            <Stack direction='row' sx={{gap:{lg:'107px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
                {
                    currentExercises.map((exercise, idx)=>(
                        <ExerciseCard key={idx} exercise={exercise} />
                    ))
                }
            </Stack>

            <Stack sx={{mt:{lg:'114px', xs:'70px'}}} alignItems='center' >
                {exercises.length > exercisesPerPage && (
                    <Pagination

                    color='standard'
                    shape='rounded'
                    defaultPage={1}
                    count={Math.ceil(exercises.length / exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size='large'
                    
                    />
                
                )}
            </Stack>
        </Box>
    )
}