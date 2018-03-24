<template>
	<div class="hotel-list" v-if="period">
		<div class="hotel-list__label">
			<span>Best choices between {{ period.start }} and {{ period.end }}</span>
		</div>
		<div class="hotel-list__elements">
			<div class="hotel-list__filters">
				<hotel-filters></hotel-filters>
			</div>
			<div class="hotel-list__items" v-if="filteredList.length">
				<transition-group mode="out-in" name="list" tag="div">
					<hotel-card
						v-for="(item, index) in filteredList"
						:hotel="item"
						:key="index">
					</hotel-card>
				</transition-group>
			</div>
			<div v-else class="hotel-list__items" style="width: 100%">
				<h2>Please, select a corresponding filter</h2>
			</div>
		</div>
	</div>
</template>

<script>
	import HotelCard from './HotelCard.vue'
	import HotelFilters from './HotelFilters.vue'

	export default {
		components: {
			HotelCard,
			HotelFilters
		},
		data () {
			return {
				filters: {},
				firstTime: true
			}
		},
		computed: {
			filteredList () {
				if (this.filters && !this.firstTime) {
					return this.hotels.filter(this.isHotelAvailable)
				}
				this.firstTime = false
				return this.hotels
			}
		},
		methods: {
			isHotelAvailable (hotel) {
				if (!this.filters) return true
				return (hotel.rate <= this.filters.rate
						&& hotel.price >= this.filters.range.min
						&& hotel.price <= this.filters.range.max)
			}
		},
		props: {
			period: {
				type: Object,
				default: () => {}
			},
			hotels: {
				type: Array,
				default: () => []
			}
		},
		mounted () {
			this.$store.subscribe((mutation, state) => {
				if (mutation.type === 'SET_FILTERS') {
					this.filters = state.filters
				}
			})

		}
	}
</script>

<style lang="scss" scoped>
	@import '~_scss/vars';

	.hotel-list {
		margin: 0 auto;
		max-width: $max-width;

		&__elements {
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			@include for-size (tablet-landscape-up) {
				flex-direction: row;
			}
		}

		&__label {
			text-align: center;
			font-size: 1.375rem;
			letter-spacing: 1.5px;
			font-weight: 600;
			margin-bottom: 70px;
		}
	}

</style>
