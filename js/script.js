// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * Get API info.
 */
const getNekoImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)

    // Access the first item inside the 'results' array
    const neko = jsonData.results[0]

    document.getElementById("api-image").innerHTML =
      '<img src="' + neko.url + '" alt="API image" class="center">'

    if (neko.artist_href != null && neko.artist_href !== "") {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: " +
        '<a href="' +
        neko.artist_href +
        '" target="_blank">' +
        neko.artist_name +
        "</a></p>"
    } else {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: unknown</p>"
    }
  } catch (err) {
    console.log(err)
  }
}

getNekoImage("https://nekos.best/api/v2/neko")
