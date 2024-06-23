import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import SimpleDialogDemo from "./DialogGift";

export default function AGiftInList({ gift }) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{gift.name}</Typography>
        <Typography level="body-sm">{gift.description}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={gift.imageUrl}
          srcSet={gift.imageUrl}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Estimate price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {gift.estimatedPrice}
          </Typography>
        </div>
        </CardContent>
        <CardContent orientation="horizontal">

        <SimpleDialogDemo gift={gift} dialogFor="details" ></SimpleDialogDemo>
        <SimpleDialogDemo  gift={gift} dialogFor="add an opinion"></SimpleDialogDemo>
      </CardContent>
    </Card>
  );
}
