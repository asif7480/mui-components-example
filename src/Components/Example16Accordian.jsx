import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import {  ExpandMore } from "@mui/icons-material"
import React, { useState } from 'react'

const Example16Accordian = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
        <Container width={300}>
            <Accordion 
                expanded={expanded === 'panel1'}
                onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}
                >
                <AccordionSummary 
                    id="panel1-header" 
                    aria-controls='panel1-content' 
                    expandIcon={<ExpandMore />} >
                        <Typography>Accordian 1</Typography>    
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ducimus dolore deserunt, quasi ipsum voluptatibus ea fugiat maiores harum obcaecati atque laudantium iusto tenetur adipisci magnam soluta corrupti laboriosam enim dolor ratione dolorem corporis eos facere? Necessitatibus aspernatur iure ad sunt voluptate cupiditate maxime! Ipsam totam quidem cumque excepturi amet.</Typography>
                </AccordionDetails>
            
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}
            >
                <AccordionSummary 
                    id="panel2-header" 
                    aria-controls='panel2-content' 
                    expandIcon={<ExpandMore />} >
                        <Typography>Accordian 2</Typography>    
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ducimus dolore deserunt, quasi ipsum voluptatibus ea fugiat maiores harum obcaecati atque laudantium iusto tenetur adipisci magnam soluta corrupti laboriosam enim dolor ratione dolorem corporis eos facere? Necessitatibus aspernatur iure ad sunt voluptate cupiditate maxime! Ipsam totam quidem cumque excepturi amet.</Typography>
                </AccordionDetails>
            
            </Accordion>
            <Accordion
                expanded={ expanded === 'panel3'}
                onChange={(e, isExpanded) => handleChange(isExpanded, 'panel3')}
            >
                <AccordionSummary 
                    id="panel3-header" 
                    aria-controls='panel3-content' 
                    expandIcon={<ExpandMore />} >
                        <Typography>Accordian 3</Typography>    
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ducimus dolore deserunt, quasi ipsum voluptatibus ea fugiat maiores harum obcaecati atque laudantium iusto tenetur adipisci magnam soluta corrupti laboriosam enim dolor ratione dolorem corporis eos facere? Necessitatibus aspernatur iure ad sunt voluptate cupiditate maxime! Ipsam totam quidem cumque excepturi amet.</Typography>
                </AccordionDetails>
            
            </Accordion>
        </Container>
        
    </>
  )
}

export default Example16Accordian