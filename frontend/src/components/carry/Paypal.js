import React, { useEffect, useState } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import generateStore from '../../redux/store'
import { addOneProduc } from '../../redux/carrito/carrito';

export default function PayPal(props) {
    const carritoUser = props.productosAMostar
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);

    useEffect(() => {

        PayPalCheckOut()

    }, [carritoUser]);

    const initialOptions = {
        "client-id": "AcDpda9-r04A8dyg6DEe1VcyBnp46zLMOzggKMS_beirwbd3d9qs3f8BZ1t28NPshl71Z_MDvrz6TM8u",
        currency: "USD",
        intent: "capture",

    };
    /*     let productsId = carritoUser.map(items => items.id)
        //mapeo de id de productos
    
    
        console.log(productsId) //para que????
    
     */

    const createANewOrder = (data, actions) => {



        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                    description: "items",
                    amount: {
                        value: addOneProduc(carritoUser),
                    },

                },


            ],
            /////////////////////////////////////////////////////////////////////////

            //opcional!!! Debe hacerse dinamico
            /* purchase_units: [{
                reference_id: "PUHF",
                description: "Sporting Goods",

                custom_id: "CUST-HighFashions",
                soft_descriptor: "HighFashions",
                amount: {
                    currency_code: "USD",
                    value: "230.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "180.00"
                        },
                        shipping: {
                            currency_code: "USD",
                            value: "30.00"
                        },
                        handling: {
                            currency_code: "USD",
                            value: "10.00"
                        },
                        tax_total: {
                            currency_code: "USD",
                            value: "20.00"
                        },
                        shipping_discount: {
                            currency_code: "USD",
                            value: "10"
                        }
                    }
                },
                items: [{
                    name: "T-Shirt",
                    description: "Green XL",
                    sku: "sku01",
                    unit_amount: {
                        currency_code: "USD",
                        value: "90.00"
                    },
                    tax: {
                        currency_code: "USD",
                        value: "10.00"
                    },
                    quantity: "1",
                    category: "PHYSICAL_GOODS"
                },
                {
                    name: "Shoes",
                    description: "Running, Size 10.5",
                    sku: "sku02",
                    unit_amount: {
                        currency_code: "USD",
                        value: "45.00"
                    },
                    tax: {
                        currency_code: "USD",
                        value: "5.00"
                    },
                    quantity: "2",
                    category: "PHYSICAL_GOODS"
                }
                ],
                shipping: {
                    method: "United States Postal Service",
                    address: {
                        name: {
                            full_name: "John",
                            surname: "Doe"
                        },
                        address_line_1: "123 Townsend St",
                        address_line_2: "Floor 6",
                        admin_area_2: "San Francisco",
                        admin_area_1: "CA",
                        postal_code: "94107",
                        country_code: "US"
                    }
                }
            }] */
            ////////////////////////////////////////////





        });
    };
    const checkToApprove = (data, actions) => {

        console.log(data)


        return actions.order.capture()
            .then(function (details) {
                const { payer } = details; //para que usar payer???
                console.log(payer);
                setSuccess(true);
                console.log('Capture result', details, JSON.stringify(details, null, 2));
                var transaction = details.purchase_units[0].payments.captures[0];
                alert('Transaction ' + transaction.status + ': ' + transaction.id + 'See console for all available details');
                console.log(details)
                setOrderID(transaction.id)
            });
    };





    const aCancel = (data) => {
        console.log('order cancelled!', data);
    }

    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment. Try again en few hours ");
    };

    const PayPalCheckOut = () => {
        return (
            <PayPalScriptProvider options={initialOptions}>

                {/*Inicializo los botones*/}
                <PayPalButtons
                    createOrder={createANewOrder}
                    onApprove={checkToApprove}
                    onError={onError}
                    onCancel={aCancel}
                />
            </PayPalScriptProvider>
        )
    }
    return (
        <PayPalCheckOut />
    );
}