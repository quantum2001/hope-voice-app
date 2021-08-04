import NavBar from './components/NavBar'
import Main from './components/InventoryMain'
import './inventory.css'

function Iventory() {
  return (
    <div className='container'>
      <NavBar />
      <Main />
    </div>
  );
}

export default Iventory;
