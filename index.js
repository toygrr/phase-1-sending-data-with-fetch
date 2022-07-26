function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name, //why did i have to seperate these lines?
      email,
    }),
  })
    .then((res) => res.json())
    .then((obj) => (document.body.innerHTML = obj["id"])) // i dont understand this part
    .catch((error) => (document.body.innerHTML = error.message)); //why am I setting the text of the HTML? and not appending to the json.db file?
}
