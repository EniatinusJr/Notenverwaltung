import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { useEffect, useState } from 'react';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Mainpage() {

  const [user, error] = useAuthState(auth);
  const [grades, setGrades] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getGrades()
  }, []);

  useEffect(() => {
    console.log(grades)
    if(grades.length != 0){
      setLoading(false)
    }
  }, [grades]);

  async function getGrades() {
    const q = query(collection(db, "Noten"));
    onSnapshot(q, (querySnapshot) => {
      let arr = []
      querySnapshot.forEach((doc) => {
        let object = doc.data();
        object.id = doc.id;
        arr.push(object)
      });
      setGrades(arr)
    });

  }

  if(loading){
    return (
      <Paper>

      </Paper>
    )
  }

  return (
    <Paper>
      <Grid>
        <Grid>
          <h1>Notenverwaltung</h1>
        </Grid>

        <Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell align="right">Weight</TableCell>
                  <TableCell align="right">Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grades.map((row,k) => (
                  <TableRow key={k}>
                    <TableCell component="th" scope="row">
                      {row?.Subject}
                    </TableCell>
                    <TableCell align="right">{row?.Weight}</TableCell>
                    <TableCell align="right">{row?.Grade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default Mainpage;
