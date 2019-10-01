export default {
    colorPalette: {
        backgroundColor: "white",
        height: "100vh",
        overflow: "auto",
    },
    header: {
        display: "flex",
        flexDirection:"row",
        width: "100%",
        height:"6vh",
         // "& div:first-child div:nth-child(2)": {
        //     opacity: "0",
        // }
    },
    link: {
        alignItems: "center",
        display: "flex",
        marginRight: "7px",
        width: "30%",
        "& button, button:hover":{
            background: "transparent",
            flex: "0 1 auto",
            marginLeft: "auto",
            color: "black",
        }

    },
    linkBack: {
        color: "black",
        "& i":{
            marginRight: "5px",
        },
        "&:hover":{
            textDecoration: "none",
            color:"blue"
        }
    },
    colorBoxesContainer: {
        height: "90vh",
    }

}