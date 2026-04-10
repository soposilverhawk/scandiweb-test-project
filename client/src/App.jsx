import { useState } from 'react'
import './App.css'
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <ContentWrapper>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </ContentWrapper>
  )
}

export default App
