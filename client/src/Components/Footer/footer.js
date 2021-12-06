import {makeStyles} from '@mui/styles'
import {Grid} from '@mui/material'
import { CgFacebook, CgTwitter } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";

const useStyles = makeStyles ({
    footerContainer: {
        height: '25vh',
        width: '100%',
        display: 'flex',
        position: 'fixed',
        bottom: '0pt',
        left: '0pt',
        right: '0pt',
        border: '1px solid black',
        flexDirection: 'column',
    },
    footerLinkWrapper: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#e8f5e9',
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
        alignItems: 'center',
    },
    footerContent: {
        border: '1px solid black',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerLinkWrapper}>
                <Grid item lg={3} className={classes.footerLinks}>
                    <div className={classes.socialLinks}>
                        <a href='https://web.facebook.com/profile.php?id=100011215170729' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }} ><CgFacebook /></a>
                        <a href='https://twitter.com/PangilinanBj' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}><CgTwitter /></a>
                        <a href='https://github.com/bjmontillon' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}><VscGithub /></a>
                    </div>
                    
                </Grid>
            </div>
            <div>
            
            <Grid item sm={12} className={classes.footerContent} >
            <div >
                <p>hello</p>
            </div>
            
        </Grid>
            </div>

        </div>
    )
}

export default Footer