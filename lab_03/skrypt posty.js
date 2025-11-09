//   let test = document.getElementById("test");
//   console.log(test);
fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const T = data.posts;
    const container = document.createElement("div");
    const COLOR_LIMIT = 40;

    T.forEach((element) => {
      const post = document.createElement("div"); //nowy post
      post.classList.add("post"); //nadaj postowi klases post
      post.innerHTML =
        element.id + '. "' + element.title + '"<br />' + " " + element.body; // jak ma wygladac w html
      container.appendChild(post); //dodaj do container jako child

      const ratings = document.createElement("div"); // opakowanie na opinie
      ratings.classList.add("ratings"); //nadaj odpowiednia klase
      post.appendChild(ratings); //dodaj do post

      const likes = document.createElement("div");
      likes.classList.add("likes");
      likes.innerHTML = "amount of likes 👍: ";
      ratings.appendChild(likes);

      const button_like_add = document.createElement("button");
      button_like_add.textContent = "+"; // nadaj tekst na button
      const button_like_remove = document.createElement("button");
      button_like_remove.textContent = "-";

      const like_count = document.createElement("span");
      like_count.textContent = element.reactions.likes; // pobierz like z elementu z jsona

      likes.appendChild(button_like_add);
      likes.appendChild(like_count);
      likes.appendChild(button_like_remove);

      // --------------------

      const dislikes = document.createElement("div");
      dislikes.classList.add("dislikes");
      dislikes.innerHTML = "amount of dislikes 👎: ";
      ratings.appendChild(dislikes);

      const button_dislike_add = document.createElement("button");
      button_dislike_add.textContent = "+";
      const button_dislike_remove = document.createElement("button");
      button_dislike_remove.textContent = "-";

      const dislike_count = document.createElement("span");
      dislike_count.textContent = element.reactions.dislikes;

      if (parseInt(dislike_count.textContent) >= COLOR_LIMIT) {
        post.classList.add("post-bad");
      }

      dislikes.appendChild(button_dislike_add);
      dislikes.appendChild(dislike_count);
      dislikes.appendChild(button_dislike_remove);

      // logika klikania
      button_like_add.addEventListener("click", () => {
        let currentCount = parseInt(like_count.textContent);
        like_count.textContent = currentCount + 1;
      });
      button_like_remove.addEventListener("click", () => {
        let currentCount = parseInt(like_count.textContent);
        if (currentCount > 0) {
          like_count.textContent = currentCount - 1;
        }
      });

      button_dislike_add.addEventListener("click", () => {
        let currentCount = parseInt(dislike_count.textContent);
        dislike_count.textContent = currentCount + 1;
        if (currentCount + 1 >= COLOR_LIMIT) {
          post.classList.add("post-bad");
        }
      });
      button_dislike_remove.addEventListener("click", () => {
        let currentCount = parseInt(dislike_count.textContent);
        if (currentCount > 0) {
          dislike_count.textContent = currentCount - 1;
          if (currentCount - 1 < COLOR_LIMIT) {
            post.classList.remove("post-bad");
          }
        }
      });
      console.log(post);
    });
    document.body.appendChild(container);
  });
