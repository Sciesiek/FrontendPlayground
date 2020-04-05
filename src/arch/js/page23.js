var x = document.getElementById('result');


if(typeof(Storage) !== undefined){
    localStorage.setItem('lastName', 'Smith');
    x.innerHTML = "wsparcie dla magazynu pamięci js istnieje, zmienna z pamięci: " + localStorage.getItem('lastName');
}else {
    x.innerHTML = "brak wsparcia dla magazynu js";
}


if(localStorage.clickcount){
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
}else {
    localStorage.clickcount = 1;
}
document.getElementById('result2').innerHTML = "Wejścia na strone(localStorage) " + localStorage.clickcount + " raz(y).";

if(sessionStorage.clickcount){
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
}else {
    sessionStorage.clickcount = 1;
}
document.getElementById('result3').innerHTML = "Wejścia na strone(sessionStorage) " + sessionStorage.clickcount + " raz(y).";