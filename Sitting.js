/*
 
  __ModPe Script__
  Sitting
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 Initial Release

*/

var mount;

function useItem(x,y,z,itemId,blockId) {
	if(blockId == 53 || blockId == 67 || blockId == 109 || blockId == 108 || blockId == 128 || blockId == 134 || blockId == 135 || blockId == 136 || blockId == 156 || blockId == 164 || blockId == 163) {
		mount = Level.spawnMob(x+0.5,y+0.7,z+0.5,80);
		Entity.setRenderType(mount,0);
		rideAnimal(getPlayerEnt(),mount);
	}
}

function newLevel() {
	c("Please Don't use in third person mode preview !");
	c("Just work with oak stair");
	c("Next update , will work with all stair !");
}

function c(msg) {
	clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + msg);
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
