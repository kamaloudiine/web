function OnOffAmpoule() {
    const ampoule = document.getElementById("ampoule");

    if (ampoule.src.includes("pic_bulboff.gif")) {
        ampoule.src = "images/pic_bulbon.gif";
        ampoule.alt = "Ampoule allumée";
    } else {
        ampoule.src = "images/pic_bulboff.gif";
        ampoule.alt = "Ampoule éteinte";
    }
}
