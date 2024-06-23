
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GenderEventsCategoryStore from "../Data/GenderEventsCategoryStore";

export default function ShowGiftDetails({ gift }) {
    const [showOpinion, setShowOpinion] = React.useState(false)
    const [Opinion, setOpinion] = React.useState("Show opinion")
    const GenderArray = GenderEventsCategoryStore.Gender;
    const EventsArray = GenderEventsCategoryStore.Events;
    const CategoryArray = GenderEventsCategoryStore.Category;

    function handleClick() {
        if (showOpinion) {
            setOpinion("Show opinion")
        }
        else {
            setOpinion("Close opinion")
        }
        setShowOpinion(!showOpinion)
    }
    return (<>
        {/* <h1>{gift.Name}</h1> */}
        <Card sx={{ width: 320 }}>
            <div>
                {/*
       
         OpinionsList: [],
          */}
                <Typography level="title-lg">{gift.name}</Typography>
                <hr></hr>
                <Typography fontWeight="lg" level="title-m">{gift.description}</Typography>
                <hr></hr>
                <Typography fontWeight="lg" level="body-sm">number of views: {gift.numberOfViews}</Typography>
                <hr></hr>
                <Typography fontWeight="lg" level="body-sm">for ages: {gift.startingAge}-{gift.endingAge}</Typography>
                <hr></hr>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={gift.imageUrl}
                    srcSet={gift.imageUrl}
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <hr></hr>
            <CardContent orientation="horizontal">
                <div className="warpData">
                    <Typography level="body-xs">estimate price:&nbsp;</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {gift.estimatedPrice}
                    </Typography>
                </div>
                <hr></hr>
                <div className="warpData">
                    <Typography level="body-xs">events:&nbsp;</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {gift.eventsId > 0 && gift.eventsId <= EventsArray.length && EventsArray[gift.eventsId - 1]["name"]}

                    </Typography>
                </div>
                <hr></hr>
                <div className="warpData">
                    <Typography level="body-xs">categry: &nbsp;</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {gift.categryId > 0 && gift.categryId <= CategoryArray.length && CategoryArray[gift.categryId - 1]["name"]}
                    </Typography>
                </div>
                <hr></hr>
                <div className="warpData">
                    <Typography level="body-xs">gender:&nbsp;</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {gift.genderId > 0 && gift.genderId <= GenderArray.length && GenderArray[gift.genderId - 1]["name"]}
                    </Typography>
                </div>
                <hr></hr>
                <div className="warpData">
                    <Typography level="body-xs">date of entry:&nbsp;</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {new Date(gift.dateOfEntry).toLocaleDateString()}
                    </Typography>
                </div>
                <hr></hr>
                <div className="warpData">
                    <Typography fontSize="lg" fontWeight="lg">
                        <Link color="inherit" href={gift.link} underline="hover">click here to buy me 👆</Link>
                    </Typography>
                </div><hr></hr>


            </CardContent>
            <Button variant="outlined" onClick={handleClick}>
                {Opinion}
            </Button>
            {/* {console.log(gift.opinionsList[0].positiveOpinion)} */}
            {showOpinion && gift.opinionsList.map((op, i) => {
                return <div className="opinionShowWarp" key={i}>
                    <p><span className="likeOrUnlike">{op.positiveOpinion ? '👍' : '👎'}</span>{op.description}  </p>
                    <Divider></Divider>
                </div>
            })


            }
        </Card>




    </>)


}


