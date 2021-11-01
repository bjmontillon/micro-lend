import {makeStyles} from '@mui/styles'

const useStyles = makeStyles ({
    footerContainer: {
        height: '15vh',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,

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