/*
 
  __ModPe Script__
  Trapper Arrow
  RedEagle Team
  1.0.0

*/

function newLevel() {
	clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + " Trapper Arrow By : Devillord");
	clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + " Shoot Arrow To Mobs To Trap It !"); // bad message. any good message ?
}

function entityRemovedHook(entity) {
	if(Entity.getEntityTypeId(entity) == 80) { // shooted arrow
		setTile(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),30);
		setTile(Entity.getX(entity)+1,Entity.getY(entity),Entity.getZ(entity),30);
		setTile(Entity.getX(entity)-1,Entity.getY(entity),Entity.getZ(entity),30);
		setTile(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)+1,30);
		setTile(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)-1,30);
		setTile(Entity.getX(entity)+1,Entity.getY(entity),Entity.getZ(entity)-1,30);
		setTile(Entity.getX(entity)-1,Entity.getY(entity),Entity.getZ(entity)-1,30);
		setTile(Entity.getX(entity)-1,Entity.getY(entity),Entity.getZ(entity)+1,30);
		setTile(Entity.getX(entity)+1,Entity.getY(entity),Entity.getZ(entity)+1,30);
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
