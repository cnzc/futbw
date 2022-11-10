var choose = 8;//牌id:1剑击2智慧3重击4治疗5飞弹
var mp1, hp1, ap1, thp1, cardtop1;//玩家数据
var card1=[0,0,0,0,0,0,0,0];
var mp2, hp2, ap2, thp2, cardtop2;//电脑数据
var card2=[0,0,0,0,0,0,0,0];
//var i=0,p=0,n=0,d=0;
//可修改内容
var cardall=5; //牌总数
function randcard() {//随机抽牌
	var rc = Math.floor(Math.random() * cardall )+ 1;
	return rc;
}

var ylc=document.getElementById("youlatestcard");
var yrc=document.getElementById("youroundcard");
var plc=document.getElementById("pclatestcard");
var prc=document.getElementById("pcroundcard");
var cl=document.getElementById("cardlake");
function broadcast(w,p,c) {//广播信息(信息 1.出牌2.出牌失败3.游戏结束4.过)(玩家 1.玩家2.电脑)(牌 id)
	if(w==1)
	{
		if(p==1)
		{
			if(c==1)
			{
				ylc.innerHTML="剑击 造成对方1点普通伤害";
				yrc.innerHTML+=" 剑击";
			}
			else if(c==2)
			{
				ylc.innerHTML="智慧 抽1张牌";
				yrc.innerHTML+=" 智慧";
			}
			else if(c==3)
			{
				ylc.innerHTML="重击 造成对方2点普通伤害";
				yrc.innerHTML+=" 重击";
			}
			else if(c==4)
			{
				ylc.innerHTML="治疗 HP+1";
				yrc.innerHTML+=" 治疗";
			}
			else if(c==5)
			{
				ylc.innerHTML="飞弹 造成对方1点普通伤害";
				yrc.innerHTML+=" 飞弹";
			}
		}
		else if(p==2)
		{
			if(c==1)
			{
				plc.innerHTML="剑击 造成对方1点普通伤害";
				prc.innerHTML+=" 剑击";
			}
			else if(c==2)
			{
				plc.innerHTML="智慧 抽1张牌";
				prc.innerHTML+=" 智慧";
			}
			else if(c==3)
			{
				plc.innerHTML="重击 造成对方2点普通伤害";
				prc.innerHTML+=" 重击";
			}
			else if(c==4)
			{
				plc.innerHTML="治疗 HP+1";
				prc.innerHTML+=" 治疗";
			}
			else if(c==5)
			{
				plc.innerHTML="飞弹 造成对方1点普通伤害";
				prc.innerHTML+=" 飞弹";
			}
		}
	}
	else if(w==2)
	{
		if(p==1)
		{
			if(c==1||c==3)
			ylc.innerHTML="AP不够,无法出牌";
			else if(c==4||c==5)
			ylc.innerHTML="MP不够,无法出牌";
		}
		else if(p==2)
		{
			plc.innerHTML="出现Bug,联系A@clapq.com反馈";
		}
	}
	else if(w==3)
	{
		cl.innerHTML="游戏结束";
		if(p==1) cl.innerHTML+=" 玩家获胜";
		else if(p==2) cl.innerHTML+=" 电脑获胜";
	}
	else if(w==4)
	{
		cl.innerHTML="回合结束,AP恢复到3 MP+2";
	}
}

function givecard(p,n) {//给(玩家)(牌数)
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
			broadcast(2,1,1);
		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			ap1--;
			hp2--;
			broadcast(1,1,1);showcards();
		}
	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		ap2--;
		hp1--;
		broadcast(1,2,1);
	}
	return 0;
}

function heavyattack(p,d) {
	if (p == 1) {
		if (ap1 < 2) {
			
			broadcast(2,1,3);

		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			ap1 -= 2;
			hp2 -= 2;
			broadcast(1,1,3);showcards();
		}

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		ap2 -= 2;
		hp1 -= 2;
		broadcast(1,2,3);
	}
	return 0;
}

function treat(p,d) {
	if (p == 1) {
		if (mp1 < 2) {
			broadcast(2,1,4);

		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			mp1 -= 2;
			hp1++;
			broadcast(1,1,4);showcards();
		}

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		mp2 -= 2;
		hp2++;
		broadcast(1,2,4);
	}
	return 0;
}

function flyingball(p,d) {
	if (p == 1) {
		if (mp1 < 1) {
			broadcast(2,1,5);

		} else {
			for (i = d; i <= cardtop1; i++)
				card1[i] = card1[i + 1]; //use card.
			cardtop1--;
			mp1 --;
			hp2--;
			broadcast(1,1,5);showcards();
		}

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		mp2 --;
		hp1--;
		broadcast(1,2,5);
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
		broadcast(1,1,2);showcards();

	} else if (p == 2) {
		for (i = d; i <= cardtop2; i++)
			card2[i] = card2[i + 1]; //use card.
		cardtop2--;
		mp2 += 2;
		givecard(2, 1);
		broadcast(1,2,2);
	}
	return 0;
}
var ct1=["空","空","空","空","空","空","空","空","空"];
function showcards()
{
	ct1=["空","空","空","空","空","空","空","空","空"];
	for (i = 1; i <= cardtop1; i++) {
		if (card1[i] == 1)
		ct1[i]="剑击 (1AP 1DMG)[攻]";
		else if (card1[i] == 2)
		ct1[i]="智慧 (2MP 1Card)[法]";
		else if (card1[i] == 3)
		ct1[i]="重击 (2AP 2DMG)[攻]";
		else if (card1[i] == 4)
		ct1[i]="治疗 (2MP +1HP)[法]";
		else if (card1[i] == 5)
		ct1[i]="飞弹 (1MP 1DMG)[术]";
	}
	document.getElementById("cs1").innerHTML=ct1[1];
	document.getElementById("cs2").innerHTML=ct1[2];
	document.getElementById("cs3").innerHTML=ct1[3];
	document.getElementById("cs4").innerHTML=ct1[4];
	document.getElementById("cs5").innerHTML=ct1[5];
	document.getElementById("cs6").innerHTML=ct1[6];
	document.getElementById("cs7").innerHTML=ct1[7];
	document.getElementById("cs8").innerHTML=ct1[8];

	if(document.getElementById("cs1").innerHTML=="空")
	document.getElementById("tempslot1").style.display="none";
	else
	document.getElementById("tempslot1").style.display="block";
	if(document.getElementById("cs2").innerHTML=="空")
	document.getElementById("tempslot2").style.display="none";
	else
	document.getElementById("tempslot2").style.display="block";
	if(document.getElementById("cs3").innerHTML=="空")
	document.getElementById("tempslot3").style.display="none";
	else
	document.getElementById("tempslot3").style.display="block";
	if(document.getElementById("cs4").innerHTML=="空")
	document.getElementById("tempslot4").style.display="none";
	else
	document.getElementById("tempslot4").style.display="block";

	if(document.getElementById("cs5").innerHTML=="空")
	document.getElementById("tempslot5").style.display="none";
	else
	document.getElementById("tempslot5").style.display="table";
	if(document.getElementById("cs6").innerHTML=="空")
	document.getElementById("tempslot6").style.display="none";
	else
	document.getElementById("tempslot6").style.display="table";
	if(document.getElementById("cs7").innerHTML=="空")
	document.getElementById("tempslot7").style.display="none";
	else
	document.getElementById("tempslot7").style.display="table";
	if(document.getElementById("cs8").innerHTML=="空")
	document.getElementById("tempslot8").style.display="none";
	else
	document.getElementById("tempslot8").style.display="table";

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
			//broadcast(0,0,0);
		showcards();
		showhp();
		
		if (hp2 <= 0) {
			broadcast(3,1,0);
			return 0;
		}
		
	
	return 0;
}

function round2() {
	broadcast(4,0,0);
	prc.innerHTML="";
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
			broadcast(4,0,0);
			
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
			broadcast(3,2,0);
			
			return 0;
		}
	}
	return 0;
}

	document.getElementById("cardlake").innerHTML="欢迎来到 https://FUTBW.com\n";
	mp1 = 4, hp1 = 5, ap1 = 3, thp1 = 0, cardtop1 = 0;
	mp2 = 6, hp2 = 10, ap2 = 3, thp2 = 0, cardtop2 = 0;
	//
	givecard(1, 4);
	givecard(2, 6);
	showhp();showcards();
function zok() {
	if (hp1 > 0 && hp2 > 0) {
		choose = 37;
		yrc.innerHTML="";
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

}

}

function cs1()
{
if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(1);
}
function cs2()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(2);
}
function cs3()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(3);
}
function cs4()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(4);
}
function cs5()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(5);
}
function cs6()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(6);
}
function cs7()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(7);
}
function cs8()
{
	if (hp1 <= 0 || hp2 <= 0)
{
broadcast(3,0,0);return;
}
	round1(8);
}
