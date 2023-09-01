/* eslint-disable no-unused-vars */

import { Wrap } from './components/Wrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailMovie } from './components/DetailMovie/DetailMovie'
import React from 'react'
import { UpcomingRoute } from './components/UpcomingMovDetails.jsx/UpcomingRoute'
import { Footer } from './components/Footer/Footer'
export const App = () => {
    return (
        <>
            < Routes >
            
                <Route element={< Wrap />} path='/' />
                <Route element={< DetailMovie />} path='/:id' />
                <Route element={<UpcomingRoute/>} path='/upcoming'/>
                
            </Routes >
            <Footer/>
        </>
    )
}
