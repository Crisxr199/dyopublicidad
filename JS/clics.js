
//FUNCIONES PARA SCROLEAR CON LOS BOTONES DEL MENU

function click1() {
    // Seleccionar la sección a la que queremos hacer scroll
    const aQui = document.getElementById('aQui');

    // Hacer scroll a la sección
    aQui.scrollIntoView({ behavior: 'smooth' });

    // Prevenir el comportamiento predeterminado del enlace
    return false; // Esto previene el comportamiento predeterminado del enlace
}

function click2() {
    // Seleccionar la sección a la que queremos hacer scroll
    const aQui2 = document.getElementById('aQui2');

    // Hacer scroll a la sección
    aQui2.scrollIntoView({ behavior: 'smooth' });

    // Prevenir el comportamiento predeterminado del enlace
    return false; // Esto previene el comportamiento predeterminado del enlace
}


function click3() {
  // Seleccionar la sección a la que queremos hacer scroll
  const aQui3 = document.getElementById('aQui3');

  // Hacer scroll a la sección
  aQui3.scrollIntoView({ behavior: 'smooth' });

  // Prevenir el comportamiento predeterminado del enlace
  return false; // Esto previene el comportamiento predeterminado del enlace
}

function click4() {
  // Seleccionar la sección a la que queremos hacer scroll
  const aQui4 = document.getElementById('aQui4');

  // Hacer scroll a la sección
  aQui4.scrollIntoView({ behavior: 'smooth' });

  // Prevenir el comportamiento predeterminado del enlace
  return false; // Esto previene el comportamiento predeterminado del enlace
}




window.addEventListener('load', function() {
    // La página está completamente cargada.
    // Aquí puedes agregar el código para mostrar la página.
    document.body.style.display = 'block'; // O cualquier otro método para mostrar la página.
  });
  
  // Oculta la página inicialmente
  document.body.style.display = 'none';


  


  document.addEventListener('DOMContentLoaded', function() {
    const textosLimitados = document.querySelectorAll('.texto-limitado');
  
    textosLimitados.forEach(textoLimitado => {
      const botonLeerMas = textoLimitado.querySelector('.boton-leer-mas');
      const botonLeerMenos = textoLimitado.querySelector('.boton-leer-menos');
  
      botonLeerMas.addEventListener('click', function() {
        textoLimitado.classList.add('expandido');
        botonLeerMas.style.display = 'none';
        botonLeerMenos.style.display = 'block';
      });
  
      botonLeerMenos.addEventListener('click', function() {
        textoLimitado.classList.remove('expandido');
        botonLeerMas.style.display = 'block';
        botonLeerMenos.style.display = 'none';
      });
    });
  });