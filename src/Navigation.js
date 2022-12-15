import './App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import Mainpage from './Mainpage';
import Create from './Create';
import User from './User';

function Navigation() {

    const [value, setValue] = useState(0);

    const  changeTab = (event, newValue) =>  {
        setValue(newValue)
        console.log(newValue)
    }


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
        </Box>
        <Box sx={{ width: 500 }}>
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


