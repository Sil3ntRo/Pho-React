import React from 'react'
import styled from 'styled-components'
import {FoodLabel} from "../Menu/MenuGrid";
import {leafyGreen} from "../Styles/colors";
import {Title} from "../Styles/title";
import {formatPrice} from "../Data/MenuData";
import {Quantity} from "./Quantity";
import {useQuantity} from "../Hooks/useQuantity";
import {Choices} from "./Choices";
import {useChoices} from "../Hooks/useChoices";

export const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 11;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 10px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${leafyGreen};
`

export const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 11;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({img}) => `background-image: url(${img});`}
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
    return order.quantity * (order.price + order.choices.filter(t => t.checked).length * pricePerTopping);
}

function hasChoices(food) {
    return food.section === 'Pho Rice Noodle Soups' ||
           food.section === 'Noodle Soup Varieties' ||
           food.section === 'Rice Vermicelli' ||
           food.section === 'Fried Rice';

}

 function MenuDialogContainer({openFood, setFoodOpen, setOrders, orders}) {
     const quantity = useQuantity(openFood && openFood.quantity);
     const choices = useChoices(openFood.choices);
     const isEditing = openFood.index > -1;

    function close() {
        setFoodOpen();
    }

    const order = {
       ...openFood,
        quantity: quantity.value,
        choices: choices.choices
    }

     function editOrder(newOrder) {
         const newOrders = [...orders];
         newOrders[newOrder.index] = order;
         setOrders(newOrders);
         close();
     }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }
    
    
   return (
       <>
               <DialogShadow onClick={close}/>
               <Dialog>
                   <DialogBanner img={openFood.img} >
                       <DialogBannerName>
                           {openFood.name}
                       </DialogBannerName>
                   </DialogBanner>
                   <DialogContent>
                       <Quantity quantity={quantity}/>
                       {hasChoices(openFood) && (
                           <>
                               <h3> Would you like Extra's? </h3>
                               <Choices {...choices}/>
                           </>
                       )}

                   </DialogContent>
                   <DialogFooter>
                       <ConfirmButton
                           onClick={isEditing ? editOrder : addToOrder}

                       >
                           {isEditing ? `Update order: ` : `Add to order: `}
                           {formatPrice(getPrice(order))}
                       </ConfirmButton>
                   </DialogFooter>
               </Dialog>
       </>
        );
}

export function MenuDialog(props) {
    if (!props.openFood) return null;
    return <MenuDialogContainer {...props} />;
}
