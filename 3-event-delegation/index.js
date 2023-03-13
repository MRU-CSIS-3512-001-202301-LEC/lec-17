console.log("foo");
document.querySelector("#outer").addEventListener("click", (e) => {
  console.log("clicking happened");
  console.log(e.target);
});
