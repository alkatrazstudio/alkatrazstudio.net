// https://github.com/surmon-china/vue-awesome-swiper/issues/680#issuecomment-665051360

import Vue from 'vue'
import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))

import 'swiper/swiper-bundle.min.css'
