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
import AddIcon from '@mui/icons-material/Add';
import GenderEventsCategoryStore from "../Data/GenderEventsCategoryStore";
import { AddGift } from '../Data/GiftsServer';
import Swal from 'sweetalert2';
import './AGiftInList.css'
import GiftsStore from '../Data/GiftsStore';
import UserStore from '../Data/UserStore';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddGiftDialog({ button }) {

  
    const [open, setOpen] = React.useState(false);
    const GenderArray = GenderEventsCategoryStore.Gender;
    const EventsArray = GenderEventsCategoryStore.Events;
    const CategoryArray = GenderEventsCategoryStore.Category;
    const [gift, setGift] = React.useState({})
    const [Cat, setCat] = React.useState('1')  
    if (open&&!UserStore.isLogin) {
        setOpen(false);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "you are not allowed!",
            footer: '<a href="SignIn">sign in</a>'
        })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(gift);
        const fieldCount = Object.keys(gift).length;
        if (fieldCount !== 10) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are mandatory!",
            });
            return;
        }
        AddGift(gift).then(x => {
            if (GiftsStore.IsDate) {
                GiftsStore.sortByDate();
            } if (GiftsStore.IsOpinion) {
                GiftsStore.sortByOpinion();
            }
            setGift({})
            handleClose();
        });
    };
    const handleInputChange = (e) => {
        setGift({
            ...gift, [e.target.name]: e.target.value,
        });
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                add a gift <AddIcon fontSize='large'></AddIcon >
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
                            add a gift
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleFormSubmit}>
                            add
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            required
                            autoFocus
                            margin="dense"
                            id="Name"
                            name="name"
                            label="Name"
                            type="string"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            required
                            autoFocus
                            margin="dense"
                            id="Description"
                            name="description"
                            label="Description"
                            type="string"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            required
                            autoFocus
                            margin="dense"
                            id="Link"
                            name="link"
                            label="Link"
                            type="string"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            required
                            autoFocus
                            margin="dense"
                            id="ImageUrl"
                            name="imageUrl"
                            label="Image Url"
                            type="string"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            required
                            autoFocus
                            margin="dense"
                            id="EstimatedPrice"
                            name="estimatedPrice"
                            label="Estimate price"
                            type="number"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            required
                            onChange={handleInputChange}
                            autoFocus
                            margin="dense"
                            id="StartingAge"
                            name="startingAge"
                            label="Starting Age"
                            type="number"
                            fullWidth
                            variant="standard"
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <TextField
                            onChange={handleInputChange}
                            required
                            autoFocus
                            margin="dense"
                            id="EndingAge"
                            name="EndingAge"
                            label="Ending Age"
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
                                value={gift.genderId}
                                required
                                onChange={handleInputChange}
                                label="Gender"
                                inputProps={{
                                    name: 'genderId',
                                    id: 'genderId',
                                }}>
                                {GenderArray.map((obj) => <MenuItem key={obj.genderId} value={obj.genderId}>{obj.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <FormControl sx={{ mt: 2, minWidth: 500 }}>
                            <InputLabel htmlFor="Events">Events</InputLabel>
                            <Select
                                value={gift.eventsId}
                                required
                                onChange={handleInputChange}
                                label="Events"
                                inputProps={{
                                    name: 'eventsId',
                                    id: 'eventsId',
                                }}>
                                {EventsArray.map((obj) => <MenuItem key={obj.eventsId} value={obj.eventsId}>{obj.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <FormControl sx={{ mt: 2, minWidth: 500 }}>
                            <InputLabel htmlFor="Categry">Categry</InputLabel>
                            <Select
                                value={gift.categryId}
                                required
                                onChange={handleInputChange}
                                label="Categry"
                                inputProps={{
                                    name: 'categryId',
                                    id: 'categryId',
                                }} >
                                {CategoryArray.map((obj) => <MenuItem key={obj.categryId} value={obj.categryId}>{obj.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </ListItemButton>


                </List>
            </Dialog>
        </React.Fragment>
    );
}