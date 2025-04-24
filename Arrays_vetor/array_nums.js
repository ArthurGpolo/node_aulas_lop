const nums = [100, 10, 11, 333, 111, 0];

console.log(nums);

// Este método faz uma ordenação léxica de algarismo por algarismo.
nums.sort();
console.log(nums);

// Para trocar o tipo de ordenação é preciso o uso de uma função.
nums.sort((a, b) => a - b);
console.log(nums); 
