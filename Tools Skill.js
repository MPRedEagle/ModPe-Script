/*
 
  __ModPe Script__
  Tools Skill
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/


ModPE.setItem(499,"nether_star",0,"God Star");
Item.addCraftRecipe(499,1,0,[256,1,0,257,1,0,258,1,0,267,1,0,292,1,0]);

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

function newLevel() {
	chat("Craft Your First Skill !");
	chat("Using all tools iron");
	chat("Skill will active in all type of tools !");
}

function procCmd(cmd) {
	if(cmd.split(" ")[0] == "secret") {
		addItemInventory(257,1,0);
		addItemInventory(258,1,0);
		addItemInventory(256,1,0);
		addItemInventory(290,1,0);
		addItemInventory(267,1,0);
		addItemInventory(499,1,0);
	}
}

function destroyBlock(x,y,z,side) {
	if(getInvSlot(499,0)) {
		if(getCarriedItem() == 257 || getCarriedItem() == 270 || getCarriedItem() == 274 || getCarriedItem() == 278 || getCarriedItem() == 285) {
			explode(x,y,z,4);
		}
		else
		if(getCarriedItem() == 258 || getCarriedItem() == 271 || getCarriedItem() == 275 || getCarriedItem() == 279 || getCarriedItem() == 286) {
			if(getTile(x,y,z) == 17) {
				Level.destroyBlock(x, y, z, true);
				for(var i = y+1;i < 128;i++) {
					if(getTile(x, i, z) == 17) {
						Level.destroyBlock(x, i, z, true);
					} 
					else {
						break;
					}
				}
			}
		}
		else
		if(getCarriedItem() == 256 || getCarriedItem() == 269 || getCarriedItem() == 273 || getCarriedItem() == 277 || getCarriedItem() == 284) {
			for(var i = y-1; i > 0; i--) {
				setTile(x,i,z,0);
			}
		}
	}
}

function useItem(x,y,z,itemId,blockId,side) {
	if(getInvSlot(499,0)) {
		if(getCarriedItem() == 290 || getCarriedItem() == 291 || getCarriedItem() == 292 || getCarriedItem() == 293 || getCarriedItem() == 294) {
			for(var i = z+1; i < 5; i++) {
				if(getTile(x,i,z) == 2 || getTile(x,i,z) == 3) {
					setTile(x,i,z,60);
				}
			}
		}
	}
}

function attackHook(attacker,victim) {
	if(getInvSlot(499,0)) {
		if(getCarriedItem() == 267 || getCarriedItem() == 272 || getCarriedItem() == 276 || getCarriedItem() == 283 || getCarriedItem() == 268) {
			var knk = Math.floor(Math.random()*(9));
			if(knk == 0 || knk == 1 || knk == 2 || knk == 6) {
				Entity.setVelZ(victim,-5);
			}
			else
			if(knk == 3 || knk == 4 || knk == 5 || knk ==7) {
				Entity.setFireTicks(victim,3);
			}
			else
			if(knk == 8) {
				Entity.setHealth(0);
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
