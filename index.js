let titleContainerSerial = 1;
let priceSum = 0;

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.addEventListener("click", function () {
    // get the card's title and prize value
    const cardTitle = card.querySelector("h3").innerText;
    const cardPrize = card.querySelector("span").innerText;

    // appending title in the title container
    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleContainerSerial + ". " + cardTitle;
    titleContainer.appendChild(p);
    titleContainerSerial++;

    // display total price
    const cardPrizeNumber = parseFloat(cardPrize.split(" ")[1]);
    priceSum += cardPrizeNumber;
    document.getElementById("totalPrice").innerText = priceSum.toFixed(2);
  });
}

// get input when clicked apply button
const applyButton = document.getElementById("apply-btn");
applyButton.addEventListener("click", function () {
  const inputField = document.getElementById("input-field").value;
  const cuponCode = inputField.split(" ").join("").toUpperCase();
  console.log(cuponCode);

  //   get total when clicked apply button and valid cupon code
  if (priceSum >= 200) {
    if (cuponCode === "SELL200") {
      // display discount
      const discount = priceSum * 0.2;
      document.getElementById("discountPrice").innerText = discount.toFixed(2);
      // display total
      const total = priceSum - discount;
      document.getElementById("total").innerText = total.toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("Invalid Cupon Code");
    }
  } else {
    alert("Please spend minimum $200");
  }

  //   if (cuponCode === "SELL200" && priceSum >= 200) {
  //     // display discount
  //     const discount = priceSum * 0.2;
  //     document.getElementById("discountPrice").innerText = discount.toFixed(2);
  //     // display total
  //     const total = priceSum - discount;
  //     document.getElementById("total").innerText = total.toFixed(2);
  //   } else {
  //     alert("invalid");
  //   }
});
