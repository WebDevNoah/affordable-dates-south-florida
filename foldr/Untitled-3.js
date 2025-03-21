document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const dateListElement = document.getElementById("date-list");

      data.forEach(date => {
        const dateCard = document.createElement("div");
        dateCard.classList.add("date-card");

        const dateContent = `
          <h3>${date.name}</h3>
          <p><strong>Description:</strong> ${date.description}</p>
          <p><strong>Location:</strong> ${date.location}</p>
          <p><strong>Price:</strong> ${date.price}</p>
        `;

        dateCard.innerHTML = dateContent;
        dateListElement.appendChild(dateCard);
      });
    })
    .catch(error => console.error("Error loading the data:", error));
});
