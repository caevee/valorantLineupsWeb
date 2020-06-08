/*
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card.firstElementChild.firstElementChild.innerText);
    const topic = card.firstElementChild.firstElementChild.innerText;
    window.location = `/${topic}`;
    fetch("/topic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topic }),
    });
  });
});
*/

const topics = document.querySelectorAll(".topic");

topics.forEach((topicItem) => {
  topicItem.addEventListener("click", () => {
    const topic = topicItem.firstElementChild.firstElementChild.innerText;
    window.location = `/agent/${topic}`;
  });
});

$(".js-modal-btn").modalVideo();
