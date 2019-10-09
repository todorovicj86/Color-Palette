// import mediaquery from './mediaquery'
export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        margin: " 0 auto",
        width: "100%",
        "&:hover": {
            "& button":{
                opacity: "1",
                color: "white"
            }
        },
    
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
        position: "relative",
        "&:hover":{
            cursor: "pointer",
            color: "blue"
        }

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",

    },

    delete: {
        position: "absolute!important",
        top: "0!important",
        left: "0",
        opacity: "0",
        borderRadius: "0",
        backgroundColor: "rgb(233,108,108)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)!important",
        zIndex: "10",
       
        "&:hover": {
            backgroundColor: "rgba(233,108,108, 0.8)",
            
        }
    },
    dialog: {
        "& button":{
            margin: "20px"
        }
    }
}