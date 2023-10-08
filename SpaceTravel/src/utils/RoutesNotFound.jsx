import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function RouteNotFound({ children }) {
    return (
      <Routes>
        {children}
        <Route path="*" element={<div>NOT FOUND 404</div>}></Route>
      </Routes>
    );
  }
  