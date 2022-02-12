
//los callbacks son funciones que se mandan como argumento a otras funciones

const getUsuarioById = (id, callback) =>{

    const usuario = {
        id,
        nombre: 'Ronel'
    }

    setTimeout(()=>{callback(usuario)}, 1500)
}

console.log(getUsuarioById(10, (user) => {
    console.log('El id del usuario es ' + user.id)
}))