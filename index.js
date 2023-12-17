// FOR SEARCHING BOOKS ON HEADER
function searchBooks(event) {
    event.preventDefault();

    var search_book = document.getElementById('search_book').value;

    window.location.href = 'https://z-lib.io/s/' + encodeURIComponent(search_book);
}


//FOR GIVING THE SOUCNG IN EVERY CLICK ON WEBPAGE
document.addEventListener("click", function () {
    var audio = document.createElement("audio");
    audio.id = "audio";
    audio.src = "./mixkit-hard-pop-click-2364.wav";
    document.body.appendChild(audio);
    audio.play();
});

//FORM RESPONSE (NOT FULL MADE)
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    this.action = "./index.html";
    this.submit();
    alert("SOMETHING WENTS WRONG. TRY AGAIN AFTER SOMETIME.");
});