const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const celebration = document.getElementById("celebration");
const yesBtn = document.getElementById("yesBtn");
const yesBtn2 = document.getElementById("yesBtn2");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "block";
});

function sayYes() {
    letter.style.display = "none";
    celebration.style.display = "block";
}

yesBtn.addEventListener("click", sayYes);
yesBtn2.addEventListener("click", sayYes);
