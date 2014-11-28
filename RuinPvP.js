/*
 
  __ModPe Script__
  RuinPvP
  RedEagle Team
  1.0.0

*/

/*

 -* Version 1.0.1 *-
 	Bug Fixed
 	Updated Saving Method

 -* Version 1.0.0 *-
 	Initial Release

*/

var point = 0;
var gamble = 0;
var chet = 0;
var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/"+Level.getWorldDir() + "/";


function newLevel() {
	chat("How to work?");
	chat("Just Kill mobs to get points !");
	chat("Die ? lost 100 point !");
	chat("Killed Mob ? plus 100 point !");
	chat("/dets to see details");
	Load();
}

function Save() {
	java.io.File(path).mkdirs();
	var newFile = new java.io.File(path,"ruinpgp.txt");
	newFile.createNewFile();
	var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	outWrite.append(point.toString());
	outWrite.append("," + gamble.toString());  //We need to separate all variables. We split them with ","
	outWrite.append("," + chet.toString());
	outWrite.close();
}

function Load(){
	if(!java.io.File(path + "ruinpgp.txt").exists()) return;
	var file = new java.io.File(path + "ruinpgp.txt");
	var fos = new java.io.FileInputStream(file);
	var str = new java.lang.StringBuilder();
	var ch;
	while((ch=fos.read())!=-1) str.append(java.lang.Character(ch));
	point=parseInt(str.toString().split(",")[0]);  //Here we split text by ","
	gamble=parseInt(str.toString().split(",")[1]);
	chet=parseInt(str.toString().split(",")[2]);
	fos.close();
}



function deathHook(murderer,victim) {
	if(Level.getGameMode() == 0) {
		if(murderer == getPlayerEnt()) {
			point = point + 100;
			chat("+100 !");
			clientMessage(ChatColor.GREEN + point);
		}
		else
		if(victim == getPlayerEnt()) {
			point = point - 100;
			chat("-100 !");
			clientMessage(ChatColor.GREEN + point);
		}
	}
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "dets") {
		chat("/rp shop");
		chat("/rp gamble , a casino");
		chat("/rp cheat <point amount>");
		chat("/rp point");
		chat("/i to see what item selled !");
	}
	if(c[0] == "i") {
		chat("/rp shop buy <Number>");
		chat("1.Diamond x 1 1000 point");
		chat("2.Diamond Equip x 1 set 5000 point");
		chat("3.Iron x 1 50 point");
		chat("4.Iron Equip x 1 set 1500 point");
		chat("5.Gold x 1 100 point");
		chat("6.Gold Equip x 1 set 1000 point");
		chat("7.Steak x 5 100 point");
	}
	if(c[0] == "rp") {
		if(c[1] == "point") {
			clientMessage(ChatColor.RED + "[RE] " + ChatColor.GREEN + point);
		}
		if(c[1] == "shop") {
			if(c[2] == "buy") {
				if(c[3] == "1" && point >= 1000) {
					addItemInventory(264,1);
					point = point - 1000;
				}
				if(c[3] == "2" && point >= 5000) {
					addItemInventory(276,1);
					addItemInventory(277,1);
					addItemInventory(278,1);
					addItemInventory(279,1);
					addItemInventory(310,1);
					addItemInventory(311,1);
					addItemInventory(312,1);
					addItemInventory(313,1);
					point = point - 5000;
				}
				if(c[3] == "3" && point >= 50) {
					addItemInventory(265,1);
					point = point - 50;
				}
				if(c[3] == "4" && point >= 1500) {
					addItemInventory(256,1);
					addItemInventory(257,1);
					addItemInventory(258,1);
					addItemInventory(267,1);
					addItemInventory(306,1);
					addItemInventory(307,1);
					addItemInventory(308,1);
					addItemInventory(309,1);
					point = point - 1500;
				}
				if(c[3] == "5" && point >= 100) {
					addItemInventory(266,1);
					point = point - 100;
				}
				if(c[3] == "6" && point >= 1000) {
					addItemInventory(283,1);
					addItemInventory(284,1);
					addItemInventory(285,1);
					addItemInventory(286,1);
					addItemInventory(314,1);
					addItemInventory(315,1);
					addItemInventory(316,1);
					addItemInventory(317,1);
					point = point - 1000;
				}
				if(c[3] == "7" && point >= 100) {
					addItemInventory(364,5);
					point = point - 100;
				}
			}
		}
		if(c[1] == "gamble") {
			gamble = parseInt(c[2]);
			if(gamble >= 50) {
				if(point >= gamble) {
					point = point - gamble;
					var ranbel = Math.floor(Math.random()*(50));
					if(ranbel == 0 || ranbel == 4 || ranbel == 5 || ranbel == 6 || ranbel == 7) {
						point = point + gamble + 100;
						chat("You Won 100 !");
						clientMessage(ChatColor.GREEN + point);
					}
					else
					if(ranbel == 1 || ranbel == 8 || ranbel == 9 || ranbel == 10 || ranbel == 11 || ranbel == 12 || ranbel == 13 || ranbel == 14 || ranbel == 15 || ranbel == 16 || ranbel == 17 || ranbel == 18 || ranbel == 19 || ranbel == 20) {
						point = point + gamble + 50;
						chat("You Won 50 !");
						clientMessage(ChatColor.GREEN + point);
					}
					else
					if(ranbel == 2 || ranbel == 21 || ranbel == 22 || ranbel == 23) {
						point = point + gamble + 500;
						chat("You Won 500 !");
						clientMessage(ChatColor.GREEN + point);
					}
					else
					if(ranbel == 3) {
						point = point + gamble + 1000;
						chat("Jackpot !!! You Won 10000");
						clientMessage(ChatColor.GREEN + point);
					}
					else
					if(ranbel == 24 || ranbel == 25 || ranbel == 26 || ranbel == 27 || ranbel == 29 || ranbel == 28) {
						chat("You Lose");
						clientMessage(ChatColor.GREEN + point);
					}
				}
			}
			else
			if(gamble >= point) {
				clientMessage(ChatColor.RED + "[RE]" + ChatColor.GREEN + " You Dont Have : " + gamble + " point");
			}
		}
		if(c[1] == "cheat") {
			chet = parseInt(c[2]);
			point = point + chet;
		}
	}
}

function chat(msg) {
	clientMessage(ChatColor.RED + "[RE] " + ChatColor.GREEN + msg);
}

function leaveGame() {
	Save();
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
