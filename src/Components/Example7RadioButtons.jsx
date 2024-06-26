import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material"
import { useState } from "react"

const Example7RadioButtons = () => {
  const[value, setValue] = useState('')
  console.log(value)
  const handleValue = (e) => setValue(e.target.value)
  return (
    <>
        <Box>
            <FormControl>
                <FormLabel id="job-experience-group-label">Years of experience</FormLabel>
                <RadioGroup 
                    // name="job-experience-group" 
                    // aria-labelledby="job-experience-group-label" 
                    value={value} 
                    onChange={handleValue}
                    row
                    >
                        <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value='0-2'/>
                        <FormControlLabel control={<Radio />} label="3-5" value='3-5'/>
                        <FormControlLabel control={<Radio />} label="6-10" value='6-10'/>
                </RadioGroup>
            </FormControl>
        </Box>
    </>
  )
}

export default Example7RadioButtons