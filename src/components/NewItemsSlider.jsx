import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { newInStore } from "../data"

const NewItemsSlider = () => {
  return (
    <Swiper grabCursor={true} breakpoints={{
        320:{
            slidesPerView:2,
            spaceBetween:18,
        },
        768:{
            slidesPerView:3,
            spaceBetween:20,
        }

    }}>
        {newInStore.products.map((product,id)=>{
            return (
            <SwiperSlide className="max-w-[265px]"  key={id}>
               <div className="relative">
                <img src={product.image.type}/>
                <div className="absolute bottom-[20px] w-full text-center text-white text-[18px] lg:text-2xl font-medium capitalize">{product.name}</div>
               </div>
            </SwiperSlide>
        )})}
    </Swiper>
  )
}

export default NewItemsSlider