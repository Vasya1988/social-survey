import * as main from '../main.js';

const q2 = () => {
    const markupQ2 = 
    `
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
            <a href='#/q3' type="button" class='button' >Вперед</a>
        </div>
    </div>
    
    
    <div class="question-2">
        <h3>Есть ли у Вас дети?</h3>
        <div class="questions-group">
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' >Да, один ребенок</span>
            </label>
            
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' >Да, два и более</span>
            </label>
            
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' >Нет детей</span>
            </label>
        </div>
    </div>
    <div class='progress-line'>
        <div></div>
    </div>
    
    `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQ2)
    };


    return renderPage();
}
export default q2;