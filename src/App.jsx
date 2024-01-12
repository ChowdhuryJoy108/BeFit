
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'

import {Navbar,Footer} from './components/components'
import {Home, ExerciseDetail} from './pages/pages'


function App(){
  return (
    <Box width="400px" sx={{ width: { xl:'1488px'}}}>
       <Navbar />
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
       </Routes>
       <Footer />
    </Box>
  )
}

export default App


