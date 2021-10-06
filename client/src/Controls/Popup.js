import {React } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Controls from '../Controls/Controls'



export default function Popup(props) {


    const useStyles = makeStyles({

    })


    const { title, children, openPopup, setOpenPopup} = props;

    const classes = useStyles()
    return(
        <div>
            <Dialog open={openPopup}>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Controls.Button
                        className={classes.updateButton}
                        size="small"
                        text="CLOSE"
                        variant="text"
                        onClick={() => setOpenPopup(false)}/>
                </DialogActions>
                
            </Dialog>
        </div>
    )
}