import { IconButton, Stack } from "@mui/material"
import { Button } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';

const Example2Button = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant="text">Mui text button</Button>
            <Button variant="contained">Mui contained button</Button>
            <Button variant="outlined">Mui outlined button</Button>
            <Button variant="text" href="https://www.google.com">Mui linked button</Button>
        </Stack>
    
        <Stack spacing={2} direction="row">
            <Button  variant="contained" color="primary">Mui primary button</Button>
            <Button variant="contained" color="secondary">Mui secondary button</Button>
            <Button variant="contained" color="error">Mui error button</Button>
            <Button variant="contained" color="warning">Mui warning button</Button>
            <Button variant="contained" color="info">Mui info button</Button>
            <Button variant="contained" color="success">Mui success button</Button>
        </Stack>
        
        <Stack spacing={2} direction="row">
            <Button variant="contained" size="small">Mui small button</Button>
            <Button variant="contained" size="medium">Mui medium button</Button>
            <Button variant="contained" size="large">Mui large button</Button>
        </Stack>
    
        <Stack spacing={2} direction="row">
            <Button 
                variant="contained" 
                startIcon={<InstagramIcon/>}
                disableElevation
            > 
                Mui Instagram 
            </Button>
            <Button 
                variant="contained" 
                endIcon={<InstagramIcon/>}
                disableRipple
            > 
                Mui Instagram 
            </Button>
            <IconButton color="secondary" size="large">
                <InstagramIcon />
            </IconButton>
        </Stack>
    </Stack>
  )
}

export default Example2Button