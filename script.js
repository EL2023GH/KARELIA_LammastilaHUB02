// Näyttää laitteen tiedot sivupalkissa
document.addEventListener("DOMContentLoaded", function () {
    const deviceInfo = document.getElementById("deviceInfo");

    if (deviceInfo) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const userAgent = navigator.userAgent;

        deviceInfo.textContent = `Näyttö: ${width} x ${height} | Selain: ${userAgent}`;
    }
});
