var choose = 8;
var mp1, hp1, ap1, thp1, cardtop1;
var card1=[0,0,0,0,0,0,0,0];
var mp2, hp2, ap2, thp2, cardtop2;
var card2=[0,0,0,0,0,0,0,0];

//var i=0,p=0,n=0,d=0;
	

function randcard() {
	var rc = Math.floor(Math.random() * 5 )+ 1;
	return rc;
}

function givecard(p,n) {
	for (i = 1; i <= n; i++) {
		if (p == 1) {
			card1[++cardtop1] = randcard();
		} else if (p == 2) {
			card2[++cardtop2] = randcard();
		}
	}
	return 0;
}


function swordattack(p,d) {
	if (p == 1) {
		if (ap1 < 1) {
			document.getElementById("logarea").value+="\nYour AP is not enough. Use card FAILED.";
		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			ap1--;
			hp2--;
			document.getElementById("logarea").value+="\nYou used 'SwordAttack'. PC's HP-1.";
		}
	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		ap2--;
		hp1--;
		document.getElementById("logarea").value+="\nPC used 'SwordAttack'. Your HP-1.";
	}
	return 0;
}

function heavyattack(p,d) {
	if (p == 1) {
		if (ap1 < 2) {
			
			document.getElementById("logarea").value+="\nYour AP is not enough. Use card FAILED.";

		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			ap1 -= 2;
			hp2 -= 2;
			document.getElementById("logarea").value+="\nYou used 'HeavyAttack'. PC's HP-2.";
		}

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		ap2 -= 2;
		hp1 -= 2;
		document.getElementById("logarea").value+="\nPC used 'HeavyAttack'. Your HP-2.";
	}
	return 0;
}

function treat(p,d) {
	if (p == 1) {
		if (mp1 < 2) {
			document.getElementById("logarea").value+="\nYour MP is not enough. Use card FAILED.";

		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			mp1 -= 2;
			hp1++;
			document.getElementById("logarea").value+="\nYou used 'Treat'.";
		}

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		mp2 -= 2;
		hp2++;
		document.getElementById("logarea").value+="\nPC used 'Treat'.";
	}
	return 0;
}

function flyingball(p,d) {
	if (p == 1) {
		if (mp1 < 1) {
			document.getElementById("logarea").value+="\nYour MP is not enough. Use card FAILED.";

		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			mp1 --;
			hp2--;
			document.getElementById("logarea").value+="\nYou used 'FlyingBall'. PC's HP-1.";
		}

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		mp2 --;
		hp1--;
		document.getElementById("logarea").value+="\nPC used 'FlyingBall'. Your HP-1.";
	}
	return 0;
}

function smart(p,d) {
	if (p == 1) {
		for (i = d; i <= cardtop1; i++)
			card1[i] = card1[i + 1]; //use card.
		cardtop1--;
		mp1 += 2;
		givecard(1, 1);
		document.getElementById("logarea").value+="\nYou used 'Smart'.";

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		mp2 += 2;
		givecard(2, 1);
		document.getElementById("logarea").value+="\nPC used 'Smart'.";
	}
	return 0;
}
var ct1=["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"];
function showcards()
{
	ct1=["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"];
	for (i = 1; i <= cardtop1; i++) {
		if (card1[i] == 1)
		ct1[i]="SwordAttack (1AP 1DMG)[ACT]";
		else if (card1[i] == 2)
		ct1[i]="Smart (2MP 1Card)[MAGIC]";
		else if (card1[i] == 3)
		ct1[i]="HeavyAttack (2AP 2DMG)[ACT]";
		else if (card1[i] == 4)
		ct1[i]="Treat (2MP +1HP)[SPELL]";
		else if (card1[i] == 5)
		ct1[i]="FlyingBall (1MP 1DMG)[SPELL]";
	}
	document.getElementById("cs1").innerHTML=ct1[1];
	document.getElementById("cs2").innerHTML=ct1[2];
	document.getElementById("cs3").innerHTML=ct1[3];
	document.getElementById("cs4").innerHTML=ct1[4];
	document.getElementById("cs5").innerHTML=ct1[5];
	document.getElementById("cs6").innerHTML=ct1[6];
	document.getElementById("cs7").innerHTML=ct1[7];
	document.getElementById("cs8").innerHTML=ct1[8];

}
function showhp()
{
	document.getElementById("yourhp").innerHTML=hp1;
	document.getElementById("yourmp").innerHTML=mp1;
	document.getElementById("yourap").innerHTML=ap1;
	document.getElementById("pcshp").innerHTML=hp2;
	document.getElementById("pcsmp").innerHTML=mp2;
	document.getElementById("pcsap").innerHTML=ap2;
}
function round1(chosen) {
	
		choose=chosen;
		if (card1[choose] == 1)
			swordattack(1, choose);
		else if (card1[choose] == 2)
			smart(1, choose);
		else if (card1[choose] == 3)
			heavyattack(1, choose);
		else if (card1[choose] == 4)
			treat(1, choose);
		else if (card1[choose] == 5)
			flyingball(1, choose);
		else if (choose > cardtop1)
			document.getElementById("logarea").value+="\nNo card here. Use card FAILED.";
		showcards();
		showhp();
		document.getElementById("logarea").focus();
		if (hp2 <= 0) {
			document.getElementById("logarea").value+="\n\nYou Win!";
			return 0;
		}
		
	
	return 0;
}

function round2() {
	document.getElementById("logarea").value+="\nYou PASSED.";
	while (choose > 0) {
		choose = 0;
		for (i = 1; i <= cardtop2; i++) {
			if (card2[i] == 2)
				choose = i;
		}
		if (choose == 0)
			for (i = 1; i <= cardtop2; i++) {
				if (card2[i] == 4 && mp2 >= 2)
					choose = i;
			}
		if (choose == 0)
			for (i = 1; i <= cardtop2; i++) {
				if (card2[i] == 5 && mp2 >= 1)
					choose = i;
			}
		if (choose == 0)
			for (i = 1; i <= cardtop2; i++) {
				if (card2[i] == 1 && ap2 >= 1)
					choose = i;
			}
		if (choose == 0)
			for (i = 1; i <= cardtop2; i++) {
				if (card2[i] == 2 && ap2 >= 2)
					choose = i;
			}

		if (choose == 0) {
			document.getElementById("logarea").value+="\nPC PASSED.\nIt's your round now.\nYou recovered 2MP and reset 3AP.";
			document.getElementById("logarea").focus();
			return 0;
		}
		if (card2[choose] == 1)
			swordattack(2, choose);
		else if (card2[choose] == 2)
			smart(2, choose);
		else if (card2[choose] == 3)
			heavyattack(2, choose);
		else if (card2[choose] == 4)
			treat(2, choose);
		else if (card2[choose] == 5)
			flyingball(2, choose);
			if (hp1 <= 0) {
			document.getElementById("logarea").value+="\nPC Win! You Lose.";
			document.getElementById("logarea").focus();
			return 0;
		}
	}
	return 0;
}

	document.getElementById("logarea").value+="Welcome to https://FUTBW.com\n";
	mp1 = 4, hp1 = 5, ap1 = 3, thp1 = 0, cardtop1 = 0;
	mp2 = 4, hp2 = 5, ap2 = 3, thp2 = 0, cardtop2 = 0;
	//
	givecard(1, 4);
	givecard(2, 4);
	showhp();showcards();
function zok() {
	if (hp1 > 0 && hp2 > 0) {
		choose = 37;
		round2();
		givecard(1, 3);
		givecard(2, 3);
		if(cardtop1>=9)
		{
			for (i = 9; i <= cardtop1; i++) 
			{
				card1[i] =0;
			}
			cardtop1=8;
//			document.getElementById("logarea").value+="\nWARNING:There are too many cards. The extra cards will be discarded";
		}
		if(cardtop2>=9)
		{
		for (i = 9; i <= cardtop2; i++) 
			{
				card2[i] =0;
			}
			cardtop1=8;
		}
		mp1 += 2;
		mp2 += 2;
		ap1 = 3;
		ap2 = 3;
		showhp();showcards();
	}
	
else
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();
}

}

function cs1()
{
if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(1);
}
function cs2()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(2);
}
function cs3()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(3);
}
function cs4()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(4);
}
function cs5()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(5);
}
function cs6()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(6);
}
function cs7()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(7);
}
function cs8()
{
	if (hp1 <= 0 || hp2 <= 0)
{
document.getElementById("logarea").value+="\nDEMO OVER!";document.getElementById("logarea").focus();return;
}
	round1(8);
}