import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField, useAutocomplete } from "@mui/material";
import IconButton from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { db, storage, auth } from "./firebase";
import {
  doc,
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";
import FormControlContext from "@mui/material/FormControl/FormControlContext";



function Create() {
  const [grade, setGrade] = useState();
  const [subject, setSubject] = useState("");
  const [weight, setWeight] = useState(1);
  const [title, setTitle] = useState("");
  const AddButton = () => {
    <IconButton>
      <AddIcon />
    </IconButton>;
  };

  function addGrade() {
    addDoc(collection(db, "Noten"), {
      Grade: grade,
      Weight: weight,
      Subject: subject,
    })
      .catch((error) => {
        alert(error.message);
     });
     setTitle("");
     setGrade(undefined);
     setWeight(undefined);
     setSubject("");
  
  }

  return (
    <Box>
      <Grid 
        container spacing={3} 
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
        <Grid item xs={6} md={6}>
          <TextField
            sx={{width: { sm: 200, md: 300 }}} 
            id="title" 
            label="title" 
            variant="outlined" 
            onChange={ (event) => setTitle(event.target.value)}
            value={title}
            required
            margin="normal"
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <TextField
            sx={{width: { sm: 200, md: 300 }}} 
            InputProps={{ inputProps: { min: 1, max: 6 } }}
            type="number"
            id="grade"
            label="grade"
            variant="outlined"
            onChange={ (event) => setGrade(event.target.value)}
            value={grade}
            required
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <TextField
            sx={{width: { sm: 200, md: 300 }}} 
            id="weight"
            label="weight"
            variant="outlined"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 6 } }}
            onChange={ (event) => setWeight(event.target.value)}
            value={weight}
            required
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <TextField
            sx={{width: { sm: 200, md: 300 }}} 
            id="subject"
            label="subject"
            variant="outlined"
            InputProps={{ endAdornment: <AddButton /> }}
            onChange={ (event) => setSubject(event.target.value)}
            value={subject}
            required
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <Button sx={{width: { sm: 200, md: 300 }}} variant="contained" size="large" onClick={addGrade} type='submit'>
            submit
          </Button>
        </Grid>
      </Grid>

    </Box>
  );
}

export default Create;
