import { Stack, ToggleButtonGroup ,ToggleButton } from "@mui/material"
import { FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material"
import { useState } from "react"

const Example4ToggleButton = () => {
  const [formats, setFormats] = useState([]) 
  
  const handleFormatChange = (e, updatedFormats) => {
    setFormats(updatedFormats)
  }
  
  return (
    <>
    
        <Stack direction="row">
            <ToggleButtonGroup 
                aria-label="text foramtting" 
                value={formats} 
                onChange={handleFormatChange}
                size="small"
                color="success"
                orientation="vertical"
            >
                <ToggleButton value="bold" aria-label="bold"> 
                    <FormatBold />
                </ToggleButton>

                <ToggleButton value="italic" aria-label="italic"> 
                    <FormatItalic  />
                </ToggleButton>

                <ToggleButton value="underlined" aria-label="underlined"> 
                    <FormatUnderlined />
                </ToggleButton>
                
            </ToggleButtonGroup>
           
        </Stack>
        
    </>
  )
}

export default Example4ToggleButton