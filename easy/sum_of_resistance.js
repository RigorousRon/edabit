/*
When resistors are connected together in series, the same current passes through
each resistor in the chain and the total resistance, RT, of the circuit must be
equal to the sum of all the individual resistors added together. That is:
RT = R1 + R2 + R3 ...

Create a function that takes an array of values resistance that are connected in
series, and calculates the total resistance of the circuit in ohms. the ohm is
the standard unity of electrical resistance in the international system of units
(SI)

Examples
seriesResistance([1, 5, 6, 3]) => "15 ohms"
seriesResistance([16, 3.5, 6]) => "25.5 ohms"
seriesResistance([0.5, 0.5]) => "1.0 ohm"

Notes
All inputs will be valid
Notice the singular ohm for values <= 1
*/

function seriesResistance(array) {
  let resInOhms = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  if (resInOhms <= 1) {
    return `${resInOhms} ohm`;
  } else {
    return `${resInOhms} ohms`;
  }
}

console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));
console.log(seriesResistance([0.2, 0.3, 0.4]));