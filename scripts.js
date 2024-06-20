
const quizQuestions = [

    {

        question: "¿Qué puedes hacer para reducir el uso de plásticos?",

        answers: [

            "Usar contenedores reutilizables",

            "Comprar productos empaquetados",

            "Usar bolsas de plástico"

        ],

        correctAnswer: 0 // Índice de la respuesta correcta

    },

    {

        question: "¿Cuál es un alimento saludable?",

        answers: [

            "Papas fritas",

            "Frutas frescas",

            "Refrescos"

        ],

        correctAnswer: 1

    },

    {

        question: "¿Qué puedes hacer con los residuos orgánicos?",

        answers: [

            "Desecharlos en la basura general",

            "Compostarlos",

            "Quemarlos"

        ],

        correctAnswer: 1

    }

];

// Función para iniciar el quiz

function startQuiz() {

    const quizContainer = document.getElementById('quiz');

    quizContainer.innerHTML = ''; // Limpiar contenido previo

    quizQuestions.forEach((question, index) => {

        const questionDiv = document.createElement('div');

        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');

        questionTitle.textContent = `${index + 1}. ${question.question}`;

        questionDiv.appendChild(questionTitle);

        const answersList = document.createElement('ul');

        question.answers.forEach((answer, answerIndex) => {

            const answerItem = document.createElement('li');

            const answerLabel = document.createElement('label');

            const answerInput = document.createElement('input');

            answerInput.type = 'radio';

            answerInput.name = `question${index}`;

            answerInput.value = answerIndex;

            answerLabel.appendChild(answerInput);

            answerLabel.appendChild(document.createTextNode(answer));

            answerItem.appendChild(answerLabel);

            answersList.appendChild(answerItem);

        });

        questionDiv.appendChild(answersList);

        quizContainer.appendChild(questionDiv);

    });

    // Botón para enviar el quiz

    const submitButton = document.createElement('button');

    submitButton.textContent = 'Enviar';

    submitButton.onclick = submitQuiz;

    quizContainer.appendChild(submitButton);

}

// Función para enviar el quiz y mostrar los resultados

function submitQuiz() {

    let score = 0;

    quizQuestions.forEach((question, index) => {

        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedAnswer && parseInt(selectedAnswer.value) === question.correctAnswer) {

            score++;

        }

    });

    const quizContainer = document.getElementById('quiz');

    quizContainer.innerHTML = `<h3>Tu puntuación es ${score} de ${quizQuestions.length}</h3>`;

}

// Iniciar el quiz al cargar la página

document.addEventListener('DOMContentLoaded', startQuiz);