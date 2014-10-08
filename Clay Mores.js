/*
 
  __ModPe Script__
  Clay Mores
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

var cm = 98;

function newLevel() {
	chat("Stone Bricks Is Explode Block !");
	chat("Set The Explode Block !");
	chat("Usage : /set <blockId>");
}

function modTick() {
	if(getPlayerY()-2 == cm) {
		explode(Player.getX(),Player.getY(),Player.getZ(),1);
	}
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "set") {
		cm = parseInt(c[1]);
		chat("Explode Block Setted To Block Id : " + cm);
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
