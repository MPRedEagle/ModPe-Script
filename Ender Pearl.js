/*
 
  __ModPe Script__
  Ender Pearl
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

function newLevel(){
	addItemInventory(332,16);
	clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN +  " Snowball Added");
}

function entityRemovedHook(entity) {
	if(Entity.getEntityTypeId(entity) == 81) {
		onPosition(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity));
	}
}

function onPosition(x,y,z) {
	setPosition(getPlayerEnt(),x,y+4,z);
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
