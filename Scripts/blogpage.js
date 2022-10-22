const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://178.62.85.205/wp-json/wp/v2/posts/" + id +"?_embed";

const container = document.querySelector(".blogpage");

async function fetchBlog() {

    try {
        const response = await fetch(url);

        const details = await response.json();

        const blog = details;

        console.log(blog);

        container.innerHTML = `
                               <div class="page-title">
                                    <h1>${blog.title.rendered}</h1>
                                    <p>${blog.date}</p>
                                    <div class="small-line"></div>
                                </div>

                                <img class="blog-page-banner" src="${blog._embedded["wp:featuredmedia"][0].source_url
                            }" alt="${blog.title.rendered}">

                                <div class="blog-text-area">
                                ${blog.content.rendered}
                                </div>

                               `; 

        document.title = `Class Trip | ${blog.title.rendered}`;
      
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchBlog();