// components/ImpactCalculator.jsx
const ImpactCalculator = ({ mealsSaved }) => {
  const calculateImpact = () => {
    return {
      co2: mealsSaved * 3.5, // kg CO2 saved per meal
      water: mealsSaved * 1250, // liters water saved
      meals: mealsSaved
    };
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Your Impact</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>🍽️ Meals Saved:</span>
          <span className="font-bold">{calculateImpact().meals}</span>
        </div>
        <div className="flex justify-between">
          <span>🌱 CO2 Reduced:</span>
          <span className="font-bold">{calculateImpact().co2} kg</span>
        </div>
        <div className="flex justify-between">
          <span>💧 Water Saved:</span>
          <span className="font-bold">{calculateImpact().water} liters</span>
        </div>
      </div>
    </div>
  );
};