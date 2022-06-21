// variables
const general = document.getElementById('home')
const sports = document.getElementById('sports')
const technology = document.getElementById('technology')
const business = document.getElementById('business')
const health = document.getElementById('health')
const science = document.getElementById('science')

const searchNews = document.getElementById('search')
const searchButton = document.getElementById('search-btn')

const image = document.querySelector('image')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const readMore = document.querySelector('#readMore')

// API KEY
const apiKey = '8d8d51e07d8d40078290e6f9a8c68ed4'

const generalNews = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
const sportsNews = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`
const technologyNews = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
const businessNews = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}`
const healthNews = `https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}`
const scienceNews = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`

// navbar items functionality
general.addEventListener('click', function(){

});

sports.addEventListener('click', function(){

});

technology.addEventListener('click', function(){

});

business.addEventListener('click', function(){

});

health.addEventListener('click', function(){

});

science.addEventListener('click', function(){

});

searchButton.addEventListener('click', function(){

});

searchNews.addEventListener('click', function(){

});