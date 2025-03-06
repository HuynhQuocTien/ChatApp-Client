import React, { useEffect, useState } from 'react'
import withAuthentication from '../Utils/withAuthenticaton'
import axios from 'axios'
import { LinearProgress, List, Box, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import UserItem from './UserItem'

function Sidebar() {
  const BASE_URL = `http://127.0.0.1:8000/`
  const [userList, setUserList] = useState([])
  const [userLoader, setUserLoader] = useState(true)
  const getAuthTokenFromCookie = () => {
    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=')
      if (name.trim() === 'token') {
        return value
      }
    }
    return null;
  }
  useEffect(() => {
    const authToken = getAuthTokenFromCookie()
    if (authToken) {
      axios.get(`${BASE_URL}api/users/`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }).then(response => {
        setUserList(response.data)  // Corrected this line
        console.log(response.data)  // Logging the correct data
        setUserLoader(false)
      }).catch(error => {
        console.error('Error making API request:', error)
      })
    }
  }, [])
  return (
    <div className='sidebar'>
      {userLoader ? (<Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <LinearProgress />
      </Box>) : (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {userList.map((user, index) => (
            <UserItem key={index} email={user.email} name={`${user.first_name} ${user.last_name}`} id={user.id}></UserItem>
          ))}
        </List>
      )
      }
    </div>
  )
}

export default Sidebar;
