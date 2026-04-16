async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    console.log(data.name);
    console.log(data.email);
    console.log(data.address.city);
  } catch (err) {
    console.error("something is wrong", err);
  }
}
//fetchUser();

async function getprojects() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3",
    );
    const data = await response.json();
    for (const element of data) {
      console.log(element);
    }
  } catch (err) {
    console.error("something is wrong", err);
  }
}
getprojects();
