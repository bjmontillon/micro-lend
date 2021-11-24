import {makeStyles} from '@mui/styles'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'

const useStyles = makeStyles ({
    footerContainer: {
        height: '25vh',
        width: '100%',
        display: 'flex',
        position: 'relative',
        bottom: 0,
        borderTop: '1px solid black',
    },
    footerLinkWrapper: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    footerLinks: {
        display: 'flex',
        justfyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
})
const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footerContainer}>
        <div className={classes.footerLinkWrapper}>
            <Grid item lg={2} className={classes.footerLinks}>
                <div>
                    <Link>FB</Link>
                    <Link>twitter</Link>
                    <Link>github</Link>
                </div>
            </Grid>
            </div>
        </div>
    )
}

export default Footer