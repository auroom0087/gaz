<template>
	<div>
		<h2>Викторина</h2>
		<form v-for="question in questions" @submit.prevent="getAnswer">
				<h2>{{ question.title }}</h2>
				<div v-for="(answer, index) in question.answers">
					<input type="radio" v-model="answer1" :value="answer" />{{ answer }}</p>
				</div>
			
			<input type="submit" class="btn btn-primary" value="Ответить" />

		</form>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				answer1: '',
				questions: [
					{
						title: 'Q1',
						answers: [
							'A1',
							'A2'
						]
					},
					{
						title: 'Q2',
						answers: [
							'A12',
							'A22'
						]
					},
				],
			}
		},
		methods: {
			getAnswer() {
				console.log(this.answer1)
			}
		}

	}

</script>