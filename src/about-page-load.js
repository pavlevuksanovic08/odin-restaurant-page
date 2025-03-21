
export function loadAboutPage() {

    const container = document.querySelector("#content");

    // Header
    const header = document.createElement("h1");
    header.innerText = "ABOUT US";
    container.appendChild(header);

    // Information Text
    const infoText = document.createElement("p");
    infoText.innerText = "We’ve been killin' the game for 9 straight years since 2016, the most legendary year ever. We're hustling hard in Ohio, the city where the wildest TikTok rizz parties go down and the energy's always on another plane. The CEO of Skibidi Coffee Shop? He is a LeBron James gooner—a real baller in every sense, making plays, stacking racks, and running the block like he owns it. And don’t sleep on him—he’s got that Ice Spice-level gyatt—drip on a thousand, charisma that hits different, and a vibe that has everyone buzzing.\nWe don’t just serve coffee—we serve straight-up vibes. If you want the best brew with unstoppable energy, you know where we at. Roll through, grab your cup, and catch that next-level chill that only the real ones get.";
    container.appendChild(infoText);

    // Location
    const locationPlaceholder = document.createElement("div");
    locationPlaceholder.classList.add("location");

    const locationData = document.createElement("div");
    locationData.classList.add("location-data")

    const street = document.createElement("p");
    street.innerText = "2253 3rd St";
    locationData.appendChild(street);

    const city = document.createElement("p");
    city.innerText = "Cuyahoga Falls";
    locationData.appendChild(city);

    const state = document.createElement("p");
    state.innerText = "OH 44221";
    locationData.appendChild(state);

    const country = document.createElement("p");
    country.innerText = "United States";
    locationData.appendChild(country);

    locationPlaceholder.appendChild(locationData);

    const locationMaps = document.createElement("div");
    locationMaps.classList.add("location-map");
    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5383.6783216382155!2d-81.48579905486228!3d41.13793758354303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3363%20Horner%20Street%20Cuyahoga%20Falls!5e1!3m2!1ssr!2srs!4v1742231891484!5m2!1ssr!2srs";
    map.width = "400";
    map.height = "300";
    map.style.border = "0";
    map.allowFullscreen = true;
    map.loading = "lazy";
    locationMaps.appendChild(map);
    locationPlaceholder.appendChild(locationMaps);

    container.appendChild(locationPlaceholder);

    // Contact Us
    const contactsPlaceholder = document.createElement("div");
    const contacts = [
        {person: "John Pork", number: "+44 1632 960961", gmail: "johnpork@gmail.com", instagram: "@johnpork"},
        {person: "Kai Cenat", number: "+1 (123) 456-7890", gmail: "kaicenat@gmail.com", instagram: "@kaicenat"},
        {person: "Bombombini Gusini", number: "+39 06 1234 5678", gmail: "bombombinigusini@gmail.com", instagram: "@bombombinigusini"},
    ];

    for (let contact of contacts) {

        const contactPlaceholder = document.createElement("div");
        contactPlaceholder.classList.add("contact");

        const title = document.createElement("h3");
        title.classList.add("person");
        title.innerText = contact.person;
        contactPlaceholder.appendChild(title);

        const typesOfContact = ["number", "gmail", "instagram"];

        for (let type of typesOfContact) {
            const typeOfContact = document.createElement("p");
            typeOfContact.innerText = contact[type];
            contactPlaceholder.appendChild(typeOfContact);
        }

        contactsPlaceholder.appendChild(contactPlaceholder);
    }
    container.appendChild(contactsPlaceholder);
}
