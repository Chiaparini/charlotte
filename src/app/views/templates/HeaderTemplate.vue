<template>
    <nav class="navbar is-transparent menu">
        <ul class="menu__container">
            <li class="menu__container__item" v-for="(item, index) in links" :key="index">
                <a :href="item.link">{{ item.label }}</a>
            </li>
        </ul>
    </nav>
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
        position: absolute;
        top: 0;
        left: 50%;

        transform: translateX(-50%);

        background-color: transparent;

        max-width: $max-width;
        width: 100%;

        &__container {
            font-family: $font-heebo-titles;

            display: flex;

            margin-top: 10px;

            @include for-size (phone-only) {
                justify-content: space-around;
            }

            @include for-size (tablet-portrait-up) {
                padding: 0 30px;
            }

            &__item {
                margin: 0 20px;

                @include for-size (phone-only) {
                    margin: 0;
                }

                color: $color-white;

                &:first-child {
                    margin-left: 0;
                }
            }
        }

    }
</style>
