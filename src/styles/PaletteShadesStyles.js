import mediaquery from './mediaquery'

const styles = {
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
 
        [mediaquery.down('sm')]: {
            height:  "6vh",
        },
        [mediaquery.down('xs')]: {
            height: "6vh",
        },
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
        },
        [mediaquery.down('md')]: {
            width:  "20%" ,
        },
        [mediaquery.down('sm')]: {
            width: "20%",
        },
        [mediaquery.down('xs')]: {
            width: "30%",
        },

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
        [mediaquery.down('sm')]: {
            height: "94vh",
        },
        [mediaquery.down('xs')]: {
            height: "94v",
        },
    }

}

export default styles;