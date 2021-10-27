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
