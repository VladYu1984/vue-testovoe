<script setup lang="ts"></script>

<template>
    <div class="information">
        <h1>Проект это</h1>
        <div class="container">
            <div class="stability">
                <div class="content">
                    <h2>Стабильность</h2>
                    <ul>
                        <li>
                            <span>15+</span>
                            <p>лет успешной работы на рынке Краснодара</p>
                        </li>
                        <li>
                            <span>1 <span class="small-text">млн м²</span></span>
                            <p>квадратных метров сданного жилья</p>
                        </li>
                        <li>
                            <span>6 000+</span>
                            <p>довольных семей</p>
                        </li>
                    </ul>
                </div>
                <div class="result">
                    <h2>— результат надежной работы</h2>
                </div>
            </div>
            <div class="development">
                <div class="block-blue">
                    <div class="text-block">
                        <h2>Развитие</h2>
                        <p>
                            Мы постоянно совершенствуем проекты и внедряем новые решения. Создаем
                            современные жилые районы с развитой инфраструктурой для комфортной жизни
                        </p>
                    </div>
                </div>
                <div class="block-white">
                    <picture>
                        <source media="(min-width: 1000px)" srcset="../assets/images/woman.png" />
                        <img src="../assets/images/woman-mob.png" alt="woman" />
                    </picture>
                    <div class="text-block">
                        <h2>Команда</h2>
                        <p>
                            Нас объединяет ответственность за качество, профессионализм и забота о
                            клиентах. Вместе мы создаем дома, где хочется жить.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as *;
@use '../assets/styles/mixins.scss' as *;

.information {
    display: flex;
    flex-direction: column;
    min-width: 328px;

    & > h1 {
        margin-bottom: 20px;
    }

    @include respond('desktop') {
        min-width: 100%;
    }
}

.container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include respond('desktop') {
        flex-direction: row;
        gap: 20px;
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
}

.content {
    display: flex;
    flex-direction: column;
    margin: 24px 16px 0;

    @include respond('desktop') {
        margin: 40px 40px 0;
    }

    & > ul {
        display: flex;
        gap: 12px;
        flex-direction: column;
    }

    & > ul li {
        display: flex;
        justify-content: flex-start;
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

            & > p {
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

                & > p {
                    max-width: 82px;
                }
            }
        }
    }

    & > ul li span {
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

        .small-text {
            font-size: 12px;

            @include respond('desktop') {
                font-size: 14px;
            }
        }
    }

    & > ul li p {
        font-size: 12px;
        color: $text-muted;

        @include respond('desktop') {
            font-size: 14px;
        }
    }
}

.result {
    margin-top: 20px;
    border-radius: $radius;
    background: $bg-gradient;
    padding: 16px;

    @include respond('desktop') {
        margin-top: 44px;
        padding: 44px 40px;
    }

    & > h2 {
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
}

.block-blue {
    width: 100%;
    min-height: 209px;
    height: auto;
    overflow: hidden;

    background-image: url('../assets/images/blue-rectangle-mob.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% 100%;

    border-radius: 16px;

    @include respond('desktop') {
        background-image: url('../assets/images/blue-rectangle.png');
        background-size: 100% 100%;
    }

    & > .text-block {
        margin-top: 20px;
    }

    .text-block > h2 {
        color: $text-secondary;
    }

    .text-block > p {
        color: #ffffffcc;
    }
}

.block-white {
    position: relative;
    top: -30px;

    width: 100%;
    min-height: 338px;
    height: auto;
    overflow: hidden;

    background-image: url('../assets/images/white-rectangle-mob.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% 100%;

    border-radius: 16px;

    display: flex;
    flex-direction: column;

    @include respond('desktop') {
        background-image: url('../assets/images/white-rectangle.png');
        background-size: 100% 295px;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }

    & > picture {
        position: relative;
        width: 100%;
        top: -1%;

        @include respond('desktop') {
            width: auto;
            max-width: 328px;
            top: -24px;
        }

        img {
            width: 100%;
            height: auto;
            display: block;

            @include respond('desktop') {
                height: 295px;
            }
        }
    }

    & > .text-block {
        width: 100%;
        margin: 16px;

        @include respond('desktop') {
            max-width: 316px;
            padding: 0 10%;
            flex: 1;
            margin: 0;
        }

        h2 {
            color: $text-primary;
            margin-bottom: 8px;
        }

        p {
            color: $text-muted-secondary;
            font-size: 16px;
            line-height: 1.4;

            @include respond('desktop') {
                font-size: 18px;
            }
        }
    }
}

.text-block {
    margin: 16px;
    & > h2 {
        margin-bottom: 8px;
    }

    & > p {
        font-size: 16px;
    }
}
</style>
