import "../Row-4/Row-4.scss";

const RowFour = () => {
  return (
    <div className="shop-container">
      <label htmlFor="shop">Shop</label> <br />
      <select className="shop-item" name="shop" required>
        <option value="">Choose Shop</option>
        <option value="McDonald's">McDonald's</option>
        <option value="KFC">KFC</option>
        <option value="Pizza Hut">Pizza Hut</option>
        <option value="Burger king">Burger king</option>
      </select>
      <br />
    </div>
  );
};

export default RowFour;