import * as main from '../main.js';

const questionNine = () => {

    main.checkPerson();
    const pageNumber = 8;

    console.log(main.state)
    const markupQuestionNine = `

        <div class='nav-button'>
            <span>${main.progressBar(pageNumber)}%</span>
            <div class="buttons">
                <a href='#/q8' data-buttons="back" type="button" class='button' >Назад</a>
                <a href='#/finished' data-buttons="forward" type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-9">
        <h3>Где вы предпочитаете покупать детскую обувь? </h3>
        <div class="brand-list">
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Crocs</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Nordman</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Reima</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Kapika</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Kotofey</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Tapiboo</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Adidas</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Nike</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">GEOX</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Ecco</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Crosby</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Keddo</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Lassie</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Lemigo</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Scandia</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Bartek</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Naturino</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Supefit</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Elegami</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Jog Dog</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Minimen</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">IMAC</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Primigi</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Ортомода</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Юничел</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Лель</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Скороход</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Шаговита</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Kuoma</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Viking</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Сказка</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Tiflani</span>
            </label>
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Pablosky</span>
            </label>
            
            <label class="label">
                <input type="checkbox" class="checkbox-origin">
                <span class="checkbox-fake"></span>
                <span class="optionOfAnswer">Другое: </span>
                <input class='enterYourAnswer otherAnswer' type=text />
            </label>
        </div>
    </div>

    `;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionNine);

        

        document.querySelectorAll('.label').forEach((e, index) => {
            if (e.children.length > 3) {
                console.log(e)
            }
        })

        main.checkClass('.label');
        document.querySelectorAll('.label')[33].addEventListener('change', (e) => {
            if (e.target.checked === true) {
                console.log(e.target);
                document.querySelectorAll('.label')[33].children[0].checked = false;
                document.querySelectorAll('.label')[33].children[3].value = '';
            } 
            
        })
        main.clickButtons(main.getAnswer, '.label', 'whichBrand');
        main.progressBar(pageNumber);
    }

    return renderPage();
}

export default questionNine;