function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
}

HashTable.prototype.hash = function(key) {
    let sum = 0;
    for (let i=0; i<key.length; i++) { 
        sum += key.charCodeAt(i); // se suma el valor de cada letra en codigo unicode
    }
    
    return sum % this.numBuckets; // hacemos el modulo simplemente pq es lo q pide la letra
};

HashTable.prototype.set = function(key, value) {
    if (typeof (key !== 'string')) throw new TypeError('Keys must be string');
    let dondeGuardo = this.hash(key); // se llama función hash para que devuelva dónde hay que guardarlo

    // el siguiente condicional es para evitar colisiones, creo objeto y luego agrego propiedades
    if (this.buckets[dondeGuardo] === undefined) {
        // ejemplo si dondeGuardo = 3 => this.buckets[3] = [,,, {}]
        this.buckets[dondeGuardo] = {}; // me creo un objeto en la posicion  'dondeGuardo' dentro del array
    }

    // agrego la propiedad con key
    // ejemplo, this.buckets[3] = this.buckets[3] = [,,, {key: value}]
    this.buckets[dondeGuardo][key] = value;
};

HashTable.prototype.get = function(key) {
    let dondeRecupero = this.hash(key); // se llama hash para saber donde recuperar
    return this.buckets[dondeRecupero][key];
};

HashTable.prototype.hasKey = function(key) {
    let existe = this.hash(key);
    return this.buckets[existe].hasOwnProperty(key);
};
