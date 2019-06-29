import React, {useState} from 'react';
import {Navbar} from './Navbar/Navbar'
import {Banner} from "./Banner/Banner";
import {Menu} from './Menu/Menu'
import {MenuDialog} from "./MenuDialog/MenuDialog";
import {GlobalStyle} from './Styles/GlobalStyle'
import {Order} from './Order/Order'

function App() {
    const [openFood, setFoodOpen] = useState();

  return (
    <>

        <GlobalStyle/>
        <MenuDialog openFood={openFood} setFoodOpen={setFoodOpen}/>
        <Navbar/>
        <Order/>
        <Banner/>
        <Menu setFoodOpen={setFoodOpen}  />
      </>
  );
}

export default App;
