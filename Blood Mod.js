/*
 
  __ModPe Script__
  Blood Mod
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

function attackHook(attacker,victim) {
	if(attacker == getPlayerEnt()) {
		Level.addParticle(ParticleType.redstone,Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,2);
		Level.addParticle(ParticleType.redstone,Entity.getX+1(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,2);
		Level.addParticle(ParticleType.redstone,Entity.getX-1(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,2);
		Level.addParticle(ParticleType.redstone,Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim)-1,0,0,0,2);
	}
	else
	if(victim == getPlayerEnt()) {
		Level.addParticle(ParticleType.redstone,Player.getX(),Player.getY(),Player.getZ(),0,0,0,2);
		Level.addParticle(ParticleType.redstone,Player.getX(),Player.getY()-1,Player.getZ(),0,0,0,2);
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
