function b() {
    console.log('B!');
};

function a() {
    // invoca a la función b
    b();
};

//invocamos a
a(); 

//Pasos
//Se genera una pila dónde el ultimo en entrar es el primero en salir. 
/* 
1. Se genera contexto de ejecución Global 
2. Se ejecuta a();
3. Se ejecuta b(console.log('B!')); 
4. Se destruye contexto de ejecucion de b();
5. Se destruye contexto de ejecución de a();
6. Se destruye contexto de ejecución Global
*/
