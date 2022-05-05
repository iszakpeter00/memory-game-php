// Idő számlálása

let seconds = 0.0;

let isWinner = false;

let timer = document.querySelector('.timer');

let user = document.querySelector('.user').innerHTML;

function setTimer() {
    if(!isWinner) {
        timer.innerHTML = "Time: "+seconds+" s";
        seconds+=0.1;
        seconds = Math.round(seconds * 10) / 10;
        setTimeout(setTimer, 100);
    }
};

setTimer();

// Kártyák betöltése

    let cardsArray = [{
            'name': 'image1',
            'img': 'img/image1.jpg' /* ../img/image1.jpg */
        }, {
            'name': 'image2',
            'img': 'img/image2.png'
        }, {
            'name': 'image3',
            'img': 'img/image3.jpg'
        }, {
            'name': 'image4',
            'img': 'img/image4.jpg'
        }, {
            'name': 'image5',
            'img': 'img/image5.jpg'
        }, {
            'name': 'image6',
            'img': 'img/image6.jpg'
        }, {
            'name': 'image7',
            'img': 'img/image7.png'
        }, {
            'name': 'image8',
            'img': 'img/image8.jpg'
        }];

// Rendezés véletlenszerűen

    let gameFlex = cardsArray.concat(cardsArray).sort(function(){
        return 0.5 - Math.random();
    });

// DOM

    // A "game" szakasz lekérése, flexbox belefűzése

    let gameArray = document.getElementsByClassName('game');
    let game = gameArray[0];
    let flex = document.createElement('div');
    flex.setAttribute('class', 'flex');
    game.appendChild(flex);

    // Kártyák elhelyezése

    gameFlex.forEach(function(item){

        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;

        let front = document.createElement('div');
        front.classList.add('front');

        let back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = 'url('+ item.img +')';

        flex.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

    });

// Kattintások lekezelése

    let firstcard = '';
    let secondcard = '';
    let count = 0;
    let previousTarget = null;
    let matchedCards = 0;

    // Játék vége

    let showMessage = function showMessage() {
        let message = document.querySelector('.message');
        message.classList.add("visible");
        let matched = document.querySelectorAll('.match');
        matched.forEach(function(card) {
            card.classList.add("hidden");
        });
        game.classList.add("hidden");
        
    }

    // Kártyák egyezésekor a kiválasztottak eltűntetése

    let match = function match() {
        let selected = document.querySelectorAll('.selected');
        selected.forEach(function(card) {
            card.classList.add('match');
        });
        
    };

    // Minden kör végén a kiválasztottak visszaállítása

    let resetGuess = function resetGuess() {
        firstcard = '';
        secondcard = '';
        count = 0;
        previousTarget = null;

        let selected = document.querySelectorAll('.selected');
        selected.forEach(function(card) {
            card.classList.remove('selected');
        });
    }

    flex.addEventListener('click', function(evt) {

        let clicked = evt.target;

        if( clicked == previousTarget ||
            clicked.parentNode.classList.contains('selected') ||
            clicked.parentNode.classList.contains('match') ||
            clicked.parentNode.classList.contains('flex') ||
            clicked.parentNode.classList.contains('game'))
            {
                return;
            }

        if(count<2) {
            count++;

            if(count == 1) {
                firstcard = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            }
            else {
                secondcard = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            }

            if(firstcard && secondcard) {

                if(firstcard == secondcard) {
                    setTimeout(match, 500);
                    matchedCards++;

                    if(matchedCards == 8) {
                        console.log(matchedCards);
                        isWinner = true;
                        
                        // Időeredmény és a név eltárolása adatbázisban

                        var http_request = new XMLHttpRequest();
                        http_request.open("POST", "./src/save.php", true);
                        http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                        http_request.send("name="+user+"&time="+(seconds-0.1));

                        setTimeout(showMessage, 1000);
                    }
                }
                setTimeout(resetGuess, 500);
            }
            previousTarget = clicked;
        }
    });