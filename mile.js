document.getElementById('convert').addEventListener('submit', function(e) {
    e.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const fixedDistance = (distance * 1.609344).toFixed(2);
    const answer = document.getElementById('answerP');



    
    if (isNaN(distance)) {
        answer.innerHTML = `<h2>Girilen değer bir sayı olmalıdır!</h2>`; 
    }else {
        answer.innerHTML = `<h2>${distance} mil yaklaşık: ${fixedDistance} kilometre eder.</h2>`;
        document.getElementById('distance').value = '';
    }


})