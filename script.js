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
            simuladorInteractivo();
            break;
          case 5:
            funcionesRelacionadas();
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
  if (entradaNum % 2 === 0) {
    alert("El número que ingresaste es par.");
  } else {
    alert("El número que ingresaste es impar.");
  }
}

function desafio3() {
  let n, m, r;

  do {
    n = parseInt(prompt("Ingresa un nro entre 1 y 10 para ver sus multiplos"));

    if (n < 2) {
      alert("El numero que ingresaste es menor que 2");
    } else if (n > 9) {
      alert("El numero que ingresaste es mayor que 9");
    }
  } while (n < 2 || n > 9);

  for (let i = 0; i < 10; i++) {
    m = i + 1;
    r = n * m;
    alert(`${m} x ${n} = ${r}`);
  }
}

//  Simulador Interactivo


function simuladorInteractivo() {
  let valorCuenta, propina, valorFinal;

  do {
    valorCuenta = parseInt(prompt("**CALCULADORA DE PROPINA**\rIngresa el valor de la cuenta"));
  } while (isNaN(valorCuenta));

  do {
    propina = parseInt(prompt("**CALCULADORA DE PROPINA**\rIngresa la opción que desees\r1. 10%\r2. 15%\r3. 20%"));
  } while (isNaN(propina) || propina < 1 || propina > 3);

  valorFinal = calcularPropina(valorCuenta, propina);

  alert(`Deberás dejar \$${valorFinal} de propina.`);

}

function calcularPropina(cuenta, codPropina) {
  let propina;
  switch (codPropina) {
    case 1:
      propina = 0.1;
      break;
    case 2:
      propina = 0.15;
      break;
    case 3:
      propina = 0.2;
      break;
    case 4:
      alert("Error calculando");
      return 0;
  }
  return cuenta * propina;
}


//  Fin Simulador Interactivo


// Funciones Relacionadas


function funcionesRelacionadas() {
  let nAnimales;

  nAnimales = cuantosAnimales();

  mostrarAnimales(nAnimales);
}

function cuantosAnimales() {
  let n;
  do {
    n = parseInt(prompt("¿Cuántos animales deseas ver?(Máximo tres)"));
  } while (isNaN(n) || n < 1 || n > 3);


  return n;
}

function mostrarAnimales(n) {

  for(let i = 0; i < n; i++) {
    mostrarAnimal(i);
  }
}

function mostrarAnimal(animal) {
  const animales = ["▕▔▔╲╱▔▔▔╲╱▔▔▏\r┈╲＿╱╰╮┈╭╯╲＿╱\r┈┈┈▏▉╮┈╭▉▕\r┈┈╱╲╰╰┊╯╯╱╲\r┈╱╰▕╰╰┳╯╯▏╯╲\r▕╰╰╰╲╰┻╯╱╯╯╯▏\r▕╰╰╰╰▔▔▔╯╯╯╯▏\r▕╰╰╰╰╰╮╭╯╯╯╯▏\r┈╲╭╮┈╰╮╭╯╭╮╱\r┈┈┫┣╭━━━╮┫┃\r┈┈┃┃┃┈┈┈┃┃┃\r┈┈┗┛┛┈┈┈┗┗┛", "╱▏┈┈┈┈┈┈▕╲▕╲┈┈┈\r▏▏┈┈┈┈┈┈▕▏▔▔╲┈┈\r▏╲┈┈┈┈┈┈╱┈▔┈▔╲┈\r╲▏▔▔▔▔▔▔╯╯╰┳━━▀\r┈▏╯╯╯╯╯╯╯╯╱┃┈┈┈\r┈┃┏┳┳━━━┫┣┳┃┈┈┈\r┈┃┃┃┃┈┈┈┃┃┃┃┈┈┈\r┈┗┛┗┛┈┈┈┗┛┗┛┈┈┈", "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\r┈╭━━━━━╮┈┈┈┈┈┈┈┈\r┈╰┳━━━━╰╮╭━╮┈┈┈┈\r┈┈╰┳━━━━┣╯▊╲┈┈┈┈\r┈┈┈╰━┳━━╯╰╱▔┈┈┈┈\r┈┈┈┈┈╰━┳┳╯┈┈┈┈┈┈\r━━━━━━━┻┻━━━━━━━"];
  alert(animales[animal]);
}


// fin Funciones Relacionadas



// FUNCIONES
