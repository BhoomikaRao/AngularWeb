var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score = scope.score + 10;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

app.factory('quizFactory', function() {
	var questions = [
		{
			question: "Most commonly used bleaching agent is?",
			options: ["alcohol", "chlorine", "sodium chloride", "carbon dioxide"],
			answer: 1
		},
		{
			question: "The mercury and sodium street lamps light up because of?",
			options: ["atomic absorption", "atomic emission", "electron absorption", "electron emission"],
			answer: 1
		},
		{
			question: "What happens when a drop of glycerol is added to kmno4 ?",
			options: ["paper ignites", "crackling sound", "violent explosion", "no reaction"],
			answer: 0
		},
		{
			question: "Which is the most common isotope of hydrogen?",
			options: ["protium", "deuterium", "tritium", "hydrogen has only one isotope"],
			answer: 0
		},
		{
			question: "Which of the following was most probably the first metal to be used in India?",
			options: ["Iron", "Copper", "Gold", "Silver"],
			answer: 1
		},
		{	
			question: "Combustion is a ?",
			options: ["physical and chemical process", "biological process", "physical process", "chemical process"],
			answer: 3
		},
		{
			question: "natural radioactivity was discovered by?",
			options: ["Rutherford", "Marie Curie", "Henri Bequerel", "Enrico fermi"],
			answer: 1
		},
		{
			question: "Brown ring test is formed in which experiment?",
			options: ["nitrate", "sulphate", "chloride", "iodide"],
			answer: 0
		},
		{
			question: "whena helium atom loses an electron it becomes?",
			options: ["alpha particle", "proton", "positive helium ion", "negative helium ion"],
			answer: 2
		},
		{
			question: "Element that is in the highest percentage on earth?",
			options: ["silicon", "oxygen", "magnesium", "Iron"],
			answer: 1
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});
