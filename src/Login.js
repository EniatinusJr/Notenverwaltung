import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { logInWithEmailAndPassword } from './firebase';
import Register from './Register';
import { Box } from '@mui/system';


function Login() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Paper>
            <Grid
              container spacing={3} 
              direction="column"
              alignItems="center"
              justifyContent="center"
              >
                <Box mt={2}>
                  <Grid>
                      <h3>Login</h3>
                  </Grid>
                </Box>
                <Grid>
                <TextField 
                  id="outlined-basic" 
                  label="Email" 
                  variant="outlined" 
                  onChange={(e) => setEmail(e.target.value)} 
                  margin="normal"
                  />
                </Grid>
                <Grid>
                <TextField 
                  id="outlined-basic" 
                  label="Password" 
                  type="password" 
                  variant="outlined" 
                  onChange={(e) => setPassword(e.target.value)} 
                  margin="normal"
                  />
                </Grid>
                <Box mt={2}>
                  <Grid>
                    <Box mt={2}>
                      <Button 
                          variant="contained" 
                          onClick={(e) => {logInWithEmailAndPassword(email,password)}}
                          >Login</Button>
                    </Box>
                  </Grid>
                  <Grid>
                    <Box mt={2}>
                      <Button 
                        variant="contained" 
                        onClick={(e) => {handleClickOpen()}}
                        >Register</Button>
                    </Box>
                  </Grid>
                </Box>
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <Register></Register>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
                </Dialog>
            </Grid>
        </Paper>

    );
}

export default Login;
