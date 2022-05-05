import * as main from './main.js';


const finishedPage = () => {
    const markupFinishedPage = `
        <div class="start">
            <p
                class='discription'
            >
                <span>Спасибо!</span>
                <br>
                Благодарим за сотрудничество!
            </p>
        </div>
    `;

    const pageNumber = 9;

    

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupFinishedPage);

        console.log(main.state.person.personCard);
        main.progressBar(pageNumber);

        const answersExport = {

            'Где вы предпочитаете покупать детскую обувь?': main.state.person.personCard.whichBrand.answer,

            'Сталкиваетесь ли вы при выборе детской обуви со следующими проблемами?': main.state.person.personCard.shoesTrouble.answer,

            'Есть ли у Вас дети?': main.state.person.personCard.children.answer,

            'Укажите, пожалуйста, ваше имя': main.state.person.personCard.personName,

            'extra': main.state.person.personCard.personAnswers

        };
        console.log(answersExport)
    }

    return renderPage();

}


export default finishedPage;