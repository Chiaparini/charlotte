<template>
	<div id="app">
		<!-- Header -->
		<!-- Main -->
		<!-- Footer -->
	</div>
</template>

<script>
	import Main from '_app/views/Main.vue'
	import Header from '_app/views/templates/HeaderTemplate.vue'
	import Footer from '_app/views/templates/FooterTemplate.vue'

	export default {
		name: 'app',

		components: {
			Main,
			Header,
			Footer
		},

		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>