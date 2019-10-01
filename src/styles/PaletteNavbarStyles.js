export default {
    PaletteNavbar: {
        display: "flex",
        flexDirection:" row",
        fontFamily: "'Roboto', sans-serif",
        alignItems: "center",
        width: "70%",
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

        }
    },
    sliderContainer: {
        width: "35%",
        margin: "0 auto",

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
        }
    },

    sliderLegend: {
        display: "inline-block",
        width: "35%",
    },

    select: {
        textAlign: "center",
        width: "45%",
        margin: "0 auto",
    },

    hidden: {
        opacity: "0"
    }

}