import React from 'react'
import {AppBar, Toolbar, Button} from '@mui/material'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar position='static'>
        <Toolbar>Pizza-Shop</Toolbar>
        <Button variant="inherit" component={Link} to="/karte">Speisekarte</Button>
        <Button variant="inherit" component={Link} to="/zutaten">Zutaten</Button>
        <Button variant="inherit" component={Link} to="/bestellungen">Bestellungen</Button>
    </AppBar>
  )
}
