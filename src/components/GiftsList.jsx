import { observer } from "mobx-react"
import GiftsStore from "../Data/GiftsStore";
import AddGiftDialog from "./AddGiftDialog";
import AGiftInList from "./AGiftInList";
import Divider from '@mui/material/Divider';
import MoodIcon from '@mui/icons-material/Mood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GiftsList from "./AGiftInList";
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import "./AGiftInList.css"
import FullScreenDialog from "./SearchDialog";
import UserStore from "../Data/UserStore";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { getGiftsOfUser } from "../Data/UserServer";
import { useState } from "react";
const Gifts = observer(() => {
    const [my, setMy] = useState(true);
    const nav = useNavigate();
    const sortOpinion = () => {
        if (GiftsStore.IsOpinion) {
            GiftsStore.IsOpinion = false;
            GiftsStore.sortByDefualt();
        }
        else {
            GiftsStore.IsDate = false
            GiftsStore.IsView = false;
            GiftsStore.sortByOpinion()
        }
    }
    const sortView = () => {
        if (GiftsStore.IsView) {
            GiftsStore.IsView = false;
            GiftsStore.sortByDefualt();
        }
        else {
            GiftsStore.IsDate = false
            GiftsStore.IsOpinion = false
            GiftsStore.sortByView()
        }
    }
    const sortDate = () => {
        if (GiftsStore.IsDate) {
            GiftsStore.IsDate = false;
            GiftsStore.sortByDefualt();
        }
        else {
            GiftsStore.IsOpinion = false
            GiftsStore.IsView = false;
            GiftsStore.sortByDate()
        }
    }

    const login = () => {
        nav("SignIn")
    }
    const register = () => {
        nav("SignUp")
    }
    const logout = () => {
        UserStore.isLogin = false;
        UserStore.setUser({})
    }
    const myGift = () => {
        if (my)
            getGiftsOfUser(UserStore.user.userId);
        else
            GiftsStore.saveTemp(GiftsStore.temp);
        setMy(!my);
    }
    return (
        <>
            <div style={{ textAlign: 'start' }}>
                {
                    !UserStore.isLogin &&
                    <>
                        <Button variant="outlined" onClick={login}>
                            <LoginIcon></LoginIcon>
                            login
                        </Button>
                        &nbsp; &nbsp;
                        <Button variant="outlined" onClick={register}>
                            <HowToRegIcon></HowToRegIcon>
                            register
                        </Button></>
                }
                {UserStore.isLogin &&

                    <Button variant="outlined" onClick={logout}>
                        <LogoutIcon></LogoutIcon>
                        logout
                    </Button>

                }
            </div>

            <img id='logoIMG' src={logo} alt="Logo" />

            <Divider></Divider>
            <br></br>
            <FullScreenDialog button="SEARCH A GIFT" ></FullScreenDialog>
            &nbsp;&nbsp; &nbsp;&nbsp;

            <AddGiftDialog button="ADD A GIFT" giftEdit={{}}  ></AddGiftDialog>
            &nbsp;&nbsp; &nbsp;&nbsp;
            {UserStore.isLogin &&

                <Button variant="outlined" onClick={myGift}>
                  {my?'show my ':'all the '}   gifts 
                    
                    &nbsp;<FormatListNumberedRtlIcon fontSize='large'></FormatListNumberedRtlIcon >
                </Button>


            }
            <br></br>
            <br></br>
            <Divider></Divider>
            <br></br>
            <Button variant="outlined" onClick={sortOpinion} style={{ backgroundColor: GiftsStore.IsOpinion ? '#c3c3c394' : '', fontSize: '20px' }}>
                sort by satisfaction &nbsp;<MoodIcon ></MoodIcon >
            </Button>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Button variant="outlined" onClick={sortDate} style={{ backgroundColor: GiftsStore.IsDate ? '#c3c3c394' : '', fontSize: '20px' }} >
                sort by date&nbsp; <AccessTimeIcon ></AccessTimeIcon >
            </Button>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Button variant="outlined" onClick={sortView} style={{ backgroundColor: GiftsStore.IsView ? '#c3c3c394' : '', fontSize: '20px' }}>
                sort by views&nbsp; <VisibilityIcon fontSize='medium'></VisibilityIcon >
            </Button>
            <br></br>
            <br></br>

            <Divider></Divider>
            <br></br>     <br></br>
            <div className='sl'>
                <div>{GiftsStore.GiftsList.map((gift, i) => {
                    return <AGiftInList my={my} key={i} gift={gift} ></AGiftInList>
                })}
                </div>
            </div>
        </>
    )

}
)


export default Gifts

