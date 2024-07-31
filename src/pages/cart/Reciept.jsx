import React from "react"
import { ShopContext } from "../../context/cart-context"
import { products_data } from "../../products"

export default function Reciept(props){
    const{cart, checkoutFromCart } = React.useContext(ShopContext)

    // Creating reciept
    const reciept_els = products_data.map( product => {
        if(cart[product.id] > 0){
            return (
                <tr>
                    <td>{product.name}</td>
                    <td>{cart[product.id]}</td>
                    <td>{ cart[product.id]*product.price }</td>
                </tr>
            )
        }
        
        return null
    })

    // On confirming order removes reciept element and clear cart list
    function handleConfirm(){
        props.handleReciept()
        checkoutFromCart()
    }
    return(
        <div className="reciept-container flex">
            {/* To only remove the reciept element and NOT clear the list */}
            <i class="bi bi-x-lg" onClick={props.handleReciept}></i>
            <h2>Thanks for your order</h2>
            <h4 className="my-4">Payment summary</h4>

            <table >
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                { reciept_els}
            </table>

            <button className="my-btn" onClick={ handleConfirm }> Confirm </button>
        </div>
    )
}