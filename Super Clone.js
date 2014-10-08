/*
 
  __ModPe Script__
  Super Clone
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

var name = "Clone";
var chatt = ["Hello ! I Like You !","Let's Build A House :p","I Want A Diamond :D"];
var chatRan = Math.floor(Math.random()*(chatt.length));
var attacked = ["Why You Attack Me :(","Stop It Please !!!"];
var attackedRan = Math.floor(Math.random()*(attacked.length));
var clone;
var cloneSpawned = false;

function newLevel() {
	chat("/clone <name>");
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "clone") {
		name = c[1];
		clone = Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),63,"mob/skin.png");
		Entity.setNameTag(clone,name);
		cloneSpawned = true;
	}
}

function modTick() {
	var count = 500;
	if(cloneSpawned == true) {
		count--;
		if(count == 0) {
			chat(chatt[chatRan]);
		}
	}
}

function attackHook(attacker,victim) {
	if(victim == clone) {
		chat(attacked[attackedRan]);
	}
}

function deathHook(murderer,victim) {
	if(victim == clone) {
		Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,3,1,0);
	}
}

function chat(ess) {
	clientMessage(ChatColor.RED + "[RE] " + ChatColor.GREEN + ess);
}

/*

	Copyright Red Eagle Team 2014.
	This Mod is Coded By Red Eagle PE Modder and Pocketmine Pluginers Team.
	This Is Free Mod PE Scripts 
	But you cannot redistribute,recoded,and using our code without permission from Head Of Team.
	Head Of Team : DevilLord SoulDeath Reaper
	Facebook : facebook.com/ville.a.mania/
	Github : github.com/MPRedEagle/ModPe-Script/

*/
