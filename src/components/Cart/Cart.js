import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";

export default class Card extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart"/>
                <CartColumns />
            </section>
        )
    }
}