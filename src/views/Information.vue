<script setup lang="ts"></script>

<template>
    <section class="information">
        <h1 class="information__title">Проект это</h1>

        <div class="information__body">
            <div class="information__stability stability">
                <div class="stability__content">
                    <h2 class="stability__title">Стабильность</h2>
                    <ul class="stability__list">
                        <li class="stability__item">
                            <span class="stability__value">15+</span>
                            <p class="stability__text">лет успешной работы на рынке Краснодара</p>
                        </li>
                        <li class="stability__item">
                            <span class="stability__value">
                                1 <span class="stability__value--small">млн м²</span>
                            </span>
                            <p class="stability__text">квадратных метров сданного жилья</p>
                        </li>
                        <li class="stability__item">
                            <span class="stability__value">6 000+</span>
                            <p class="stability__text">довольных семей</p>
                        </li>
                    </ul>
                </div>
                <div class="stability__result result" @click="$router.push('/slider')">
                    <h2 class="result__title">— результат надежной работы</h2>
                </div>
            </div>

            <div class="information__development development">
                <div class="development__block development__block--blue block-blue">
                    <div class="development__text text-block">
                        <h2 class="text-block__title">Развитие</h2>
                        <p class="text-block__text">
                            Мы постоянно совершенствуем проекты и внедряем новые решения. Создаем
                            современные жилые районы с развитой инфраструктурой для комфортной жизни
                        </p>
                    </div>
                </div>

                <div class="development__block development__block--white block-white">
                    <picture class="development__image">
                        <source media="(min-width: 1000px)" srcset="../assets/images/woman.png" />
                        <img src="../assets/images/woman-mob.png" alt="woman" />
                    </picture>
                    <div class="development__text text-block">
                        <h2 class="text-block__title">Команда</h2>
                        <p class="text-block__text">
                            Нас объединяет ответственность за качество, профессионализм и забота о
                            клиентах. Вместе мы создаем дома, где хочется жить.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as *;
@use '../assets/styles/mixins.scss' as *;

.information {
    display: flex;
    flex-direction: column;
    min-width: 328px;

    &__title {
        margin-bottom: 20px;
    }

    &__body {
        display: flex;
        flex-direction: column;
        gap: 8px;

        @include respond('desktop') {
            flex-direction: row;
            gap: 20px;
        }
    }
}

.stability {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: $bg-gray;
    border-radius: $radius;

    @include respond('desktop') {
        min-width: 368px;
        justify-content: space-between;
    }

    &__content {
        display: flex;
        flex-direction: column;
        margin: 24px 16px 0;

        @include respond('desktop') {
            margin: 40px 40px 0;
        }
    }

    &__title {
        margin-bottom: 16px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__item {
        display: flex;
        align-items: center;

        &:nth-child(1) {
            width: 256px;
            gap: 17px;

            @include respond('desktop') {
                width: 263px;
                gap: 33px;
            }
        }

        &:nth-child(2) {
            min-width: 272px;
            gap: 31px;

            @include respond('desktop') {
                gap: 60px;
            }

            & > .stability__text {
                max-width: 119px;

                @include respond('desktop') {
                    max-width: 149px;
                }
            }
        }

        &:nth-child(3) {
            min-width: 269px;
            gap: 45px;

            @include respond('desktop') {
                min-width: 306px;
                gap: 71px;

                & > .stability__text {
                    max-width: 82px;
                }
            }
        }
    }

    &__value {
        font-size: 28px;
        line-height: 120%;
        font-weight: 600;
        letter-spacing: -5%;

        background: $text-gradient;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        @include respond('desktop') {
            font-size: 46px;
        }

        &--small {
            font-size: 12px;

            @include respond('desktop') {
                font-size: 14px;
            }
        }
    }

    &__text {
        font-size: 12px;
        color: $text-muted;

        @include respond('desktop') {
            font-size: 14px;
        }
    }

    &__result {
        margin-top: 20px;
        border-radius: $radius;
        background: $bg-gradient;
        padding: 16px;

        @include respond('desktop') {
            margin-top: 44px;
            padding: 44px 40px;
        }
    }
}

.result {
    &__title {
        width: 285px;

        @include respond('desktop') {
            width: 100%;
        }
    }
}

.development {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 328px;

    &__block {
        width: 100%;
        overflow: hidden;
        border-radius: 16px;
        position: relative;
        display: flex;
        flex-direction: column;

        &--blue {
            min-height: 209px;
            background-image: url('../assets/images/blue-rectangle-mob.png');
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 100% 100%;

            @include respond('desktop') {
                background-image: url('../assets/images/blue-rectangle.png');
            }
        }

        &--white {
            min-height: 338px;
            top: -30px;
            background-image: url('../assets/images/white-rectangle-mob.png');
            background-repeat: no-repeat;
            background-position: top center;
            background-size: 100% 100%;

            @include respond('desktop') {
                background-image: url('../assets/images/white-rectangle.png');
                background-size: 100% 295px;
                flex-direction: row-reverse;
                justify-content: space-between;
                align-items: center;
                padding: 0;
            }
        }
    }

    &__image {
        width: 100%;
        position: relative;
        top: -1%;

        @include respond('desktop') {
            width: auto;
            max-width: 328px;
            top: -24px;
        }

        img {
            width: 100%;
            display: block;

            @include respond('desktop') {
                height: 295px;
            }
        }
    }

    &__text {
        padding: 20px 16px 0;

        @include respond('desktop') {
            max-width: 316px;
            padding: 45px 40px;
            flex: 1;
            margin: 0;
        }

        h2 {
            margin-bottom: 8px;
        }
    }
}

.text-block {
    &__title {
        margin-bottom: 8px;
    }

    &__text {
        font-size: 16px;
        line-height: 1.4;

        @include respond('desktop') {
            font-size: 18px;
        }
    }
}
</style>
