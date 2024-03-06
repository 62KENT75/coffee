import './sass/style.scss';
import MainPage from './components/MainPage';
import SecondScreen from './components/SecondScreen';
import CoffeeScreen from './components/CoffeeScreen';
import YourPleasureScreen from './components/YourPleasureScreen';
import {useState} from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('main');
  const [selectedItem, setSelectedItem] = useState();

  const handleChangePage = (pageName) => {
    setActivePage(pageName);
  }

  const handleSelectItem = (pickedCard) => {
    setSelectedItem(pickedCard);
    handleChangePage('coffee');
    console.log(pickedCard);
  }


  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet"/>
      </head>
    {activePage === 'main' && <MainPage onChangePage={handleChangePage}/>}
    {activePage === 'about' && <SecondScreen onChangePage={handleChangePage} onSelectedItem={handleSelectItem}/>}
    {activePage === 'coffee' && <CoffeeScreen onChangePage={handleChangePage} selectedItem={selectedItem}/>}
    {activePage === 'pleasure' && <YourPleasureScreen onChangePage={handleChangePage} selectedItem={selectedItem}/>}
    {/* <CoffeeScreen/> */}
    </>
  );
}

export default App;
