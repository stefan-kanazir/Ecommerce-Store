import React from 'react';
import CartItem from "./CartItem";

export default function CartList({value}) {
    const {cart} = value;
    console.log(value);

    return (
        <div className="container-fluid">
            Hello from cart list
            <CartItem></CartItem>
        </div>
    )
}
