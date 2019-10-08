import chroma from 'chroma-js'
export default {
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