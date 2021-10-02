/*evento para crear*/
document.getElementById('formulario').addEventListener('submit',crear);
 
/*crear*/

function crear(e){
e.preventDefault();
/*capturar valores del input-form*/
let especialidad = document.getElementById('especialidad').value;
let medico = document.getElementById('medico').value;
let consulta = document.getElementById('consulta').value;

/*objeto cita*/ 
let cita = {  
    especialidad,
    medico,
    consulta
}

if(localStorage.getItem('citas') === null){/*s */

    let citas = [];/*s*/ 
    citas.push(cita)
    localStorage.setItem('citas', JSON.stringify(citas))/*s*/ 
}else{
    let citas = JSON.parse(localStorage.getItem('citas'))
    citas.push(cita)
    localStorage.setItem('citas', JSON.stringify(citas))

}
agendar();

document.getElementById('formulario').reset();
}

/*funcion agendar */
function agendar (){ 

let citas = JSON.parse(localStorage.getItem('citas'));

document.getElementById('tbody').innerHTML="";
for (let i = 0; i < citas.length; i++) {
    
    let especialidad = citas[i].especialidad;
    let medico = citas[i].medico;
    let consulta = citas[i].consulta;

    document.getElementById('tbody').innerHTML +=
    `
    <tr>
    <td>${especialidad}</td>
    <td>${medico}</td>
    <td>${consulta}</td>

    </tr>
    `
    
}
}
agendar();

