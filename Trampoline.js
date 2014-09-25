/*
 
  __ModPe Script__
  Trampoline Mod
  RedEagle Team
  1.0.0

*/

Block.defineBlock(250,"Trampoline","soul_sand",0,false,0);
Block.defineBlock(251,"High Trampoline","piston_top_sticky",0,false,0);
Block.defineBlock(252,"Super Trampoline","destroy",4,false,0);
Block.defineBlock(253,"Random Trampoline","destroy",5,false,0);
var pet = 0;

function newLevel() {
	chat("/b");
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "b") {
		chat("Block Gived !");
		addItemInventory(250,1,0);
		addItemInventory(251,1,0);
		addItemInventory(252,1,0);
		addItemInventory(253,1,0);
		chat("/ran <high> to set random block high..");
		setPlayerHealth(9999);
		chat("Health Setted To 9999");
	}
	if(c[0] == "ran") {
		pet = parseInt(c[1]);
		clientMessage(ChatColor.RED + "[RE] " + ChatColor.GREEN + "Setted To" + pet);
	}
}

function modTick() {
	if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) == 250) {
		setVelY(getPlayerEnt(), 1);
	}
	else
	if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) == 251) {
		setVelY(getPlayerEnt(),1);
	}
	else
	if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) == 252) {
		setVelY(getPlayerEnt(),2);
	}
	if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) == 253) {
		setVelY(getPlayerEnt(),pet);
	}
}

function chat(ccc) {
	clientMessage(ChatColor.RED + "[RE] " + ChatColor.GREEN + ccc)
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
