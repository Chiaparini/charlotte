<template>
    <div class="rate-list">
        <span v-for="(rate, index) in rates" :key="index">
            <img src="~_img/star-filled.svg" alt="Star">
        </span>
    </div>
</template>

<script>
    export default {
        name: 'HotelRate',
        data () {
            return {
                rates: []
            }
        },
        props: {
            rate: {
                type: Number,
                default: 0
            }
        },
        mounted () {
            // eslint-disable-next-line
            for (let i = 0; i < this.rate; i++) {
                this.rates.push(i)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss/vars';

    .rate-list {
        display: flex;
        span {
            img {
                max-width: 12px;
                height: 12px;
                margin-right: 4px;
            }
        }

        @media (max-width: 710px){
            justify-content: flex-end;
        }
    }
</style>