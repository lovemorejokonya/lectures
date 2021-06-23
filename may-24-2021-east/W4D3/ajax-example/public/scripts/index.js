$(document).ready(()=>{
    console.log("loaded")
    const URL = "https://jsonplaceholder.typicode.com"

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

    const renderArticles = (articles, limit) => {
        const articlesContainer = $(".row")
        articles.forEach((article, idx) => {
            idx < limit ? articlesContainer.append(buildArticleHTML(article)) : ''
        })
    }

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

    loadArticles()

})