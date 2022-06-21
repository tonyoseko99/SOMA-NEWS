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
const query = `https://newsapi.org/v2/top-headlines?q=${searchNews}&apiKey=${apiKey}`

// Array to store the news articles
let articlesArray = [];

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

// general news
const fetchGeneralNews = async () => {
    const response = await fetch(generalNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }
}

// business news
const fetchBusinessNews = async () => {
    const response = await fetch(businessNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }
}

// sports news
const fetchSportsNews = async () => {
    const response = await fetch(sportsNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }
}

// health news
const fetchHealthNews = async () => {
    const response = await fetch(healthNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }
}

// science news
const fetchScienceNews = async () => {
    const response = await fetch(scienceNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }
}

// technology news
const fetchTechnologyNews = async () => {
    const response = await fetch(technologyNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }
}
