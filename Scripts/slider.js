function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}

// Next and prev functions

const previousPosts = document.querySelector('.left-slide-button');
const nextPosts = document.querySelector('.right-slide-button');

previousPosts.onclick= () => {
    if(pageNum === 1){
        pageNum = 1;
    } 
    else if (pageNum === 2){
        previousPosts.classList.add('transparent');
        pageNum--;
    }
    else{
        nextPosts.classList.remove('transparent'); 
        pageNum--;
    }

    getBlogs();
};

nextPosts.onclick= () => {
    if(pageNum === 3){
        pageNum = 3;
    } 
    else if(pageNum === 2){
        nextPosts.classList.add('transparent');
        pageNum++;
    }
    else{
        previousPosts.classList.remove('transparent'); 
        pageNum++;
    }

    getBlogs();
};

let pageNum = 1;

// Api Call

const resultsContainer = document.querySelector(".recent-posts-slides");

async function getBlogs() {

    var url = "https://178.62.85.205/wp-json/wp/v2/posts?_embed&per_page=4&?order=desc&page=" + pageNum;

    try{
        const response = await fetch(url);

        const results = await response.json();

        const blogs = results;
    
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < blogs.length; i++) {
            resultsContainer.innerHTML += `<div class="slide-box"> <a href="blogpage.html?id=${blogs[i].id}"> 
                                            <img src="${blogs[i]._embedded["wp:featuredmedia"][0].link}" alt="${blogs[i].title.rendered}" />
                                            <p class="slide-box-blog-date transparent">${blogs[i].date}</p>
                                            <p class="slide-box-blog-title">${blogs[i].title.rendered}</p>
                                            </a></div>`;
        } 

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getBlogs();
