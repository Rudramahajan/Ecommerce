import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={9} ref={ref} variant="filled" {...props} />;
});

const MessageAlert = ({ open, setOpen, message, color }) => {
  return (
      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={1000}>
        <Alert severity={color} sx={{ width: '20vw' ,height:'7vh'}}>
          {message}
        </Alert>
      </Snackbar>
  );

}

export default MessageAlert;