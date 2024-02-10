(function() {
    'use strict';

    const lotteryItems = [
        'Douglas H.',
        'Bruno H.',
        'Guilherme H.',
        'Pedro H.',
        'Lucas H.',
        'Gabriel H.',
        'Matheus H.',
        'Wandreus H.',
        'Fábio H.',
    ];

    const randomLotteryNumber = () => {
        return Math.floor(Math.random() * lotteryItems.length);
    };

    const $listContainer = document.querySelector('.list-container');
    const $list = $listContainer.querySelector('.list');
    const $resetButton = document.getElementById('resetButton');

    const resetList = () => {
        // Törlöm az összes meglévő elemet a listából
        $list.innerHTML = '';

        // Újra hozzáadom az összes elemet a sorsolt elemek listájából
        lotteryItems.forEach((item) => {
            const liItem = document.createElement('li');
            liItem.textContent = item;
            $list.appendChild(liItem);
        });
    };

    // Újra gomb eseménykezelője
    $resetButton.addEventListener('click', resetList);

    const listItemTxt = lotteryItems[randomLotteryNumber()];

    // Kezdeti megjelenítés
    lotteryItems.forEach((item) => {
        const liItem = document.createElement('li');
        liItem.textContent = item;

        $list.appendChild(liItem);
    });

    // Várakozás, majd véletlenszerű elem megjelenítése
    setTimeout(() => {
        $listContainer.innerHTML = `<p class="list-item"><span>${listItemTxt}</span></p>`;
    }, 2000);

})();
