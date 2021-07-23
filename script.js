// **Full credit to @Emma Bostian for this question.**

// Using the [Random User Generator API](https://randomuser.me/), query for a list of 10 users and for each user and return an array of objects with their profile photo and name.

// Write your script in Javascript, and submit in a file called `script.js`.

const getInfo = fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(randomData => {
        console.log(randomData)
    })

{/* <div>
    {randomData.data.results.name.first}
    {randomData.data.results.name.last}
    {randomData.data.results.picture.medium}
</div> */}