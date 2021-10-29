window.addEventListener("DOMContentLoaded", function() {
  selector();
});

let desafios = document.querySelector(".desafios");

function selector() {
  desafios.addEventListener("click", (e) => {
    if (e.target.classList.contains("desafio")) {
      let n = parseInt(e.target.innerText.split(" ")[1]);
      if (n != NaN) {
        switch (n) {
          case 1:
            desafio1();
            break;
          case 2:
            desafio2();
            break;
          case 3:
             desafio3();
            break;
          case 4:

            break;
        }
      }
    }
  });
}

function desafio1() {
  let entradaNombre = prompt("¿Cómo te llamas?");
  let entradaPais = prompt(entradaNombre + ", ¿en que país naciste?");
  let entradaNumero = prompt(entradaNombre + " de " + entradaPais + ", ingresa el número que quieras y le sumaré 40.. Estará en la consola");
  console.log(parseFloat(entradaNumero) + 40);
  alert("Adiós, " + entradaNombre + " de " + entradaPais);
}

function desafio2() {
  let entradaNum = Number(prompt("Ingresá un número."));
  if(entradaNum % 2 === 0) {
    alert("El número que ingresaste es par.");
  } else {
    alert("El número que ingresaste es impar.");
  }
}

function desafio3() {
  let n, m;
  
  do {
    n = parseInt(prompt("Ingresa un nro entre 1 y 10 para ver sus multiplos"));
    
    if(n < 2) {
       alert("El numero que ingresaste es menor que 2");
    } else if(n > 9) {
      alert("El numero que ingresaste es mayor que 9");
    }
  } while(n < 2 || n > 9); 
  
  for(let i = 0; i < 10; i++) {
    m = i + 1;
    alert(m + " x " + n + "= " + n * m);
  }
}
