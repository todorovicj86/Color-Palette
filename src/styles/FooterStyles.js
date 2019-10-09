import mediaquery from './mediaquery'
 const styles = {
    root: {
        alignItems: "center",
        display: "flex",
        fontWeight: 'bold',
        justifyContent: "flex-end",
        
        height: "4vh",
        [mediaquery.down('sm')]: {
            display: 'none',
            height:   "0"
        },
        [mediaquery.down('xs')]: {
            display:  'none',
            height:   "0"
        },
        
    },
    emoji: {
        fontSize: "1.3rem",
        margin: "0 1rem",
    }
}

export default styles;