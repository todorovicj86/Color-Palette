export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#d7dbdc",
        borderRadius: "5px",
        height: "150px",
        overflow: "hidden",
        width: "100%",

    },
    color:{
        display: "inline-block",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        width: "20%",
        verticalAlign: "middle",
        
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color:"black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",

    }
}