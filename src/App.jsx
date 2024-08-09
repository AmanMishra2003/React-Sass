import { useState } from 'react'
import Button from './components/Button'
import Cards from './components/Cards'
import Color from './components/Color'
import Grid from './components/Grid'
import Navbar from './components/navbar'
import './scss/index.scss'

function App() {

  return (
    <>
    <Navbar/>
    < div className='container'>
    <Color/>
      <Button/>
      <Cards/>
      <Grid/>
    </div>
    </>
  )
}

export default App
