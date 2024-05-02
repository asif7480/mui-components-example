import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import { Instagram } from "@mui/icons-material"

const Example18Navbar = () => {
  return (
    <>
        <AppBar position="static" sx={{ backgroundColor: "crimson"}}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit">
                    <Instagram />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}> 
                    Instagram App
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Features</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    
    </>
  )
}

export default Example18Navbar