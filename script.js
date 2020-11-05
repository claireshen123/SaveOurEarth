
  
var name = "notValid";

while (
  name !== "ONTARIO" 
  && name !== "MANITOBA"
  && name !== "QUEBEC"
  && name !== "SASKATCHEWAN"
  && name !== "BRITISHCOLUMBIA"
  && name !== "ALBERTA"
  && name !== "NEWFOUNDLANDANDLABRADOR"
  && name !== "NOVASCOTIA"
  && name !== "NORTHWESTTERRITORIES"
  && name !== "ALABAMA"
  && name !== "ALASKA"
  && name !== "ARIZONA"
  && name !== "ARKANSAS"
  && name !== "CALIFORNIA"
  && name !== "COLORADO"
  && name !== "CONNECTICUT"
  && name !== "DELAWARE"
  && name !== "FLORIDA"
  && name !== "GEORGIA"
  && name !== "HAWAII"
  && name !== "IDAHO"
  && name !== "ILLINOIS"
  && name !== "INDIANA"
  && name !== "IOWA"
  && name !== "KANSAS"
  && name !== "KENTUCKY"
  && name !== "LOUISIANA"
  && name !== "MAINE"
  && name !== "MARYLAND"
  && name !== "MASSACHUSETTS"
  && name !== "MICHIGAN"
  && name !== "MINNESOTA"
  && name !== "MISSISSIPPI"
  && name !== "MISSOURI"
  && name !== "MONTANA"
  && name !== "NEBRASKA"
  && name !== "NEVADA"
  && name !== "NEWHAMPSHIRE"
  && name !== "NEWJERSEY"
  && name !== "NEWMEXICO"
  && name !== "NEWYORK"
  && name !== "NORTHCAROLINA"
  && name !== "NORTHDAKOTA"
  && name !== "OHIO"
  && name !== "OKLAHOMA"
  && name !== "OREGON"
  && name !== "PENNSYLVANIA"
  && name !== "RHODEISLAND"
  && name !== "SOUTHCAROLINA"
  && name !== "SOUTHDAKOTA"
  && name !== "TENNESSEE"
  && name !== "TEXAS"
  && name !== "UTAH"
  && name !== "VERMONT"
  && name !== "VIRGINIA"
  && name !== "WASHINGTON"
  && name !== "WESTVIRGNIA"
  && name !== "WISCONSIN"
  && name !== "WYOMING"
  && name !== "MEXICO"
  )
  {
  var name = window.prompt("Enter your region in all capital letters with no spaces (i.e. NEWYORK: ");
  }

var regionChosen = null; 

if (name === 'ONTARIO'){
  regionChosen = 722;
};

if (name === 'MANITOBA'){
  regionChosen = 1342;
};

if (name === "QUEBEC"){
  regionChosen = 1550;
};

if (name === "SASKATCHEWAN"){
  regionChosen = 713;
};

if (name === "BRITISHCOLUMBIA"){
  regionChosen = 900;
};

if (name === "ALBERTA"){
  regionChosen = 691;
};

if (name === "NEWFOUNDLANDANDLABRADOR"){
  regionChosen = 1608;
};

if (name === "NOVASCOTIA"){
  regionChosen = 925;
};

if (name === "NORTHWESTTERRITORIES"){
  regionChosen = 617;
};

if (name === "ALABAMA"){
  regionChosen = 1211;
};

if (name === "ALASKA"){
  regionChosen = 1342;
};

if (name === "ARIZONA"){
  regionChosen = 1049;
};

if (name === "ARKANSAS"){
  regionChosen = 1133;
};

if (name === "CALIFORNIA"){
  regionChosen = 557;
};

if (name === "COLORADO"){
  regionChosen = 723;
};

if (name === "CONNECTICUT"){
  regionChosen = 752;
};

if (name === "DELAWARE"){
  regionChosen = 944;
};

if (name === "FLORIDA"){
  regionChosen = 1078;
};

if (name === "GEORGIA"){
  regionChosen = 1088;
};

if (name === "HAWAII"){
  regionChosen = 515;
};

if (name === "IDAHO"){
  regionChosen = 1055;
};

if (name === "ILLINOIS"){
  regionChosen = 755;
};

if (name === "INDIANA"){
  regionChosen = 1005;
};

if (name === "IOWA"){
  regionChosen = 908;
};

if (name === "KANSAS"){
  regionChosen = 926;
};

if (name === "KENTUCKY"){
  regionChosen = 1154;
};

if (name === "LOUISIANA"){
  regionChosen = 1273;
};

if (name === "MAINE"){
  regionChosen = 551;
};

if (name === "MARYLAND"){
  regionChosen = 1031;
};

if (name === "MASSACHUSETTS"){
  regionChosen = 638;
};

if (name === "MICHIGAN"){
  regionChosen = 665;
};

if (name === "MINNESOTA"){
  regionChosen = 817;
};

if (name === "MISSISSIPPI"){
  regionChosen = 1220;
};

if (name === "MISSOURI"){
  regionChosen = 1086;
};

if (name === "MONTANA"){
  regionChosen = 860;
};

if (name === "NEBRASKA"){
  regionChosen = 1034;
};

if (name === "NEVADA"){
  regionChosen = 924;
};

if (name === "NEWHAMPSHIRE"){
  regionChosen = 629;
};

if (name === "NEWJERSEY"){
  regionChosen = 687;
};

if (name === "NEWMEXICO"){
  regionChosen = 655;
};

if (name === "NEWYORK"){
  regionChosen = 602;
};

if (name === "NORTHCAROLINA"){
  regionChosen = 1098;
};

if (name === "NORTHDAKOTA"){
  regionChosen = 1205;
};

if (name === "OHIO"){
  regionChosen = 892;
};

if (name === "OKLAHOMA"){
  regionChosen = 1142;
};

if (name === "OREGON"){
  regionChosen = 976;
};

if (name === "PENNSYLVANIA"){
  regionChosen = 857;
};

if (name === "RHODEISLAND"){
  regionChosen = 602;
};

if (name === "SOUTHCAROLINA"){
  regionChosen = 1124;
};

if (name === "SOUTHDAKOTA"){
  regionChosen = 1055;
};

if (name === "TENNESSEE"){
  regionChosen = 1245;
};

if (name === "TEXAS"){
  regionChosen = 1174;
};

if (name === "UTAH"){
  regionChosen = 798;
};

if (name === "VERMONT"){
  regionChosen = 569;
};

if (name === "VIRGINIA"){
  regionChosen = 1156;
};

if (name === "WASHINGTON"){
  regionChosen = 1041;
};

if (name === "WESTVIRGNIA"){
  regionChosen = 1118;
};

if (name === "WISCONSIN"){
  regionChosen = 703;
};

if (name === "WYOMING"){
  regionChosen = 894;
};

if (name === "MEXICO"){
  regionChosen = 2028;
};

var yes = false;
while (yes === false){
  var input = window.prompt("Now enter your household's monthly electricity usage in kWh");

  var convertToInt = Math.floor(parseInt(input));
    yes = Number.isInteger(convertToInt);
}

if (convertToInt < regionChosen){
    alert("you are below the average for Ontario, congratulations!");
    }
    
  else if(convertToInt === regionChosen){  
      alert("you are at the average");
    }

    else{
        alert("yikes")
      }



 




