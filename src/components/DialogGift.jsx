import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ShowGiftDetails from './ShowGiftDetails';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddOpinion from './AddOpinion';
import UserStore from '../Data/UserStore';
import Swal from 'sweetalert2';
import { UpdatesViews } from '../Data/GiftsServer';
function SimpleDialog(props) {
    const { onClose, open, gift, dialogFor } = props;

    const handleClose = () => {
        
        onClose()
        if (dialogFor === 'details') {
            UpdatesViews(gift.giftId);
        }
    };



    return (
        <Dialog onClose={handleClose} open={open}>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >

                <CloseIcon />
            </IconButton>
            {dialogFor === "details" ? <ShowGiftDetails gift={gift} ></ShowGiftDetails> : <AddOpinion gift={gift} handleClose={handleClose}></AddOpinion>}

        </Dialog>
    );
}

export default function SimpleDialogDemo({ gift, dialogFor }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        if (dialogFor === 'add an opinion' && !UserStore.isLogin) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "you are not allowed!",
                footer: '<a href="SignIn">sign in</a>'
            })
        }
        else {

            setOpen(true);
        }

    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <Button variant="outlined" onClick={handleClickOpen}>
                {dialogFor}
            </Button>
            <SimpleDialog
                gift={gift}
                open={open}
                onClose={handleClose}
                dialogFor={dialogFor}
            />
        </div>
    );
}
