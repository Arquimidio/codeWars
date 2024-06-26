/*
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

["Adam", "has", "a", "dog", "The", "name", "of", "the", "is", "also"].forEach(string => {
  this[string] = (next) => `${string}${next? ' ' + next : '.'}`;
})