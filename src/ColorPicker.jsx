/* eslint-disable no-unused-vars */
import React, {useState} from "react";

function ColorPicker(){

    // eslint-disable-next-line no-unused-vars
    const [color, setColor] = useState("#FFFFFF")

    function handleColor(event){
        setColor(event.target.value);
    }
    return(<div>
        <h1>Color Picker</h1>
        <div className="displayColor" style={{ backgroundColor:color }}>
            <p>Selected Color: {color}</p>
        </div>  
        <label htmlFor="">Select a Color:</label>
        <input type="color" name="" value={color} onChange={handleColor} />
    </div>);   
}
export default  ColorPicker