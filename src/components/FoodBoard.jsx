// components/FoodBoard.jsx
const FoodBoard = () => {
  const [foodItems, setFoodItems] = useState([]);
  
  useEffect(() => {
    // Fetch from API
    const fetchItems = async () => {
      const res = await fetch('/api/food-available');
      setFoodItems(await res.json());
    };
    fetchItems();
    const interval = setInterval(fetchItems, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {foodItems.map(item => (
        <FoodCard 
          key={item.id}
          item={item}
          onReserve={() => handleReserve(item.id)}
        />
      ))}
    </div>
  );
};