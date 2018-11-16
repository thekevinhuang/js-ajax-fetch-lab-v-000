function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'f52e9deb0ff9caeda3bab1247aa2bea5bab78f88'
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(repo, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json)
    .then(json => showResults(json))
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let result = `<a href=${json.html_url}>Fork Link</a>`
  document.getElementById('results').innerHTML += result
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
