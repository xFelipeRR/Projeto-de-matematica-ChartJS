var mediageral = []
var nomes_alunos = []

function aluno1(){
    nomes_alunos.push('Felipe Rangel')
    alert('Aluno 1 escolhido')
}
function aluno2(){
    nomes_alunos.push('Júlio')
    alert('Aluno 2 escolhido')
}
function aluno3(){
    nomes_alunos.push('Eduardo')
    alert('Aluno 3 escolhido')
}
function aluno4(){
    nomes_alunos.push('Gabriel')
    alert('Aluno 4 escolhido')
}
function aluno5(){
    nomes_alunos.push('Mileide')
    alert('Aluno 5 escolhido')
}


function matematica() {
    var txtmat = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")]

    var mat = [(Number(txtmat[0].value)), (Number(txtmat[1].value)), (Number(txtmat[2].value))]

    let media = (mat[0] + mat[1] + mat[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediam")

    if (txtmat[0].value.length == 0 || txtmat[1].value.length == 0 || txtmat[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('mat').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('mat').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('mat').style.backgroundColor = '#ff4040'
    }
}
function portugues() {

    var txtport = [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")]

    var port = [(Number(txtport[0].value)), (Number(txtport[1].value)), (Number(txtport[2].value))]

    let media = (port[0] + port[1] + port[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediap")

    if (txtport[0].value.length == 0 || txtport[1].value.length == 0 || txtport[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('port').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('port').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('port').style.backgroundColor = '#ff4040'
    }

}
function biologia() {
    var txtbio = [document.getElementById("bio1"), document.getElementById("bio2"), document.getElementById("bio3")]

    var bio = [(Number(txtbio[0].value)), (Number(txtbio[1].value)), (Number(txtbio[2].value))]

    let media = (bio[0] + bio[1] + bio[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediab")

    if (txtbio[0].value.length == 0 || txtbio[1].value.length == 0 || txtbio[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('bio').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('bio').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('bio').style.backgroundColor = '#ff4040'
    }
}
function geografia() {
    var txtgeo = [document.getElementById("g1"), document.getElementById("g2"), document.getElementById("g3")]

    var geo = [(Number(txtgeo[0].value)), (Number(txtgeo[1].value)), (Number(txtgeo[2].value))]

    let media = (geo[0] + geo[1] + geo[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediag")

    if (txtgeo[0].value.length == 0 || txtgeo[1].value.length == 0 || txtgeo[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('geo').style.backgroundColor = '#ff860b'
    }
    else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('geo').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('geo').style.backgroundColor = '#ff4040'
    }
}
function historia() {
    var txthis = [document.getElementById("h1"), document.getElementById("h2"), document.getElementById("h3")]

    var his = [(Number(txthis[0].value)), (Number(txthis[1].value)), (Number(txthis[2].value))]

    let media = (his[0] + his[1] + his[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediah")

    if (txthis[0].value.length == 0 || txthis[1].value.length == 0 || txthis[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('his').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('his').style.backgroundColor = '#3eff42'
    } else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('his').style.backgroundColor = '#ff4040'
    }
}
function ingles() {
    var txting = [document.getElementById("i1"), document.getElementById("i2"), document.getElementById("i3")]

    var ing = [(Number(txting[0].value)), (Number(txting[1].value)), (Number(txting[2].value))]

    let media = (ing[0] + ing[1] + ing[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediai")

    if (txting[0].value.length == 0 || txting[1].value.length == 0 || txting[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('ing').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('ing').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('ing').style.backgroundColor = '#ff4040'
    }
}
function espanhol() {
    var txtesp = [document.getElementById("e1"), document.getElementById("e2"), document.getElementById("e3")]

    var esp = [(Number(txtesp[0].value)), (Number(txtesp[1].value)), (Number(txtesp[2].value))]

    let media = (esp[0] + esp[1] + esp[2]) / 3

    mediageral.push(media)

    let divmedia = document.getElementById("mediae")

    if (txtesp[0].value.length == 0 || txtesp[1].value.length == 0 || txtesp[2].value.length == 0) {
        divmedia.innerHTML = " ERRO! Confira as notas e tente novamente"
        let quadroorange = document.getElementById('esp').style.backgroundColor = '#ff860b'
    } else if (media >= 6) {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :)`
        let quadrogreen = document.getElementById('esp').style.backgroundColor = '#3eff42'
    }
    else {
        divmedia.innerHTML = `Sua média é ${media.toFixed(1)} :(`
        let quadrored = document.getElementById('esp').style.backgroundColor = '#ff4040'
    }
}
function testmedia(){
    if(typeof mediageral[0,1,2,3,4,5,6] == 'undefined' || typeof nomes_alunos[0] == 'undefined'){
        alert('Erro, verifique as informações!')
    }
    else{
    let dadoTabela = document.getElementById('valorgeral')
    var total = 0
    for(var i = 0; i < mediageral.length; i++) {
    total += mediageral[i]
}
    var avg = total / mediageral.length
    var teste = document.getElementById('teste')
    if(avg<6){
        teste.innerHTML = `Você deve se esforçar mais ${nomes_alunos[0]} , sua média geral é : <u>${avg.toFixed(2)}</u>`
        teste.style.backgroundColor = 'rgba(211, 52, 52, 0.856)'
    }
    else{
        teste.innerHTML = `Parabéns ${nomes_alunos[0]}, sua média geral é : <u>${avg.toFixed(2)}</u>`
        teste.style.backgroundColor = 'green'
    }
}
}
    // GRÁFICOS
    function graph(){
        if(typeof mediageral[0,1,2,3,4,5,6] == 'undefined'){
            alert('Informações de notas inválidas, tente novamente!')
        }
        else{
            const divgraph = document.getElementById('graficos')
            divgraph.style.background='white'
        var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Matemática', 'Português', 'Biologia', 'Geografia', 'História', 'Inglês', 'Espanhol'],
        datasets: [{
            label: 'Desempenho do aluno',
            data: [mediageral[0],mediageral[1],mediageral[2],mediageral[3],mediageral[4],mediageral[5],mediageral[6]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0,0,205,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ['Matemática', 'Português', 'Biologia', 'Geografia', 'História', 'Inglês', 'Espanhol'],
    datasets: [{
        label: 'Desempenho do aluno',
        data: [mediageral[0],mediageral[1],mediageral[2],mediageral[3],mediageral[4],mediageral[5],mediageral[6]],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0,0,205,0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
    var ctx = document.getElementById('myChart3');
    var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Matemática', 'Português', 'Biologia', 'Geografia', 'História', 'Inglês', 'Espanhol'],
        datasets: [{
            label: 'Desempenho do aluno',
            data: [mediageral[0],mediageral[1],mediageral[2],mediageral[3],mediageral[4],mediageral[5],mediageral[6]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0,0,205,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
    }