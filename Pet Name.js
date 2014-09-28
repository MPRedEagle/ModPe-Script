/*
 
  __ModPe Script__
  Pet Name
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

var pet;
var name = false;

function newLevel() {
	chat("/name name");
	chat("Hit Your Pet To Rename It !");
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "name") {
		pet = c[1];
		name = true;
	}
}

function attackHook(attacker,victim) {
	if(attacker == getPlayerEnt() && name == true) {
		Entity.setNameTag(victim,pet);
		chat("Pet Name Setted To " + pet);
		name = false;
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
