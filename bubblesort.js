function bubbleSort(array) {
  /* tu codigo acá */
  if (array.length == 0) {
    return [];
  } else {
    for (var j = 0; j < array.length; j++) {
      for (var i = 0; i < array.length; i++) {
        //En este caso esta optimizado, no se llama N^2 veces.
        if (array[i] > array[i + 1]) {
          array = bubbleSort.swap(array, i);
        }
      }
    }
    return array;
  }
}

bubbleSort.swap = function (array, i) {
  if (array[i] > array[i + 1]) {
    var aux = array[i + 1];
    array[i + 1] = array[i];
    array[i] = aux;
  }
  return array;
};
