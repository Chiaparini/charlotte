<template>
    <v-container class="menu">
        <ul class="menu__container">
            <li class="menu__container__item" v-for="(item, index) in links" :key="index">
                <a :href="item.link">{{ item.label }}</a>
            </li>
        </ul>
    </v-container>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                links: [
                    { link: '#', label: 'The Queen City' },
                    { link: '#', label: 'My Reservations' },
                    { link: '#', label: 'Guide' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss/vars';

    .menu {
        position: fixed;
        top: 0;

        width: 100%;

        &__container {
            font-family: $font-heebo-titles;

            display: flex;

            margin-top: 10px;

            &__item {
                margin: 0 20px;

                color: $color-white;

                &:first-child {
                    margin-left: 0;
                }
            }
        }

    }
</style>
