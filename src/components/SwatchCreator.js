import React from 'react'
import ColorPickerCard from './ColorPickerCard'



const SwatchCreator = (props) => {
    return(
        <div>
            <p>I am a Swatch Creator! My favorite color is {props.faveColor}.</p>
            <ColorPickerCard />
        </div>
    )
}

export default SwatchCreator
