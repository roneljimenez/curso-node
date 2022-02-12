const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'linda'
    },
    {
        id: 3,
        nombre: 'karen'
    },
]
const salarios = [
    {
        id: 1,
        monto: 1000
    },
    {
        id: 2,
        monto: 1500
    },
    {
        id: 3,
        monto: 3000
    },
]

const getEmpleado = (id) => {
   return new Promise((resolve, reject)=>{
        const empleado = empleados.find(empleado => empleado.id === id)?.nombre;

        empleado ? resolve(empleado) : reject(`No existe empleado con id: ${id}`)
        
    });

}

const getSalario = (id) => {
    return new Promise((resolve, reject)=>{
         const salario = salarios.find(salario => salario.id === id)?.monto;
 
         salario ? resolve(salario) : reject(`No existe salario con id: ${id}`)
         
     });
 
 }

const id = 2;

getEmpleado(id)
.then(
     empleado => {
        getSalario(id)
        .then(
             salario => console.log('El empleado', empleado, 'tiene un salario de:', salario)
        )
        .catch(err => console.log(err));
     }
)
.catch(err => console.log(err));

