<template>
	<div class="hotel-card">
		<div class="hotel-card__picture">
			<img class="hotel-card__picture__el" :src="hotel.image" :alt="hotel.name" />
		</div>
		<div class="hotel-card__general">
		<transition name="fade" mode="out-in">
			<div :key="1" v-if="descriptionVisible" class="hotel-card__general__description">
				<div class="hotel-card__info">
					<div class="hotel-card__info__rating">
						<hotel-rate :rate.sync="hotel.rate"></hotel-rate>
					</div>
					<div class="hotel-card__info__name">
						<h3 class="hotel-card__info__name__el" v-text="hotel.name"></h3>
					</div>
					<div class="hotel-card__info__description">
						<p class="hotel-card__info__description__el" v-text="hotel.description"></p>
					</div>
					<div class="hotel-card__info__actions">
						<a class="btn btn--is-orange">Book now</a>
						<a @click="descriptionVisible = false" class="btn btn--is-green">Price history</a>
					</div>
				</div>
				<div class="hotel-card__price">
					<p class="hotel-card__price__total">Total</p>
					<p class="hotel-card__price__currency">{{ hotel.price | currency }}</p>
				</div>
			</div>
			<div :key="2" v-else class="hotel-card__graphs">
				<div class="hotel-card__graphs__options">
					<p class="hotel-card__graphs__options__label">Price history for 2017</p>
					<a @click="descriptionVisible = true" class="hotel-card__graphs__options__back">
						<img src="~_img/back-description.svg" alt="Arrow to go back">
						<p>
							Back to description
						</p>
					</a>
				</div>
				<div class="hotel-card__graphs__graph">
					<hotel-graph :data="{datasets: hotelDataSet, labels: months}"></hotel-graph>
				</div>
			</div>
		</transition>
		</div>
	</div>
</template>

<script>
	import HotelRate from './HotelRate.vue'
	import HotelGraph from './graphs/HotelGraph.vue'

	export default {
		components: {
			HotelRate,
			HotelGraph
		},
		name: 'HotelCard',
		data () {
			return {
				descriptionVisible: true,
				months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
			}
		},
		computed: {
			hotelDataSet () {
				const dataSet = {
					data: [],
					backgroundColor: [],
					borderWidth: 0
				}
				// 'linear-gradient(0deg, #EE6F48 0%, #F98100 100%)'
				this.hotel.price_history.forEach(element => {
					dataSet.data.push(element.value)
					dataSet.backgroundColor.push('rgba(238,111,72,100)')
				})
				return [dataSet]
			}
		},
		props: {
			hotel: {
				type: Object,
				required: true
			}
		},
		filters: {
			currency: v => {
				if (!v) return ''
				return `$${v}`
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~_scss/vars';

	.hotel-card {
		max-width: 837px;
		box-shadow: 0 4px 17px 0 rgba(0,0,0,0.22);
		border-radius: 5px;
		max-height: 318px;

		padding: 40px;
		padding-left: 0;
		margin: 30px 0;

		display: flex;
		flex-direction: row;

		justify-content: space-between;

		@media (max-width: 710px){
			max-height: initial;
			padding: 5px;
			border-radius: 0;
			position: relative;
			flex-direction: column;
		}

		&__general {
			display: flex;
			align-items: center;
			&__description {
				display: flex;
				@media (max-width: 710px){
					flex-direction: column;
				}
			}
		}

		&__info {
			display: flex;

			flex-direction: column;
			margin: 0 20px;
			@media (max-width: 710px){
				margin: 0px;
				margin-top: -32px;
			}
			&__actions {
				display: flex;
				margin: 10px 0;
				@media (max-width: 710px){
					justify-content: space-around;
				}
				.btn {
					margin-right: 20px;
					border-width: 1px;
					font-weight: 600;
					padding: 8px 18px;

					@media (max-width: 710px){
						margin: 0;
					}
				}
			}

			&__rating {
				margin: 10px 0;
			}

			&__name {
				margin: 10px 0;
				&__el {
					text-transform: uppercase;
					font-size: 1rem;
					color: $color-orange-regular;
					letter-spacing: 1.82px;
					line-height: 26px;
				}
			}

			&__description {
				margin: 10px 0;
				&__el {
					font-size: .9375rem;
					color: $color-grey-regular;
				}
			}
		}

		&__picture {
			min-width: 238px;

			@media (max-width: 710px){
				max-width: 120px;
				min-width: auto;
				margin-left: 60px;
				margin-top: -20px;
			}

			@include for-size(tablet-landscape-up) {
				margin-left: -60px;
			}

			&__el {
				background: #D8D8D8;
				border-radius: 4px;
			}
		}

		&__price {
			border-left: 1px solid $color-grey-light;
			display: flex;
			flex-direction: column;

			justify-content: center;
			max-width: 127px;
			width: 100%;

			@media (max-width: 710px){
				position: absolute;
				top: 10px;
				right: 5px;
				border: none;
			}

			&__total {
				font-size: 1rem;
				color: #B2B0C0;
				letter-spacing: 1.82px;
				text-align: right;
			}

			&__currency {
				font-size: 1.875rem;
				color: $color-green-regular;
				letter-spacing: 3.41px;
				text-align: right;
			}

		}

		&__graphs {
			@include for-size (desktop-up) {
				width: 500px;
			}
			width: 100%;
			&__options {
				display: flex;
				justify-content: space-between;
				width: 100%;
				align-items: center;

				&__label {
					text-transform: uppercase;
					font-size: 1rem;
					color: $color-orange-regular;
					letter-spacing: 1.82px;
					line-height: 26px;
					font-weight: 700;
					margin: 10px 0;
				}
				&__back {
					display: flex;
					align-items: center;

					@include for-size(phone-only) {
						position: absolute;
						top: 15px;
						right: 15px;
					}
					img {
						width: 25px;
						height: 18px;
						display: inline-block;
					}
					p {
						text-align: right;
						max-width: 130px;
						font-size: 12px;
						color: #555555;
						letter-spacing: 1.36px;

						@include for-size(phone-only) {
							max-width: 80px;
						}
					}
				}
			}

			&__graph {
				position: relative;
				> div {
					height: 164px;
				}
			}
		}
	}

</style>
