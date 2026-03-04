(function setupOrderPage() {
    var sendBtn = document.getElementById("sendOrderBtn");
    var cancelBtn = document.getElementById("cancelOrderBtn");
    var statusBox = document.getElementById("orderStatus");
    var orderText = document.getElementById("orderText");

    if (!sendBtn || !cancelBtn || !statusBox || !orderText) return;

    cancelBtn.addEventListener("click", function () {
        window.location.href = "teema3.html";
    });

    sendBtn.addEventListener("click", function () {
        sendBtn.disabled = true;
        cancelBtn.disabled = true;
        orderText.disabled = true;

        statusBox.innerHTML = '<span class="hourglass-spin">\u23F3</span><span>L\u00E4hetet\u00E4\u00E4n...</span>';

        setTimeout(function () {
            statusBox.textContent = "Viesti l\u00E4hetetty";

            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000);
        }, 2000);
    });
})();
