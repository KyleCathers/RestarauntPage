import breakfastBurgerPic from './images/breakfastBurger.jpg';
import beefBurgerPic from './images/beefBurger.jpg';
import bisonBurgerPic from './images/bisonBurger.jpg';
import chickenBurgerPic from './images/chickenBurger.jpg';
import salmonBurgerPic from './images/salmonBurger.jpg';

function menu() {
    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');

    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'left-side');
    
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'right-side');

    menuContent.appendChild(leftSide);
    menuContent.appendChild(rightSide);

    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const menuTitle = document.createElement('div');
    menuTitle.setAttribute('id', 'menu-title');
    menuTitle.innerText = "Menu";

    const menuBox = document.createElement('div');
    menuBox.setAttribute('id', 'menu-box');

    // breakfast burger

    const breakfastBurger = document.createElement('div');
    breakfastBurger.setAttribute('id', 'breakfast-burger');
    breakfastBurger.setAttribute('class', 'burger');

    const breakfastBurgerImg = new Image();
    breakfastBurgerImg.setAttribute('class', 'img');
    breakfastBurgerImg.src = breakfastBurgerPic;

    const breakfastBurgerRight = document.createElement('div');
    breakfastBurgerRight.setAttribute('class', 'right');

    const breakfastBurgerTitle = document.createElement('div');
    breakfastBurgerTitle.setAttribute('class', 'title');
    breakfastBurgerTitle.innerHTML = "Breakfast Burger";

    const breakfastBurgerText = document.createElement('div');
    breakfastBurgerText.setAttribute('class', 'text');
    breakfastBurgerText.innerText = "❖ Fried Egg\n ❖ White Cheddar Cheese\n ❖ Lettuce\n\
                                     ❖ Bacon\n ❖ Tomato\n\ ❖ Caramelized Onion\n \
                                     ❖ Toasted Brioche Bun\n ❖ Bacon Aoili";

    breakfastBurgerRight.append(breakfastBurgerTitle);
    breakfastBurgerRight.append(breakfastBurgerText);

    breakfastBurger.append(breakfastBurgerImg);
    breakfastBurger.append(breakfastBurgerRight);


    // beef burger

    const beefBurger = document.createElement('div');
    beefBurger.setAttribute('id', 'beef-burger');
    beefBurger.setAttribute('class', 'burger');

    const beefBurgerImg = new Image();
    beefBurgerImg.setAttribute('class', 'img');
    beefBurgerImg.src = beefBurgerPic;

    const beefBurgerRight = document.createElement('div');
    beefBurgerRight.setAttribute('class', 'right');

    const beefBurgerTitle = document.createElement('div');
    beefBurgerTitle.setAttribute('class', 'title');
    beefBurgerTitle.innerHTML = "Double Beef Burger";

    const beefBurgerText = document.createElement('div');
    beefBurgerText.setAttribute('class', 'text');
    beefBurgerText.innerText = "❖ Double Beef Patty\n ❖ White Cheddar Cheese\n ❖ Lettuce\n\
                                ❖ Toasted Sesame Seed Bun\n ❖ Red Onion\n ❖ Garlic Aoili\n\
                                ❖ Pickles\n ❖ Tomato\n";

    beefBurgerRight.append(beefBurgerTitle);
    beefBurgerRight.append(beefBurgerText);

    beefBurger.append(beefBurgerImg);
    beefBurger.append(beefBurgerRight);


    // bison burger

    const bisonBurger = document.createElement('div');
    bisonBurger.setAttribute('id', 'bison-burger');
    bisonBurger.setAttribute('class', 'burger');

    const bisonBurgerImg = new Image();
    bisonBurgerImg.setAttribute('class', 'img');
    bisonBurgerImg.src = bisonBurgerPic;

    const bisonBurgerRight = document.createElement('div');
    bisonBurgerRight.setAttribute('class', 'right');

    const bisonBurgerTitle = document.createElement('div');
    bisonBurgerTitle.setAttribute('class', 'title');
    bisonBurgerTitle.innerHTML = "Bison Burger";

    const bisonBurgerText = document.createElement('div');
    bisonBurgerText.setAttribute('class', 'text');
    bisonBurgerText.innerText = "❖ Grass Fed Bison Patty\n ❖ Swiss Cheese\n ❖ Lettuce\n ❖ Tomato\n\
                                 ❖ Caramelized Onions\n ❖ Toasted Brioche Cun\n ❖ Jalepeno Aoili";

    bisonBurgerRight.append(bisonBurgerTitle);
    bisonBurgerRight.append(bisonBurgerText);

    bisonBurger.append(bisonBurgerImg);
    bisonBurger.append(bisonBurgerRight);


    // chicken burger

    const chickenBurger = document.createElement('div');
    chickenBurger.setAttribute('id', 'chicken-burger');
    chickenBurger.setAttribute('class', 'burger');

    const chickenBurgerImg = new Image();
    chickenBurgerImg.setAttribute('class', 'img');
    chickenBurgerImg.src = chickenBurgerPic;

    const chickenBurgerRight = document.createElement('div');
    chickenBurgerRight.setAttribute('class', 'right');

    const chickenBurgerTitle = document.createElement('div');
    chickenBurgerTitle.setAttribute('class', 'title');
    chickenBurgerTitle.innerHTML = "Chicken Burger";

    const chickenBurgerText = document.createElement('div');
    chickenBurgerText.setAttribute('class', 'text');
    chickenBurgerText.innerText = "❖ Double Fried Chicken\n ❖ Cheddar Cheese\n ❖ Lettuce\n\
                                   ❖ Toasted Brioche Cun\n ❖ Sriracha Aoili";

    chickenBurgerRight.append(chickenBurgerTitle);
    chickenBurgerRight.append(chickenBurgerText);

    chickenBurger.append(chickenBurgerImg);
    chickenBurger.append(chickenBurgerRight);

    // salmon burger

    const salmonBurger = document.createElement('div');
    salmonBurger.setAttribute('id', 'salmon-burger');
    salmonBurger.setAttribute('class', 'burger');

    const salmonBurgerImg = new Image();
    salmonBurgerImg.setAttribute('class', 'img');
    salmonBurgerImg.src = salmonBurgerPic;

    const salmonBurgerRight = document.createElement('div');
    salmonBurgerRight.setAttribute('class', 'right');

    const salmonBurgerTitle = document.createElement('div');
    salmonBurgerTitle.setAttribute('class', 'title');
    salmonBurgerTitle.innerHTML = "Salmon Burger";

    const salmonBurgerText = document.createElement('div');
    salmonBurgerText.setAttribute('class', 'text');
    salmonBurgerText.innerText = "❖ Wild Salmon Patty\n ❖ Red Onion\n ❖ Lettuce\n ❖ Tomato\n\
                                   ❖ Toasted Brioche Cun\n ❖ Remoulade Sauce";

    salmonBurgerRight.append(salmonBurgerTitle);
    salmonBurgerRight.append(salmonBurgerText);

    salmonBurger.append(salmonBurgerImg);
    salmonBurger.append(salmonBurgerRight);

    menuBox.append(breakfastBurger);
    menuBox.append(beefBurger);
    menuBox.append(bisonBurger);
    menuBox.append(chickenBurger);
    menuBox.append(salmonBurger);

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    rightSide.append(topHomeBorder);
    rightSide.appendChild(menuTitle);
    rightSide.appendChild(menuBox);
    rightSide.append(bottomHomeBorder);
    
    return menuContent;
}

export default menu;