import { Box } from '@mui/material'
import React from 'react'

const Example12Box = () => {
  return (
    <>
        <Box sx={{ 
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            transition: "0.2s",
            ' &:hover': {
                backgroundColor: 'primary.light'
            }
        }}>
            This is a example text
        </Box>

        <Box display="flex" height="200px" width="100px" bgcolor="success.light" p={2}> 
          This is another box
        </Box>
    </>
  )
}

export default Example12Box