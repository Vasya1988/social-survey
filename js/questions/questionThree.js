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
            <h3>Дети</h3>

            

            <button type='button' data-create='child' class='button add-child' >Добавить + </button>

        </div>

        <div class='progress-line'>
            <div></div>
        </div>
    `;
    const markupCreateChild = `
    <div class='create-frame-background' >
        <div class='create-frame' >
            <div class='options'>
                <div class='create-gender'>
                    <span>Выберите пол ребенка</span>
                    <select>
                        <option value='gender' >Выберите...</option>
                        <option value='female' >Девочка</option>
                        <option value='male' >Мальчик</option>
                    </select>
                </div>
                <div class='create-age' >
                    <span>Укажите возраст ребенка</span>
                    <select>
                        <option value='0' >0</option>
                        <option value='1' >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        <option value='5' >5</option>
                        <option value='6' >6</option>
                        <option value='7' >7</option>
                        <option value='8' >8</option>
                        <option value='9' >9</option>
                        <option value='10' >10</option>
                        <option value='11' >11</option>
                        <option value='12+' >12+</option>
                    </select>
                </div>
            </div>
            <button class='button-close' data-button='close' >close</button>
        </div>
    </div> 
    `;

 

    // Рендерим страницу
    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionThree)
    }

    // Добавить ребенка
    const addChild = () => {

        const addButton = document.querySelector('[data-create="child"]');

        addButton.addEventListener('click', (event) => {
            document.getElementById('app').parentNode.insertAdjacentHTML('afterbegin', markupCreateChild)
        })

        console.log(addButton);
    }


    // Событие кнопки close
    const closeCreateFrame = () => {
        const buttonClose = document.querySelector('[data-button=close]');

        buttonClose.addEventListener('click', (event) => {
            console.log(event)
            document.getElementById('app').removeChild(document.querySelector('.create=frame-background'))
        })
    }


    async function startScript() {
        await renderPage();
        await addChild();
        await closeCreateFrame();
    }
    return startScript();
    
}

export default questionThree;