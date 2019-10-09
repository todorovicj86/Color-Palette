import {DRAWER_WIDTH} from '../constants'
import mediaquery from './mediaquery'

const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      
      navBtn: {
          display: "flex",
          padding: "0 10px",
          "& button": {
            marginLeft: "10px",
            [mediaquery.down("sm")]: {
              padding: "0.3rem!important",
              marginLeft: "5px"
            }
          }

      },
     
      goBackLink: {
        "&:hover":{
          textDecoration: "none"
        }
    
      }
})

export default styles;