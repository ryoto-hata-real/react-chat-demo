import React from 'react';
import {Chat} from './index'
import List from '@mui/material/List';

const Chats = (props) => {
    return (
        <List id='scroll-area' sx={{ padding: 0, height: 400, overflow: 'auto', width: '100%', bgcolor: 'background.paper' }}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
            })}
        </List>
    )
}

export default Chats