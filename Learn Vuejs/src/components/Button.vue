<template>
	<button @click="onClick()">{{ text }}</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		text: String,
	},
	methods: {
		onClick() {
			this.$emit('toggle-add-task')
		},
	},
};
</script>
