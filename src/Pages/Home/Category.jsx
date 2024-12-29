import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import slide1 from "../../assets/slide1.jpg"
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import SectionTitle from '../../Components/SectionTitle';



const Category = () => {
	return (
		<section>
			<SectionTitle className="my-10"
			subHeading={"From 11.00 am to 10.00pm"}
			heading={"order online"}>
				
				
			</SectionTitle>
			<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
	<SwiperSlide>
		<img src={slide1} alt="" />
		<h3 className='text-4xl -mt-20 mb-4 text-white text-center shadow-2xl'>SALADS</h3>
	</SwiperSlide>
        <SwiperSlide>
		<img src={slide2} alt="" />
		<h3 className='text-4xl -mt-20 mb-4 text-center text-white shadow-2xl uppercase'>pizzas</h3>
		
		</SwiperSlide>
        <SwiperSlide>
			<img src={slide3} alt="" />
			<h3 className='text-4xl -mt-20 mb-4 text-center text-white shadow-2xl uppercase'>soup</h3>
		</SwiperSlide>
        <SwiperSlide>
		<img src={slide4} alt="" />
		<h3 className='text-4xl -mt-20 mb-4 text-center text-white shadow-2xl uppercase'>deserts</h3>
		</SwiperSlide>
    

      </Swiper>
		</section>
	);
};

export default Category;