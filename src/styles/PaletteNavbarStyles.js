import mediaquery from './mediaquery'

const styles =  {
    PaletteNavbar: {
        display: "flex",
        flexDirection:" row",
        fontFamily: "'Roboto', sans-serif",
        alignItems: "center",
        width: "70%",

        [mediaquery.down('md')]: {
            width: "80%",
        },
        [mediaquery.down('sm')]: {
            flexDirection: props => props.showingFullPalette === false ? "row" : "column",
            height: props => props.showingFullPalette === false ? "6vh" : "10vh",
            width: "100%",
            padding: "10px 20px",
        },
        [mediaquery.down('xs')]: {
            flexDirection: props => props.showingFullPalette === false ? "row" : "column",
            height: props => props.showingFullPalette === false ? "6vh" : "10vh",
            width: "100%",
            padding: "10px 20px",
        },
    },
    logo: {
        backgroundColor: "#ECEFF1",
        display: "flex",
        alignItems: "center",
        padding: "0 7px",
        textAlign: "left",
        height: "100%",
        "& a, a:hover":{
            color: "black",
            textDecoration: "none",
            fontWeight: '500',

        },
  
        [mediaquery.down('sm')]: {
            display: "none",
        },
        [mediaquery.down('xs')]: {
            display:  "none",
        },
    },

    sliderContainer: {
        width: "35%",
        margin: "0 auto",
        paddingLeft: "5px",

        [mediaquery.down('sm')]: {
            width: "100%",
            textAlign: "left",
        },

        [mediaquery.down('xs')]: {
            width: "100%",
            textAlign: "left",
        },

    },

    slider: {
        display: "inline-block",
        width: "65%",
        "& .rc-slider-track, .rc-slider-rail": {
            backgroundColor: "lightgray",
            height: "6px",
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent",
        },
        "& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:focus, rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            width: "16px",
            height:" 16px",
            boxShadow: "none",
        },
        [mediaquery.down('md')]: {
            width: "100%",
        },
        [mediaquery.down('sm')]: {
            width: "70%",
        },
        [mediaquery.down('xs')]: {
            width: "80%",
        },
    },

    sliderLegend: {
        display: "inline-block",
        width: "35%",
        [mediaquery.down('md')]: {
            width: "100%",
        },
    },

    select: {
        textAlign: "center",
        width: "45%",
        margin: "0 auto",
        [mediaquery.down('sm')]: {
            width: "100%",
            textAlign: "left",
        },
        [mediaquery.down('xs')]: {
            width: "100%",
            textAlign: "left",
        },
    },

    hidden: {
        opacity: "0",
        [mediaquery.down('sm')]: {
            display: props => props.showingFullPalette === false ? "none": "",
        },
        [mediaquery.down('xs')]: {
            display: props => props.showingFullPalette === false ? "none": "",
        },
    }

}

export default styles;