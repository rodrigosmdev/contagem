function calcular() {
    var num = Number(document.getElementById('num').value);
    var cont = Number(document.getElementById('cont').value);
    var pulo = Number(document.getElementById('pulo').value);
    var res = document.getElementById('res');
    res.innerHTML = "";
    if (pulo == 0) {
        pulo = 1
        alert('O valor de pulo deve ser maior que 0');  
    }
        if (num < cont) {
        for (var c = num; c <= cont; c += pulo) {
            res.innerHTML += `${c} `;  
        }
        } else if (num > cont) {
        for (var c = num; c >= cont; c -= pulo) {
            res.innerHTML += `-${c} `;
        }
        } else {
        res.innerHTML += "Porque você não digitou NADA?"
    }
    
}
