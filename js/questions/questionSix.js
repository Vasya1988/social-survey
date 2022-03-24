import * as main from '../main.js';

const questionSix = () => {

    main.checkPerson();

    const markupQuestionSix = `

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
                <a href='#/q4' data-buttons="back" type="button" class='button' >Назад</a>
                <a href='#/q7' data-buttons="forward" type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-6">
        <h3>Знаете ли Вы как правильно измерять длину стопы ребенка?</h3>
        <div class="questions-group ">
            <label class="label">
                <input name="radio-group" data-foot="size" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Да, периодически проверяю</span>
            </label>
            <label class="label">
                <input name="radio-group" data-foot="size" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Да, но не измеряю</span>
            </label>
            <label class="label">
                <input name="radio-group" data-foot="size" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Не знаю</span>
            </label>
            <label class="label">
                <input name="radio-group"  data-foot="other" type="radio" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Другое: </span>
                <input name="radio-group" data-foot="own-answer"  class='enterYourAnswer otherAnswer' type=text />
            </label>
        </div>
    </div>

    <div class='progress-line'>
        <div></div>
    </div>
    `;

    

    // Рендерим страницу
    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionSix);

        const answerElement = document.querySelectorAll('.label');
        console.log(answerElement);
        main.checkClass('.label');
        // Снимаем галочку с radio
        answerElement.forEach((e) => {
            e.addEventListener('change', (r) => {
                if (answerElement[3].children[0].checked === false) {
                    answerElement[3].children[3].value = ''
                }
            })
        })
        main.clickButtons(main.getAnswer, '.label', 'measureLength');
    };

    


    return renderPage();
}
export default questionSix;