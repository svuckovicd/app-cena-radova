
function editName(e) {
    let edit = document.getElementById('edit')
    let inp = document.getElementById('inp-head')

    if (e.target.innerText == 'edit') {
        inp.style.display = 'inline-block'
        document.querySelector('button').innerText = 'save'
        edit.innerText = ''

    } else if (e.target.innerText == 'save') {
        edit.innerHTML = inp.value;
        inp.style.display = 'none';
        edit.style.display = 'block';
        document.querySelector('button').innerText = 'edit'



    }

}

function init() {
    const btn = document.getElementById('btnCreate');
    btn.addEventListener('click', createTable);

    const editHead = document.getElementById('editHead')
    editHead.addEventListener('click', editName)




}

let sum = []

function createTable(e) {
    e.preventDefault()
    //DOM Items inputs 
    let inpText = document.getElementById('inpText');
    let inpA = document.getElementById('a');
    let inpB = document.getElementById('b');

    //create table element
    const tr = document.createElement('tr')
    tr.classList.add('tableEl')
    let tdText = document.createElement('td');
    tdText.innerText = `${sum.length + 1}.   ${inpText.value}`;


    let tdA = document.createElement('td');
    tdA.innerHTML = inpA.value + ' m2'
    let tdB = document.createElement('td');
    tdB.innerHTML = inpB.value + ' din'

    //Calculation price 
    let price = inpA.value * inpB.value;
    let tdP = document.createElement('td');
    tdP.classList.add('zbir')
    tdP.innerHTML = price + ' din'

    //ukupan zbir
    let calc = document.getElementById('zbir');
    sum.push(price);
    let cena = sum.reduce((a, b) => {
        return a + b;
    })
    calc.innerHTML = cena + ' din'

    //append child
    tr.appendChild(tdText);
    tr.appendChild(tdA);
    tr.appendChild(tdB);
    tr.appendChild(tdP);
    document.getElementById('tab').appendChild(tr);
    clearText()

}



function clearText() {

    let input = document.querySelectorAll('input');
    input.forEach(inp => inp.value = '')
}



//sacuvaj file

function saveFile() {
    let save = document.querySelector('#save-file')
    if (save.className == 'close') {
        save.classList.remove('close')
        document.querySelector('.editbtn').style.display = 'none'
        document.getElementById('btnCreate').style.display = 'none';

    } else {
        save.classList.add('close')
        document.querySelector('.editbtn').style.display = 'block'
        document.getElementById('btnCreate').style.display = 'block';



    }
}

function test(e) {
    console.log(e.key)

    if (e.key == 'Control' || e.key == 's') {
        document.querySelector('.save').style.display = 'none';
    } else {

        document.querySelector('.save').style.display = 'block';
    }
}
window.addEventListener('keydown', test);
window.addEventListener('load', init)