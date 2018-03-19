<template>
    <div class="calendar">
        <div class="calendar__title">
            <span>Select the dates to stay in Charlotte</span>
        </div>
        <div class="calendar__options options">
            <div class="options__selected-dates">
                <p>Check-in</p>
                <p>{{startDate}}</p>
            </div>
            <div class="options__selected-dates">
                <p>Check-out</p>
                <p>{{endDate}}</p>
            </div>
        </div>
        <div class="calendar__range">
            <v-date-picker mode="range"
            is-single-paned
            :is-expanded="true"
            v-model='selectedDate'></v-date-picker>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                selectedDate: null,
                startDate: 'August 13, 2017',
                endDate: 'August 13, 2017'
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

        padding: 60px 100px;

        background-color: $color-white;

        border-radius: 10px;

        &__title {
            
            text-align: center;
            font-size: 1.375rem;
            letter-spacing: 1.5px;
            font-weight: 600;
        }
    }

</style>
