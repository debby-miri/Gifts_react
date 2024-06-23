import Switch from '@mui/joy/Switch';
import React from 'react';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import GiftsStore from '../Data/GiftsStore';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import { postOpinion } from '../Data/OpinionServer';
import { getAllGifts } from '../Data/GiftsServer';




export default function AddOpinion({ gift, handleClose }) {
  const [text, setText] = React.useState('');
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const [positiveOpinion, setIsPos] = React.useState(true);
  const gId = gift.giftId;
  async function sendOpinion() {
    handleClose();
    let msg = await postOpinion({ "description": text, "positiveOpinion": positiveOpinion, "giftId": gId }).then(x=>{
      if(GiftsStore.IsOpinion){
        GiftsStore.sortByOpinion();
    }
    })
  // await getAllGifts();


  }
  return (
    <>
      <div className='opinionData'>



        <Switch
          component="label"
          size="sm"
          startDecorator="☹️"
          endDecorator="😊"
          checked={positiveOpinion === true}
          onChange={(event) =>
            setIsPos(event.target.checked ? true : false)
          }
        />
        <Textarea
          placeholder="Type in here…"
          value={text}
          onChange={(event) => setText(event.target.value)}
          minRows={3}
          maxRows={15}
          color={positiveOpinion === true ? "primary" : "danger"}
          startDecorator={
            <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
              <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                👍
              </IconButton>
              <IconButton variant="outlined" color="neutral" onClick={addEmoji('❤️')}>
                ❤️
              </IconButton>
              <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                😍
              </IconButton>

            </Box>
          }
          endDecorator={
            <>
              <Typography level="body-xs" sx={{ ml: 'auto' }}>
                {text.length} character(s)
              </Typography>

            </>
          }
          sx={{ minWidth: 300 }}
        />
        <br></br>
        <br></br>
        <div className='button-send-opinion'>
          <Button variant="outlined" onClick={sendOpinion}>
            send
          </Button>
        </div>
        <br></br>
      </div>
    </>
  )
}