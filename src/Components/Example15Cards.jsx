import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Example15Cards = () => {
  return (
    <>
        <Box width="400px" p={2}>
            <Card sx={{ padding: "10px 20px"}}>
                <CardMedia
                    component='img'
                    height='200'
                    image='https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg'    
                />
                 <CardContent>
                    <Typography variant='h5' gutterBottom>
                        I am card heading
                    </Typography>
                    
                    <Typography variant='body2'>
                        I am card body text. I contain demo text. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta eius ducimus sapiente iusto pariatur.
                    </Typography>
                 </CardContent>
                 <CardActions>
                    <Button variant='contained' color='secondary'>Click me</Button>
                    <Button variant='contained'>Click me I am button</Button>
                 </CardActions>
            </Card>

        </Box>
    </>
  )
}

export default Example15Cards