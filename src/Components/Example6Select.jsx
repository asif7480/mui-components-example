import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

const Example6Select = () => {
   const [country, setCountry] = useState("")
   const [countries, setCountries] = useState([])




   const handleCountry = (e) => setCountry(e.target.value)

   const handleCountries = (e) => {
      const value = e.target.value
      setCountries(typeof value === 'string' ? value.split(','): value)
   } 
   
   console.log(country);
   console.log(countries);
   return (
    <>
        <Box width="250px">
            <TextField 
                label="Select Country" 
                select 
                value={country} 
                onChange={ handleCountry }
                fullWidth
            >
                    <MenuItem value="Pak">Pakistan</MenuItem>
                    <MenuItem value="Aus">Australia</MenuItem>
                    <MenuItem value="Tur">Turkey</MenuItem>
            </TextField>

            <TextField 
                label="Select Country" 
                select 
                value={countries} 
                onChange={(e) => setCountries(e.target.value)}
                // onChange={handleCountries}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                size="small"
                color="secondary"
                helperText="please Select your country"
            >
                    <MenuItem value="Pak">Pakistan</MenuItem>
                    <MenuItem value="Aus">Australia</MenuItem>
                    <MenuItem value="Tur">Turkey</MenuItem>
            </TextField>
        
        </Box>
    </>
  )
}

export default Example6Select