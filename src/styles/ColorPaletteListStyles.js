export default {
    root: {
        alignItems: "flex-start",
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        // flexWrap: 'wrap',
        justifyContent: "center",
        height: "100vh",
    },
    container: {
        alignItems: 'flex-start',
        display: "flex",
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: "60%",
    },
    navbar: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        height: "10vh",
        width: "100%",
    },
    title: {
 
    },
    link: {
        "& a" :{
            color: "white",
        }

    },

    palettes: {
        boxSizing: "border-box",
        width:"100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    },

}