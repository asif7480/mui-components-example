import { Box, Stack, Divider } from "@mui/material"


const Example13Stack = () => {
  return (
    <>
        <Stack border={1} direction="row" spacing={2} divider={ <Divider orientation="vertical" flexItem/>}>
            <Box 
                height={200} 
                width={200} 
                bgcolor="purple" 
                sx={{ '&:hover': { backgroundColor: "blue" } }} >
                
                This is box 1
            </Box>

            <Box 
                height={200} 
                width={200} 
                bgcolor="purple" 
                sx={{ '&:hover': { backgroundColor: "blue" } }} >
                
                This is box 2
            </Box>
        </Stack>
        
    </>
  )
}

export default Example13Stack