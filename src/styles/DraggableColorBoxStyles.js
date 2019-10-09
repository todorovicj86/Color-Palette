import chroma from 'chroma-js'
import mediaquery from './mediaquery'

 const styles = {
    root: {
        display: "inline-block",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        width: "20%",
        verticalAlign: "middle",
        "&:hover i": {
            color: "white",
            transform: "scale(1.2)"
        },
        [mediaquery.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [mediaquery.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [mediaquery.down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        alignItems: 'center',
        bottom: "0",
        color: props => chroma.contrast(props.color, 'white') >= 4.5 ? "white" : "black",
        display: "flex",
        fontSize: "12px",
        left: "0",
        letterSpacing: "1px",
        justifyContent: "space-between",
        padding: "5px",
        position: "absolute",
        textTransform: "uppercase",
        width: "100%",

    },
    deleteIcon: {
        color: props => chroma.contrast(props.color, 'white') >= 4.5 ? "white" : "black",
        padding: "0",
        transition: "all 0.5s ease-in-out",
        fontSize: "11px",
    
    }

}

export default styles;