let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1)

function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Agregar 0 al mes si es necesario
    var day = date.getDate().toString().padStart(2, '0'); // Agregar 0 al día si es necesario
    return year + '-' + month + '-' + day;
}

export const formatedToday = formatDate(today);
export const FormatedTomorrow = formatDate(tomorrow);

export const Services = [
    "Limpieza dental",
    "Extracción de muelas del juicio",
    "Empaste dental",
    "Blanqueamiento dental",
    "Ortodoncia",
    "Implantes dentales",
    "Endodoncia",
]

export const validarDiaLaborable = (fechaSeleccionada) => {
    const fecha = new Date(fechaSeleccionada);
    
    const diaSemana = fecha.getDay();
    
    if (diaSemana === 6 || diaSemana === 5) {
        return false; 
    } else {
        return true; 
    }
};

export function validarFechaDistinta(fecha) {
    const hoy = new Date();

    const otraFecha = new Date(fecha);

    const esDistinta = hoy.getFullYear() !== otraFecha.getFullYear() || hoy.getMonth() !== otraFecha.getMonth() || hoy.getDate() !== otraFecha.getDate();

    return esDistinta;
}
