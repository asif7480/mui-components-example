import { Typography } from '@mui/material'

const Example1Typography = () => {
  return (
    <>
        <Typography variant='h1'>h1 heading</Typography> 
        <Typography variant='h2' component="h1">h2 heading</Typography> 
        <Typography variant='h3'>h3 heading</Typography> 
        <Typography variant='h4'>h4 heading</Typography> 
        <Typography variant='h5'>h5 heading</Typography> 
        <Typography variant='h6' gutterBottom>h6 heading</Typography>

        <Typography variant='subtitle1'> Subtitle 1</Typography> 
        <Typography variant='subtitle2'> Subtitle 2</Typography> 

        <Typography variant="body1">body1 Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="body2">body2 Lorem ipsum dolor sit amet.</Typography>
    
    
    </>
  )
}

export default Example1Typography