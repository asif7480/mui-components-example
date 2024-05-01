import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"



const Example5TextField = () => {
   
   const [value, setValue] = useState('')
  
   return (
    <>
        <Stack spacing={4}>

            <Stack spacing={2} direction="row">
                <TextField label="name" variant="outlined"/>
                <TextField label="name" variant="filled"/>
                <TextField label="name" variant="standard"/>
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField label="small text field" size="small" color="secondary"/>
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField label="Form input" required/>
                <TextField label="Form input" helperText="do not show your password to anyone" required />
                <TextField label="Password" type="password" required/>

                <TextField 
                    label="Password" 
                    type="password" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    error={!value}
                    helperText={ !value ? "Required": "Do not show your password to anyone"}
                />
                <TextField label="Password" type="password" disabled />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField label="Read Only" inputProps={{ readOnly: true }}  />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField 
                    label="Amout" 
                    InputProps={{ 
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }} 
                />

                <TextField 
                    label="Weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                     }}
                />

            </Stack>
        </Stack>
    </>
  )
}

export default Example5TextField