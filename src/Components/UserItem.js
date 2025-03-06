import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { LinearProgress, List, Box, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'


export default function UserItem() {
  return (
    <ListItem >
        <ListItemAvatar>
            <Avatar >

            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.email}></ListItemText>
    </ListItem>
  )
}
