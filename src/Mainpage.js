import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { useEffect } from 'react';
import { query,collection,where,onSnapshot } from 'firebase/firestore';


function Mainpage() {

    const [user, error] = useAuthState(auth);


    useEffect(() => {
        getGrades()
      },[]);

    function getGrades(){
        const q = query(collection(db, "Noten"));
          const grades = [];
          onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let object = doc.data();
              object.id = doc.id;
              console.log(object)
            });
          });
    }

    return (
        <Paper>
            <Grid>
                <Grid>
                    Sorry max
                </Grid>
            </Grid>
        </Paper>

    );
}

export default Mainpage;
