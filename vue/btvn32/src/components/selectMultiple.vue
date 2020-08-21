
<template>
	<div id="selectApp">
			<div id="col1" >
			<span v-for="(item, index) in data1"
			:key="index"
			@click="addElement(item, to3); to1 = [];"
			:class="{green: to3.includes(item)}"
			>{{item}}</span>
			</div>

			<div id="col2">
				
				<div @click="data3 = data3.concat(to3); 
				data1 = deleteElement(to3, data1);
				to3 = []">Sang Phải</div>

				<div @click="data1 = data1.concat(to1); 
				data3 = deleteElement(to1, data3);
				to1 = []">Sang Trái</div>
			</div>

			<div id="col3">
				<span v-for="(item, index) in data3"
				:key="index"
				@click="addElement(item, to1); to3 = []"
				:class="{green: to1.includes(item)}">
				{{item}}
				</span>
			</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				to3: [],
				to1: [],
				data1: ['html', 'css', 'js', 'php', 'python', 'r'],
				data3: [],
			}
		},
		methods: {
			addElement: function (ele, arr) {
				// body... 
				if(arr.includes(ele)) {
					arr = arr.filter(item => item != ele)
				}
				else {
					arr = arr.push(ele);
				} 
			},
			deleteElement: function(smallArr, bigArr) {
				smallArr.forEach( function(ele) {
					// statements
					bigArr = bigArr.filter(item => item != ele)
				});
				return bigArr
			}
		}
	}
</script>

<style scoped>
#selectApp {
	display: flex;
	flex-wrap: nowrap;
	width: 600px;
	height: 250px;
	border: 1px solid black;
	margin: 0 auto;
	padding: 5px;

}
#selectApp > div {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
#selectApp > div:nth-child(1) {
	width: 40%;
	border: 1px solid black;
	
}
#selectApp > div:nth-child(2) {
	width: 20%;
	border: 1px solid black;
	align-items: center;
}
#selectApp > div:nth-child(3) {
	width: 40%;
	border: 1px solid black;
}

#col1 > span {
	margin: 5px 10px;
	border: 1px solid gray;
	cursor: pointer;
}

#col2 > div {
	margin: 10px;
	border: 1px solid gray;
	cursor: pointer;
}
#col3 > span {
	margin: 5px 10px;
	border: 1px solid gray;
	cursor: pointer;
}
.green {
	background-color: green;
}
</style>