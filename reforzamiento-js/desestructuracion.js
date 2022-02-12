
const superHeroe = {
    nombre : 'Ronel',
    apellido : 'Jimenez',
    poder : 'Maximo',
    getSuperHeroe(){
        return `
        ${this.nombre} ${this.apellido} tiene poder ${this.poder}
        `
    }
}

console.log(superHeroe.getSuperHeroe());

//forma rápida de hacer desestructuración de objetos
const {nombre, apellido, poder} = superHeroe;
console.log(nombre, apellido, poder)


const heroes = ['deadpool', 'Batman', 'Superman'];
//forma de desestrucurar arrays
const [h1, h2, h3, h4 = "Zorro"] = heroes;

console.log(h1, h2, h4)