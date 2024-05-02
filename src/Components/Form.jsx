import React from 'react';
import { Box, Grid, Paper, Typography, TextField, Button } from '@mui/material';

function Form() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={8} md={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Form;
