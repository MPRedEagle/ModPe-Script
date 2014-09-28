/*
 
  __ModPe Script__
  Super Warp
  RedEagle Team
  1.1.0

*/

/*

 *- Version 1.1.0 -*
 	Update :
 		Saving and Loading Warp.
 		Added Back Death.
 	Bug Fixes :
		Commands.
		setPosition.
		Wrong Warp.

 *- Version 1.0.0 -*
 	Initial Release

*/

var warp1x;
var warp2x;
var warp3x;
var warp4x;
var warp5x;
var warp6x;
var warp7x;
var warp8x;
var warp9x;
var warp10x;
var warp11x;
var warp12x;
var warp13x;
var warp14x;
var warp15x;
var warp16x;
var warp17x;
var warp18x;
var warp19x;
var warp20x;
var warp21x;
var warp22x;
var warp23x;
var warp24x;
var warp25x;
var warp26x;
var warp27x;
var warp28x;
var warp29x;
var warp30x;

var warp1y;
var warp2y;
var warp3y;
var warp4y;
var warp5y;
var warp6y;
var warp7y;
var warp8y;
var warp9y;
var warp10y;
var warp11y;
var warp12y;
var warp13y;
var warp14y;
var warp15y;
var warp16y;
var warp17y;
var warp18y;
var warp19y;
var warp20y;
var warp21y;
var warp22y;
var warp23y;
var warp24y;
var warp25y;
var warp26y;
var warp27y;
var warp28y;
var warp29y;
var warp30y;

var warp1z;
var warp2z;
var warp3z;
var warp4z;
var warp5z;
var warp6z;
var warp7z;
var warp8z;
var warp9z;
var warp10z;
var warp11z;
var warp12z;
var warp13z;
var warp14z;
var warp15z;
var warp16z;
var warp17z;
var warp18z;
var warp19z;
var warp20z;
var warp21z;
var warp22z;
var warp23z;
var warp24z;
var warp25z;
var warp26z;
var warp27z;
var warp28z;
var warp29z;
var warp30z;

var warp1 = false;
var warp2 = false;
var warp3 = false;
var warp4 = false;
var warp5 = false;
var warp6 = false;
var warp7 = false;
var warp8 = false;
var warp9 = false;
var warp10 = false;
var warp11 = false;
var warp12 = false;
var warp13 = false;
var warp14 = false;
var warp15 = false;
var warp16 = false;
var warp17 = false;
var warp18 = false;
var warp19 = false;
var warp20 = false;
var warp21 = false;
var warp22 = false;
var warp23 = false;
var warp24 = false;
var warp25 = false;
var warp26 = false;
var warp27 = false;
var warp28 = false;
var warp29 = false;
var warp30 = false;

var warpplus = 0;
var homex;
var homey;
var homez;
var homesetted = false;
var spawny;
var spawnz;
var spawnx;
var spawnsetted = false;
var deathx;
var deathy;
var deathz;
var deathsetted = false;

var warp1name;
var warp2name;
var warp3name;
var warp4name;
var warp5name;
var warp6name;
var warp7name;
var warp8name;
var warp9name;
var warp10name;
var warp11name;
var warp12name;
var warp13name;
var warp14name;
var warp15name;
var warp16name;
var warp17name;
var warp18name;
var warp19name;
var warp20name;
var warp21name;
var warp22name;
var warp23name;
var warp24name;
var warp25name;
var warp26name;
var warp27name;
var warp28name;
var warp29name;
var warp30name;

function newLevel() {
	chat("/setwarp <name>");
	chat("/setspawn");
	chat("/spawn");
	chat("/warp <warpname>");
	chat("/warplist <1 | 2 | 3 | 4 | 5 | 6>");
	chat("/sethome");
	chat("/home");
	chat("/backdeath back to your death position");
	loadOn();
	chat("If you use /warplist and see \n undefine, mean is you warp not setted !");
}

function leaveGame() {
	savedOn();
	chat("Saving....");
}

function loadOn() {
	warp1x = ModPE.readData("warp1x");
	warp2x = ModPE.readData("warp2x");
	warp3x = ModPE.readData("warp3x");
	warp4x = ModPE.readData("warp4x");
	warp5x = ModPE.readData("warp5x");
	warp6x = ModPE.readData("warp6x");
	warp7x = ModPE.readData("warp7x");
	warp8x = ModPE.readData("warp8x");
	warp9x = ModPE.readData("warp9x");
	warp10x = ModPE.readData("warp10x");
	warp11x = ModPE.readData("warp11x"); 
	warp12x = ModPE.readData("warp12x");
	warp13x = ModPE.readData("warp13x");
	warp14x = ModPE.readData("warp14x");
	warp15x = ModPE.readData("warp15x");
	warp16x = ModPE.readData("warp16x");
	warp17x = ModPE.readData("warp17x");
	warp18x = ModPE.readData("warp18x");
	warp19x = ModPE.readData("warp19x");
	warp20x = ModPE.readData("warp20x");
	warp21x = ModPE.readData("warp21x");
	warp22x = ModPE.readData("warp22x");
	warp23x = ModPE.readData("warp23x");
	warp24x = ModPE.readData("warp24x");
	warp25x = ModPE.readData("warp25x");
	warp26x = ModPE.readData("warp26x");
	warp27x = ModPE.readData("warp27x");
	warp28x = ModPE.readData("warp28x");
	warp29x = ModPE.readData("warp29x");
	warp30x = ModPE.readData("warp30x");

	warp1y = ModPE.readData("warp1y");
	warp2y = ModPE.readData("warp2y");
	warp3y = ModPE.readData("warp3y");
	warp4y = ModPE.readData("warp4y");
	warp5y = ModPE.readData("warp5y");
	warp6y = ModPE.readData("warp6y");
	warp7y = ModPE.readData("warp7y");
	warp8y = ModPE.readData("warp8y");
	warp9y = ModPE.readData("warp9y");
	warp10y = ModPE.readData("warp10y");
	warp11y = ModPE.readData("warp11y"); 
	warp12y = ModPE.readData("warp12y");
	warp13y = ModPE.readData("warp13y");
	warp14y = ModPE.readData("warp14y");
	warp15y = ModPE.readData("warp15y");
	warp16y = ModPE.readData("warp16y");
	warp17y = ModPE.readData("warp17y");
	warp18y = ModPE.readData("warp18y");
	warp19y = ModPE.readData("warp19y");
	warp20y = ModPE.readData("warp20y");
	warp21y = ModPE.readData("warp21y");
	warp22y = ModPE.readData("warp22y");
	warp23y = ModPE.readData("warp23y");
	warp24y = ModPE.readData("warp24y");
	warp25y = ModPE.readData("warp25y");
	warp26y = ModPE.readData("warp26y");
	warp27y = ModPE.readData("warp27y");
	warp28y = ModPE.readData("warp28y");
	warp29y = ModPE.readData("warp29y");
	warp30y = ModPE.readData("warp30y");


	warp1z = ModPE.readData("warp1z");
	warp2z = ModPE.readData("warp2z");
	warp3z = ModPE.readData("warp3z");
	warp4z = ModPE.readData("warp4z");
	warp5z = ModPE.readData("warp5z");
	warp6z = ModPE.readData("warp6z");
	warp7z = ModPE.readData("warp7z");
	warp8z = ModPE.readData("warp8z");
	warp9z = ModPE.readData("warp9z");
	warp10z = ModPE.readData("warp10z");
	warp11z = ModPE.readData("warp11z"); 
	warp12z = ModPE.readData("warp12z");
	warp13z = ModPE.readData("warp13z");
	warp14z = ModPE.readData("warp14z");
	warp15z = ModPE.readData("warp15z");
	warp16z = ModPE.readData("warp16z");
	warp17z = ModPE.readData("warp17z");
	warp18z = ModPE.readData("warp18z");
	warp19z = ModPE.readData("warp19z");
	warp20z = ModPE.readData("warp20z");
	warp21z = ModPE.readData("warp21z");
	warp22z = ModPE.readData("warp22z");
	warp23z = ModPE.readData("warp23z");
	warp24z = ModPE.readData("warp24z");
	warp25z = ModPE.readData("warp25z");
	warp26z = ModPE.readData("warp26z");
	warp27z = ModPE.readData("warp27z");
	warp28z = ModPE.readData("warp28z");
	warp29z = ModPE.readData("warp29z");
	warp30z = ModPE.readData("warp30z");

	warp1 = ModPE.readData("warp1");
	warp2 = ModPE.readData("warp2");
	warp3 = ModPE.readData("warp3");
	warp4 = ModPE.readData("warp4");
	warp5 = ModPE.readData("warp5");
	warp6 = ModPE.readData("warp6");
	warp7 = ModPE.readData("warp7");
	warp8 = ModPE.readData("warp8");
	warp9 = ModPE.readData("warp9");
	warp10 = ModPE.readData("warp10");
	warp11 = ModPE.readData("warp11"); 
	warp12 = ModPE.readData("warp12");
	warp13 = ModPE.readData("warp13");
	warp14 = ModPE.readData("warp14");
	warp15 = ModPE.readData("warp15");
	warp16 = ModPE.readData("warp16");
	warp17 = ModPE.readData("warp17");
	warp18 = ModPE.readData("warp18");
	warp19 = ModPE.readData("warp19");
	warp20 = ModPE.readData("warp20");
	warp21 = ModPE.readData("warp21");
	warp22 = ModPE.readData("warp22");
	warp23 = ModPE.readData("warp23");
	warp24 = ModPE.readData("warp24");
	warp25 = ModPE.readData("warp25");
	warp26 = ModPE.readData("warp26");
	warp27 = ModPE.readData("warp27");
	warp28 = ModPE.readData("warp28");
	warp29 = ModPE.readData("warp29");
	warp30 = ModPE.readData("warp30");

	warpplus = ModPE.readData("warpplus");
	homex = ModPE.readData("homex");
	homey = ModPE.readData("homey");
	homez = ModPE.readData("homez");
	homesetted = ModPE.readData("homesetted");
	spawny = ModPE.readData("spawny");
	spawnz = ModPE.readData("spawnz");
	spawnx = ModPE.readData("spawnx");
	spawnsetted = ModPE.readData("spawnsetted");
	deathx = ModPE.readData("deathx");
	deathy = ModPE.readData("deathy");
	deathz = ModPE.readData("deathz");
	deathsetted = ModPE.readData("deathsetted");

	warp1name = ModPE.readData("warp1name");
	warp2name = ModPE.readData("warp2name");
	warp3name = ModPE.readData("warp3name");
	warp4name = ModPE.readData("warp4name");
	warp5name = ModPE.readData("warp5name");
	warp6name = ModPE.readData("warp6name");
	warp7name = ModPE.readData("warp7name");
	warp8name = ModPE.readData("warp8name");
	warp9name = ModPE.readData("warp9name");
	warp10name = ModPE.readData("warp10name");
	warp11name = ModPE.readData("warp11name");
	warp12name = ModPE.readData("warp12name");
	warp13name = ModPE.readData("warp13name");
	warp14name = ModPE.readData("warp14name");
	warp15name = ModPE.readData("warp15name");
	warp16name = ModPE.readData("warp16name");
	warp17name = ModPE.readData("warp17name");
	warp18name = ModPE.readData("warp18name");
	warp19name = ModPE.readData("warp19name");
	warp20name = ModPE.readData("warp20name");
	warp21name = ModPE.readData("warp21name");
	warp22name = ModPE.readData("warp22name");
	warp23name = ModPE.readData("warp23name");
	warp24name = ModPE.readData("warp24name");
	warp25name = ModPE.readData("warp25name");
	warp26name = ModPE.readData("warp26name");
	warp27name = ModPE.readData("warp27name");
	warp28name = ModPE.readData("warp28name");
	warp29name = ModPE.readData("warp29name");
	warp30name = ModPE.readData("warp30name");
}

function savedOn() {
	ModPE.saveData("warp1x",warp1x);
	ModPE.saveData("warp2x",warp2x);
	ModPE.saveData("warp3x",warp3x);
	ModPE.saveData("warp4x",warp4x);
	ModPE.saveData("warp5x",warp5x);
	ModPE.saveData("warp6x",warp6x);
	ModPE.saveData("warp7x",warp7x);
	ModPE.saveData("warp8x",warp8x);
	ModPE.saveData("warp9x",warp9x);
	ModPE.saveData("warp10x",warp10x);
	ModPE.saveData("warp11x",warp11x); 
	ModPE.saveData("warp12x",warp12x);
	ModPE.saveData("warp13x",warp13x);
	ModPE.saveData("warp14x",warp14x);
	ModPE.saveData("warp15x",warp15x);
	ModPE.saveData("warp16x",warp16x);
	ModPE.saveData("warp17x",warp17x);
	ModPE.saveData("warp18x",warp18x);
	ModPE.saveData("warp19x",warp19x);
	ModPE.saveData("warp20x",warp20x);
	ModPE.saveData("warp21x",warp21x);
	ModPE.saveData("warp22x",warp22x);
	ModPE.saveData("warp23x",warp23x);
	ModPE.saveData("warp24x",warp24x);
	ModPE.saveData("warp25x",warp25x);
	ModPE.saveData("warp26x",warp26x);
	ModPE.saveData("warp27x",warp27x);
	ModPE.saveData("warp28x",warp28x);
	ModPE.saveData("warp29x",warp29x);
	ModPE.saveData("warp30x",warp30x);

	ModPE.saveData("warp1y",warp1y);
	ModPE.saveData("warp2y",warp2y);
	ModPE.saveData("warp3y",warp3y);
	ModPE.saveData("warp4y",warp4y);
	ModPE.saveData("warp5y",warp5y);
	ModPE.saveData("warp6y",warp6y);
	ModPE.saveData("warp7y",warp7y);
	ModPE.saveData("warp8y",warp8y);
	ModPE.saveData("warp9y",warp9y);
	ModPE.saveData("warp10y",warp10y);
	ModPE.saveData("warp11y",warp11y);
	ModPE.saveData("warp12y",warp12y);
	ModPE.saveData("warp13y",warp13y);
	ModPE.saveData("warp14y",warp14y);
	ModPE.saveData("warp15y",warp15y);
	ModPE.saveData("warp16y",warp16y);
	ModPE.saveData("warp17y",warp17y);
	ModPE.saveData("warp18y",warp18y);
	ModPE.saveData("warp19y",warp19y);
	ModPE.saveData("warp20y",warp20y);
	ModPE.saveData("warp21y",warp21y);
	ModPE.saveData("warp22y",warp22y);
	ModPE.saveData("warp23y",warp23y);
	ModPE.saveData("warp24y",warp24y);
	ModPE.saveData("warp25y",warp25y);
	ModPE.saveData("warp26y",warp26y);
	ModPE.saveData("warp27y",warp27y);
	ModPE.saveData("warp28y",warp28y);
	ModPE.saveData("warp29y",warp29y);
	ModPE.saveData("warp30y",warp30y);

	ModPE.saveData("warp1z",warp1z);
	ModPE.saveData("warp2z",warp2z);
	ModPE.saveData("warp3z",warp3z);
	ModPE.saveData("warp4z",warp4z);
	ModPE.saveData("warp5z",warp5z);
	ModPE.saveData("warp6z",warp6z);
	ModPE.saveData("warp7z",warp7z);
	ModPE.saveData("warp8z",warp8z);
	ModPE.saveData("warp9z",warp9z);
	ModPE.saveData("warp10",warp10z);
	ModPE.saveData("warp11",warp11z);
	ModPE.saveData("warp12",warp12z);
	ModPE.saveData("warp13",warp13z);
	ModPE.saveData("warp14",warp14z);
	ModPE.saveData("warp15",warp15z);
	ModPE.saveData("warp16",warp16z);
	ModPE.saveData("warp17",warp17z);
	ModPE.saveData("warp18",warp18z);
	ModPE.saveData("warp19",warp19z);
	ModPE.saveData("warp20",warp20z);
	ModPE.saveData("warp21",warp21z);
	ModPE.saveData("warp22",warp22z);
	ModPE.saveData("warp23",warp23z);
	ModPE.saveData("warp24",warp24z);
	ModPE.saveData("warp25",warp25z);
	ModPE.saveData("warp26",warp26z);
	ModPE.saveData("warp27",warp27z);
	ModPE.saveData("warp28",warp28z);
	ModPE.saveData("warp29",warp29z);
	ModPE.saveData("warp30",warp30z);

	ModPE.saveData("warp1",warp1);	
	ModPE.saveData("warp2",warp2);	
	ModPE.saveData("warp3",warp3);	
	ModPE.saveData("warp4",warp4);	
	ModPE.saveData("warp5",warp5);	
	ModPE.saveData("warp6",warp6);	
	ModPE.saveData("warp7",warp7);	
	ModPE.saveData("warp8",warp8);	
	ModPE.saveData("warp9",warp9);	
	ModPE.saveData("warp10",warp10);
	ModPE.saveData("warp11",warp11);
	ModPE.saveData("warp12",warp12);
	ModPE.saveData("warp13",warp13);
	ModPE.saveData("warp14",warp14);
	ModPE.saveData("warp15",warp15);
	ModPE.saveData("warp16",warp16);
	ModPE.saveData("warp17",warp17);
	ModPE.saveData("warp18",warp18);
	ModPE.saveData("warp19",warp19);
	ModPE.saveData("warp20",warp20);
	ModPE.saveData("warp21",warp21);
	ModPE.saveData("warp22",warp22);
	ModPE.saveData("warp23",warp23);
	ModPE.saveData("warp24",warp24);
	ModPE.saveData("warp25",warp25);
	ModPE.saveData("warp26",warp26);
	ModPE.saveData("warp27",warp27);
	ModPE.saveData("warp28",warp28);
	ModPE.saveData("warp29",warp29);
	ModPE.saveData("warp30",warp30);

	ModPE.saveData("warpplus",warpplus);
	ModPE.saveData("homex",homex);
	ModPE.saveData("homey",homey);
	ModPE.saveData("homez",homez);
	ModPE.saveData("homesetted",homesetted);
	ModPE.saveData("spawny",spawny);
	ModPE.saveData("spawnz",spawnz);
	ModPE.saveData("spawnx",spawnx);
	ModPE.saveData("spawnsetted",spawnsetted);
	ModPE.saveData("deathx",deathx);
	ModPE.saveData("deathy",deathy);
	ModPE.saveData("deathz",deathz);
	ModPE.saveData("deathsetted",deathsetted);

	ModPE.saveData("warp1name",warp1name);
	ModPE.saveData("warp2name",warp2name);
	ModPE.saveData("warp3name",warp3name);
	ModPE.saveData("warp4name",warp4name);
	ModPE.saveData("warp5name",warp5name);
	ModPE.saveData("warp6name",warp6name);
	ModPE.saveData("warp7name",warp7name);
	ModPE.saveData("warp8name",warp8name);
	ModPE.saveData("warp9name",warp9name);
	ModPE.saveData("warp10name",warp10name);
	ModPE.saveData("warp11name",warp11name);
	ModPE.saveData("warp12name",warp12name);
	ModPE.saveData("warp13name",warp13name);
	ModPE.saveData("warp14name",warp14name);
	ModPE.saveData("warp15name",warp15name);
	ModPE.saveData("warp16name",warp16name);
	ModPE.saveData("warp17name",warp17name);
	ModPE.saveData("warp18name",warp18name);
	ModPE.saveData("warp19name",warp19name);
	ModPE.saveData("warp20name",warp20name);
	ModPE.saveData("warp21name",warp21name);
	ModPE.saveData("warp22name",warp22name);
	ModPE.saveData("warp23name",warp23name);
	ModPE.saveData("warp24name",warp24name);
	ModPE.saveData("warp25name",warp25name);
	ModPE.saveData("warp26name",warp26name);
	ModPE.saveData("warp27name",warp27name);
	ModPE.saveData("warp28name",warp28name);
	ModPE.saveData("warp29name",warp29name);
	ModPE.saveData("warp30name",warp30name);
}

function deathHook(murderer,victim) {
	if(victim == getPlayerEnt()) {
		deathx = Player.getX();
		deathy = Player.getY();
		deathz = Player.getZ();
		deathsetted = true;
	}
}

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(c[0] == "setwarp") {
		if(warpplus == 0) {
			warp1name = c[1];
			warp1 = true;
			warp1x = Player.getX();
			warp1y = Player.getY();
			warp1z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warp1name);
		}
		else
		if(warpplus == 1) {
			warp2 = true;
			warp2name = c[1];
			warp2x = Player.getX();
			warp2y = Player.getY();
			warp2z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 2) {
			warp3 = true;
			warp3name = c[1];
			warp3x = Player.getX();
			warp3y = Player.getY();
			warp3z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 3) {
			warp4 = true;
			warp4name = c[1];
			warp4x = Player.getX();
			warp4y = Player.getY();
			warp4z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 4) {
			warp5 = true;
			warp5x = Player.getX();
			warp5y = Player.getY();
			warp5z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 5) {
			warp6 = true;
			warp6name = c[1];
			warp6x = Player.getX();
			warp6y = Player.getY();
			warp6z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 6) {
			warp7 = true;
			warp7name = c[1];
			warp7x = Player.getX();
			warp7y = Player.getY();
			warp7z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 7) {
			warp8 = true;
			warp8name = c[1];
			warp8x = Player.getX();
			warp8y = Player.getY();
			warp8z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 8) {
			warp9 = true;
			warp9name = c[1];
			warp9x = Player.getX();
			warp9y = Player.getY();
			warp9z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 9) {
			warp10 = true;
			warp10name = c[1];
			warp10x = Player.getX();
			warp10y = Player.getY();
			warp10z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 10) {
			warp11 = true;
			warp11name = c[1];
			warp11x = Player.getX();
			warp11y = Player.getY();
			warp11z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 11) {
			warp12 = true;
			warp12name = c[1];
			warp12x = Player.getX();
			warp12y = Player.getY();
			warp12z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 12) {
			warp13 = true;
			warp13name = c[1];
			warp13x = Player.getX();
			warp13y = Player.getY();
			warp13z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 13) {
			warp14 = true;
			warp14name = c[1];
			warp14x = Player.getX();
			warp14y = Player.getY();
			warp14z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 14) {
			warp15 = true;
			warp15name = c[1];
			warp15x = Player.getX();
			warp15y = Player.getY();
			warp15z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 15) {
			warp16 = true;
			warp16name = c[1];
			warp16x = Player.getX();
			warp16y = Player.getY();
			warp16z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 16) {
			warp17 = true;
			warp17name = c[1];
			warp17x = Player.getX();
			warp17y = Player.getY();
			warp17z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 17) {
			warp18 = true;
			warp18name = c[1];
			warp18x = Player.getX();
			warp18y = Player.getY();
			warp18z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 18) {
			warp19 = true;
			warp19name = c[1];
			warp19x = Player.getX();
			warp19y = Player.getY();
			warp19z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 19) {
			warp20 = true;
			warp20name = c[1];
			warp20x = Player.getX();
			warp20y = Player.getY();
			warp20z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 20) {
			warp21 = true;
			warp21name = c[1];
			warp21x = Player.getX();
			warp21y = Player.getY();
			warp21z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 21) {
			warp22 = true;
			warp22name = c[1];
			warp22x = Player.getX();
			warp22y = Player.getY();
			warp22z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 22) {
			warp23 = true;
			warp23name = c[1];
			warp23x = Player.getX();
			warp23y = Player.getY();
			warp23z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 23) {
			warp24 = true;
			warp24name = c[1];
			warp24x = Player.getX();
			warp24y = Player.getY();
			warp24z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 24) {
			warp25 = true;
			warp25name = c[1];
			warp25x = Player.getX();
			warp25y = Player.getY();
			warp25z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 25) {
			warp26 = true;
			warp26name = c[1];
			warp26x = Player.getX();
			warp26y = Player.getY();
			warp26z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 26) {
			warp27 = true;
			warp27name = c[1];
			warp27x = Player.getX();
			warp27y = Player.getY();
			warp27z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 27) {
			warp28 = true;
			warp28name = c[1];
			warp28x = Player.getX();
			warp28y = Player.getY();
			warp28z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 28) {
			warp29 = true;
			warp29name = c[1];
			warp29x = Player.getX();
			warp29y = Player.getY();
			warp29z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus == 29) {
			warp30 = true;
			warp30name = c[1];
			warp30x = Player.getX();
			warp30y = Player.getY();
			warp30z = Player.getZ();
			warpplus = warpplus + 1;
			chat("Warp Setted ! Usage /warp " + warpplus);
		}
		else
		if(warpplus > 29) {
			chat("You Already Setted 30 Warp !");
			chat("Next Version Will Be updated to 50 warp :D");
		}
	}
	if(c[0] == "warp") {
		if(c[1] == warp1name) {
			setPosition(getPlayerEnt(),warp1x,warp1y,warp1z);
		}
		else
		if(c[1] == warp2name) {
			setPosition(getPlayerEnt(),warp2x,warp2y,warp2z);
		}
		else
		if(c[1] == warp3name) {
			setPosition(getPlayerEnt(),warp3x,warp3y,warp3z);
		}
		else
		if(c[1] == warp4name) {
			setPosition(getPlayerEnt(),warp4x,warp4y,warp4z);
		}
		else
		if(c[1] == warp5name) {
			setPosition(getPlayerEnt(),warp5x,warp5y,warp5z);
		}
		else
		if(c[1] == warp6name) {
			setPosition(getPlayerEnt(),warp6x,warp6y,warp6z);
		}
		else
		if(c[1] == warp7name) {
			setPosition(getPlayerEnt(),warp7x,warp7y,warp7z);
		}
		else
		if(c[1] == warp8name) {
			setPosition(getPlayerEnt(),warp8x,warp8y,warp8z);
		}
		else
		if(c[1] == warp9name) {
			setPosition(getPlayerEnt(),warp9x,warp9y,warp9z);
		}
		else
		if(c[1] == warp10name) {
			setPosition(getPlayerEnt(),warp10x,warp10y,warp10z);
		}
		else
		if(c[1] == warp11name) {
			setPosition(getPlayerEnt(),warp11x,warp11y,warp11z);
		}
		else
		if(c[1] == warp12name) {
			setPosition(getPlayerEnt(),warp12x,warp12y,warp12z);
		}
		else
		if(c[1] == warp13name) {
			setPosition(getPlayerEnt(),warp13x,warp13y,warp13z);
		}
		else
		if(c[1] == warp14name) {
			setPosition(getPlayerEnt(),warp14x,warp14y,warp14z);
		}
		else
		if(c[1] == warp15name) {
			setPosition(getPlayerEnt(),warp15x,warp15y,warp15z);
		}
		else
		if(c[1] == warp16name) {
			setPosition(getPlayerEnt(),warp16x,warp16y,warp16z);
		}
		else
		if(c[1] == warp17name) {
			setPosition(getPlayerEnt(),warp17x,warp17y,warp17z);
		}
		else
		if(c[1] == warp18name) {
			setPosition(getPlayerEnt(),warp18x,warp18y,warp18z);
		}
		else
		if(c[1] == warp19name) {
			setPosition(getPlayerEnt(),warp19x,warp19y,warp19z);
		}
		else
		if(c[1] == warp20name) {
			setPosition(getPlayerEnt(),warp20x,warp20y,warp20z);
		}
		else
		if(c[1] == warp21name) {
			setPosition(getPlayerEnt(),war21px,warp21y,warp21z);
		}
		else
		if(c[1] == warp22name) {
			setPosition(getPlayerEnt(),warp22x,warp22y,warp22z);
		}
		else
		if(c[1] == warp23name) {
			setPosition(getPlayerEnt(),warp23x,warp23y,warp23z);
		}
		else
		if(c[1] == warp24name) {
			setPosition(getPlayerEnt(),warp24x,warp24y,warp24z);
		}
		else
		if(c[1] == warp25name) {
			setPosition(getPlayerEnt(),warp25x,warp25y,warp25z);
		}
		else
		if(c[1] == warp26name) {
			setPosition(getPlayerEnt(),warp26x,warp26y,warp26z);
		}
		else
		if(c[1] == warp27name) {
			setPosition(getPlayerEnt(),warp27x,warp27y,warp27z);
		}
		else
		if(c[1] == warp28name) {
			setPosition(getPlayerEnt(),warp28x,warp28y,warp28z);
		}
		else
		if(c[1] == warp29name) {
			setPosition(getPlayerEnt(),warp29x,warp29y,warp29z);
		}
		else
		if(c[1] == warp30name) {
			setPosition(getPlayerEnt(),warp30x,warp30y,warp30z);
		}
	}
	if(c[0] == "warplist") {
		if(c[1] == "1") {
			chat(warp1name);
			chat(warp2name);
			chat(warp3name);
			chat(warp4name);
			chat(warp5name);
			chat(warp6name);
		}
		if(c[1] == "2") {
			chat(warp7name);
			chat(warp8name);
			chat(warp9name);
			chat(warp10name);
			chat(warp11name);
			chat(warp12name);
		}
		if(c[1] == "3") {
			chat(warp13name);
			chat(warp14name);
			chat(warp15name);
			chat(warp16name);
			chat(warp17name);
			chat(warp18name);
		}
		if(c[1] == "4") {
			chat(warp19name);
			chat(warp20name);
			chat(warp21name);
			chat(warp22name);
			chat(warp23name);
			chat(warp24name);
		}
		if(c[1] == "5") {
			chat(warp25name);
			chat(warp26name);
			chat(warp27name);
			chat(warp28name);
			chat(warp29name);
			chat(warp30name);
		}
	}
	if(c[0] == "sethome" && homesetted == false) {
		homex = Player.getX();
		homey = Player.getY();
		homez = Player.getZ();
		chat("Home Setted !");
		homesetted = true;
	}
	if(c[0] == "sethome" && homesetted == true) {
		chat("You already have home !");
		setPosition(getPlayerEnt(),homex,homey,homez);
	}
	if(c[0] == "home" && homesetted == true) {
		chat("Teleported");
		setPosition(getPlayerEnt(),homex,homey,homez);
	}
	if(c[0] == "setspawn" && spawnsetted == false) {
		chat("spawn setted !");
		spawny = Player.getY();
		spawnz = Player.getZ();
		spawnx = Player.getX();
		spawnsetted = true;
	}
	if(c[0] == "setspawn" && spawnsetted == true) {
		chat("You already set the spawn !");
		setPosition(getPlayerEnt(),spawnx,spawny,spawnz);
	}
	if(c[0] == "spawn" && spawnsetted == true) {
		chat("Teleported !");
		setPosition(getPlayerEnt(),spawnx,spawny,spawnz);
	}
	if(c[0] == "backdeath" && deathsetted == true) {
		deathsetted = false;
		setPosition(getPlayerEnt(),deathx,deathy,deathz);
	}
	if(c[0] == "backdeath" && deathsetted == false) {
		chat("You Don't have last death position !");
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
