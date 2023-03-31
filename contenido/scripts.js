// se escribe el codigo dentrl de este evento, ya que asi se carga primero el HTML
window.addEventListener('load', function () {
    // Saludo
    // campturo el elemento del cual voy a analizar el evento
    let saludo_btn = document.querySelector('#saludo_btn');

    // capturo el evento, en este caso 'click'
    saludo_btn.addEventListener('click', function (e) {
        let name = prompt(`Cual es tu nombre?`, `Elver`);
        let surname = prompt(`Cual es tu Apellido?`, `Galarga`);
        alert(`Hola ${name} ${surname}, bienvenido a Ada`);
    });

    //Heladeria
    let helado_btn = document.querySelector('#helado_btn');
    helado_btn.addEventListener('click', function () {
        let gusto1 = prompt(`Ingrese el primer sabor:`, `helado`);
        let gusto2 = prompt(`Ingrese el segundo sabor:`, `helado`);
        let gusto3 = prompt(`Ingrese el tercer sabor:`, `helado`);
        alert(`Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`);
    });

    // Datos pesonales
    let datos_personales_btn = document.querySelector('#datos_personales_btn');
    datos_personales_btn.addEventListener('click', function () {
        let nombre = prompt(`Ingrese su nombre:`);
        let apellido = prompt(`Ingrese su apellido`);
        let edad = prompt(`Ingrese su edad:`);
        let documento = prompt(`Ingrese su documento:`);
        let nacionalidad = prompt(`Ingrese su nacionalidad:`);
        alert(`
        Nuevo usuario agregado al sistema:
        Nombre: ${nombre}
        Apellido: ${apellido}
        Edad: ${edad}
        Documento: ${documento}
        Nacionalidad: ${nacionalidad}`);
    });

    // Lista de reproducción
    let playlist_btn = document.querySelector('#playlist_btn');
    playlist_btn.addEventListener('click', function () {
        let playlist = prompt(`Ingrese el nombre de la playlist:`);
        let cancion1 = prompt(`Ingrese el nombre de la primera cancion`);
        let cancion2 = prompt(`Ingrese el nombre de la segunda cancion`);
        let cancion3 = prompt(`Ingrese el nombre de la tercera cancion`);

        alert(`Se ha creado la playlist: '${playlist}', con las caciones ...
        '${cancion1}, '${cancion2}' y '${cancion3}'`);
    });

    // Dirección completa
    let direccion_btn = document.querySelector('#direccion_btn');
    direccion_btn.addEventListener('click', function () {
        let calle = prompt(`Ingrese la calle:`, `Bolivar`);
        let numero = prompt(`Ingrese la altura:`, `3213`);
        let departamento = prompt(`Ingrese departamento:`, `7B`);
        let codigoPostal = prompt(`Ingrese el CP:`, `3364`);
        let cuidad = prompt(`Ingrese la ciudad:`, `San Javier`);
        let pais = prompt(`Ingrese el país:`, `Bolivia`);

        alert(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${cuidad}, ${pais}`);
    });

    // Meses por día
    let meses_dia_btn = document.querySelector('#meses_dia_btn');
    meses_dia_btn.addEventListener('click', function () {
        let dias31 = ['Enero', 'Marzo', 'Mayo', 'Julio', 'Agosto', 'Octubre', 'Diciembre'];
        let dias30 = ['Abril', 'Junio', 'Septiembre', 'Noviembre'];
        let dias29 = ['Febrero'];

        alert(`
        Meses con 31 Dias: ${dias31.join(', ')}
        Meses con 30 Dias: ${dias30.join(', ')}
        Meses con 29 Dias: ${dias29.join(', ')}
        `);
    });

    // Miembros de la familia
    let familia_btn = document.querySelector('#familia_btn');
    familia_btn.addEventListener('click', function () {
        let integrantes = ['Alan', 'Brito', 'Delgado', 'Elver', 'Galarga'];
        alert(`Los miembros de la familia son: ${integrantes.join(', ')}`);
    });

    // Listas de gustos
    let lista_gustos_btn = document.querySelector('#lista_gustos_btn');
    lista_gustos_btn.addEventListener('click', function () {
        let pelicualas = ['Avengers', 'Qué pasó ayer', 'Black Panther', 'Piratas del Caribe'];
        let cantantes = ['The Weeknd', 'Ariana Grande', 'Skrillex', 'Lofi'];
        let juegos = ['Halo', 'Skyrim', 'NFS', 'The Last of Us', 'Barbie'];

        alert(`Lista de gustos:
        Peliculas: ${pelicualas.join(', ')}

        Cantantes: ${cantantes.join(', ')}

        Juegos: ${juegos.join(', ')}`);
    });

    // Años perro
    let anhos_perro_btn = document.querySelector('#anhos_perro_btn');
    anhos_perro_btn.addEventListener('click', () => {
        let edad_perro = prompt('Ingrese un numero', 5);
        alert(`${edad_perro} años es igual a ${edad_perro * 18} años perrunos`);
    });

    // Minutos a segundos
    let min_seg_btn = document.querySelector('#min_seg_btn');
    min_seg_btn.addEventListener('click', () => {
        let minutos = prompt('Ingrese la cantidad de minutos', 7);
        minSeg = minutos * 60;
        alert(`Los minutos ${minutos} equivalen a ${minSeg} segundos`);
    });

    // Días a segundos
    let day_seg_btn = document.querySelector('#day_seg_btn');
    day_seg_btn.addEventListener('click', () => {
        let dias = prompt('Ingrese una cantidad de dias', 9);

        let min = 60;
        let hora = 60;
        let dia = 24;
        alert(`${dias} dias equivalen a ${dias * dia} horas, ${dias * dia * hora} minutos y ${dias * dia * hora * min} segundos`);
    });

    // Kilómetros a millas
    let km_mi_btn = document.querySelector('#km_mi_btn');
    km_mi_btn.addEventListener('click', () => {
        let km = prompt('Cuántos kilometros ?', 15);
        kmMi = km * 0.621371;
        alert(`${km} km es igual a ${kmMi} millas`);
    });

    // Área de un triangulo
    let area_triang_btn = document.querySelector('#area_triang_btn');
    area_triang_btn.addEventListener('click', () => {
        let base = prompt('Ingrese el valor de la base del triángulo');
        let altura = prompt('Ingrese el valor de la altura del triángulo');

        areaTr = base * altura / 2;

        alert(`El area del triángulo es ${areaTr}`);
    });

    // Porcentaje
    let porcentaje_btn = document.querySelector('#porcentaje_btn');
    porcentaje_btn.addEventListener('click', () => {
        let num = prompt('Ingrese un número', 10);
        let valor = prompt('Cuál es el porcentaje que deseas obtner?', 10);
        let porcentaje = (valor * num) / 100;

        alert(`El ${valor}% de ${num} es ${porcentaje}`);
    });

    // Tiempo de Viaje
    let viaje_btn = document.querySelector('#viaje_btn');
    viaje_btn.addEventListener('click', () => {
        let km = prompt('Cuantos Km tenes que recorrer?');
        pie = km * 13;
        bici = km * 4;
        auto = km * 2;
        alert(`Los ${km} recorridos a pie, tardarías ${pie} minutos,
        si vas en bici, serían ${bici} y en auto ${auto} minutos`);
    });

    // Duración vuelo
    let vuelo_btn = document.querySelector('#vuelo_btn');
    vuelo_btn.addEventListener('click', () => {

        let escala1 = prompt('Ingrese el destino de la primera escala', 'Buenos Aires');
        let escala2 = prompt('Ingrese el destino de la segunda escala', 'Paris');
        let escala3 = prompt('Ingrese el destino de la tercera escala', 'España');
        let duracion1 = Number(prompt(`Cuánto tiempo tardas desde el punto de partida hasta ${escala1}?`, 10));
        let duracion2 = Number(prompt(`Cuánto tiempo tardas de ${escala1} hasta ${escala2}?`, 12));
        let duracion3 = Number(prompt(`Cuánto tiempo tardas de ${escala2} hasta ${escala3}?`, 18));
        let total = duracion1 + duracion2 + duracion3;

        alert(`Desde el punto de partida a ${escala1} a hay una duración de ${duracion1} hs,
                desde ${escala1} a ${escala2} a ${duracion2} hs y,
                desde ${escala2} a ${escala3} son ${duracion3} hs.
                Sumando un total de ${total} hs`);
    });

    // Incremento
    let increase_btn = document.querySelector('#increase_btn');
    increase_btn.addEventListener('click', () => {
        let inicio = Number(prompt('Ingrese el numero del cual desea partir'));
        let incremento = Number(prompt('Ingrese el numero que desea incrementar en cada vuelta'));
        let total = 0;
        let vueltas = 5;
        alert(`Empezando con ${inicio} incrementando ${incremento}`);
        total = total + inicio;
        for (let i = 1; i <= vueltas; i++) {
            total = total + incremento;
            alert(`En la vuelta ${i} se incrementa a ${total}`);
        }
    });

    // Celsius a Fahrenheit
    let cel_far_btn = document.querySelector('#cel_far_btn');
    cel_far_btn.addEventListener('click', () => {
        let celcius = Number(prompt('Ingrese la cantidad de Grados Celcius a Convertir'));
        let faren = celcius + 32;
        alert(`Los ${celcius} °C son equivalentes a ${faren} °F`);
    });

    // Múltiplos
    let multiplo_btn = document.querySelector('#multiplo_btn');
    multiplo_btn.addEventListener('click', () => {
        let num1 = Number(prompt('Ingrese el primer numero'));
        let num2 = Number(prompt('Ingrese el segundo numero'));
        if ((num1 % num2) == 0) {
            alert(`El numero ${num1} es múltiplo de ${num2}`);
        } else {
            alert(`El numero ${num1} no es múltiplo de ${num2}`);
        }
    });

    // Cantidad de caracteres
    let caracteres_btn = document.querySelector('#caracteres_btn');
    caracteres_btn.addEventListener('click', () => {
        let texto = prompt('Ingrese un texto:', 'Lorem ipsum dolor, sit amet consectetur');
        alert(`El texto "${texto}" posee ${texto.length} caracteres`);
    });

    // Días de vacaciones
    let vacaciones_btn = document.querySelector('#vacaciones_btn');
    vacaciones_btn.addEventListener('click', () => {
        let anhos = Number(prompt('Cuántos años esta trabajando en la empresa?'));
        let dias = 15;
        if (anhos < 4) {
            alert(`Tienes ${dias} dias de vacasiones`);
        } else {
            let valor = ((anhos - 3) * 2) + dias;
            alert(`Con ${anhos} te corresponde ${valor} días de vacaciones`);
        }
    });

    // Cantidad de huéspedes
    let huespedes_btn = document.querySelector('#huespedes_btn');
    huespedes_btn.addEventListener('click', () => {
        let habit2 = Number(prompt('Cuántas habitaciones tenes para 2 personas?'));
        let habit3 = Number(prompt('Cuántas habitaciones tenes para 3 personas?'));
        let habit4 = Number(prompt('Cuántas habitaciones tenes para 4 personas?'));
        let total = habit2 + habit3 + habit4;

        alert(`Habitaciones Disponibles:
        Para 2 personas: ${habit2} habitaciones.
        Para 3 personas: ${habit3} habitaciones.
        Para 4 personas: ${habit4} habitaciones.
        Total: ${total}`);
    });

    // Calculador gastos
    let calc_gastos_btn = document.querySelector('#calc_gastos_btn');
    calc_gastos_btn.addEventListener('click', () => {
        let dinero = Number(prompt('Cuánto dinero dispones?'));
        let servicios = prompt(`Ingresá los servicios que tenes que pagar separados por una ',' (coma)`);
        let servSep = servicios.split(',');
        let servEsp = servSep.trim();
        alert(`los serv son ${servEsp}`);
        let serviciosArray = [];

        array.forEach(element => {
            
        });
    });




});