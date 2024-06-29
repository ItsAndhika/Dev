<template>
	<div class="container">
		<Header @toggle-add-task="toggleAddTask" title="Hello" />
		<div v-show="showAddTask">
			<AddTask @add-task="addTask" />
		</div>
		<Tasks
			@toggle-reminder="toggleReminder"
			@delete-task="deleteTask"
			:tasks="tasks"
		/>
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
	name: "App",
	components: {
		Header,
		Tasks,
		AddTask,
	},
	data() {
		return {
			tasks: [],
			showAddTask: false,
		};
	},
	methods: {
		addTask(task) {
			this.tasks = [...this.tasks, task];
		},
		deleteTask(id) {
			this.tasks = this.tasks.filter((task) => task.id !== id);
		},
		toggleReminder(id) {
			this.tasks = this.tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			);
		},
		toggleAddTask() {
			this.showAddTask = !this.showAddTask;
		},
	},
	created() {
		this.tasks = [
			{
				id: 1,
				text: "Coding",
				day: "Saturday",
				reminder: true,
			},
			{
				id: 2,
				text: "Eat",
				day: "Saturday",
				reminder: false,
			},
			{
				id: 3,
				text: "Sleep",
				day: "Saturday",
				reminder: true,
			},
		];
	},
};
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
