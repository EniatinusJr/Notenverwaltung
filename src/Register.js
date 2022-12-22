import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { registerWithEmailAndPassword } from './firebase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function Register() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Paper>
            <Grid>
                <Grid>
                    <h3>Register</h3>
                </Grid>
                <Grid>
                    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                </Grid>
                <Grid>
                    <Button variant="contained" onClick={(e) => {registerWithEmailAndPassword(name, email, password)}}>Register</Button>
                </Grid>
            </Grid>
        </Paper>

    );
}

export default Register;
