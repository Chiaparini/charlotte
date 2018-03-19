<template>
    <div class="content">
        <div class="content__banner"></div>
        <div class="content__ingress">
            <div class="content__ingress__crown">
                <img src="~_img/crown.svg" alt="Crown">
            </div>
            <p class="content__ingress__sub">
                Welcome to
            </p>
            <h1 class="content__ingress__title">
                Charlotte
            </h1>
            <p class="content__ingress__sub">
                The Queen City
            </p>
        </div>

        <calendar></calendar>

    </div>
</template>

<script>
    import Calendar from './components/Calendar.vue'


    export default {
        components: {
            Calendar
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss/vars';

    .content {
        padding-top: 100px;

        &__banner {
            max-height: 600px;
            height: 100%;
            width: 100%;
    
            position: absolute;
            top: 0;
    
            z-index: -1;
    
            background-image: url('~_img/hero.jpg');
            background-size: cover;
        }
    
        &__ingress {
            display: flex;
    
            flex-direction: column;
    
            align-items: center;
            justify-content: center;
    
            color: $color-white;
            text-transform: uppercase;
    
            font-weight: 600;
            letter-spacing: .1625rem;
    
            &__crown {
                width: 100%;
                height: auto;
                max-width: 60px;
                margin: 20px 0;
            }
    
            &__sub {
                font-size: 1.375rem;
                font-weight: 700;
            }
    
            &__title {
                font-family: $font-heebo-titles;
                font-weight: 800;
                border: 2px solid $color-white;
                border-left: none;
                border-right: none;
                padding: 10px;
                line-height: 5.625rem;
                font-size: 4.75rem;
                letter-spacing: .6625rem;
            }
    
        }
    }

</style>
