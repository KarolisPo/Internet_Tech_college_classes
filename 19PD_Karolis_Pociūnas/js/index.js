const ginklai = [
    'Statulėlė',
    'Bilijardo rutulys',
    'Peilis',
    'Nuodai',
]

const patalpa = [
    'Galerija',
    'Bilijardo kambarys',
    'Virtuvė',
    'Valgomasis',
]

const asmuo = [
    'Ponas A',
    'Ponas B',
    'Ponia C',
    'Panelė D',
]

var kambarys = window.prompt('Įveskite nusikaltimo kambario numerį:\n1)Galerija \n2)Bilijardo kambarys \n3)Virtuvė \n4)Valgomasis ');

var itariamasis = window.prompt('Įveskite įtariamąjį:\n1)Ponas A \n2)Ponas B \n3)Ponia C \n4)Panelė D ');

if (kambarys == 1 && itariamasis == 1 ) {
    document.getElementById('byla').innerHTML = "Žmogžudystės vieta - " + patalpa[kambarys-1] + ". " + "Panaudotas ginklas - " + ginklai[kambarys-1] + '. ' + 'Žmogžudystę įvykdė - ' + asmuo[itariamasis-1] + '.'
} else {
    if (kambarys == 2 && itariamasis == 2 ) {
        document.getElementById('byla').innerHTML = "Žmogžudystės vieta - " + patalpa[kambarys-1] + ". " + "Panaudotas ginklas - " + ginklai[kambarys-1] + '. ' + 'Žmogžudystę įvykdė - ' + asmuo[itariamasis-1] + '.'
    }else{
        if (kambarys == 3 && itariamasis == 3 ) {
            document.getElementById('byla').innerHTML = "Žmogžudystės vieta - " + patalpa[kambarys-1] + ". " + "Panaudotas ginklas - " + ginklai[kambarys-1] + '. ' + 'Žmogžudystę įvykdė - ' + asmuo[itariamasis-1] + '.'
        }else{
            if (kambarys == 4 && itariamasis == 4 ) {
                document.getElementById('byla').innerHTML = "Žmogžudystės vieta - " + patalpa[kambarys-1] + ". " + "Panaudotas ginklas - " + ginklai[kambarys-1] + '. ' + 'Žmogžudystę įvykdė - ' + asmuo[itariamasis-1] + '.'
            }else{
                document.getElementById('byla').innerHTML = 'Byla neišaiškinta.'
            }
        }
    }
};

