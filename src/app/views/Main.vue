<template>
    <div class="main">
        <div class="main__banner"></div>
        <div class="main__ingress">
            <div class="main__ingress__crown">
                <img src="~_img/crown.svg" alt="Crown">
            </div>
            <p class="main__ingress__sub">
                Welcome to
            </p>
            <h1 class="main__ingress__title">
                Charlotte
            </h1>
            <p class="main__ingress__sub">
                The Queen City
            </p>
        </div>

        <calendar :on-search="fillList"></calendar>

		<hotel-list :period="date" :hotels="hotels"></hotel-list>
    </div>
</template>

<script>
	import HotelsServices from '_app/services/HotelsServices.js'
	import Calendar from './components/calendar/Calendar.vue'
	import HotelList from './components/hotel/HotelList.vue'


	export default {
        data () {
            return {
                date: null,
                hotels: null
            }
        },
		components: {
			Calendar,
			HotelList
        },
        methods: {
            fillList (date) {
                HotelsServices.getHotels().then(response => {
                    this.date = date
					this.hotels = response.hotels
                }).catch(err => {
                    // eslint-disable-next-line
                    console.warn(err)
                    // eslint-disable-next-line
                    alert("We couldn't fetch the hotel data :(. See console for more info")
                })
            }
        }
	}

</script>

<style lang="scss" scoped>
    @import '~_scss/vars';

    .main {
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
                color: $color-white;
                border: 2px solid $color-white;
                border-left: none;
                border-right: none;
                padding: 10px;
                line-height: 5.625rem;
                letter-spacing: .6625rem;
                margin-top: 0;

                @media (min-width: 1152px) {
                    font-size: 4.75rem;
                }
            }
        }
    }

</style>
