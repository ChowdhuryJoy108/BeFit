
import { Box} from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box sx={{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
     gap:1,
  }}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </Box>
);

export default HorizontalScrollbar;