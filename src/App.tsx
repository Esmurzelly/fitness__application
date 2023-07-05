import { useState } from 'react'
import Navbar from '@/scenes/navbar' // we dont have to add index.tsx. it takse automatically

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  return (
    <div className='app bg-gray-20'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App