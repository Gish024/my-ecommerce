import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../../Context/CartContext";
import './AlertDialog.css';


export default function AlertDialog({ purchaseID }) {

  const [open, setOpen] = React.useState(false);

  const { clearCart } = useCartContext();

  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    clearCart();
  };

  return (
    <div>  
      <Button variant="outlined" onClick={handleClickOpen} className='Open'>
        Confirmar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¡Gracias por su compra!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
		      A la brevedad nos estaremos comunicando. El código de tu transacción es: { purchaseID }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/'>          
          <Button onClick={handleClose} autoFocus className='Close'>
            Aceptar
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}



