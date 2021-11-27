import {makeStyles} from '@mui/styles'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'
import { CgFacebook, CgTwitter } from "react-icons/cg";

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
        justifyContent: 'flex-end',
    },
    footerLinks: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    socialLinks: {
        display: 'flex',
        minWidth: '100%',
        justifyContent: 'space-evenly',
    },
})
const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerLinkWrapper}>
                <Grid item lg={4} className={classes.footerLinks}>
                    <div className={classes.socialLinks}>
                        <Link><CgFacebook /></Link>
                        <Link><CgTwitter /></Link>
                        <Link>github</Link>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default Footer