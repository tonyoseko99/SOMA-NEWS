// variables
const general = document.getElementById('home')
const sports = document.getElementById('sports')
const technology = document.getElementById('technology')
const business = document.getElementById('business')
const health = document.getElementById('health')
const science = document.getElementById('science')

const searchNews = document.getElementById('search')
const searchButton = document.getElementById('search-btn')

const newsHeader = document.getElementById('newsHeader')
const newsInfo = document.getElementById('newsInfo')

// API KEY
const apiKey = '8d8d51e07d8d40078290e6f9a8c68ed4'

const topNews = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
const sportsNews = "https://newsapi.org/v2/top-headlines?category=sports&apiKey="
const technologyNews = "https://newsapi.org/v2/top-headlines?category=technology&apiKey="
const businessNews = "https://newsapi.org/v2/top-headlines?category=business&apiKey="
const healthNews = "https://newsapi.org/v2/top-headlines?category=health&apiKey="
const scienceNews = "https://newsapi.org/v2/top-headlines?category=science&apiKey="
const query = "https://newsapi.org/v2/top-headlines?q="

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

// top headlines
const fetchTopNews = async () => {
    const response = await fetch(topNews + apiKey);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            console.log(articlesArray = results.articles);
        }else{
            console.log("error")
            return;
        }
    showArticles()
}


// business news
const fetchBusinessNews = async () => {
    const response = await fetch(businessNews + apiKey);
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
    const response = await fetch(sportsNews + apiKey);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }else{
            console.log("error")
            return;
        }
    showArticles()
}


// health news
const fetchHealthNews = async () => {
    const response = await fetch(healthNews + apiKey);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        }else{
            console.log("error")
            return;
        }
    showArticles()
}


// science news
const fetchScienceNews = async () => {
    const response = await fetch(scienceNews + apiKey);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        } else{
            console.log("error")
            return;
        }
    showArticles()
}


// technology news
const fetchTechnologyNews = async () => {
    const response = await fetch(technologyNews + apiKey);
        articlesArray = [];
        if(response.status >= 200 && response.status < 300){
            const results = await response.json();
            articlesArray = results.articles;
        } else{
            console.log("error")
            return;
        }
    showArticles()
}


// search functionality
const queryNews = async () => {
    if (search.value == null){
        return;
    }
    const response = await fetch(query + encodeURIComponent(searchNews.value)+"&apiKey="+ apiKey);
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

    newsInfo.innerHTML = ""

    articlesArray.forEach(articles => {
        let main = document.createElement('main')

        let card = document.createElement('div')
        card.className = 'card'

        let image = document.createElement('img')
        image.src = articles.urlToImage;

        let cardInfo = document.createElement('div')
        cardInfo.className = 'card-info'

        let title = document.createElement('h5')
        title.className = 'title'
        title.innerHTML = articles.title;

        let description = document.createElement('p')
        description.className = 'description'
        description.innerHTML = articles.description;

        let readMore = document.createElement('a')
        readMore.className = 'link'
        readMore.innerHTML = articles.url;

        cardInfo.appendChild(title);
        cardInfo.appendChild(description);
        cardInfo.appendChild(readMore);
        card.appendChild(image);
        card.appendChild(cardInfo);
        newsInfo.appendChild(card)
    });
};
