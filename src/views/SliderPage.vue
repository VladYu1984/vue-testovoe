<script setup lang="ts">
import { reactive, ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import slide1 from '../assets/images/slider/slide-1.png'
import slide2 from '../assets/images/slider/slide-2.png'
import slide3 from '../assets/images/slider/slide-3.png'

const modules = [Navigation]

import slide1Mob from '../assets/images/slider/slide-1-mob.png'
import slide2Mob from '../assets/images/slider/slide-2-mob.png'

const isMobile = ref(false)

const slides = reactive([
    {
        id: 1,
        image: slide1,
        mobImage: slide1Mob,
        title: 'Сертификат на мебель в подарок',
        label: 'Легион',
    },
    {
        id: 2,
        image: slide2,
        mobImage: slide2Mob,
        title: 'Выгодное предложение на старте продаж',
        label: 'Полет',
    },
    {
        id: 3,
        image: slide3,
        mobImage: slide1Mob,
        title: 'Отделка в подарок при покупке',
        label: 'Воскресенье',
    },
    {
        id: 4,
        image: slide1,
        mobImage: slide2Mob,
        title: 'Сертификат на мебель в подарок',
        label: 'Легион',
    },
    {
        id: 5,
        image: slide2,
        mobImage: slide1Mob,
        title: 'Выгодное предложение на старте продаж',
        label: 'Полет',
    },
    {
        id: 6,
        image: slide3,
        mobImage: slide2Mob,
        title: 'Отделка в подарок при покупке',
        label: 'Воскресенье',
    },
])

const displayedSlides = computed(() =>
    slides.map((slide) => ({
        ...slide,
        imageToShow: isMobile.value ? slide.mobImage : slide.image,
    })),
)

const swiperRef = ref<SwiperType | null>(null)
const isBeginning = ref(true)
const isEnd = ref(false)

const onSwiper = (swiper: SwiperType) => {
    swiperRef.value = swiper
    updateNavigation(swiper)
}

const onSlideChange = (swiper: SwiperType) => {
    updateNavigation(swiper)
}

const updateNavigation = (swiper: SwiperType) => {
    isBeginning.value = swiper.isBeginning
    isEnd.value = swiper.isEnd
}

const isPrevDisabled = computed(() => isBeginning.value)
const isNextDisabled = computed(() => isEnd.value)

onMounted(() => {
    isMobile.value = window.innerWidth < 1000
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth < 1000
    })
})
</script>

<template>
    <div class="slider">
        <Swiper
            ref="swiperRef"
            class="slider__swiper"
            :modules="modules"
            slides-per-view="auto"
            :space-between="isMobile ? 12 : 20"
            :navigation="{ nextEl: '.slider__next', prevEl: '.slider__prev' }"
            :allowTouchMove="false"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
        >
            <SwiperSlide v-for="slide in displayedSlides" :key="slide.id" class="slider__slide">
                <div class="slide">
                    <div class="slide__content">
                        <div class="slide__date">
                            <p>до 12 июня 2025</p>
                        </div>
                        <h2 class="slide__title">{{ slide.title }}</h2>
                        <button class="slide__btn">
                            <img
                                src="../assets/icons/arrow-right.svg"
                                alt="arrow"
                                class="slide__icon slide__icon--default"
                            />
                            <img
                                src="../assets/icons/arrow-right-white.svg"
                                alt="arrow"
                                class="slide__icon slide__icon--hover"
                            />
                        </button>
                    </div>

                    <img :src="slide.imageToShow" alt="" class="slide__image" />

                    <div class="slide__label">
                        <img src="../assets/icons/location.svg" alt="location" />
                        <p class="slide__label-text">{{ slide.label }}</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        <div class="slider__nav">
            <button class="slider__prev" :class="{ 'slider__nav-btn--disabled': isPrevDisabled }">
                <img
                    v-if="isPrevDisabled"
                    src="../assets/icons/arrow-left-disabled.svg"
                    alt="prev"
                    class="slider__nav-icon"
                />
                <img
                    v-else
                    src="../assets/icons/arrow-right-white.svg"
                    alt="prev"
                    class="slider__nav-icon slider__nav-icon--rotated"
                />
            </button>
            <button class="slider__next" :class="{ 'slider__nav-btn--disabled': isNextDisabled }">
                <img
                    v-if="isNextDisabled"
                    src="../assets/icons/arrow-left-disabled.svg"
                    alt="next"
                    class="slider__nav-icon slider__nav-icon--rotated"
                />
                <img
                    v-else
                    src="../assets/icons/arrow-right-white.svg"
                    alt="next"
                    class="slider__nav-icon"
                />
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as *;
@use '../assets/styles/mixins.scss' as *;

.slider {
    position: relative;
    width: 100%;
    overflow: visible;

    &__swiper {
        overflow: visible;
    }

    &__nav {
        position: fixed;
        top: 150px;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 0;
        z-index: 100;
        padding: 5px;
        background: rgba(28, 29, 33, 0.4);
        backdrop-filter: blur(19px);
        border-radius: 16px;
        overflow: hidden;

        button {
            width: 50px;
            height: 50px;
            border: none;
            background: transparent;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: opacity 0.2s;
            position: relative;

            &:last-child {
                border-top: 1px solid rgba(255, 255, 255, 0.4);
            }

            img {
                width: 16px;
                height: 16px;
            }

            &:hover:not(.slider__nav-btn--disabled) {
                opacity: 0.8;
            }

            &.slider__nav-btn--disabled {
                cursor: not-allowed;
                pointer-events: none;
            }
        }
    }

    &__nav-icon {
        &--rotated {
            transform: rotate(180deg);
        }
    }
}

.slider__slide {
    width: 230px;
    flex-shrink: 0;
    position: relative;

    @include respond('desktop') {
        width: 450px;
    }
}

.slide {
    display: flex;
    flex-direction: column;
    overflow: visible;
    position: relative;

    @include respond('desktop') {
        flex-direction: row;
        justify-content: space-between;
    }

    &__image {
        height: 132px;
        width: 230px;
        margin-left: 0;
        margin-top: -10px;
        z-index: 1;
        transition: transform 0.3s ease;
        transform-origin: center center;

        @include respond('desktop') {
            height: 207px;
            width: auto;
            margin-left: -45px;
            margin-top: 0;
        }
    }

    &:hover &__image {
        transform: scale(1.05);
        @include respond('desktop') {
            transform: scale(1.1);
        }
    }

    &__content {
        position: relative;
        z-index: 2;
        min-width: 230px;
        max-height: 159px;
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        padding: 8px 0 11px 8px;

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            width: 230px;
            height: 159px;
            background: url('../assets/images/card-mob.svg') no-repeat top center;
            background-size: cover;
            z-index: -1;
            transition: background-image 0.2s ease;
        }

        @include respond('desktop') {
            min-width: 283px;
            max-height: 196px;
            padding: 15px 0 15px 15px;

            &::before {
                width: 283px;
                height: 196px;
                background: url('../assets/images/card.svg') no-repeat top center;
            }

            &:hover::before {
                background-image: url('../assets/images/card-blue.svg');
            }

            &:hover .slide__date {
                background: $text-secondary;

                & > p {
                    color: $text-primary;
                }
            }

            &:hover .slide__title {
                color: $text-secondary;
            }
        }
    }

    &__date {
        background: $bg-gradient-secondary;
        padding: 9px 12px;
        border-radius: 8px;
        width: max-content;
        margin-bottom: 12px;

        @include respond('desktop') {
            margin-bottom: 15px;
        }

        & > p {
            font-weight: 500;
            font-size: 10px;
            line-height: 100%;
            text-transform: uppercase;
            color: $text-secondary;
        }
    }

    &__title {
        font-size: 14px;
        max-width: 221px;
        margin-bottom: 24px;

        @include respond('desktop') {
            font-size: 16px;
            margin-bottom: 0;
        }
    }

    &__btn {
        margin-top: auto;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: none;
        outline: none;
        background: $text-secondary;
        box-shadow: 0px 4px 10px 0px #0000000a;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: $bg-blue;

            .slide__icon--default {
                opacity: 0;
            }

            .slide__icon--hover {
                opacity: 1;
            }
        }

        .slide__icon {
            position: absolute;
            transition: opacity 0.2s ease;

            &--hover {
                opacity: 0;
            }
        }
    }

    &__label {
        display: none;

        @include respond('desktop') {
            position: absolute;
            bottom: 10.5px;
            right: 15px;
            z-index: 3;
            display: flex;
            justify-content: flex-start;
            gap: 4px;
            padding: 4px 6px;
            border-radius: $radius-full;
            background: $text-secondary;

            &-text {
                text-transform: uppercase;
            }
        }
    }
}
</style>
