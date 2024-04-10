function get_data() {
    $.getJSON("https://catfact.ninja/fact", (e) => {
        $(".fact").html(e.fact);
    });
}

$(document).ready(function () {
    get_data();

    $("button").on("click", () => {
        get_data();
    });

    $(document).ajaxError(function () {
        alert("Please wait a few seconds. Also check your internet!");
    });
});
