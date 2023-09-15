import { useState } from 'react'
import './App.css'
import NavBar from './componets/NavBar'
import ItemListContainer from './componets/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  function App() {
    return (
      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenido a nuestra tienda en línea" />
      </div>
    );
  }}
  export default App;