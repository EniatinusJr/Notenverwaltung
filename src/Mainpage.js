import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { useEffect, useState } from 'react';
import { query,collection,where,onSnapshot } from 'firebase/firestore';


function Mainpage() {

    const [user, error] = useAuthState(auth);
    const [grades, setGrades] = useState([])


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
              grades.push(object)
              console.log(object)
            });
          });
          setGrades(grades)
        
        }

    return (
        <Paper>
            <Grid>
                <Grid>
                    <h1>Notenverwaltung</h1>
                </Grid>
                <Grid>
                  {grades.map( (grade,k) => <p>{grade?.Title} {grade?.Grade}</p> )}
                </Grid>
            </Grid>
        </Paper>

    );
}

export default Mainpage;
