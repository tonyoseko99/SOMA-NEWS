// variables
const general = document.getElementById('home')
const sports = document.getElementById('sports')
const technology = document.getElementById('technology')
const business = document.getElementById('business')
const health = document.getElementById('health')
const science = document.getElementById('science')

const searchNews = document.getElementById('search')
const searchButton = document.getElementById('search-btn')

const image = document.getElementsByTagName('image')
const title = document.getElementsByClassName('title')
const description = document.getElementsByClassName('description')
const readMore = document.getElementsByClassName('readMore')

const newsHeader = document.getElementById('newsHeader')
const newsInfo = document.getElementById('newsInfo')

// API KEY
const apiKey = '8d8d51e07d8d40078290e6f9a8c68ed4'

const topNews = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}` 
const sportsNews = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`
const technologyNews = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
const businessNews = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}`
const healthNews = `https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}`
const scienceNews = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`
const query = `https://newsapi.org/v2/top-headlines?q=${searchNews.value}&apiKey=${apiKey}`

// Array to store the news articles
let articlesArray = [];


window.onload = function() {
    newsHeader.innerHTML="Headlines";
    fetchTopNews();
};


// navbar items functionality
general.addEventListener('click', function(){
    newsHeader.innerHTML = "General News";
    fetchTopNews();

});

sports.addEventListener('click', function(){
    newsHeader.innerHTML = "Sports";
    fetchSportsNews();
});

technology.addEventListener('click', function(){
    newsHeader.innerHTML = "Technology";
    fetchTechnologyNews();
});

business.addEventListener('click', function(){
    newsHeader.innerHTML = "Business";
    fetchBusinessNews();
});

health.addEventListener('click', function(){
    newsHeader.innerHTML = "Health";
    fetchHealthNews();

});

science.addEventListener('click', function(){
    newsHeader.innerHTML = "Science";
    fetchScienceNews();

});

searchButton.addEventListener('click', function(){
    newsHeader.innerHTML = `results for ${search.value}:`
    queryNews();

});

searchNews.addEventListener('click', function(){

});


// top headlines
const fetchTopNews = async () => {
    const response = await fetch(topNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }else{
            console.log("error")
            return;
        }
}
showArticles()

// business news
const fetchBusinessNews = async () => {
    const response = await fetch(businessNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }else{
            console.log("error")
            return;
        }
}
showArticles()

// sports news
const fetchSportsNews = async () => {
    const response = await fetch(sportsNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }else{
            console.log("error")
            return;
        }
}
showArticles()

// health news
const fetchHealthNews = async () => {
    const response = await fetch(healthNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }else{
            console.log("error")
            return;
        }
}
showArticles()

// science news
const fetchScienceNews = async () => {
    const response = await fetch(scienceNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        } else{
            console.log("error")
            return;
        }
}
showArticles()

// technology news
const fetchTechnologyNews = async () => {
    const response = await fetch(technologyNews);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        } else{
            console.log("error")
            return;
        }
}
showArticles()

// search functionality
const queryNews = async () => {
    if (search.value == null){
        return;
    }
    const response = await fetch(query);
    articlesArray = [];
    if(response.status >= 200 && response.status < 300) {
        const results = await response.json();
        articlesArray = results.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsInfo.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    showArticles();
}

// function to display news
function showArticles(){
    articlesArray.forEach(article => {
        image.src = article.urlToImage;
        title = article.title;
        description = article.content;
        readMore = article.url;
    });
};
