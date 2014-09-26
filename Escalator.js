/*
 
  __ModPe Script__
  Escalator
  RedEagle Team
  1.0.0

*/

function newLevel() {
	chat("Escalator block = Stairs");
	chat("Make a Stair like a Escalator..");
}

function chat(ess) {
	clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + ess);
}

function modTick() {
	var blockId = getTile(x,y-2,z);
	if(blockId == 53 || blockId == 67 || blockId == 109 || blockId == 108 || blockId == 128 || blockId == 134 || blockId == 135 || blockId == 136 || blockId == 156 || blockId == 164 || blockId == 163) {
		setPosition(getPlayerEnt(),Player.getX(),Player.getY()+2,Player.getZ());
	}
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
