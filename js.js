document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "first",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "second",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "third",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "fourth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "fifth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "sixth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "seventh",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "eighth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "ninth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "tenth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "eleventh",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "twelfth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "thirteenth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "fourteenth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "fifteenth",
    },
    {
      imgsrc:
        "https://i.pinimg.com/736x/ba/0c/b8/ba0cb8b5de46d048449a55f38df6ed82.jpg",
      itemdata: "sixteenth",
    },
  ];

  const itembox = document.getElementById("itembox");
  const searchInput = document.getElementById("search");
  const btn = document.getElementById("btn");

  if (!itembox) {
    console.log("Element with id 'itembox' not found");
    return;
  }

  function displayData(filteredData) {
    // Clear the itembox content before appending new items
    itembox.innerHTML = "";

    filteredData.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      // Create the itemimg div and add the image
      const itemimgDiv = document.createElement("div");
      itemimgDiv.classList.add("itemimg");
      itemimgDiv.innerHTML = `<img src="${item.imgsrc}" class="itemimg" alt="Image" />`;

      // Create the itemdetail div and add the text
      const itemdetailDiv = document.createElement("div");
      itemdetailDiv.classList.add("itemdetail");
      itemdetailDiv.textContent = item.itemdata;

      // Append the image and detail divs to the item div
      itemDiv.appendChild(itemimgDiv);
      itemDiv.appendChild(itemdetailDiv);

      // Append the item to the itembox
      itembox.appendChild(itemDiv);
    });
  }

  // Initially display all data
  displayData(data);

  function filter() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.itemdata.toLowerCase().includes(searchValue)
    );
    displayData(filteredData);
  }
  searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      filter();
    }
  });
  btn.addEventListener("click", filter);

  // Optional: Add live search functionality (real-time search as user types)
  searchInput.addEventListener("input", filter);
});
