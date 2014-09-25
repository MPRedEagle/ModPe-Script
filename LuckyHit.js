/*
 
  __ModPe Script__
  Lucky Hit
  RedEagle Team
  1.0.0

*/
var active = false;

function newLevel() {
	clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + " /active to active the Lucky Hit !");
}

function procCmd(c) {
	var c = c.split(" ");
	if(c[0] == "active") {
		active = true;
		clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + " Actived !");
	}
}
function attackHook(a,v) {
	if(a == getPlayerEnt() && active == true) {
		var ran = Math.floor(Math.random()*(13));
		if(ran == 0 || ran == 1 || ran == 2 || ran == 3 || ran == 4 || ran == 5) {
			var ren = Math.floor(Math.random()*(15));
			if(ren == 0 || ren == 1 || ren == 2 || ren == 3 || ren == 5) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,3,Math.floor(Math.random()*(4)+1),0);
			}
			else
			if(ren == 6 || ren == 7 || ren == 8 || ren == 9 || ren == 10) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,265,Math.floor(Math.random()*(4)+1),0);
			}
			else
			if(ren == 11 || ren == 12) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,264,Math.floor(Math.random()*(4)+1),0);
			}
			else
			if(ren == 13) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,56,1,0);
			}
			else
			if(ren == 14) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,41,1,0);
			}
		}
		else
		if(ran == 6 || ran == 8 || ran == 9 || ran == 7 || ran == 10 || ran == 11) {
			var ron = Math.floor(Math.random()*(3));
			if(ron == 0) {
				Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),33,"mob/creeper.png");
			}
			else
			if(ron == 1) {
				Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),34,"mob/skeleton.png");
			}
			else
			if(ron == 2) {
				Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),35,"mob/spider.png");
			}
		}
		else
		if(ran == 12) {
			var rum = Math.floor(Math.random()*(2));
			if(rum == 0) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,57,Math.floor(Math.random()*(2)+1),0);
			}
			else
			if(rum == 1) {
				Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,42,Math.floor(Math.random()*(5)+1),0);
			}
		}
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
