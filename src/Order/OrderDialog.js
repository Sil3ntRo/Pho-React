import React from 'react'
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../MenuDialog/MenuDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}) {
    return openOrderDialog ? <>
            <DialogShadow/>
            <Dialog>
                <DialogContent>
                    <h2> 🚚 Your order is on the way!</h2>
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick={() => {
                        setOrders([]);
                        setOpenOrderDialog();
                    }}>
                        I'm still hungry
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </> : <div/>
}