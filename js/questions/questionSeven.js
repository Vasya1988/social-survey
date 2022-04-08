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

        <div class='progress-line'>
            <div></div>
        </div>
        `;

    console.log(main.state);
    const personState = main.state.person.personCard;

    const renderPage = () => {
        document.getElementById('app').insertAdjacentHTML('afterbegin', markupQuestionSeven);

        checkChildren();
        getShoesSize('length', 'shoesLength');
        checkAnswer('forward');
        // getInput('[data-shoes="length"]');
        
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

    const checkAnswer = (btn) => {
        const forward = document.querySelector(`[data-buttons="${btn}"]`);

        forward.addEventListener('click', (e) => {
            if(personState.personAnswers <= 1) {
                console.log(personState.personAnswers.length)
                e.preventDefault();
                alert("Введите ответ")
            }
        })
    }


    return renderPage();
}

export default questionSeven;