import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

export default function HeroBanner() {
    return (
        <Box sx={
            {
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }} position='relative' p='20px'>

            <Typography color='#FF2625' fontWeight='600' fontSize='26px' marginBottom={2}>
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }} 
                mb='25px' mt='30px'
            >
                Sweat,Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' marginBottom={5}>
                Check out the most effective exercises
            </Typography>

            <Button variant="contained" color='error' 
            sx={{backgroundColor:'#ff2625', padding:"10px"}}
            href='#exercises'>Explore Exercise</Button>
            <Typography
              fontWeight={600}
              color='#ff2625'
              sx={{
                opacity:0.1,
                display:{lg:'block', xs:'none'},
                fontSize:'205px'
              }}
              
            >
                Exercise
            </Typography>
            <img  src={HeroBannerImage} alt="Hero banner" className='hero-banner-img' />
        </Box>
    )
}