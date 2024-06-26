/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left,right){
  const values = {'!': 2, '?': 3}
  const count = str => [...str].reduce((acc, cur) => acc + values[cur], 0);
  const [leftValue, rightValue] = [count(left), count(right)];
  if(leftValue === rightValue) return 'Balance';
  else if(leftValue > rightValue) return 'Left';
  else return 'Right';   
}