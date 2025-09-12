import { Slider } from '@mui/material'
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Box from '@mui/material/Box';
const DoublePriceSlider = () => {
    const {minScaleValue , maxScaleValue ,selectedRange , setSelectedRange} = useContext(ProductContext)
    
    function valuetext () {
        return `$ ${selectedRange}`
    }
    const handleChange = (event,newValue) => {
        setSelectedRange(newValue)
    }
    return (
        <Box sx={{ width: '90%', px: 1, mx: 'auto'}}>
            <Slider
                value={selectedRange}  //has to be an array of 2 numbers 
                onChange={handleChange}
                min={minScaleValue}
                max={maxScaleValue}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
    </Box>
  );
}
export default DoublePriceSlider