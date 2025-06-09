// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

async function getAnimeFact() {
  try {
    // Show loading message
    document.getElementById('anime-name').innerHTML = 'Loading...'
    document.getElementById('anime-fact').innerHTML = ''

    // API url for Black Clover facts
    const url = 'https://anime-facts-rest-api.herokuapp.com/api/v1/black_clover'

    // Fetch data from API
    const response = await fetch(url)
    const data = await response.json()

    // Pick a random fact from the data array
    const facts = data.data
    const randomIndex = Math.floor(Math.random() * facts.length)
    const fact = facts[randomIndex].fact

    // Show fact on the page
    document.getElementById('anime-name').innerHTML = 'Anime: Black Clover'
    document.getElementById('anime-fact').innerHTML = 'Fact: ' + fact
  } catch (error) {
    // Log error and show simple message
    console.error(error)
    document.getElementById('anime-name').innerHTML = 'Error getting fact.'
    document.getElementById('anime-fact').innerHTML = ''
  }
}
