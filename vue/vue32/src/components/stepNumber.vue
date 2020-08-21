<template>
	<div>
		<button @click="num.value--">-</button>
		<span>{{ num.value }}</span>
		<button @click="num.value++">+</button>
	</div>
</template>

<script>
	export default {
		props: ['num'],
		data() {
			return {
			
			}
		},

		watch: {
			num: function() {
				console.log("num is changed");
			}

		},

		methods: {
			increase: function() {
				this.num++;
			},
			decrease: function() {
				if (this.num == 0) return;

				this.num--;
			} 
		}

	}
</script>

<style scoped>


	
</style>