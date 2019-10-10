import React from 'react'
import {SortableElement} from 'react-sortable-hoc';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles/DraggableColorBoxStyles'

const DraggableColorBox = SortableElement((props) =>{
    const {classes, color, name, deleteBox} = props;
    return(
        <div className={classes.root}
            style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span> {name}</span>
               <IconButton  onClick={deleteBox} className={classes.deleteIcon}>
                    <i className = {`fas fa-trash ${classes.deleteIcon}`}></i>
                </IconButton>
            </div>
            
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);