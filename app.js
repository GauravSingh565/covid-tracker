let confirmedCase = document.getElementById("confirmedCase");
let activeCase = document.getElementById("activeCase");
let recoveredCase = document.getElementById("recoveredCase");
let death = document.getElementById("death");
let lastUpdate = document.getElementById("updateCase");
let dailyConfirmedCase = document.getElementById("dailyConfirmedCase");
let dailyUpdate = document.getElementById("dailyUpdateCase");
let dailyRecoveredCase = document.getElementById("dailyRecoveredCase");
let dailyDeath = document.getElementById("dailyDeath");

async function getData() {
  const response = await fetch("https://api.covid19india.org/data.json");
  const data = await response.json();

  // new cases----------------------------------
  console.log(data.cases_time_series);

  const dailyData = data.cases_time_series.splice(-1);
  console.log(dailyData);

  // dailyConfirmed case------------------------

  dailyConfirmedCase.innerHTML = dailyData[0].dailyconfirmed;

  // dailyRecovered------------------------------------------

  dailyRecoveredCase.innerHTML = dailyData[0].dailyrecovered;

  // dailyDeath-------------------------------------------

  dailyDeath.innerHTML = dailyData[0].dailydeceased;

  // lastUpdate---------------------------------------------

  dailyUpdate.innerHTML = dailyData[0].date;

  //  total case-----------------------------
  //confirmedCase--------------------
  const stateWiseData = data.statewise[0];

  confirmedCase.innerHTML = stateWiseData.confirmed;

  //  activeCase--------------------------
  activeCase.innerHTML = stateWiseData.active;

  // recoveredCase------------------------
  recoveredCase.innerHTML = stateWiseData.recovered;

  //death----------------------------------------

  death.innerHTML = stateWiseData.deaths;

  //lastUpdate--------------------------
  lastUpdate.innerHTML = stateWiseData.lastupdatedtime;
}
window.addEventListener("DOMContentLoaded", getData);
