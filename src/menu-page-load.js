
export function loadMenuPage() {

    const menuItems = [
        {title: "espresso", ingredients: "coffee, water", price: "2$", image: ""},
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
        image.src = item.image;
        itemImage.appendChild(image);

        itemPlacehodler.appendChild(itemImage);

        grid_container.appendChild(itemPlacehodler);
    }
    container.appendChild(grid_container);
}