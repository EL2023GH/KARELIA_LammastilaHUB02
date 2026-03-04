// Näytä yksinkertainen "laitetyyppi" media-kyselyn / näytön leveyden perusteella
(function showDeviceInfo() {
    var infoElement = document.getElementById("deviceInfo");
    if (!infoElement) return;

    var width = window.innerWidth;
    var type = "Tuntematon laite";

    if (width < 576) {
        type = "Havaittu: pieni näyttö (esim. puhelin)";
    } else if (width < 992) {
        type = "Havaittu: keskikokoinen näyttö (esim. tabletti)";
    } else {
        type = "Havaittu: suuri näyttö (esim. tietokone)";
    }

    infoElement.textContent = type;
})();

// Tarkista, että valikon linkki löytyy ennen siirtymistä
(function attachMenuLinkCheck() {
    var menu = document.getElementById("mainMenu");
    if (!menu) return;

    menu.addEventListener("click", function (e) {
        var target = e.target;
        if (target.tagName.toLowerCase() === "a") {
            var url = target.getAttribute("href");
            if (!url) {
                e.preventDefault();
                alert("Virhe: linkin osoitetta ei löydy.");
                return;
            }

            // Tarkistetaan, löytyykö tiedosto palvelimelta
            e.preventDefault();
            fetch(url, { method: "HEAD" })
                .then(function (res) {
                    if (!res.ok) {
                        alert("Virhe: sivua '" + url + "' ei löydy (HTTP " + res.status + ").");
                    } else {
                        // Jos ok, siirrytään sivulle
                        window.location.href = url;
                    }
                })
                .catch(function () {
                    alert("Virhe: sivua '" + url + "' ei löydy tai yhteys epäonnistui.");
                });
        }
    });
})();

