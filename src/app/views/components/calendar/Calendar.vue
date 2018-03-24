<template>
	<div class="calendar">
		<div class="calendar__title">
			<span>Select the dates to stay in Charlotte</span>
		</div>
		<div class="calendar__input">
			<div class="calendar__input__options">
				<div class="calendar__input__options__selected-dates">
					<p class="label">Check-in</p>
					<p v-if="date" class="date">{{ formatedStartDate }}</p>
					<p v-else class="date" v-text="'Choose a date'"></p>
				</div>
				<div class="calendar__input__options__selected-dates">
					<p class="label">Check-out</p>
					<p v-if="date" class="date">{{ formatedEndDate }}</p>
					<p v-else class="date" v-text="'Choose a date'"></p>
				</div>
				<a @click="search" class="btn btn--is-orange">Search hotels</a>
			</div>
			<div class="calendar__input__range">
				<v-date-picker mode="range"
				is-single-paned
				is-inline
				:theme-styles='calendarStyle'
				:pane-width='290'
				:attributes='attrs'
				tint-color="#79BD1A"
				v-model='date'>
					<span slot='header-title' slot-scope='{ monthLabel, yearLabel }'>
						{{ monthLabel }} / {{ yearLabel }}
					</span>
				</v-date-picker>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'

	export default {
		data () {
			return {
				date: null,
				attrs: [{
					highlight: {
						backrgoundColor: '#79BD1A'
					}
				}],
				calendarStyle: {
					wrapper: {
						background: 'transparent',
						border: 0,
						fontFamily: 'Montserrat'
					},
					header: {
						paddingTop: '10px',
						fontFamily: 'Montserrat',
						borderTop: 'solid rgb(227, 227, 227) 2px'
					},
					headerTitle: {
						paddingBottom: '10px'
					},
					headerArrows: {
						display: 'none'
					},
					dayCellNotInMonth: {
						opacity: 0
					},
					weekdaysHorizontalDivider: {
						paddingBottom: '10px',
						borderBottom: 'solid rgb(227, 227, 227) 2px',
						width: '100%'
					}
				}
			}
		},
		props: {
			onSearch: {
				type: Function,
				default: () => {}
			}
		},
		computed: {
			formatedStartDate () {
				return moment(this.date.start).format('MMMM D, YYYY')
			},
			formatedEndDate () {
				return moment(this.date.end).format('MMMM D, YYYY')
			}
		},
		methods: {
			search () {
				this.onSearch({ start: this.formatedStartDate, end: this.formatedEndDate })
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~_scss/vars';

	.calendar {
		max-width: 840px;
		width: 100%;

		margin: 0 auto;
		margin-top: 100px;

		padding: 20px $padding-phone-sides;

		@include for-size(tablet-portrait-up) {
			padding: 60px 100px;
		}

		background-color: $color-white;
		box-shadow: 0 -40px 46px 0 rgba(0,0,0,0.33);

		border-radius: 7px;

		&__title {
			
			text-align: center;
			font-size: 1.375rem;
			letter-spacing: 1.5px;
			font-weight: 600;
			margin-bottom: 70px;
		}

		&__input {
			display: flex;

			flex-wrap: wrap;

			justify-content: space-around;
			@include for-size(phone-only) {
				flex-direction: column;
			}

			&__options {
				@include for-size(phone-only) {
					order: 2;
					flex-direction: row;
				}

				@media (max-width: 672px) {
					order: 2;
				}

				flex-direction: column;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				max-height: 220px;

				&__selected-dates {
					display: inline-block;

					@include for-size(phone-only) {
						flex-basis: 50%;
						text-align: center;
					}

					>.label {
						color: #555;
						letter-spacing: 2.5px;
						font-weight: 500;
						text-transform: uppercase;
						margin-bottom: 10px;
						@include for-size(tablet-portrait-up) {
							font-size: 1.375rem;
						}
					}

					>.date {
						color: #B5B5B5;
						letter-spacing: 1.36px;
						@include for-size(tablet-portrait-up) {
							font-size: 1.25rem;
						}
					}
				}

				.btn {
					font-weight: 600;
					@include for-size(phone-only) {
						flex-grow: 1;
						max-width: 200px;
						margin: 0 auto;
						margin-top: 30px;
					}
				}
			}

			&__range {
				align-self: center;
			}
		}
	}
</style>
