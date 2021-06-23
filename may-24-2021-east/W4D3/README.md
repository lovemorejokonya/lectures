#### AJAX

Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page. - Wikipedia

Sometime ago, Microsoft added a functionality called `XMLHttpRequest` into IE5. The idea was that now you can do requests to a server that would return you data, without making the browser refresh.  At first it used XML data only but later adopted to using other sets of data such as JSON. Now we use a variation of this in `Jquery` called `AJAX`.

`AJAX` is not a programming language. `AJAX` just uses a combination of: A browser built-in XMLHttpRequest object.


Common syntax for ajax

```js
    $.ajax({url: '', method: '', dataType: ""})
```

This is where you specify your parameters. Your URL, what type of METHOD you are doing, and datatype. Once this line runs, it makes a request to the parameters you given. However, `AJAX` are async, by default they return a promise when the opperation is completed.  So our code will look like this:

```js
    $.ajax({
        url: "/posts",
        method: "GET"
    })
    .then((res)=>{
        //handle the response
        console.log(`response: ${res}`)
    })
    .catch((err)=>{
        //handle the erros
        console.log(`error from ajax get: ${err}`)
    })
```


#### DEMO

We used ajax to load html from another html file

```js
const $button = $("#load-more")
    $button.on("click", function(){
        let params = {
            url: "more-articles.html",
            method: "GET"
        }
        $.ajax(params)
        .then((results)=>{
            const articlesContainer = $(".row")
            articlesContainer.append(results)
        })
        .catch((err)=>{
            console.log(`error trying to load more: ${err}`)
        })
    })
```

We used the blog posts api from `https://jsonplaceholder.typicode.com/posts` to get some fake blog posts.

 - api that creates and spits out fake articles as JSON for us to consume from our front-end

We also created helper functions to help with DOM manipulation



HELPER FUNCTIONS

Create html for the article dynamically

```js
const buildArticleHTML = articleObj => {
        const {id, title} = articleObj
        const $art = $("<article>")
        $art.addClass("col-4")
        const html = `
            <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh-HlquZky4tRPMQE8oHQslZCgERmgIhnBLZqiODrsO__yVN0Tfp7bVYLHhc&usqp=CAc" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">title ID: ${id}</h5>
                <p class="card-text">${title}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `
        $art.append(html)
        return $art
    }
    
    ```
    
    Render the articles
    
    ```js

    const renderArticles = (articles, limit) => {
        const articlesContainer = $(".row")
        articles.forEach((article, idx) => {
            idx < limit ? articlesContainer.append(buildArticleHTML(article)) : ''
        })
    }
    ```
    
    Load the articles and append them to our main container
    
    ```js

    const loadArticles = () => {
        const params = {
            url: `${URL}/posts`,
            method: "GET"
        }
        $.ajax(params)
      .then((articles)=>{
        //   console.log(`articles: ${articles}`)
          renderArticles(articles, 3)
      })
      .catch((err)=>{
          console.log(`err loading articles: ${err}`)
      })
      .always(()=>{
          console.log(`I'll always say this nomatter what`)
      })
    }
```




# AJAX Example using jQuery

HTML pages in this example are being served statically using ExpressJS.


### Getting Started

To run this example, please make sure that you run `npm install` in the main directory.

Once you've got all the dependencies installed, run `node start` or `npm start` to get the server up and running on port 8080 (by default).

All front-end code (HTML, CSS, and client side JS / jQuery) is placed in the `public` folder.

