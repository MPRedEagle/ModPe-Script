/*
 
  __ModPe Script__
  Jobs
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.5 -*
 	Cancel Jobs Added !

 *- Version 1.0.1 -*
 	Adding Tree Cutter

 *- Version 1.0.0 -*
 	Initial Release

*/

var hunter = false;
var miner = false;
var treechop = false;
var getted = false;
var hunted = 0;
var mining = 0;
var chopped = 0;

function newLevel() {
	chat("/job list , to see what job available");
	chat("/job select <job> to select job");
	chat("/job ongo to see what on going job");
	chat("/job cancel");
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "job") {
		if(c[1] == "cancel") {
			var hunter = false;
		var miner = false;
		var treechop = false;
		}
		if(c[1] == "list") {
			chat("/job select hunter");
			chat("/job select miner");
			chat("/job select tree-cutter")
		}
		if(c[1] == "select" && getted == false) {
			if(c[2] == "hunter") {
				hunter = true;
				getted = true;
				chat("You're Select to be Hunter !");
				chat(hunted + "/25 Mob Killed !");
			}
			if(c[2] == "miner") {
				miner = true;
				getted = true;
				chat("You're Select to be Miner !");
				chat(mining + "/50 Ore Mined !");
			}
			if(c[2] == "tree-cutter") {
				treechop = true;
				getted = true;
				chat("You're Select to be Tree Cutter !");
				chat(chopped + "/60 Cutted !");
			}
		}
		if(c[1] == "ongo") {
			if(hunter == true) {
				chat(hunted + "/25 Mob Killed !");
			}
			else
			if(miner == true) {
				chat(mining + "/50 Ore Mined !");
			}
			else
			if(treechop == true) {
				chat(chopped + "/60 Cutted !");
			}
		}
		if(c[1] == "select" && getted == true) {
			chat("You Already Have Jobs !!");
		}
	}
}

function deathHook(murderer,victim) {
	if(murderer == getPlayerEnt()) {
		hunted++;
		if(hunted == 25) {
			chat("Quest Complete !");
			hunter = false;
			hunted = 0;
			addItemInventory(264,5);
		}
	}
}

function destroyBlock(x,y,z,side) {
	var bId = getTile(x,y,z);
	if(bId == 14 || bId == 15 || bId == 16 || bId == 21 || bId == 73 || bId == 74 || bId == 56) {
		mining++;
		if(mining == 50) {
			chat("Quest Complete !");
			miner = false;
			mining = 0;
			addItemInventory(264,5);
		}
	}
	else
	if(bId == 17) {
		chopped++;
		if(chopped == 60) {
			chat("Quest Complete !");
			treechop = false;
			chopped = 0;
			addItemInventory(264,5);
		}
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
