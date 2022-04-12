import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {connect, useDispatch} from 'react-redux'


function MySnackbar(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    console.log(props.snackbar) 
    
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch({
      type: 'message',
      payload: {
        view: false,
        message: '',
        success: false
      }
    });
  
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    
    <div>
      {props.snackbar.view === true && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={props.snackbar.view}
          onClose={handleClose}
          autoHideDuration={3000}
          >
          
             {(typeof props.snackbar.message) === "string" ?
              (<p>{props.snackbar.message}</p>) :
              <ul>
                {props.snackbar.message.map(message =>
                  <li>{message.message}</li>
                )}
              </ul>
            }
            <IconButton  size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton> 
              </Snackbar>
        
      )}

    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        snackbar: state.userReducer.snackbar,
        
    }
  }
  
export default connect(mapStateToProps, null)(MySnackbar);