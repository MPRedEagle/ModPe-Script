/*
 
  __ModPe Script__
  
  RedEagle Team
  1.0.0

*/

/*
 
 *- Version 1.1.0*
  Adding More Code and Feature
 
 *- Version 1.0.0 -*
 	Initial Release

*/

/* The Sword Of The Death Mod */
/* Produced by RedEagle Team */
 
ModPE.setItem(500, "blaze_rod", 0, "Zeus Stick");
Item.addCraftRecipe(500, 1, 0, [5, 2, 0]);
Item.addFurnaceRecipe(266, 500, 1);
Item.setCategory(500, ItemCategory.MATERIAL);
 
ModPE.setItem(500, "blaze_rod", 0, "Zeus Stick");
 
function attackHook(attacker, victim){
 
if(Player.getCarriedItem() == 500){
 
var dmg = 15;
 
Entity.setHealth(victim, Entity.getHealth(victim) - dmg);
 
}
 
}
 
function useItem(x,y,z, itemId, blockId, side){
 
if(getCarriedItem() == 500) //Zeus Stick
 
for(var i = y-1; i > 0; i--){
 
setTile(x,i,z,0);
 
}
 
}
 
function newLevel(){
 
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " Mod Activated");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " Write /help to open help Message");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " write /lb to open Library Message");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " Write /htu to open How To Use Message");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " Write /zs to get the item");
clientMessage("-------------------------------------");
 
}
 
function procCmd(cmd){
 
if(cmd == "zs"){
addItemInventory(500,1,0);
}
 
if(cmd == "help"){
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " This Item Is Good For Killing Mob");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " And Good Too for Mining or digging");
clientMessage("-------------------------------------");
}
 
if(cmd == "lb"){
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " This Mod is by RedEagle Team");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " The Member : Six1nine_JR");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " Do Not Reproduce This Mod!");
clientMessage("-------------------------------------");
 
}
 
if(cmd == "htu"){
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " To get this Item you need 2 wood");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " And Then Craft Like stick");
clientMessage(ChatColor.GREEN + "[RE]" + ChatColor.AQUA + " But this item in Weapon Category");
clientMessage("-------------------------------------");
 
}
}
 
function leaveGame(){
 
print("Thanks For Using This Mod");
 
}
 
function destroyBlock(x,y,z,side){
 
if(getCarriedItem() == 500){
 
Level.destroyBlock(x,y,z,true)
 
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
