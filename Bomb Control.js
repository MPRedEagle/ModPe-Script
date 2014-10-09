/*
 
  __ModPe Script__
  
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

var blockx;
var blocky;
var blockz;
var boom = false;

function newLevel() {
	clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "Use Stick To Planted Nuke");
	clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "Plant Nuke And Command /ledak");
	clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "Don't Install Any Mod Except");
	clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "Bom Control Mod");
	clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "Because There Are Still Bugs");
}

function useItem(x,y,z,itemId,blockId,side) {
	if(itemId == 280 && boom == false) {
		blockx = x;
		blocky = y;
		blockz = z;
		clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "Nuke Has Planted");
		boom = true;
	}
}
function procCmd(cmd) {
	if(cmd == "ledak" && boom == true) {
		boom = false;
		Level.explode(blockx,blocky,blockz,20);
		clientMessage(ChatColor.BLUE + "[RE] " + ChatColor.RED + "BOOM !");
	}
}

function leaveGame() {
	print("See Ya!");
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
