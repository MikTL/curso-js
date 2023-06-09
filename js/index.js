console.groupCollapsed("metodo trim, split, replace")
            let arreglo_1 = "   Hola ayer me fui de aqui   "
            console.log(arreglo_1);
            console.log(arreglo_1.trim());
            let arreglo_2 = arreglo_1.split(/\s* \s*/)
            console.log(arreglo_2)
            let arreglo_3 = "Ayer no estuve aqui"
            console.log(arreglo_3.replace(/ /g, ''))
        console.groupEnd()
        /* Destructuración */
        const num = [1, 2, 3]
        // sin destructuración
        let uno = num[0]
        let dos = num[1]
        let tres = num[2]
        console.groupCollapsed("******Destructuración de arrays******");
            console.log("Sin destructuración " + uno, dos, tres)
            // con destructuración
            let [one, two, three] = num
            console.log("Con destructuración " + one, two, three)

            /* ahora a destructurar un objeto */
            const persona = {
                nombre: "Miki",
                apellido: "Leon",
                edad: 20
            }
            let { nombre, edad, apellido } = persona;
            console.log("******Destructuración de Objetos*******");
            console.log(nombre, apellido, edad)

            /* OBJETOS LITERALES */
            let nombrePerro = "Stark",
                edad_perro = 4

            const datosPerro = {
                nombrePerro,
                edad_perro,
                raza: "Desconocido",
                ladrar() {
                    console.log("Guauu Guauu")
                }
            }
            console.log(datosPerro)
            datosPerro.ladrar()
        console.groupEnd()
        /* PARAMETROS REST & SPREAD OPERATOR */
        /* Parametros Rest */
        function suma(a, b, ...c) {
            let resultado = a + b
            c.forEach(function (n) {
                resultado += n
            })
            return resultado
        }

        console.groupCollapsed("Resultado de una funcion con el parametro rest")
            console.log(suma(1, 2, 3, 4, 5))
        console.groupEnd()
        /* Spread Operator */
        const arra1 = [1, 2, 3, 4, 5],
            arra2 = [6, 7, 8, 9, 0]

        const arra3 = [...arra1, ...arra2]

        console.groupCollapsed("Resultado spread operator")
            console.log(arra3)
        console.groupEnd()
        /* ARROW FUNCTIONS */
        let arrow1 = () => {
            console.log("uno")
            console.log("dos")
            console.log("tres")
        }
        let arrow2 = nombre => console.log(`Hola ${nombre}`)
        let arrow3 = (a, b) => console.log(a + b)

        console.groupCollapsed("Resultado arrow functions")
            arrow1()
            arrow2("Maria")
            arrow3(5, 4)
        console.groupEnd()
        /* *****PROTOTIPOS****** */

        /* Funcion Constructora */
        function Animal(nombre, genero) {
            this.nombre = nombre,
                this.genero = genero
        }
        /* Metodos agregados al prototipo de la funcion constructora */
        Animal.prototype.sonar = function () {
            console.log("Hago sonidos porque estoy vivo")
        }
        Animal.prototype.saludar = function () {
            console.log(`Hola, me llamo ${this.nombre}`)
        }
        const snoopy = new Animal("Snoopy", "macho")
        console.groupCollapsed("Resultado de una funcion constructora, con metodos afuera")
            console.log(snoopy)
            snoopy.sonar()
            snoopy.saludar()
        console.groupEnd()


        //Herencia Prototípica
        function Perro(nombre, genero, tamanio){
            this.super=Animal
            this.super(nombre, genero)
            this.tamanio=tamanio

        }
        //Para hacer la respectiva herencia
        Perro.prototype=new Animal()
        Perro.prototype.constructor=Perro
        //Sobreescritura de metodos del Prototipo padre en el hijo.
        Perro.prototype.sonar=function (){
            console.log("Soy un perro y mi sonido es un ladrido")
        }
        //Crear un metodo propio del objeto perro.
        Perro.prototype.ladrar=function (){
            console.log("Guau Guau!!")
        }
        console.groupCollapsed("Resultado de un Prototipo Heredado")    
            const hachi=new Perro("Hachico", "Macho", "mediano")
            console.log(hachi)
            hachi.sonar()
            hachi.saludar()
            hachi.ladrar()
        console.groupEnd()

        /* *****CLASES***** */
        class Animals{
            constructor(nombre,genero){
                this.nombre=nombre
                this.genero=genero
            }
            sonido(){
                console.log("Estoy vivo, por lo tanto hago sonidos")
            }
            saludo(){
                console.log(`Hola, me llamo ${this.nombre}`)
            }
        }
        //Herencia de clase
        class Gato extends Animals{
            constructor(nombre, genero, tamanio){
                super(nombre, genero)
                this.tamanio=tamanio
                this.raza=null
            }
            //Sobreescribir un método de la clase padre
            sonido(){
                console.log(`Soy gato y sé maullar`)
            }

            //Agregando un método solo par la clase Heredada
            maullar(){
                console.log(`Miaauuu Miaauuu`)
            }
            //método estatico
            static queEres(){
                console.log(`Soy un gato, dios de egipto.`)
            }
            //método get
            get obtenerValorAtributo(){
                return this.raza
            }
            //Método set
            set setRaza(raza){
                this.raza=raza

            }

        }

        console.groupCollapsed("Resultado de clases")
            const pluto=new Animals("Pluto", "Macho")
            console.log(pluto)
            pluto.saludo()
            console.log("\n Resultado de un clases heredadas")
            const mini=new Gato("Mini", "Hembra", "Mediana")
            console.log(mini);
            mini.saludo()
            mini.maullar()
        console.groupEnd()

        console.groupCollapsed("Resultado de métodos estaticos, getters y setters")
            Gato.queEres()
            console.log(mini.obtenerValorAtributo)
            mini.setRaza="Siames"
            console.log(mini.obtenerValorAtributo)
        console.groupEnd()

        console.groupCollapsed("Objeto consola")
            console.dir(Gato)
            console.info("Tabla del objeto Mini")
            console.table(mini)

            console.time("Tiempo de ejecución")
                const million_array=Array(1000000)
                for (let i = 0; i < million_array.length; i++) {
                    million_array[i]=i
                }
            console.timeEnd("Tiempo de ejecución")
            console.groupCollapsed("console.count()")
                for (let i = 0; i <= 2; i++) {
                    console.count("veces de ejecucion de codigo")
                }
            console.groupEnd()
            let xa=3,xb=2, pruebaXAXB="Se espera que xa sea menor que xb"
            console.assert(xa<xb,{xa,xb,pruebaXAXB})

        console.groupEnd()
        console.groupCollapsed("Objeto Date")
            console.log(Date())
            let fecha=new Date();
            console.log(`Dia del mes: ${fecha.getDate()}`)
            console.log(`Dia de la semana: ${fecha.getDay()} => [D,L,M,Mi,J,V,S]`)
            console.log(`Mes: ${fecha.getMonth()} => [0,1,2,3,4,5,6,7,8,9,10,11]`)
            console.log(`Hora: ${fecha.getHours()}`)
            console.log(`Minuto: ${fecha.getMinutes()}`)
            console.log(`Segundo: ${fecha.getSeconds()}`)
            console.log(`fecha string: ${fecha.toString()}`)
            console.log(`fecha toDateString: ${fecha.toDateString()}`)
            console.log(`fecha toLocaleString: ${fecha.toLocaleString()}`)
            console.log(`fecha toLocaleDateString: ${fecha.toLocaleDateString()}`)
            console.log(`fecha toLocalTimeString: ${fecha.toLocaleTimeString()}`)
            console.log(`fecha getTimezoneOffset: ${fecha.getTimezoneOffset()}`)
            console.log(`Hora UTC: ${fecha.getUTCHours()}`)
            console.log(`Timestamp: ${Date.now()}`)
        console.groupEnd()
        console.groupCollapsed("Objeto Math")
            console.log(Math)
            console.log(Math.PI)
            console.log(`Valor absoluto: ${Math.abs(-7.2)}`)
            console.log(`Elevar el valor hacia arriba: ${Math.ceil(7.1)}`)
            console.log(`Bajar el valor : ${Math.floor(5.99)}`)
            console.log(`Redondear al entero mas cercano: ${Math.round(6.49)}`)
            console.log(`Raiz Cuadrada de 81: ${Math.sqrt(81)}`)
            console.log(`Potencia 5 al cuadrado: ${Math.pow(5,2)}`)
            console.log(`Si un numero, es positivo (1), negativo (-1) o cero (0): ${Math.sign(-5,2)}`)
            console.log(`Potencia 5 al cuadrado: ${Math.pow(5,2)}`)
            console.log(`Números Random: ${Math.random()}`)
            console.log(`Números Random del 1 al 50: ${Math.round(Math.random()*50)}`)
        console.groupEnd()
        console.groupCollapsed("Operadores Cortocircuito")
            console.info("OR ||")
            console.log("cadena"|| "Valor de la derecha")
            console.log(0|| "Valor de la derecha")
            console.info("AND &&")
            console.log("cadena" && "Valor de la derecha")
            console.log(0 && "Valor de la derecha")
        console.groupEnd()