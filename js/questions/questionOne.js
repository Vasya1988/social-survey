import * as main from '../main.js';

const questionOne = () => {
    const markupQuestionOne = `
        <div class="counter">
            <nav>
                <ul>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">6</a></li>
                    <li><a href="">7</a></li>
                    <li><a href="">8</a></li>
                    <li><a href="">9</a></li>
                    <li><a href="">10</a></li>
                </ul>
            </nav>
        </div>

        <div class='nav-button'>
            <span>67%</span>
            <div class="buttons">
                <a href='#/startPage' type="button" class='button' >Назад</a>
                <a href='#/q2' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-6">
            <h3>Укажите, пожалуйста, ваше имя</h3>
            <input placeholder='Ваш ответ' data-name="yourName" class='enterYourAnswer' type=text />
        </div>


        <div class='progress-line'>
            <div></div>
        </div>
        `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionOne);
        getAnswer()
    };

    const getAnswer = () => {
        const answerInput = document.querySelector('[data-name]');

        answerInput.addEventListener('change', (item) => {
            console.log(item.target.value);
            main.createCard(item.target.value)

        })
    }
    

    return renderPage();
}
export default questionOne;