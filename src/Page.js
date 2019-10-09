import React from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles/PageStyles.css'

function Page(props){
    
    return(
        <div className="page">
            {props.children}
        </div>
    )
}

export default withStyles(styles)(Page);