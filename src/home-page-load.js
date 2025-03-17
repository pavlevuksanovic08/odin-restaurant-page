import caffeImg from "./images/caffe.png";

export function loadHomePage() {

    const container = document.querySelector("#content");

    // WELCOME heading
    const welcomeHeader = document.createElement("h1");
    welcomeHeader.innerText = "Welcome to SKIBIDI COFFEE SHOP";
    container.appendChild(welcomeHeader);

    // INTRODUCTION
    const shortIntroText = document.createElement("p");
    shortIntroText.innerText = "Skibidi Coffee Shop? Nah, it’s more than a spot—it’s where the real world slides straight into Gen Z and Gen Alpha territory, no cap. Like, you thought you were in reality, but nah fam, you’re in the multiverse now. But hold up, it’s not just Z’s and Alpha’s up in here. We got the whole Greek alphabet reppin' heavy—SIGMA energy on max, rockin' them massive low taper fades that’ll have you questioning your whole existence. BUT WAIT—DO YOU KNOW WHAT ELSE IS MASSIVE? AAGHHH!!";
    container.appendChild(shortIntroText);

    // QUOTES
    const quotesPlaceHolder = document.createElement("div");

    const quotes = [
        {quote: "\"Ko je poslao sliku mog caleta?\"", author: "Danilo Badnjar"},
        {quote: "\"Juliet has massive gyatt.\"", author: "Romeo probably"},
        {quote: "\"Erm, what a sigma?\"", author: "Squidward"},
        {quote: "\"Geda Gedi Gedagao\"", author: "Chicken Nugget"}
    ];

    // render quotes
    for (let quote of quotes) {
        const quotePlaceHolder = document.createElement("div");

        const quoteText = document.createElement("p");
        quoteText.classList.add("quote");
        quoteText.innerText = quote.quote;
        quotePlaceHolder.appendChild(quoteText);

        const quoteAuthorText = document.createElement("p");
        quoteAuthorText.classList.add("author");
        quoteAuthorText.innerText = quote.author;
        quotePlaceHolder.appendChild(quoteAuthorText);

        quotesPlaceHolder.appendChild(quotePlaceHolder);
    }
    container.appendChild(quotesPlaceHolder);

    // Image
    const caffeImage = document.createElement("img");
    caffeImage.src = caffeImg;
    container.appendChild(caffeImage);

    // More personal data
    const personalText = document.createElement("p");
    personalText.innerText = "Yo, our shop is definitely one of those bucket-list experiences you gotta check off before you die. But lemme put you on game—there's some stuff you gotta know before you come (double reference, you feel me?). First off, ALL the girls in here? Straight up GYATT lvl 10. Like, don’t even try to act like you’re ready for that level of thickness. You ain't. Secondly, everybody sippin' on that Grimace Coffee, no cap. But don’t just drink it—nah, fam, you gotta mew with it. It’s part of the ritual. No exceptions. When you step in the door, there’s a dude in a full Duke Dennis fit, just vibin’. He’ll greet you with a Duke Dennis hug so warm, you’ll think your gyatt is in a safe space—but lowkey, it's just part of his maxed rizz. And then, well… let’s just say there’s a lot of other wild things that go down here—stuff we can’t really speak on in public. Just know, we’re talkin’ ZaZa and Fent-level vibes, my G. Pull up if you dare. 👀";
    container.appendChild(personalText);

}