import * as main from '../main.js';




const questionSeven = () => {

    main.checkPerson();

    // Разметка страницы
    const markupQuestionSeven = `
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
                <a href='#/q6' type="button" class='button' >Назад</a>
                <a href='#/q8' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-7">
            <h3>Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм</h3>
            <p>
            Для этого поставьте ребенка на чистый лист бумаги так, чтобы опора была сразу на обе стопы, обведите ступню по периметру карандашом/ручкой, измерьте линейкой расстояние от наиболее выпуклой точки пятки до большого пальца ноги.
            </p>
            
        </div>

        <div class='progress-line'>
            <div></div>
        </div>
        `;

    console.log(main.state);
    const personState = main.state.person.personCard;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionSeven);

        checkChildren();
        getShoesSize()
        // getInput('[data-shoes="length"]');
    }

    const checkChildren = () => {
        if (main.state.person.personCard.children.answer[0] != 'Нет детей') {
            addChildCard();
        } else {
            console.log('Детей нет --> ');
            const markupCardNoChildren = `
            <div class='foot-size no-children' >
                <span>Длина стопы:&nbsp</span>
                <input data-shoes="length"  placeholder="Напишите..." type=text />
            </div>   
            `;
            document.querySelector('.question-7').insertAdjacentHTML('beforeend', markupCardNoChildren);
        }
        
    }

    // Рендерим количество детей
    const addChildCard = () => {

        main.state.person.personCard.personAnswers.map((card, index) => {
            const markupCardChild = `
                    <div class="child-card">
                        <img class='image-child' src='${main.choiceAvatar(card.card.gender)}' />
                        <div class='child-info' >
                            <span class='title-gender'>Пол: ${card.card.gender}</span>
                            <span class='title-age'>Возраст: ${card.card.age}</span>
                            <span>Размер: ${card.card.shoesSize} </span>
                            <div class='foot-size' >
                                <span>Длина стопы:&nbsp</span>
                                <input data-shoes="length"  placeholder="Напишите..." type=text />
                            </div>   
                        </div>
                </div>
            `;
            document.querySelector('.question-7').insertAdjacentHTML('beforeend', markupCardChild);
        });
        
    }

    const getInput = (name) => {
        const inputPath = document.querySelectorAll(name);
        inputPath.forEach((child, index) => {
            // console.log(child, index);
            child.addEventListener('input', () => {
                personState.personAnswers[index].card.shoesLength = `${child.value} mm`;
            })
        });
        console.log(personState)
    }


    // Записываем ответы в state
    const getShoesSize = () => {

        // Получаем Input откуда забираем value
        const inputPath = document.querySelectorAll('[data-shoes="length"]');

        // Добавляем прослушку каждого input
        inputPath.forEach((e, index) => {
            e.addEventListener('blur', (item) => {
                if (inputPath.length === 1) {
                    // Обувь какого размера вы покупаете ребенку в данный момент?
                    personState.personAnswers[index] ={
                        question: 'Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм',
                        answer: item.target.value
                    }
                    console.log(inputPath.length);
                } else {
                    // Записываем ответ в state
                    personState.personAnswers[index].card.shoesSize = item.target.value;
                    console.log(personState);
                }

                
            })
        })
        
    }



    return renderPage();
}

export default questionSeven;