class QuizApp {
    constructor() {
        this.currentCourse = null;
        this.currentType = null;
        this.questions = [];
        this.currentPage = 0;
        this.perPage = 5;
        this.userAnswers = {};
        this.score = 0;

        this.initElements();
        
    
        const urlParams = new URLSearchParams(window.location.search);
        const course = urlParams.get('course');
        const type = urlParams.get('type');
        
        if (course && type) {
            
            this.startQuiz(course, type);
        } else {
            
            this.showErrorMessage();
        }
    }

    initElements() {
        this.quizContainer = document.getElementById('quiz-container');
        this.courseTitle = document.getElementById('course-title');
        this.questionContainer = document.getElementById('question-container');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.scoreSection = document.getElementById('score-section');
        this.progressFill = document.getElementById('progress-fill');
        this.pageInfo = document.getElementById('page-info');
        this.errorSection = document.getElementById('error-section');

        this.bindEvents();
    }

    bindEvents() {
        this.prevBtn.onclick = () => this.previousPage();
        this.nextBtn.onclick = () => this.nextPage();
        this.submitBtn.onclick = () => this.submitQuiz();
    }

    showErrorMessage() {
        this.courseTitle.textContent = 'Quiz Access Error';
        this.errorSection.style.display = 'block';
        this.quizContainer.classList.remove('active');
    }

    startQuiz(course, type) {
    
        if (typeof questionsData === 'undefined') {
            this.courseTitle.textContent = 'Question Data Not Found';
            this.errorSection.style.display = 'block';
            this.errorSection.innerHTML = `
                <div class="error-message">
                    <h2>⚠️ Question Data Not Found</h2>
                    <p>The questionData.js file could not be loaded. Please make sure it exists.</p>
                    <a href="second.html">Go to Dashboard</a>
                </div>
            `;
            return;
        }

    
        const decodedCourse = decodeURIComponent(course);
        
    
        const courseMapping = {
        
            'Anatomy&Physiology2': 'Anatomy&Physiology2',
            'Anatomy%26Physiology2': 'Anatomy&Physiology2',
        
            'Clinical Skills 1': 'Clinical Skills 1',
            'ClinicalSkills1': 'Clinical Skills 1',
            'Clinical%20Skills%201': 'Clinical Skills 1',
            'ImmunityImmunization': 'Immunity & Immunization',
            'Immunity&Immunization': 'Immunity & Immunization',
            'Immunity%26Immunization': 'Immunity & Immunization',
            'ImmunityandImmunization': 'Immunity & Immunization',
            
            'Symptomatology': 'Symptomatology',
            'Microbiology': 'Microbiology'
        };


        let actualCourseName = null;
        
        
        actualCourseName = courseMapping[course] || courseMapping[decodedCourse];
        
        
        if (!actualCourseName) {
            const availableCourses = Object.keys(questionsData);
            
            
            actualCourseName = availableCourses.find(c => c === course || c === decodedCourse);
            
            
            if (!actualCourseName) {
                const searchTerm = (decodedCourse || course).toLowerCase().replace(/[&\s]/g, '');
                actualCourseName = availableCourses.find(c => 
                    c.toLowerCase().replace(/[&\s]/g, '').includes(searchTerm) ||
                    searchTerm.includes(c.toLowerCase().replace(/[&\s]/g, ''))
                );
            }
        }

        console.log('Original course:', course);
        console.log('Decoded course:', decodedCourse);
        console.log('Mapped course:', actualCourseName);
        console.log('Available courses:', Object.keys(questionsData));

        
        if (!actualCourseName || !questionsData[actualCourseName]) {
            this.courseTitle.textContent = `Course Not Found`;
            this.errorSection.style.display = 'block';
            this.errorSection.innerHTML = `
                <div class="error-message">
                    <h2>⚠️ Course Not Found</h2>
                    <p>The course "${course}" was not found in the question database.</p>
                    <p><strong>Available courses:</strong></p>
                    <ul style="text-align: left; margin: 10px 0;">
                        ${Object.keys(questionsData).map(c => `<li>${c}</li>`).join('')}
                    </ul>
                    <p><strong>Debug info:</strong><br>
                    Original: ${course}<br>
                    Decoded: ${decodedCourse}<br>
                    Mapped: ${actualCourseName || 'null'}</p>
                    <a href="second.html">Go to Dashboard</a>
                </div>
            `;
            return;
        }

        this.currentCourse = actualCourseName;
        this.currentType = type;
        this.currentPage = 0;
        this.userAnswers = {};
        this.score = 0;

        
        this.questions = questionsData[actualCourseName].filter(q => {
            if (type === 'mcq') return q.type === 'mcq';
            if (type === 'fib') return q.type === 'fill-in-the-blank';
            if (type === 'theory') return q.type === 'theory';
            return false;
        });

        console.log(`Filtered questions for ${actualCourseName} - ${type}:`, this.questions);
        console.log(`Total questions in course:`, questionsData[actualCourseName].length);
        console.log(`Question types available:`, [...new Set(questionsData[actualCourseName].map(q => q.type))]);

        if (this.questions.length === 0) {
            this.courseTitle.textContent = `No ${type.toUpperCase()} Questions Found`;
            this.errorSection.style.display = 'block';
            this.errorSection.innerHTML = `
                <div class="error-message">
                    <h2>⚠️ No Questions Available</h2>
                    <p>No ${type.toUpperCase()} questions found for "${actualCourseName}".</p>
                    <p><strong>Available question types for this course:</strong></p>
                    <ul style="text-align: left; margin: 10px 0;">
                        ${[...new Set(questionsData[actualCourseName].map(q => q.type))].map(t => `<li>${t}</li>`).join('')}
                    </ul>
                    <p>Please try a different quiz type or contact your instructor.</p>
                    <a href="second.html">Go to Dashboard</a>
                </div>
            `;
            return;
        }

    
        this.errorSection.style.display = 'none';
        this.quizContainer.classList.add('active');
        this.courseTitle.textContent = `${actualCourseName} - ${type.toUpperCase()} Quiz`;
        this.scoreSection.classList.remove('show');
        
        this.displayQuestions();
        this.updateProgress();
    }

    displayQuestions() {
        this.questionContainer.innerHTML = '';
        const start = this.currentPage * this.perPage;
        const end = Math.min(start + this.perPage, this.questions.length);
        const currentQuestions = this.questions.slice(start, end);

        currentQuestions.forEach((q, i) => {
            const index = start + i;
            this.questionContainer.appendChild(this.createQuestionCard(q, index));
        });

        this.updateControls();
        this.updatePageInfo();
    }

    createQuestionCard(question, index) {
        const card = document.createElement('div');
        card.className = 'question-card';

        const title = document.createElement('h3');
        title.textContent = `Q${index + 1}: ${question.question}`;
        card.appendChild(title);

        if (this.currentType === 'mcq') {
            question.options.forEach(opt => {
                const div = document.createElement('div');
                div.className = 'option';
                div.textContent = opt;

                if (this.userAnswers[index]) {
                    div.style.pointerEvents = 'none';
                    if (opt === question.correct) div.classList.add('correct');
                    if (opt === this.userAnswers[index] && opt !== question.correct) {
                        div.classList.add('wrong');
                    }
                } else {
                    div.onclick = () => this.selectOption(div, opt, question.correct, index);
                }

                card.appendChild(div);
            });
        } else if (this.currentType === 'fib') {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'fib-input';
            input.placeholder = 'Type your answer here...';
            input.value = this.userAnswers[index] || '';

            if (this.userAnswers[index]) {
                input.disabled = true;
                const isCorrect = this.checkFIBAnswer(this.userAnswers[index], question.answer);
                input.style.borderColor = isCorrect ? '#28a745' : '#dc3545';
                
                
                if (!isCorrect) {
                    const correctAnswer = document.createElement('div');
                    correctAnswer.style.marginTop = '10px';
                    correctAnswer.style.padding = '10px';
                    correctAnswer.style.backgroundColor = '#d4edda';
                    correctAnswer.style.borderRadius = '5px';
                    correctAnswer.style.color = '#155724';
                    correctAnswer.innerHTML = `<strong>Correct Answer:</strong> ${question.answer}`;
                    card.appendChild(correctAnswer);
                }
            } else {
                input.onblur = () => this.handleFIBAnswer(input, question.answer, index);
                input.onkeypress = (e) => {
                    if (e.key === 'Enter') {
                        input.blur();
                    }
                };
            }

            card.appendChild(input);
        } else if (this.currentType === 'theory') {
            const textarea = document.createElement('textarea');
            textarea.rows = 5;
            textarea.placeholder = 'Write your detailed answer here...';
            textarea.value = this.userAnswers[index] || '';
            textarea.onchange = () => {
                this.userAnswers[index] = textarea.value.trim();
                this.updateProgress();
            };
            textarea.onkeyup = () => {
                this.userAnswers[index] = textarea.value.trim();
                this.updateProgress();
            };
            card.appendChild(textarea);
        }

        return card;
    }

    selectOption(element, selected, correct, index) {
        if (this.userAnswers[index]) return;

        this.userAnswers[index] = selected;
        const allOptions = element.parentElement.querySelectorAll('.option');

        allOptions.forEach(opt => {
            opt.style.pointerEvents = 'none';
            if (opt.textContent === correct) opt.classList.add('correct');
            if (opt.textContent === selected && selected !== correct) {
                opt.classList.add('wrong');
            }
        });

        this.updateProgress();
    }

    handleFIBAnswer(input, correctAnswer, index) {
        const userAnswer = input.value.trim();
        if (!userAnswer) return;

        this.userAnswers[index] = userAnswer;
        const isCorrect = this.checkFIBAnswer(userAnswer, correctAnswer);
        
        input.style.borderColor = isCorrect ? 'rgba(17, 90, 34, 1)' : '#dc3545';
        input.disabled = true;
        
        
        if (!isCorrect) {
            const correctAnswerDiv = document.createElement('div');
            correctAnswerDiv.style.marginTop = '10px';
            correctAnswerDiv.style.padding = '10px';
            correctAnswerDiv.style.backgroundColor = '#d4edda';
            correctAnswerDiv.style.borderRadius = '5px';
            correctAnswerDiv.style.color = '#155724';
            correctAnswerDiv.innerHTML = `<strong>Correct Answer:</strong> ${correctAnswer}`;
            input.parentElement.appendChild(correctAnswerDiv);
        }
        
        this.updateProgress();
    }

    checkFIBAnswer(userAnswer, correctAnswer) {
        const user = userAnswer.toLowerCase().trim();
        const correct = correctAnswer.toLowerCase().trim();
        
        
        if (user === correct) return true;
        
    
        const removeWords = ['the', 'a', 'an', 'in', 'on', 'at', 'by', 'for', 'with', 'of'];
        const cleanUser = user.split(' ').filter(word => !removeWords.includes(word)).join(' ');
        const cleanCorrect = correct.split(' ').filter(word => !removeWords.includes(word)).join(' ');
        
        return cleanUser === cleanCorrect;
    }

    updateProgress() {
        const answered = Object.keys(this.userAnswers).length;
        const total = this.questions.length;
        const percent = total > 0 ? (answered / total) * 100 : 0;
        this.progressFill.style.width = `${percent}%`;
    }

    updateControls() {
        const totalPages = Math.ceil(this.questions.length / this.perPage);
        
        this.prevBtn.disabled = this.currentPage === 0;
        this.nextBtn.disabled = this.currentPage >= totalPages - 1;
        
        const isLastPage = this.currentPage >= totalPages - 1;
        this.nextBtn.style.display = isLastPage ? 'none' : 'inline-block';
        this.submitBtn.style.display = isLastPage ? 'inline-block' : 'none';
    }

    updatePageInfo() {
        const totalPages = Math.ceil(this.questions.length / this.perPage);
        this.pageInfo.textContent = `Page ${this.currentPage + 1} of ${totalPages}`;
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.displayQuestions();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.questions.length / this.perPage);
        if (this.currentPage < totalPages - 1) {
            this.currentPage++;
            this.displayQuestions();
        }
    }

    submitQuiz() {
        this.calculateScore();
        this.showResults();
    }

    calculateScore() {
        this.score = 0;
        
        this.questions.forEach((q, index) => {
            const userAnswer = this.userAnswers[index];
            
            if (this.currentType === 'mcq') {
                if (userAnswer === q.correct) {
                    this.score++;
                }
            } else if (this.currentType === 'fib') {
                if (userAnswer && this.checkFIBAnswer(userAnswer, q.answer)) {
                    this.score++;
                }
            } else if (this.currentType === 'theory') {
            
                if (userAnswer && userAnswer.length >= 50) {
                    this.score++;
                }
            }
        });
    }

    showResults() {
        const total = this.questions.length;
        const percent = total > 0 ? ((this.score / total) * 100).toFixed(1) : 0;
        
        let gradeMessage = '';
        let emoji = '';
        if (percent >= 90) {
            gradeMessage = 'Excellent work!';
            emoji = '🌟';
        } else if (percent >= 80) {
            gradeMessage = 'Great job!';
            emoji = '👍';
        } else if (percent >= 70) {
            gradeMessage = 'Good effort!';
            emoji = '📚';
        } else if (percent >= 60) {
            gradeMessage = 'Keep studying!';
            emoji = '💪';
        } else {
            gradeMessage = 'More practice needed. Don\'t give up!';
            emoji = '🎯';
        }

        this.scoreSection.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 20px;">${emoji} Quiz Complete!</div>
            <div style="font-size: 1.5rem; margin-bottom: 15px;">
                Score: ${this.score}/${total} (${percent}%)
            </div>
            <div style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 20px;">
                ${gradeMessage}
            </div>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="window.location.href='second.html'">
                    <i class="fas fa-home"></i> Back to Dashboard
                </button>
                <button class="btn" onclick="window.location.reload()">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
            </div>
        `;

        this.scoreSection.classList.add('show');
        this.submitBtn.disabled = true;
        this.submitBtn.textContent = 'Quiz Submitted ✓';
    }
}

function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

document.addEventListener('DOMContentLoaded', () => {
    window.quizApp = new QuizApp();
});
