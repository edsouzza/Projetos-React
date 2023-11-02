import './Carrossel.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Apache from '../../assets/ApacheKafka.svg'
import Lideranca from '../../assets/Liderança.svg'
import JS from '../../assets/Javascript.svg'
import GuiaFrontEnd from '../../assets/GuiaFrontEnd.svg'
import Portugol from '../../assets/Portugol.svg'
import Acessibilidade from '../../assets/Acessibilidade.svg'

export default function Carrossel(props:any){
    const slides = [{id:'1', img:Apache}, {id:'2', img:Lideranca}, {id:'3', img:JS}, {id:'4', img:GuiaFrontEnd}, {id:'5', img:Portugol}, {id:'6', img:Acessibilidade}]
    return(
        <section className="carrossel__container">
            <h2 className="carrossel__titulo">{props.titulo}</h2>

            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              navigation={false}
              pagination={true}
              loop
            >
                {slides.map(item =>(
                  <SwiperSlide key={item.id}>
                    <img src={item.img} alt={item.img}/>
                  </SwiperSlide>
                ))}
            </Swiper>
           
        </section>       
    )
}