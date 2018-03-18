<template>
	<div id="app">
		<!-- Header -->
		<header-template></header-template>
		<!-- Main -->
		<main-view></main-view>
		<!-- Footer -->
		<footer-template></footer-template>
	</div>
</template>

<script>
	import MainView from '_app/views/Main.vue'
	import HeaderTemplate from '_app/views/templates/HeaderTemplate.vue'
	import FooterTemplate from '_app/views/templates/FooterTemplate.vue'

	export default {
		name: 'app',

		components: {
			MainView,
			HeaderTemplate,
			FooterTemplate
		},

		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},

		mounted () {
		}
	}
</script>

<style lang="scss">
</style>