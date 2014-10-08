/*
 
  __ModPe Script__
  Commands Mods
  RedEagle Team
  1.0.0

*/

/*

 *- Version 1.0.0 -*
 	Initial Release

*/

var nradius = 5;
var id = 0;
var ia = 1;
var im = 0;
var me;
var su = 20;
var yyx = 0;
var yyy = 0;
var yyz = 0;
var fire = false;
var water = false;
var explode = false;
var th = false;
var mst = false;
var death = 0;
var kill = 0;

function newLevel() {
    clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE +  " Hello !");
    clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE +  " /c to see what command is available !");
    kill = ModPE.readData("k");
    death = ModPE.readData("d");
}

function procCmd(cmd) {
    var c = cmd.split(" ");

    if(c[0] == "c") {
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /g <1 | 0> gamemode to 1 [creative] or 0 [survival]");
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /nuke <radius>");
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /give [itemid] [itemamount] [itemmeta/damage]");
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /heal <infinite | full>");
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /kill <mob name [the mob name is same with /summon]>");
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /c 2");
        if(c[1] == "2") {
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /summon <zombie | skeleton | creeper | zpigman | spider>");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /summon <wolf | sheep | cow | chicken | pig>");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /summon <villager | enderman | slime | mooshroom | silverfish>");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /skill <fire | water | explode | throw | master>");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /kd kill death count");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /c 3");
        }
        if(c[1] == "3") {
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /ubdtool unbreakable diamond tool must have diamond tools and equip first");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /speedup <tick[minimal is 20]>");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /time <night | day>");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /suicide");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " /tp x y z");
        }
    }
    if(c[0] == "kd") {
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Kill : " + kill);
        clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Death : " + death);
    }
    if(c[0] == "skill") {
        if(c[1] == "fire" && fire == false && water == false && explode == false && th == false && mst == false) {
            fire = true;
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill Actived! ");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Use Any Item Tipe ! Include hand !");
            if(fire == true || water == true || explode == true || th == true || mst == true) {
                clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill is already actived ! ");
            }
        }
        if(c[1] == "fire" && fire == true || water == true || explode == true || th == true || mst == true) {
                clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill is already actived ! ");
        }
        if(c[1] == "water" && fire == false && water == false && explode == false && th == false && mst == false) {
            water = true;
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill Actived! ");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Use Any Item Tipe ! Include hand !");
        }
        if(c[1] == "water" && fire == true || water == true || explode == true || th == true || mst == true) {
                clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill is already actived ! ");
        }
        if(c[1] == "explode" && fire == false && water == false && explode == false && th == false && mst == false)  {
            explode = true;
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill Actived! ");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Use Any Item Tipe ! Include hand !");
        }
        if(c[1] == "water" && fire == true || water == true || explode == true || th == true || mst == true) {
                clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill is already actived ! ");
        }
        if(c[1] == "throw" && fire == false && water == false && explode == false && th == false && mst == false) {
            th = true;
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill Actived! ");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Use Any Item Tipe ! Include hand !");
        }
        if(c[1] == "throw" && fire == true || water == true || explode == true || th == true || mst == true) {
                clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill is already actived ! ");
        }
        if(c[1] == "master" && fire == false && water == false && explode == false && th == false && mst == false) {
            mst = true;
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill Actived! ");
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Use Any Item Tipe ! Include hand !");
        }
        if(c[1] == "master" && fire == true || water == true || explode == true || th == true || mst == true) {
                clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Skill is already actived ! ");
        }
    }
    if(c[0] == "tp") {
        yyx = parseInt(c[1]);
        yyy = parseInt(c[2]);
        yyz = parseInt(c[3]);
        setPosition (getPlayerEnt(),yyx,yyy,yyz);
    }
    if(c[0] == "g") {
        if(c[1] == "1") {
            Level.setGameMode(1);
        }
        if(c[1] == "0") {
            Level.setGameMode(0);
        }
    }
    if(c[0] == "nuke") {
        nradius = parseInt(c[1]);
        explode(Player.getX(),Player.getY(),Player.getZ(),nradius);
    }
    if(c[0] == "give") {
        id = parseInt(c[1]);
        ia = parseInt(c[2]);
        im = parseInt(c[3]);
        addItemInventory(id,ia,im);
    }
    if(c[0] == "heal") {
        if(c[1] == "full") {
            Player.setHealth(20);
        }
        if(c[1] == "infinite") {
            Player.setHealth(9999);
        }
    }
    if(c[0] == "clone") {
        me = Level.spawnMob(Player.getX()+2, Player.getY(), Player.getZ()+2, 3, "mob/char.png");
        Entity.setHealth(20);
        Entity.setNameTag(me,"Clone");
    }
    if(c[0] == "summon") {
        if(c[1] == "zombie") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,32);
        }
        if(c[1] == "creeper") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,33);
        }
        if(c[1] == "skeleton") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,34);
        }
        if(c[1] == "spider") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,35);
        }
        if(c[1] == "pigman") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,36);
        }
        if(c[1] == "slime") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,37);
        }
        if(c[1] == "enderman") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,38);
        }
        if(c[1] == "silverfish") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,39);
        }
        if(c[1] == "chicken") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,10);
        }
        if(c[1] == "cow") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,11);
        }
        if(c[1] == "pig") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,12);
        }
        if(c[1] == "sheep") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,13);
        }
        if(c[1] == "wolf") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,14);
        }
        if(c[1] == "mooshrom") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,16);
        }
        if(c[1] == "villager") {
            Level.spawnMob(Player.getX(),Player.getY(),Player.getZ()+5,15);
        }
    }
    if(c[0] == "ubdtool") {
        Item.setMaxDamage(276,-1000);
        Item.setMaxDamage(277,-1000);
        Item.setMaxDamage(278,-1000);
        Item.setMaxDamage(279,-1000);
        Item.setMaxDamage(293,-1000);
        Item.setMaxDamage(310,-1000);
        Item.setMaxDamage(311,-1000);
        Item.setMaxDamage(312,-1000);
        Item.setMaxDamage(313,-1000);
        clientMessage("Active To Any Diamond Tools and Equipments !!");
    }
    if(c[0] == "speedup") {
        su = parseInt(c[1]);
        if(su<20){
            clientMessage(ChatColor.RED + "[RE]" + ChatColor.WHITE + " Minimal Ticks is 20");
        }
        else
        if(su>=20) {
            ModPE.setGameSpeed(su);
        }
        
    }
    if(c[0] == "time") {
        if(c[1] == "night") {
            Level.setTime(9000);
        }
        if(c[1] == "day") {
            Level.setTime(0);
        }
    }
    if(c[0] == "suicide") {
        Player.setHealth(0);
    }
}

function attackHook(attacker,victim) {
    var vic = victim;

    if(attacker == getPlayerEnt() && fire == true) {
        Entity.setFireTicks(vic,2);
    }

    if(attacker == getPlayerEnt() && water == true) {
        setTile(Entity.getX(vic),Entity.getY(vic)+2,Entity.getZ(vic),8);
    }

    if(attacker == getPlayerEnt() && explode == true) {
        explode(Entity.getX(vic),Entity.getY(vic)+2,Entity.getZ(vic),3);
    }

    if(attacker == getPlayerEnt() && th == true) {
        Entity.setPosition(vic,x,15,z);
    }

    if(attacker == getPlayerEnt() && mst == true) {
        Entity.setHealth(vic,0);
    }
}

function deathHook(murderer, victim) {
    if(victim == Player.getEntity()) {
        death = death + 1;
    }
    else
    if(murderer == Player.getEntity()) {
        kill = kill + 1;
    }
}

function leaveGame() {
    ModPE.saveData("k",kill);
    ModPE.saveData("d",death);
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
