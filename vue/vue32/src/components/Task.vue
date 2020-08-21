<template>
	<div class="task">
		<input type="checkbox" v-model="task.done" name="">
		{{ task.content }}
	</div>
</template>

<script>
	export default {
		props: {
			task: {
				type: Object,
				default: function(){
					return {content: "Chua co gi", done: false}
				},
				require: false,
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	
</style>