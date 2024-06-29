<template>
	<div
		@dblclick="$emit('toggle-reminder', task.id)"
		:class="[task.reminder && 'reminder', 'task']"
	>
		<h2>
			{{ task.text }}
			<span @click="$emit('delete-task', task.id)" class="delete">❌</span>
		</h2>
		<p>{{ task.day }}</p>
	</div>
</template>

<script>
export default {
	name: "Task",
	props: {
		task: Object,
	},
};
</script>

<style scoped>
.delete {
	cursor: pointer;
}

.reminder {
	border-left: 2px solid green;
}
</style>
