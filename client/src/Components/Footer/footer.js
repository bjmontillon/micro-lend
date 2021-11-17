import {makeStyles} from '@mui/styles'

const useStyles = makeStyles ({
    footerContainer: {
        height: '25vh',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        color : 'white',
    }
})
const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footerContainer}>
            <p>footer</p>
        </div>
    )
}

export default Footer