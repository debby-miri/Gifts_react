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

import "./AGiftInList.css"
import FullScreenDialog from "./SearchDialog";
const Gifts = observer(() => {
    // useEffect(() => {
    //     const res = GiftsList();

    // }, [])
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
    return (
        <>

            <img id='logoIMG' src={logo} alt="Logo" />

            <Divider></Divider>
            <br></br>
            <FullScreenDialog button="SEARCH A GIFT" ></FullScreenDialog>
            &nbsp;&nbsp; &nbsp;&nbsp;

            <AddGiftDialog button="ADD A GIFT"></AddGiftDialog>
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
                    return <AGiftInList key={i} gift={gift} ></AGiftInList>
                })}
                </div>
            </div>
        </>
    )

}
)


export default Gifts

