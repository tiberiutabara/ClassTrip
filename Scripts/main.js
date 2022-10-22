// Error function

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}

var url = "https://178.62.85.205/wp-json/wp/v2/posts?_embed&?order=desc";

const resultsContainer = document.querySelector(".blog-posts");

// Make results global to work with searchbar

let results = [];

// Api Call

async function getBlogs() {
    try{
        const response = await fetch(url);
        results = await response.json();
        displayBlogs(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
};

const displayBlogs = (blogs) => {
    const htmlString = blogs
        .map((blog) => {
            return `<div class="post"> <a href="blogpage.html?id=${blog.id}"> 
            <img src="${blog._embedded["wp:featuredmedia"][0].link}" alt="${blog.title.rendered}" />
            <h2 class="post-title">${blog.title.rendered}</h2>
            <p class="post-date">${blog.date}</p>
            </a></div>`;
        })
        .join('');
    resultsContainer.innerHTML = htmlString;
};

getBlogs();

// View more

const viewMore = document.querySelector('.view-more-blogs');

function removeUrlParam(){
    url = "https://178.62.85.205/wp-json/wp/v2/posts?_embed&?order=desc";
    getBlogs();

    viewMore.innerHTML = 'View More';
    viewMore.onclick = addUrlParam;
}

function addUrlParam(){
    url = "https://178.62.85.205/wp-json/wp/v2/posts?_embed&?order=desc&per_page=100";
    getBlogs();

    viewMore.innerHTML = 'View Less';
    viewMore.onclick = removeUrlParam;
}

viewMore.onclick = addUrlParam;

// Search bar

const search = document.querySelector('.filter');

search.addEventListener('keyup', (e) => {
    const searchTarget = e.target.value.toLowerCase();

    const filteredBlogs = results.filter( blog => {
        return blog.title.rendered.toLowerCase().includes(searchTarget);
    });

    displayBlogs(filteredBlogs);
});