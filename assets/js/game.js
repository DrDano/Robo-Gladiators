var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
}

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
]

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var fight = function (enemy) {
  // repeat and execute as long as the enemy-robot is alive
  while (enemy.health > 0 && playerInfo.health > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    if (promptFight === "skip" || promptFight === "SKIP") {
      window.alert(playerInfo.name + " has chosen to skip the fight!");
      var confirmSkip = window.confirm("Are you sure you want to skip?");

      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
    }

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemy.attack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);

      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(
          playerInfo.name + " still has " + playerInfo.health + " health left."
        );
      }
      // if player choses to skip
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
  }
};

var startGame = function () {
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      pickedEnemyObj.health = randomNumber(40, 60);
      var pickedEnemyObj = enemyInfo[i];
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
          
          if (storeConfirm) {
              shop();
          }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".")
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    var ucShopOption = shopOptionPrompt.toUpperCase();

    switch (ucShopOption) {
        case "REFILL":
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.")
                playerInfo.health += 20;
                playerInfo.money -= 7;
            } else {
                window.alert("You don't have enough money.");
            }
            
            break;
        case "UPGRADE":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerInfo.attack += 6;
                playerInfo.money -= 7;
            } else {
                window.alert("You don't have enough money.");
            }

            break;
        case "LEAVE":
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You did not pick a valid option. Try Again.");
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value 
}

startGame()
