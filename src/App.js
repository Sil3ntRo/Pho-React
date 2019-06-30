import React, {useState} from 'react';
import {Navbar} from './Navbar/Navbar'
import {Banner} from "./Banner/Banner";
import {Menu} from './Menu/Menu'
import {MenuDialog} from "./MenuDialog/MenuDialog";
import {GlobalStyle} from './Styles/GlobalStyle'
import {Order} from './Order/Order'
import {useOpenFood} from "./Hooks/useOpenFood"
import {useOrders} from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";
import {useAuthenticaion} from "./Hooks/useAuthentication";
import {OrderDialog} from "./Order/OrderDialog";
import {useOrderDialog} from "./Hooks/useOrderDialog";

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    const auth = useAuthenticaion();
    const orderDialog = useOrderDialog();

    useTitle({...openFood, ...orders});

  return (
    <>

        <GlobalStyle/>
        <OrderDialog {...orderDialog} {...orders}/>
        <MenuDialog {...openFood} {...orders}/>
        <Navbar  {...auth}/>
        <Order {...orders} {...openFood} {...auth} {...orderDialog}/>
        <Banner/>
        <Menu {...openFood} />
      </>
  );
}

export default App;
