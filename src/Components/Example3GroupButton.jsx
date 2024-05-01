import { Button, Stack, Typography } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import React from 'react'

const Example3GroupButton = () => {
  return (
    <>
        <Typography variant='h3'>Button without group</Typography>
        <Stack direction='row'>
            <Button variant='contained'>Left</Button>
            <Button variant='contained'>Center</Button>
            <Button variant='contained'>Right</Button>
        </Stack>



        <Typography variant='h3'>Button with group</Typography>
        <ButtonGroup variant='text'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>    
        </ButtonGroup>

        <Typography variant='h3'>Button with group</Typography>
        <ButtonGroup variant='text' orientation='vertical' size='small' color='secondary'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>    
        </ButtonGroup>
    
    
    </>
  )
}

export default Example3GroupButton