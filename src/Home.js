import React from "react";

const menuItems = [
  {
    category: "Starter",
    items: [
      {
        name: "Chilli Paneer",
        price: "₹120/-",
        image: "/images/chilli-paneer.jpg",
      },
      {
        name: "Chicken Tikka",
        price: "₹180/-",
        image: "/images/chicken-tikka.jpg",
      },
      {
        name: "Paneer Tikka",
        price: "₹170/-",
        image: "/images/paneer-tikka.jpg",
      },
      {
        name: "Paneer 65",
        price: "₹150/-",
        image: "/images/paneer-65.jpg",
      },
    ],
  },
  {
    category: "Pizza",
    items: [
      {
        name: "Chicken Cheese Pizza",
        price: "₹140/-",
        image: "/images/chicken-pizza.jpg",
      },
      {
        name: "Mix Veg Pizza",
        price: "₹100/-",
        image: "/images/mix-veg-pizza.jpg",
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Fomato</h1>
      <div className="search-area">
        <div className="search-container">
          <input type="text" placeholder="Search for food..." className="search-bar" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      {menuItems.map((section, index) => (
        <div key={index} className="menu-section">
          <h2>{section.category}</h2>
          <div className="menu-grid">
            {section.items.map((item, idx) => (
              <div key={idx} className="menu-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="menu-options">
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <select>
                    <option>half</option>
                    <option>full</option>
                  </select>
                  <span>{item.price}</span>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
