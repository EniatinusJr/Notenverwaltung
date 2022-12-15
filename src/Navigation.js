import './App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import Mainpage from './Mainpage';
import Create from './Create';
import User from './User';
import Login from './Login';
import { useEffect } from 'react';


function Navigation() {

    const [value, setValue] = useState(0);
    const [user, error] = useAuthState(auth);


    const  changeTab = (event, newValue) =>  {
        setValue(newValue)
        console.log(newValue)
    }


    useEffect(() => {
        if (!user) setValue(3);
    },[user]);


    return (
        <>
        <Box>
            {value == 0
                ? <Mainpage></Mainpage>
                : <></>
            }
            {value == 1
                ? <Create></Create>
                : <></>
            }
            {value == 2
                ? <User></User>
                : <></>
            }
            {value == 3
                ? <Login></Login>
                : <></>
            }
        </Box>
        <Box sx={{ width: 500}}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {changeTab(event,newValue);}}> 
                    <BottomNavigationAction label="Mainpage" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Create" icon={<AddBoxIcon />} />
                    <BottomNavigationAction label="Users" icon={<SettingsIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
        </>
    );
}

export default Navigation;


