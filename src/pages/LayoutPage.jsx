import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import Player from '../components/Player/Player'

export default function LayoutPage() {
  return (
    <div>
      <div>
        <Header />
        <Player />
      </div>
        <Outlet />
    </div>
  )
}
