/*
You will be given the number of angles of a shape with equal sides and angles, and you need to return the number of its sides, and the measure of the interior angles.

Should the number be equal or less than 2, return:

"this will be a line segment or a dot"
Otherwise return the result in the following format:

"This shape has s sides and each angle measures d"
(replace s with number of sides and d with the measure of the interior angles).

Angle measure should be floored to the nearest integer.

Number of sides will be tested from 0 to 180.
*/

function describeTheShape( angles ){
  if(angles <= 2) return "this will be a line segment or a dot";
  const angleMeasure = Math.floor((180 * (angles - 2)) / angles);
  return `This shape has ${angles} sides and each angle measures ${angleMeasure}`;
}