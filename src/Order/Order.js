import React from 'react'
import styled from 'styled-components'
import {DialogContent, DialogFooter, ConfirmButton} from "../MenuDialog/MenuDialog";
import {formatPrice} from "../Data/MenuData"
import {getPrice} from "../MenuDialog/MenuDialog"

const OrderWrapper = styled.div`
    position: fixed;
    right: 0px;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    z-index: 10;
    box-shadow: 4px 0px 5px 4px grey;
    display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
        ${({ editable }) =>
    editable
        ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
        : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
    padding: 10px 0px;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styled.div`
    color: gray;
    font-size: 10px;

`

export function Order({orders, setOrders, setFoodOpen}) {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    return <OrderWrapper>
        {orders.length === 0 ? ( <OrderContent>
                Your order's looking pretty empty.
            </OrderContent> ) : (
            <OrderContent>
                {" "}
                <OrderContainer>
                Your order:
            </OrderContainer>{" "}
                {orders.map((order, index) => (
                    <OrderContainer editable>
                        <OrderItem
                            onClick={() => {
                                setFoodOpen({...order, index});
                            }}
                        >
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                            <div style={{cursor: 'pointer'}}
                                 onClick={e => {
                                     e.stopPropagation();
                                deleteItem(index)
                            }}
                            >
                                🗑️</div>
                            <div>{formatPrice(getPrice(order))}</div>
                        </OrderItem>
                        <DetailItem>
                            {order.choices
                                .filter(t => t.checked).map(choice => choice.name)
                                .join(", ")
                            }
                        </DetailItem>
                    </OrderContainer>

                ))}
                <OrderContainer>
                    <OrderItem>
                        <div/>
                        <div>Sub-Total</div>
                        <div>{formatPrice(subtotal)}</div>
                    </OrderItem>
                    <OrderItem>
                        <div/>
                        <div>Tax</div>
                        <div>{formatPrice(tax)}</div>
                    </OrderItem>
                    <OrderItem>
                        <div/>
                        <div>Total</div>
                        <div>{formatPrice(total)}</div>
                    </OrderItem>
                </OrderContainer>
            </OrderContent> )}
        <DialogFooter>
            <ConfirmButton>
                Checkout
            </ConfirmButton>
        </DialogFooter>
    </OrderWrapper>
}