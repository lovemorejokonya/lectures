Today we will look at AJAX with jquery ande we will build a simple app that fetches data from an API


Ajax

- server- side rendering
- client asks for data, server processes then returns html
- did this in tiny app

css - styling and making pretty

XMLHttpRequest
- microsoft people idea that since computers have become so powerful, we can leverage data from multiple sources, and display on single page without re-loading the page
- old.reddit.com/r/memes
- reddit.com/r/memes - open in ingognito mode - infinite scroll...
- instagram is another example. designed to never end.
- netflix bingwatching. Netflix says biggest competitor is sleep

new tech uses APIs -
it doesn't process any css or html. might just send back a response of only data.
- old.reddit.com/r/memes/.json
- tvmaze.com

- Fetch API example...
fetch('https://old.reddit.com/r/memes/.json')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data[0]));


JQuery Ajax - does similar thing
for react, angular, vuejs, you may use fetch or axios

```javascript


$.ajax({
  url: "/posts",
  method: "GET"
})
.done((res) => {
  console.log(res)
})
.fail((err)=>{

})
.always(() => {

})


$.ajax({
  url: "/posts",
  method: "GET"
})
.then((res) => {
  console.log(res)
})
.catch((err)=>{

})

```




