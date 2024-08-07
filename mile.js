let convertType = "miles";

document.getElementById('convert').addEventListener('submit', function(e) {
    e.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const answer = document.getElementById('answerP');
    let fixedDistance;

    if (isNaN(distance)) {
        answer.innerHTML = `<h2>Girilen değer bir sayı olmalıdır!</h2>`;
    } else {
        if (convertType === "miles") {
            fixedDistance = (distance * 1.609344).toFixed(2);
            answer.innerHTML = `<h2>${distance} mil yaklaşık: ${fixedDistance} kilometre eder.</h2>`;
        } else {
            fixedDistance = (distance / 1.609344).toFixed(2);
            answer.innerHTML = `<h2>${distance} kilometre yaklaşık: ${fixedDistance} mil eder.</h2>`;
        }
        document.getElementById('distance').value = '';
    }
});

document.addEventListener('keydown', function(e) {
    let key = e.code;
    const heading = document.querySelector('h2');
    const answer = document.getElementById('answerP');

    if (key === "KeyK") {
        convertType = "kilometers";
        heading.innerHTML = `<i>Kilometre</i> değerini <i>mil</i> cinsinden hesaplar`;
        answer.innerHTML = '';
    } else if (key === "KeyM") {
        convertType = "miles";
        heading.innerHTML = `<i>Mil</i> değerini <i>kilometre</i> cinsinden hesaplar`;
        answer.innerHTML = '';
    }
});
