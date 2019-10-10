const styles ={
    root: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        width: "80%"
    },
    form: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        marginTop: "1rem",
        "& form": {
            width: "100%",
        }
    },
    formBtn: {
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        "& button":{
            width: "100%",
            padding: "1rem",
            fontSize: '1.2rem',
        }
    },
    chromePicker:{
        width: "100% !important"
    },
    formInput:{
        width: "100%", 
    }
}

export default styles;