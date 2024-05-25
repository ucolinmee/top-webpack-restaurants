const loadMenu = () => {
    const menu = [
        {
            name: "Mini Pekka's Power Pancakes",
            description: 'Fluffy stack of buttermilk pancakes topped with fresh berries, whipped cream, and a drizzle of maple syrup. A breakfast fit for a mini hero!',
            url: require('../images/menu/power-pancakes.png'),
            type: 'Food'
        },
        {
            name: "Elixir Energy Waffles",
            description: 'Crispy golden waffles served with a side of berry compote and a scoop of vanilla ice cream. Perfect for refueling mid-battle.',
            url: require('../images/menu/elixir-waffles.png'),
            type: 'Food'
        },
        {
            name: "Goblin Gang Smoothie Bowl",
            description: 'A vibrant smoothie bowl made with spinach, kale, and tropical fruits, topped with granola and chia seeds. Healthy and delicious for the green goblins!',
            url: require('../images/menu/goblin-smoothie.png'),
            type: 'Food'
        },
        {
            name: "Wizard's Wildberry Parfait",
            description: 'Layers of Greek yogurt, mixed wildberries, honey, and granola. A magical mix to start your day.',
            url: require('../images/menu/wizard-parfait.png'),
            type: 'Food'
        },
        {
            name: "Pekka's Potion Punch",
            description: 'A refreshing blend of pomegranate juice, lemonade, and sparkling water, garnished with mint. A sip of invincibility!',
            url: require('../images/menu/pekka-punch.png'),
            type: 'Drink'
        },
        {
            name: "Inferno Dragon Hot Chocolate",
            description: 'Rich hot chocolate with a dash of chili powder, topped with whipped cream and chocolate shavings. A fiery twist to warm you up!',
            url: require('../images/menu/hot-choco.png'),
            type: 'Drink'
        },
    ];
    
    const content = document.getElementById('content');

    // <div class="menu-section"> - for food
    const food = document.createElement('div');
    food.classList.add('menu-section');

    // <h1>Food</h1>
    const foodHeader = document.createElement('h1');
    foodHeader.innerHTML = "Food";
    food.appendChild(foodHeader);

    // <div class="menu-section"> - for drinks
    const drink = document.createElement('div');
    drink.classList.add('menu-section');

    // <h1>Drinks</h1>
    const drinkHeader = document.createElement('h1');
    drinkHeader.innerHTML = "Drinks";
    drink.appendChild(drinkHeader);

    menu.forEach((item) => {
        var card = createCard(item.name, item.description, item.url);
        if (item.type === 'Food') {
            food.appendChild(card);
        } else {
            drink.appendChild(card);
        }
    });

    content.appendChild(food);
    content.appendChild(drink);
}

const createCard = (name, description, imgUrl) => {
    // <div class="card">
    var card = document.createElement('div');
    card.classList.add('card');

    // img
    var foodImg = document.createElement('img');
    foodImg.src = imgUrl;

    // <div class="card-content">
    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // <h2>Food title</h2>
    var foodTitle = document.createElement('h2');
    foodTitle.innerHTML = name;
    cardContent.appendChild(foodTitle);

    // <p>Food description</p>
    var foodPara = document.createElement('p');
    foodPara.innerHTML = description;
    cardContent.appendChild(foodPara);

    card.appendChild(foodImg);
    card.appendChild(cardContent);

    return card;
}

export default loadMenu;


{/* 
<div class="card">
    <img src="" alt="">
    <div class="card-content">
        <h2>Food title</h2>
        <p>Food description</p>
    </div>
</div> 
*/}