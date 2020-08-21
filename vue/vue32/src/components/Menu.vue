<template>
	<div>
		<h2>
			{{ message }}
		</h2>
		<ul>
			<li><a href="#">ABC</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Xin chao'
			}
		},
		created() {
			console.log('Menu created');
		},
		mounted() {
			console.log('Menu mounted');
		}

	}
</script>

<style scoped>

h2 {
	color: red;
}

ul li a {
	color: green;
}
	
</style>