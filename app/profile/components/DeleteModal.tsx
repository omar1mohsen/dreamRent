import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

export default function DeleteModal({open, setOpen , id , handleDelete}:{open : boolean, setOpen : React.Dispatch<React.SetStateAction<boolean>> , id : string , handleDelete : any}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleDeleteProcess = (id : string)=>{
        handleDelete(id)
        handleClose()
    }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want delete this post?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to delete your post? This action cannot be undone. Please confirm by typing “yes” or “no”. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={()=>{handleDeleteProcess(id)}} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}