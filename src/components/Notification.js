import React, { useState, useEffect, useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import cart from "../images/icon-cart.svg";
import { UseLocalStorage } from "./UseLocalstorage";
import { Context } from './context';
import { Badge } from 'react-bootstrap';
import bin from "../images/icon-delete.svg";
function Notification() {
    const {data, setData }= useContext(Context);

   
    const [showPopover, setShowPopover] = useState(false);
   

    useEffect(() => {
        console.log("Updated data:", data);
      }, [data]);

    const handleTogglePopover = () => {
        setShowPopover(!showPopover);
    };
    function deleteCart(){
        setData({ titles: "", picture: "", price: "", quantity: "",  total: "" });
    }
    return (
        <OverlayTrigger
            
            trigger="click"
            key="bottom"
            placement="bottom"
            show={showPopover}
            overlay={

                <Popover id={`popover-positioned-bottom`}>
                    <Popover.Header as="h3" className='bg-warning'>Cart</Popover.Header>
                    <Popover.Body>
                        {   
                        data.titles?
                        <div className='popove'>
                        <div className='pop'>
                            <div>
                                <img className='pop-image' src={data.picture}/>
                            </div>
                            <div>
                                <h5>{data.titles}</h5>
                                <h5>${data.price} X {data.quantity} <b>${data.total}</b></h5>
                            </div>
                            <div>
                                <img className='bin' onClick={deleteCart} src={bin}/>
                            </div>
                            </div>
                            <div>
                                <button className='button3'>Checkout</button>
                            </div>
                        </div>:
                        <div className='empty'>
                            <h4>Your cart is empty.</h4>
                        </div>
                       
                        }
                    </Popover.Body>
                </Popover>
            }
        >
            <div className='im'>
                <img
                    src={cart}
                    alt="Logo"
                    onClick={handleTogglePopover}
                    style={{ cursor: 'pointer' ,width:"20px"}}
                />
                {data.quantity > 0 && <Badge className='bg-warning'>{data.quantity}</Badge>}
            </div>
        </OverlayTrigger>
    );
}

export default Notification;
