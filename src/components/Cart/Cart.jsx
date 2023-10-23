import React, { useContext } from "react";
import { CartContext } from "../../hooks/Context/Context";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {

    const { cart, resetItem, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Empty cart</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${total}</h3>
            <Button onClick={() => resetItem()} className="me-2">Clear cart</Button>
            <Link to="/checkout">
                <Button>
                    Checkout
                </Button>
            </Link>
        </div>
    )

}

export default Cart;