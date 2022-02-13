import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Icon from '../assets/image/profile.png'
import WBackIcon from '../assets/image/pro_w-back.jpg'


const Chat = (props) => {
    const isQuestion = (props.type === 'question')

    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="Remy Sharp" src={WBackIcon} />
                ) : (
                    <Avatar alt="Remy Sharp" src={Icon} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat