document.getElementById("btn-post").addEventListener("click", function (event) {
  event.preventDefault();
  const input = document.getElementById("input-value");
  const value = input.value;
  const postContainer = document.getElementById("comment-container");
  const newComment = document.createElement("p");
  newComment.classList.add("comment");
  newComment.innerText = value;
  postContainer.appendChild(newComment);
  input.value = "";
});
