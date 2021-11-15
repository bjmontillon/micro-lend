import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material'

export default function ExitAdmin () {
  return (
    <>
        <Link to="/micro-lend" exact style={{ textDecoration: 'none' }}>
            <IconButton>
                <Typography variant='button'>Exit Admin</Typography>
            </IconButton>
        </Link>
    </>
  );
}
