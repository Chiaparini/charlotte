<template>
    <div class="filter">
		<h2 class="filter__title">Filters</h2>
		<div class="filter__prices">
			<span class="filter__label">Price Range</span>
			<div class="filter__prices__range">
				<vue-slider 
					v-model="filter.range.value"
					:min="100"
					:max="600"
					:height="5"
					:tooltip="false"
					:process-style="{ backgroundColor: '#F98100' }"
					:slider-style="[{
						width: '23px',
						height: '23px',
						top: '-8px',
						border: '4px solid #F98100',
						backgroundColor: '#fff',
						boxShadow: 'none'
					},{
						width: '23px',
						height: '23px',
						top: '-8px',
						border: '4px solid #F98100',
						backgroundColor: '#fff',
						boxShadow: 'none'
					}]"
					:width="290">
				</vue-slider>
				<div class="filter__prices__range__values">
					<div class="filter__prices__range__values__price">
						<span class="filter__label is-price">Min</span>
						<span class="filter__price__el">${{ filter.range.value[0] }}</span>
					</div>
					<div class="filter__prices__range__values__price">
						<span class="filter__label is-price">Max</span>
						<span class="filter__price__el">${{ filter.range.value[1] }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="filter__stars">
			<div class="filter__label">Stars</div>
			<div class="filter__stars__wrapper" ref="stars">
				<span @click="selectRate(item)" @mouseleave="cleanStars" @mouseover="fillStars(item)" v-for="(item, index) in stars" :key="index" :class="{ 'active': item.active }" class="filter__stars__wrapper__star"></span>
			</div>
		</div>
    </div>
</template>

<script>
	import vueSlider from 'vue-slider-component'
	import { mapActions } from 'vuex'
	import debounce from 'lodash/debounce'

	export default {
		name: 'HotelFilters',
		components: {
			vueSlider
		},
		data () {
			return {
				filter: {
					range: {
						value: [100, 600]
					},
					rate: 0
				},
				stars: [{
						value: 1,
						active: true
					},
					{
						value: 2,
						active: false
					},
					{
						value: 3,
						active: false
					},
					{
						value: 4,
						active: false
					},
					{
						value: 5,
						active: false
					}
				]
			}
		},
		watch: {
			filter: {
				// eslint-disable-next-line
				handler: function (newVal, oldVal) {
					this.updateFilters(newVal)
				},
				deep: true
			}
		},
		methods: {
			fillStars (item) {
				this.stars.forEach((element, i) => {
					if (item.value <= i) {
						if (element.active) {
							element.active = false
						}
						return
					}
					element.active = true
				})
			},
			cleanStars () {
				this.stars.map(el => {
					if (el.value > this.filter.rate) {
						el.active = false
					} else {
						el.active = true
					}
				})
			},
			selectRate (item) {
				this.stars.map(el => el.active = false)
				this.filter.rate = item.value
				this.fillStars(item)
			},
			// eslint-disable-next-line
			updateFilters: debounce(function(data) {
				this.$store.dispatch('updateFilters',
					{ range: { min: data.range.value[0], max: data.range.value[1] }, rate: data.rate })
			}, 600)
		}

	}
</script>

<style lang="scss" scoped>
	@import '~_scss/vars';
	.filter {
		max-width: 290px;

		@include for-size (phone-only) {
			margin: 0 auto;
			margin-bottom: 20px;
		}

		@include for-size (tablet-landscape-up) {
			margin-right: 150px;
		}

		&__title {
			text-align: left;
			font-size: 1.375rem;
			letter-spacing: 1.5px;
			font-weight: 600;
			margin-bottom: 40px;
		}

		&__stars {
			padding-top: 15px;
			margin-top: 30px;
			border-top: 1px solid #E3E3E3;
			&__wrapper {
				&__star {
					width: 26px;
					height: 26px;
					display: inline-block;
					margin-right: 5px;
					cursor: pointer;
					background-image: url('~_img/star-outline.svg');
					&:hover, &.active {
						background-image: url('~_img/star-filled.svg');
					}
				}
			}
		}

		&__prices {
			&__range {
				&__values {
					display: flex;
					justify-content: space-between;
					&__price {
						display: flex;
						flex-direction: column;
					}
				}
			}
		}

		&__price {
			&__el {
				font-size: 1.375rem;
				color: rgba(249,129,0,0.47);
				letter-spacing: 2.5px;
			}
		}

		&__label {
			font-size: .875rem;
			color: #B5B5B5;
			margin-bottom: 1.125rem;
			display: inline-block;
			&.is-price {
				margin-top: 20px;
				margin-bottom: 0;
			}
		}
	}
</style>
