import * as main from '../main.js';

const questionTwo = () => {
    const markupQuestionTwo = 
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
            <a href='#/q1' type="button" class='button' >Назад</a>
            <a href='#/q3' type="button" class='button' >Вперед</a>
        </div>
    </div>
    
    
    <div class="question-2">
        <h3>Есть ли у Вас дети?</h3>
        <div class="questions-group">
            <label class="label">
                <input type="radio" name="radio-group" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' >Да, один ребенок</span>
            </label>
            
            <label class="label">
                <input type="radio" name="radio-group"  id="checkChildrenItem" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class='optionOfAnswer' >Да, два и более</span>
                <span> &nbsp (<input placeholder='' id="children-list" class='enterYourAnswer children-list' type=text />)</span>
            </label>
            
            <label class="label">
                <input type="radio" name="radio-group" class="checkbox-origin">
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
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionTwo);


        
    };
    const childrenId = () => {

        const childrenListItem = document.getElementById('children-list');

        const checkItem = document.getElementById('checkChildrenItem')

        // Функция отображения checked в кол-ве детей
        childrenListItem.addEventListener('change', () => {

            if ( childrenListItem.value.length > 0 && childrenListItem.value != 0 &&  childrenListItem.value != 1 ) {

                checkItem.checked = true;
            } else if (checkItem.checked === false) {

                childrenListItem.value = '';
            } else {

                checkItem.checked = false;
                
            }
        })
        
        console.log();
        console.dir(checkItem);

        return childrenListItem;
    }

    async function runRender() {
        await renderPage();
        await childrenId();
    }


    return runRender();
}
export default questionTwo;