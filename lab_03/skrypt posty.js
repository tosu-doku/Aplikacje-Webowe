//   let test = document.getElementById("test");
//   console.log(test);
fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const T = data.posts;
    const container = document.createElement("div");

    T.forEach((element) => {
      const post = document.createElement("div"); //nowy post
      post.classList.add("post"); //dodaj do post cos
      post.innerHTML = element.id + " " + element.title + " " + element.body; // jak ma wygladac w html
      container.appendChild(post);

      // post.addEventListener("click", () => {
      //   mainPost.innerHTML = element.post;
      // });

      const button = document.createElement("button"); //nowy button
      button.textContent = "like";
      const like_count = document.createElement("div"); // licznik like

      const button2 = document.createElement("button"); //nowy button
      button2.textContent = "dislike";
      const dislike_count = document.createElement("div"); // licznik dislike

      console.log(post);
      document.body.appendChild(post);
      document.body.appendChild(button);
      document.body.appendChild(button2);

      button.addEventListener("click", () => {});
      button2.addEventListener("click", () => {
        // mainPost.innerHTML = element.post;
        dislike_count;
      });
    });
    // document.body.appendChild(container);
  });

function add1() {
  document.getElementById("");
}
