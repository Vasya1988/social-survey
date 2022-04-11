import * as main from '../main.js';




const questionSeven = () => {

    main.checkPerson();
    const pageNumber = 6;

    // Разметка страницы
    const markupQuestionSeven = `

        <div class='nav-button'>
            <span>${main.progressBar(pageNumber)}%</span>
            <div class="buttons">
                <a href='#/q6' data-buttons='back' type="button" class='button' >Назад</a>
                <a href='#/q8' data-buttons='forward' type="button" class='button' >Вперед</a>
            </div>
        </div>

        <div class="question-7">
            <h3>Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм</h3>
            <p>
            Для этого поставьте ребенка на чистый лист бумаги так, чтобы опора была сразу на обе стопы, обведите ступню по периметру карандашом/ручкой, измерьте линейкой расстояние от наиболее выпуклой точки пятки до большого пальца ноги.
            </p>
            
        </div>

        `;

    console.log(main.state);
    const personState = main.state.person.personCard;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionSeven);

        checkChildren();
        getShoesSize('length', 'shoesLength');
        checkAnswer('[data-shoes="length"]', '[data-buttons="forward"]');
        // getInput('[data-shoes="length"]');
        main.progressBar(pageNumber);
    }
    
    // Проверка детей
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
                            <span>Размер: ${card.card.shoesSize.answer} </span>
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
    const getShoesSize = (path, noChildren) => {

        // Получаем Input откуда забираем value
        const inputPath = document.querySelectorAll(`[data-shoes="${path}"]`);

        // Добавляем прослушку каждого input
        inputPath.forEach((e, index) => {
            e.addEventListener('change', (item) => {
                if (personState.children.answer[0] === 'Нет детей') {
                    console.log('Нет детей');
                    if(personState.personAnswers.length === 2) {
                        personState.personAnswers.pop()
                    }
                    personState.personAnswers.push(
                        {
                            question: 'Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм',
                            answer: item.target.value
                        }
                    )
                    console.log(inputPath.length);
                    console.log(personState.personAnswers);
                } else {
                    console.log('Есть дети');
                    personState.personAnswers[index].card[noChildren] = {
                        question: 'Укажите, пожалуйста, длину стопы ребенка в формате: возраст ребенка-длина стопы в мм',
                        answer: item.target.value
                    }
                }
            })
        })
        
    }

    // Проверка на пустые поля
    const checkAnswer = (element, btn) => {
        const button = document.querySelector(btn),
              checkArray = document.querySelectorAll(element);

        button.addEventListener('click', (click) => {
            [...checkArray].find((elem) => {
                if (elem.value === 'Размер' || elem.value === '') {
                    click.preventDefault()
                    alert('Введите ответ')
                    return elem
                }
            })
            
        })
        
    }


    return renderPage();
}

export default questionSeven;