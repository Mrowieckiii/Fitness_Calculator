const btn = document.getElementById("btnConfirm");
const dispaly = document.getElementById("text");
const choice = document.getElementById('cel');
const inpt = document.getElementById("inpt");


btn.addEventListener('click', function(){
    let vl = parseFloat(inpt.value);
    let kalorie = 0;
    if(choice.checked){
        kalorie = vl * 40;
    } else {
        kalorie = vl * 30;
    }

    let kreatyna = vl * 0.05;
    dispaly.innerText =  kalorie  + 'kcal ' + 'Kreatyna: ' + kreatyna + 'g';
})