import * as main from '../main.js';

const questionThree = () => {
    const markupQuestionThree = `

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
                <a href='#/q2' type="button" class='button' >Назад</a>
                <a href='#/q4' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-3">
        <h3>Укажите, пожалуйста, пол и возраст детей</h3>
        <div class="questions-group q3">
            <div class="gender">
                <span>Мальчики</span>
                <span>Девочки</span>
            </div>
            <div class="age">
                <span>0-1 год</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="age">
                <span>2-3 года</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="age">
                <span>4-5 лет</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="age">
                <span>6-7 лет</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="age">
                <span>8-9 лет</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="age">
                <span>10-11 лет</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            <div class="age">
                <span>12+</span>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
                <label class="label">
                    <input type="checkbox" class="checkbox-origin">
                    <span class="checkbox-fake"></span>
                </label>
            </div>
            
        </div>
        </div>

        <div class='progress-line'>
            <div></div>
        </div>
    `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionThree)
    }


    return renderPage();
    
}

export default questionThree;