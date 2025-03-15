
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

    // quote 1
    const quote1PlaceHolder = document.createElement("div");
    
    const quote1 = document.createElement("p");
    quote1.classList.add("quote");
    quote1.innerText = "\"Ko je poslao sliku mog caleta?\"";
    quote1PlaceHolder.appendChild(quote1);

    const quote1Author = document.createElement("p");
    quote1Author.classList.add("author");
    quote1Author.innerText = "Danilo Badnjar";
    quote1PlaceHolder.appendChild(quote1Author);
    
    quotesPlaceHolder.appendChild(quote1PlaceHolder);

    // quote 2
    const quote2PlaceHolder = document.createElement("div");

    const quote2 = document.createElement("p");
    quote2.classList.add("quote");
    quote2.innerText = "\"Juliet has massive gyatt.\"";
    quote2PlaceHolder.appendChild(quote2);

    const quote2Author = document.createElement("p");
    quote2Author.classList.add("author");
    quote2Author.innerText = "Romeo probably";
    quote2PlaceHolder.appendChild(quote2Author);

    quotesPlaceHolder.appendChild(quote2PlaceHolder);

    // quote 3
    const quote3PlaceHolder = document.createElement("div");

    const quote3 = document.createElement("p");
    quote3.classList.add("quote");
    quote3.innerText = "\"Erm, what a sigma?\"";
    quote3PlaceHolder.appendChild(quote3);

    const quote3Author = document.createElement("p");
    quote3Author.classList.add("author");
    quote3Author.innerText = "Squidward";
    quote3PlaceHolder.appendChild(quote3Author);

    quotesPlaceHolder.appendChild(quote3PlaceHolder);

    // quote 4
    const quote4PlaceHolder = document.createElement("div");

    const quote4 = document.createElement("p");
    quote4.classList.add("quote");
    quote4.innerText = "\"Geda Gedi Gedagao\"";
    quote4PlaceHolder.appendChild(quote4);

    const quote4Author = document.createElement("p");
    quote4Author.classList.add("author");
    quote4Author.innerText = "Chicken Nugget";
    quote4PlaceHolder.appendChild(quote4Author);

    quotesPlaceHolder.appendChild(quote4PlaceHolder);

    container.appendChild(quotesPlaceHolder);

    // More personal data
    const personalText = document.createElement("p");
    personalText.innerText = "Yo, our shop is definitely one of those bucket-list experiences you gotta check off before you die. But lemme put you on game—there's some stuff you gotta know before you come (double reference, you feel me?). First off, ALL the girls in here? Straight up GYATT lvl 10. Like, don’t even try to act like you’re ready for that level of thickness. You ain't. Secondly, everybody sippin' on that Grimace Coffee, no cap. But don’t just drink it—nah, fam, you gotta mew with it. It’s part of the ritual. No exceptions. When you step in the door, there’s a dude in a full Duke Dennis fit, just vibin’. He’ll greet you with a Duke Dennis hug so warm, you’ll think your gyatt is in a safe space—but lowkey, it's just part of his maxed rizz. And then, well… let’s just say there’s a lot of other wild things that go down here—stuff we can’t really speak on in public. Just know, we’re talkin’ ZaZa and Fent-level vibes, my G. Pull up if you dare. 👀";
    container.appendChild(personalText);

}