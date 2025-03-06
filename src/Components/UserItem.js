import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { LinearProgress, List, Box, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';

export default function UserItem(props) {
  return (
    <ListItem >
        <ListItemAvatar>
            <Avatar >
                <ImageIcon></ImageIcon>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.email}></ListItemText>
    </ListItem>
  )
}
