/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Heather Chung
 *      Student ID: 147001200
 *      Date: 08-01-2021
 *
 *
 */

// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.forEach((el) => {
    map.addObservation(el);
  });
}

// Update the table to show markers for the set of observations
function updateTable(observations) {
  // Remove any current data from the table
  clearAllTableRows();

  // Populate the table with all observation data we want to show
  observations.forEach((observation) => {
    // TODO: call the buildRowForObservation function with the current observation
    // and use that to add it to the table with the addRowToTable function.
    const row = buildRowForObservation(observation);
    addRowToTable(row);
  });
}

// Show all species on the map and table
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Update the map and table
  updateMap(observations, map);
  updateTable(observations);
  updateTableTitle(`All Species (${observations.length})`);
}

// Show native species on the map and table
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  // Update the map and table
  updateMap(native, map);
  updateTable(native);
  updateTableTitle(`Only Native Species (${native.length})`);
}

// Show introduced species on the map and table
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  // Update the map and table
  updateMap(introduced, map);
  updateTable(introduced);
  updateTableTitle(`Only Introduced Species (${introduced.length})`);
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).

  document.getElementById("show-all").addEventListener("click", showAll);
  document
    .getElementById("show-native")
    .addEventListener("click", showOnlyNative);
  document
    .getElementById("show-introduced")
    .addEventListener("click", showOnlyIntroduced);

  //  on property
  // document.getElementById('show-all').onclick = showAll();
  // document.getElementById('show-native').onclick = showOnlyNative();
  // document.getElementById('show-introduced').onclick = showOnlyNative();

  // Show all species observations by default when we start.
  showAll();
}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
console.log(`OK, let's begin!`);
start();
