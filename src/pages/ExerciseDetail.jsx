import { useParams } from "react-router-dom"


const ExerciseDetail = ()=>{
    const {id} = useParams()
    return(
        <h1>this is our {id} exercise Pages</h1>
    )
}

export default ExerciseDetail