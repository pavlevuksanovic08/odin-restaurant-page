import espressoImage from "./images/espresso.png";
import americanoImage from "./images/americano.png";
import icedAmericanoImage from "./images/iced-americano.png";
import latteImage from "./images/latte.png";
import icedLatteImage from "./images/iced-latte.png";
import strawberryLatteImage from "./images/strawberry-latte.png";
import icedStrawberryLatteImage from "./images/iced-strawberry-latte.png";
import strawberryFreshImage from "./images/strawberry-fresh.png";
import prettyInPinkImage from "./images/pretty-in-pink.png";
import vanillaLatteImage from "./images/vanilla-latte.png";
import icedVanillaLatteImage from "./images/iced-vanilla-latte.png";
import vanillaMountainImage from "./images/vanilla-mountain.png";
import chocolateLatteImage from "./images/chocolate-latte.png";
import icedChocolateLatteImage from "./images/iced-chocolate-latte.png";
import mochaImage from "./images/mocha.png";
import chocolateDelightImage from "./images/chocolate-delight.png";
import neapolitanImage from "./images/neapolitan.png";
import lavenderLatteImage from "./images/lavender-latte.png";
import icedLavenderLatteImage from "./images/iced-lavender-latte.png";
import affogatoImage from "./images/affogato.png";
import vanillaAffogatoImage from "./images/vanilla-affogato.png";
import sugarRushImage from "./images/sugar-rush.png";



export function loadMenuPage() {

    const menuItems = [
        {title: "Espresso", ingredients: "Espresso", price: "$3.00", image: espressoImage},
        {title: "Americano", ingredients: "Espresso + Hot Water", price: "$3.50", image: americanoImage},
        {title: "Iced Americano", ingredients: "Espresso + Cold Water + Ice (2 scoops)", price: "$3.50", image: icedAmericanoImage},
        {title: "Latte", ingredients: "Espresso + Steamed Whole Milk", price: "$4.00", image: latteImage},
        {title: "Iced Latte", ingredients: "Ice (2 scoops) + Whole Milk + Espresso", price: "$4.00", image: icedLatteImage},
        {title: "Strawberry Latte", ingredients: "Espresso + Strawberry Syrup (4 pumps) + Steamed Whole Milk", price: "$4.50", image: strawberryLatteImage},
        {title: "Iced Strawberry Latte", ingredients: "Ice (2 scoops) + Strawberry Syrup (4 pumps) + Whole Milk + Espresso", price: "$4.50", image: icedStrawberryLatteImage},
        {title: "Strawberry Fresh", ingredients: "Strawberry Puree (2 scoops) + Strawberry Syrup (4 pumps) + Cold Water + Ice (2 scoops)", price: "$4.50", image: strawberryFreshImage},
        {title: "Pretty in Pink", ingredients: "Strawberry Syrup (4 pumps) + Whole Milk + Espresso + Whipped Cream + Strawberry Slices", price: "$5.00", image: prettyInPinkImage},
        {title: "Vanilla Latte", ingredients: "Espresso + Vanilla Syrup (4 pumps) + Steamed Whole Milk", price: "$4.00", image: vanillaLatteImage},
        {title: "Iced Vanilla Latte", ingredients: "Ice (2 scoops) + Vanilla Syrup (4 pumps) + Whole Milk + Espresso", price: "$4.00", image: icedVanillaLatteImage},
        {title: "Vanilla Mountain", ingredients: "Vanilla Syrup (4 pumps) + Whole Milk + Espresso + Whipped Cream + Vanilla Flower + Vanilla Bean", price: "$5.00", image: vanillaMountainImage},
        {title: "Chocolate Latte", ingredients: "Espresso + Chocolate Syrup (4 pumps) + Steamed Whole Milk", price: "$4.00", image: chocolateLatteImage},
        {title: "Iced Chocolate Latte", ingredients: "Ice (2 scoops) + Chocolate Syrup (4 pumps) + Whole Milk + Espresso", price: "$4.00", image: icedChocolateLatteImage},
        {title: "Mocha", ingredients: "Espresso + Chocolate Syrup (4 pumps) + Steamed Whole Milk + Whipped Cream + Cocoa Powder", price: "$4.50", image: mochaImage},
        {title: "Chocolate Delight", ingredients: "Chocolate Syrup (4 pumps) + Whole Milk + Espresso + Whipped Cream + Chocolate Chips + Cocoa Powder", price: "$5.00", image: chocolateDelightImage},
        {title: "Neapolitan", ingredients: "Syrup (4 pumps) + Whole Milk + Espresso + Whipped Cream + Strawberry Slices + Chocolate Chips + Vanilla Bean", price: "$5.00", image: neapolitanImage},
        {title: "Lavender Latte", ingredients: "Espresso + Lavender Syrup (4 pumps) + Steamed Whole Milk", price: "$4.50", image: lavenderLatteImage},
        {title: "Iced Lavender Latte", ingredients: "Ice (2 scoops) + Lavender Syrup (4 pumps) + Whole Milk + Espresso", price: "$4.50", image: icedLavenderLatteImage},
        {title: "Affogato", ingredients: "Espresso + Vanilla Ice Cream", price: "$4.50", image: affogatoImage},
        {title: "Vanilla Affogato", ingredients: "Espresso + Vanilla Syrup (4 pumps) + Steamed Whole Milk + Vanilla Ice Cream + Vanilla Flower + Vanilla Bean", price: "$5.00", image: vanillaAffogatoImage},
        {title: "Sugar Rush", ingredients: "Vanilla Syrup (2 pumps) + Strawberry Syrup (2 pumps) + Whole Milk + Espresso + Sprinkles", price: "$5.00", image: sugarRushImage},
    ]

    // All things from menu will be stored inside grid with css

    const container = document.querySelector("#content");
    
    //Creating grid container
    const grid_container = document.createElement("div");
    grid_container.classList.add("grid-container");

    for (let item of menuItems) {

        const itemPlacehodler = document.createElement("div");
        itemPlacehodler.classList.add("drink");

        const itemData = document.createElement("div");
        itemData.classList.add("data");

        const dataTags = ["title", "ingredients", "price"];

        for (let data of dataTags) {
            const dataLabel = document.createElement("p");
            dataLabel.innerText = item[data];
            switch (data) {
                case "title":
                    dataLabel.classList.add("title");
                    break;
                case "ingredients":
                    dataLabel.classList.add("ingredients");
                    break;
                case "price": 
                    dataLabel.classList.add("price");
                    break;
            }
            itemData.appendChild(dataLabel);     
        }

        itemPlacehodler.appendChild(itemData);

        const itemImage = document.createElement("div");
        itemImage.classList.add("image");
        const image = document.createElement("img");
        image.classList.add("coffee-image");
        image.src = item.image;
        itemImage.appendChild(image);

        itemPlacehodler.appendChild(itemImage);

        grid_container.appendChild(itemPlacehodler);
    }
    container.appendChild(grid_container);
}