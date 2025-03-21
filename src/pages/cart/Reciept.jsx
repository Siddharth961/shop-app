import React from "react";
import { ShopContext } from "../../context/cart-context";
import { products_data } from "../../products";

export default function Reciept(props) {
    const { cart, checkoutFromCart } = React.useContext(ShopContext);

    // Calculate total sum
    let total_sum = 0;
    const reciept_els = products_data.map(product => {
        if (cart[product.id] > 0) {
            const itemTotal = cart[product.id] * product.price;
            total_sum += itemTotal;
            return (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{cart[product.id]}</td>
                    <td>{itemTotal}</td>
                </tr>
            );
        }
        return null;
    });

    // On confirming the order, remove the receipt element and clear the cart list
    function handleConfirm() {
        props.handleReciept();
        checkoutFromCart();
    }

    return (
        <div className="reciept-container flex">
            {/* To only remove the receipt element and NOT clear the list */}
            <i className="bi bi-x-lg" onClick={props.handleReciept}></i>
            <h2>Thanks for your order</h2>
            <h4 className="my-4">Payment summary</h4>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {reciept_els}
                </tbody>
                {/* Add the total row at the end */}
                <tfoot>
                    <tr>
                        <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total</td>
                        <td>{total_sum}</td>
                    </tr>
                </tfoot>
            </table>

            <button className="my-btn" onClick={handleConfirm}>Confirm</button>
        </div>
    );
}
