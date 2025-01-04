import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Catogrey from "./components/Catogrey";
import FoodList from "./components/FoodList";
import { items } from "./components/data";

function App() {
  const [foodItems, setFoodItems] = useState(items);
  const [search, setSearch] = useState("");

  const allCatogries = ["الكل", ...new Set(items.map((item) => item.Catogrey))];

  const filterItems = (Catogrey) => {
    if (Catogrey === "الكل") {
      setFoodItems(items);
      return;
    }
    const newItems = items.filter((item) => item.Catogrey === Catogrey);
    setFoodItems(newItems);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = search.toLowerCase(); // تحويل النص إلى حروف صغيرة لتجنب الأخطاء
    const filteredItems = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchWord) ||
        item.description.toLowerCase().includes(searchWord) ||
        item.price.toLowerCase().includes(searchWord) ||
        item.Catogrey.toLowerCase().includes(searchWord)
    ); // البحث في أسماء العناصر
    setFoodItems(filteredItems); // تحديث العناصر بناءً على البحث
  };

  return (
    <>
      <Header
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
      />
      <div className="container">
        <Title />
        <Catogrey filterItems={filterItems} allCatogries={allCatogries} />
        <FoodList foodItems={foodItems} />
      </div>
    </>
  );
}

export default App;
