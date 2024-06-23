import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSide from './components/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp'
import ListOfGifts from './components/AGiftInList'
import AGiftInList from './components/AGiftInList'
import GiftsList from './components/GiftsList'
import SimpleDialogDemo from './components/DialogGift'
import { getAllGifts } from './Data/GiftsServer'
import GiftsStore from './Data/GiftsStore'
import { getAllCategory, getAllEvents, getAllGender } from './Data/GenderEventsCategoryServer'
function App() {
  getAllCategory();
  getAllEvents();
  getAllGender();
  getAllGifts();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GiftsList />} />
          <Route path="SignIn" element={<SignInSide />} />
          <Route path='home' element={<GiftsList></GiftsList>}></Route>
          <Route path="SignUp" element={<SignUp></SignUp>} />
          <Route path="*" element={<h1>page not found</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
