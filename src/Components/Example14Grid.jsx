import { Box, Grid, Paper } from "@mui/material"



const Example14Grid = () => {
  return (
    <>
        <Paper sx={{ padding: "20px"}}>
            <Grid container my={2} rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>Item 3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
        

    
    </>
  )
}

export default Example14Grid