/**
 * Player object literal
 */
let myPlayer = {
      /**
     * First name of player
     */
    firstName: 'Thorin',
    lastName: 'Silverwrath',
    hitPoints: 30,
    weapon: 'Long Sword',
    strength: 5,

     /**
     * The attack of our player
     * @returns {number} The number of HP against the enemy 
     */ 
    attack: function () {
        let baseAttack = Math.random() * 5;
        return baseAttack * myPlayer.strength;
    }
}

console.log(myPlayer);
console.log(myPlayer.firstName + ' ' + myPlayer.lastName);

let attackHp = myPlayer.attack();

console.log(attackHp);

myPlayer.strength = 90;

console.log(myPlayer.attack());

// adding property on the object
myPlayer.mana = 30;
myPlayer['speed'] = 20;
myPlayer['mana'] = myPlayer.mana - 5;

console.log(myPlayer);

myPlayer.attack = 'WHU?'; // function is modified to a string 'WHU?'
console.log(myPlayer);