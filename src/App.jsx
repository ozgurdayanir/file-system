import { useState } from 'react'
import './App.css'
import Main from './layouts/Main'

function App() {
  console.log(itemPath);
  return <Main 
  folderName="Örnek Folder"
  sidebar={<>
    <div>Menu 1</div>
  </>}
  />
}

export default App
