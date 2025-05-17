function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("show");
}

// Simulate loading user and bricks (replace with fetch from backend later)
document.addEventListener("DOMContentLoaded", () => {
  const userPincode = "560001"; // Example, load from DB/localStorage
  document.getElementById("userPincode").innerText = userPincode;

  const bricks = [
    { name: "Premium Clay Brick", price: 6, seller: "ABC Bricks" },
    { name: "Fly Ash Brick", price: 5, seller: "XYZ Traders" },
  ];

  const container = document.getElementById("brickContainer");
  bricks.forEach((brick) => {
    const card = document.createElement("div");
    card.className = "brick-card";
    card.innerHTML = `
      <h3>${brick.name}</h3>
      <p>Seller: ${brick.seller}</p>
      <p>Price: ₹${brick.price}</p>
      <button>View</button>
    `;
    container.appendChild(card);
  });
});

