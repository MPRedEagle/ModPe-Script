/*
 
  __ModPe Script__
  Bow Skill
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

ModPE.setItem(499,"nether_star",0,"God Star");
ModPE.setItem(500,"blaze_rod",0,"God Stick");
ModPE.setItem(501,"book_enchanted",0,"God Book");
Item.addCraftRecipe(499,1,0,[265,2,0,40,2,0,30,2,0]);
Item.addCraftRecipe(500,1,0,[500,4,0,264,2,0,265,2,0]);
Item.addCraftRecipe(501,1,0,[501,6,0,264,3,0]);

function newLevel() {
	chat("Craft Your First Skill Using Iron !");
}

function procCmd() {
	addItemInventory(499,1);
	addItemInventory(500,1);
	addItemInventory(501,1);
}

/* Not Used																																																																																																																																																																																																																																																																																																																																																*/
function getInvSlot(id, data) {
	for(var i = 0; i < 35; i++) {
		var sItem = Player.getInventorySlot(i);
		var sData = Player.getInventorySlotData(i);
		if(id == sItem && data == sData){
			return true;
			break;
		}
	}
	return false;
}

function modTick() {
	if(getInvSlot(499,0)) {
		ModPE.langedit(item.bow.name,"Explode Arrow");
	}
}																																																																																																																																																																																																																																																																																																																																											/*
*/

function entityRemovedHook(entity) {
	if(getInvSlot(499,0)) {
		if(Entity.getEntityTypeId() == 80) {
			explode(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2);
		}
	}
	else
	if(getInvSlot(500,0)) {
		if(Entity.getEntityTypeId() == 80) {
			setTile(Entity.getX(entity)+1,Entity.getY(entity),Entity.getZ(entity),30);
			setTile(Entity.getX(entity)-1,Entity.getY(entity),Entity.getZ(entity),30);
			setTile(Entity.getX(entity)+1,Entity.getY(entity),Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity)-1,Entity.getY(entity),Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity)+1,Entity.getY(entity),Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)-1,Entity.getY(entity),Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)-1,30);

		}
	}
}

function attackHook(attacker,victim) {
	if(getInvSlot(501,0)) {
		if(attacker == Entity.getEntityTypeId() == 80) {
			Entity.setHealth(victim,0);
			var ran = Math.floor(Math.random()*(22));
			Math.floor(Math.random()*(10));
			if(ran == 0 || ran == 1 || ran == 2 || ran == 3 || ran == 4 || ran == 9 || ran == 10 || ran == 11 || ran == 12 || ran == 13) {
				clientMessage(" ");
			}
			else
			if(ran == 5 || ran == 6 || ran == 7 || ran == 15 || ran == 20 || ran == 21) {
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,3,Math.floor(Math.random()*(3)+1),0);
			}
			else
			if(ran == 16 || ran == 17) {
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,265,Math.floor(Math.random()*(3)+1),0);
			}
			else
			if(ran == 18 || ran == 19) {
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,264,Math.floor(Math.random()*(3)+1),0);
			}
			else
			if(ran == 8) {
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,276,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,277,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,278,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,279,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,293,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,310,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,311,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,312,1,0);
				Level.dropItem(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),2,313,1,0);
			}
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
