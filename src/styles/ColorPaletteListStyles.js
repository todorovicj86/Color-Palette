import mediaquery from './mediaquery'

const styles = {
    "@global": {
        ".fade-exit": {
            opacity: 1,
        },
        
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out",
        }
    },
    root: {
        alignItems: "flex-start",
        // backgroundColor: "blue",
        color: "white",
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "center",
        height: "100vh",
    },
    container: {
        alignItems: 'flex-start',
        display: "flex",
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: "50%",
        [mediaquery.down("xl")]: {
            width: "60%",
        },
        [mediaquery.down("lg")]: {
            width: "70%",
        },
        [mediaquery.down("md")]: {
            width: "80%",
        },
        [mediaquery.down("xs")]: {
            width: "70%",
        }
    },
    navbar: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        height: "10vh",
        width: "100%",
    },
    title: {
        [mediaquery.down("md")]: {
            fontSize: "2rem",
        },
        [mediaquery.down("xs")]: {
            fontSize: "1.2rem",
        },

 
    },
    link: {
        "& a" :{
            color: "white",
        },
        [mediaquery.down("md")]: {
            textAlign: "right",
            fontSize: "1.5rem"
        },
        [mediaquery.down("xs")]: {
            fontSize: "0.8rem",
        },
   

    },

    palettes: {
        boxSizing: "border-box",
        width:"100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2rem",
        [mediaquery.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",
            gridGap: "1.5rem",
        },
        [mediaquery.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.5rem",
        }
    },

}


export default  styles;