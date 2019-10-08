import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox'

const DraggableColorBoxList = SortableContainer((props) => {
    return(
        <div style={{height: "100%"}}>
            {props.colors.map((color, index) => (
                    
                <DraggableColorBox 
                    index={index}
                    key={color.name}
                    color={color.color} 
                    name={color.name} 
                    deleteBox = {() => props.deleteBox(color.name)} 
            />
            
            ))}
        </div>
    );
});

export default DraggableColorBoxList;