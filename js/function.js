function tabuada() {
    let num = document.querySelector(`input#numText`)
    let tab = document.querySelector(`select#seltab`)
    if (num.value.length == 0) {
        window.alert(`Por favor, digite um número!`)
    } else {
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ``; // Limpa para fazer outra tabuada
        while (c <= 10) {
            let item = document.createElement(`option`)    // cria um option no html
            item.text = `${n} x ${c} = ${n*c}`;         // mostra dentro do select
            item.value = `tab${c}`; // Para ser usada com outra lin, tipo PHP
            tab.appendChild(item)
            c++;
        }
    }  
}

function recarregar(){
    window.location.reload(true);
}
