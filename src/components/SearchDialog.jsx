import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GenderEventsCategoryStore from '../Data/GenderEventsCategoryStore';
import { getAllGiftsFilter } from '../Data/GiftsServer';
import GiftsStore from '../Data/GiftsStore';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ button }) {
    const GenderArray = GenderEventsCategoryStore.Gender;
    const EventsArray = GenderEventsCategoryStore.Events;
    const CategoryArray = GenderEventsCategoryStore.Category;
    const [open, setOpen] = React.useState(false);
    const [s, setS] = React.useState({  })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);


    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        getAllGiftsFilter(s).then(x => {
            console.log(x);
            if (GiftsStore.IsDate) {
                GiftsStore.sortByDate();
            } else if (GiftsStore.IsOpinion) {
                GiftsStore.sortByOpinion();
            } else if (GiftsStore.IsView)
                GiftsStore.sortByView()
            setS({})
            handleClose();
        });
    };
    const handleInputChange = (e) => {
        
        setS({
            ...s, [e.target.name]: e.target.value,
        });
    };
    
    console.log(s);


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                search a gift  <SearchIcon fontSize='large'></SearchIcon>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Search a gift
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleFormSubmit}>
                            search
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItemButton>

                        <TextField

                            autoFocus
                            margin="dense"
                            id="EstimatedPrice"
                            name="EstimatedPrice"
                            label="Estimate price"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={handleInputChange}
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            autoFocus
                            margin="dense"
                            id="Age"
                            name="Age"
                            label="Age"
                            type="number"
                            fullWidth
                            variant="standard"

                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <FormControl sx={{ mt: 2, minWidth: 500 }}>
                            <InputLabel htmlFor="Gender">Gender</InputLabel>

                            <Select
                                onChange={handleInputChange}
                                defaultValue='1'
                                value={s.Gender}
                                label="Gender"
                                inputProps={{
                                    name: 'Gender',
                                    id: 'Gender',
                                }}
                            >
                                {GenderArray.map((obj) => <MenuItem key={obj.genderId} value={obj.genderId}>{obj.name}</MenuItem>)}

                            </Select>
                        </FormControl>


                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <FormControl sx={{ mt: 2, minWidth: 500 }}>
                            <InputLabel htmlFor="Events">Events</InputLabel>

                            <Select
                                onChange={handleInputChange}
                                //defaultValue='1'
                                value={s.Events}
                                autoFocus
                                label="Events"
                                inputProps={{
                                    name: 'Events',
                                    id: 'Events',
                                }}
                            >
                                {EventsArray.map((obj) => <MenuItem key={obj.eventsId} value={obj.eventsId}>{obj.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <FormControl sx={{ mt: 2, minWidth: 500 }}>
                            <InputLabel htmlFor="Categry">Categry</InputLabel>

                            <Select
                                onChange={handleInputChange}
                                defaultValue='1'
                                value={s.Categry}
                                autoFocus
                                label="Categry"
                                inputProps={{
                                    name: 'Categry',
                                    id: 'Categry',
                                }}
                            >
                                {CategoryArray.map((obj) => <MenuItem key={obj.categryId} value={obj.categryId}>{obj.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </ListItemButton>
                </List>
            </Dialog>
        </React.Fragment>
    );
}