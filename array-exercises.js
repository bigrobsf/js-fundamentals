var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1
for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2
people.shift();

// 3
people.pop();

// 4
people.unshift('Matt');

// 5
people.push('Rob');

// 6
for (var i = 0; i < people.length; i++) {
  console.log(people[i]);

  if (people[i] === 'Mary') break;
}

console.log(people);

// 7
var copy = people.slice(2);
console.log(copy);

// 8
console.log(people.indexOf('Mary'));

// 9
console.log(people.indexOf('Foo'));

// 10
var people = ['Greg', 'Mary', 'Devon', 'James'];
people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);

// 11
var withBob = people.concat('Bob');
console.log(withBob);
