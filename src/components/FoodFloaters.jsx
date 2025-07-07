// src/components/FoodFloaters.jsx
import { motion } from 'framer-motion';
import { GiAppleCore, GiCarrot, GiBread, GiGrapes, GiCorn, GiTomato } from 'react-icons/gi';

const foods = [
  { icon: <GiAppleCore />, size: 'text-xl', color: 'text-red-400' },
  { icon: <GiCarrot />, size: 'text-2xl', color: 'text-orange-400' },
  { icon: <GiBread />, size: 'text-xl', color: 'text-amber-600' },
  { icon: <GiGrapes />, size: 'text-2xl', color: 'text-purple-400' },
  { icon: <GiCorn />, size: 'text-xl', color: 'text-yellow-500' },
  { icon: <GiTomato />, size: 'text-xl', color: 'text-red-500' },
  { icon: <GiAppleCore />, size: 'text-xl', color: 'text-green-500' },
  { icon: <GiCarrot />, size: 'text-2xl', color: 'text-orange-300' },
];

const FoodFloaters = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {foods.map((food, i) => (
        <motion.div
          key={i}
          initial={{
            y: Math.random() * 100,
            x: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * 100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className={`absolute ${food.color} ${food.size}`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          {food.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FoodFloaters;