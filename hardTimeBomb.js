/*
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
*/

let wireCode;
for(let i = 0; i < 10; i++){
  if(global[`boom${i}`]){
    wireCode = global[`boom${i}`];
  }
}
Bomb.CutTheWire(wireCode);