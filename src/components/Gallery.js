import React, { useEffect, useState } from 'react';
import product1thumb from '../images/image-product-1-thumbnail.jpg'
import product1 from '../images/image-product-1.jpg'
import product2thumb from '../images/image-product-2-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import product3thumb from '../images/image-product-3-thumbnail.jpg'
import product3 from '../images/image-product-3.jpg'
import product4thumb from '../images/image-product-4-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from "../images/icon-cart.svg";
import {useContext} from 'react'
import { Context } from './context';
import { UseLocalStorage } from "./UseLocalstorage"
import previous from '../images/icon-previous.svg';
import next from "../images/icon-next.svg";
function Gallery(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []);
    const { setItem, getItem, deleteItem } = UseLocalStorage(1);
    const [mainImage, setMainImage]=useState(false)
    const [imaged, setImage]=useState(product1)
    const handleClick=(item)=>{
        setMainImage(true)

        setImage(item)
    }
    const image=[
        {
            id:1,
            product:product1,
            thumb:product1thumb,
            active:mainImage
        },
        {
            id:2,
            product:product2,
            thumb:product2thumb,
            active:mainImage
        },
        {
            id:3,
            product:product3,
            thumb:product3thumb,
            active:mainImage
        },
        {
            id:4,
            product:product4,
            thumb:product4thumb,
            active:mainImage
        }
    ]
    const images=[
        {           
            src:product1,
            alt:'products'
        },
        {
            src:product2,
            alt:'products'   
        },
        {   
            src:product3,
            alt:'products'   
        },
        {
            src:product4,
            alt:'products'   
        }
    ]
    const thumbmail=image.map((items)=>{
        return(        
              <img key={items.id} className='minor' src={items.thumb} onClick={()=>handleClick(items.product)} alt='mail'/>   
        )
    })
    let [isOpen, setIsOpen] = useState(false); 
    const [numbers, setNumber]=useState(1)
    const title="Fall Limited Edition Sneakers"
    const price=125.00
    const { data, setData } = useContext(Context);
    const product = product1thumb;
    useEffect(() => {
        //console.log("Updated data:", data);
      }, [data]);
    function addToCart() {
            const total = numbers * price;
            

            // Correct the property names in the object being passed to setData
            setData({ titles: title, picture: product, price: price, quantity: numbers,  total: total });
    }
    
    function handlesClick(){
        const value= document.querySelector(".value")
        if (parseInt(value.innerText)>1){
            setNumber(parseInt(value.innerText)-1)
        }
    }
    const [id, setId]=useState(1)
    function handleNext(){
        if (id==4){
            setId(1)
        }else{
            setId(id+1)
        }
            for(const ids of image){
                if( id==ids.id){
                    setImage(ids.product)
                }
            }
        
    }
    function handlePrevious(){
        if (id==1){
            setId(4)
        }else{
            setId(id-1)
        }
        for(const ids of image){
            if( id==ids.id){
                setImage(ids.product)
            }
        }
    }
    return(
        <div className="det">
        <div className='gallery'>
            <div>
                {windowWidth <701 && 
                    <div className='arrows'>
                        <img className='image2' id='arrow' onClick={handlePrevious} src={previous} />
                        <img className='image1' id='arrow' onClick={handleNext} src={next} />

                    </div>
                }
            
                    
                    <img className='major' onClick={() => {setIsOpen(true)}} src={imaged} alt='iage'/>
            </div>
            <div className='thumbmail'>
                
                
                {windowWidth >700 && thumbmail}
            </div>
            <SlideshowLightbox 
                   
                    images={images} 
                    showThumbnails={true} 
                    open={windowWidth >701 && isOpen} 
                    lightboxIdentifier="lbox1"
                    onClose={() =>{windowWidth >701 && setIsOpen(false)}}>     
            </SlideshowLightbox>
        </div>
        <div className='details'>
        <div>
            <p style={{color: "hsl(26, 100%, 55%)"}}>SNEAKER COMPANY</p>
        </div>
        <div>
            <h2 style={{fontWeight:700,fontFamily: "Kumbh Sans"}}>{title}</h2>
        </div>
        <div>
            <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>

        </div>
        <div className='price'>
            <div className='rice'>
                <h3>$ {price}</h3>
                <p className='fifity'>50%</p>
            </div>
            <div>
                <p><s>$250.00</s></p>
            </div>
            
        </div>
        <div className='buttons'>
            <div>
                <button className='button1'>
                    <img src={minus} onClick={handlesClick} alt=""/>
                    <p style={{color: "hsl(26, 100%, 55%)"}} className='value d-flex align-items-center'>{numbers}</p>
                    <img src={plus} onClick={()=>setNumber(numbers+1)} alt=""/>
                </button>
            </div>
            <div>
                <button className='button2' onClick={addToCart}> <img src={cart}/> &nbsp;Add to cart</button>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Gallery