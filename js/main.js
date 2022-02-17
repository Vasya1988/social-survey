

const markupCounter = `
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
`;

const markupNavButton = `
<div class='nav-button'>
    <span>67%</span>
    <div class="buttons">
        <button type="button" class='button' >Назад</button>
        <button type="button" class='button' >Вперед</button>
    </div>
</div>
`;

const markupProgressLine = `
<div class='progress-line'>
    <div></div>
</div>
`;

const markupStart = `
    <div class="start">
        <p
            class='discription'
        >
            <span>Здравствуйте!</span>
            <br>
            Мы производители российской обуви для детей.
            Производим обувь по стандартам, созданным еще в 1975 году.
            Данный опрос поможет нам внести корректные изменения в размерную сетку(авынаверняка     сталкивались с несоответствием
            размеров и длины стопы),
            Просим ответить вас на несколько вопросов:
            
            Заранее благодарны за сотрудничество!
        </p>
        <div class="start-button">
            <button id="button-start" class='button button-start'>Пройти опрос</button>
            <a href="#" >Закрыть страницу</a>
        </div>
    </div>
`;

const elements = {
    container: document.getElementById('app'),
    buttonStart: document.getElementById('button-start')
}
let myPath;

// ----------------------- Рендерим разметку

export const pageRender = (markup) => {
    return new Promise ((resolve, reject) => {
        
        setTimeout(()=>{
            elements.container.insertAdjacentHTML("beforeend", markup);
            resolve();
            
        }, 500)
    })
};

// ----------------------- Функция для тестов

function test(path) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{console.log('Render work --> ', path)}, 300)
    })
}

async function render(element, path) {

    await pageRender(element);
    await test(path)

}

window.addEventListener('load', render(markupStart ,elements.buttonStart))