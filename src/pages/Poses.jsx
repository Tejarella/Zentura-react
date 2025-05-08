import React, { useState, useEffect } from 'react';
import {
  Search, Filter, ChevronDown, Star, Clock, Heart, PlayCircle, 
  Check, Info, AlertTriangle, Zap, Sun, Moon, Flame, Wind, Flower,
  ArrowUpDown, Timer, BookOpen, X, ChevronRight, ChevronLeft, Share2,
  Shield, Sunrise, Award, ShieldCheck
} from 'lucide-react';

// Import placeholder yoga pose images (using placeholder API in real app)
const poseImages = {
  "Tadasana": "https://cdn.vectorstock.com/i/1000v/27/29/woman-doing-mountain-pose-tadasana-exercise-vector-41282729.jpg",
  "Virabhadrasana I": "https://static.vecteezy.com/system/resources/previews/015/397/727/non_2x/man-doing-virabhadrasana-i-to-the-wall-exercise-flat-illustration-isolated-on-white-background-vector.jpg",
  "Virabhadrasana II": "https://static.vecteezy.com/system/resources/previews/015/397/866/non_2x/yoga-man-in-virabhadrasana-2-or-warrior-ii-pose-male-cartoon-character-practicing-hatha-yoga-man-demonstrating-exercise-during-gymnastics-training-flat-illustration-vector.jpg",
  "Vrikshasana": "https://i.pinimg.com/736x/89/ca/0b/89ca0b9d4986cb04432d354d42f39ca2.jpg",
  "Adho Mukha Svanasana": "https://www.shutterstock.com/image-vector/woman-doing-adho-mukha-svanasana-600nw-2101536238.jpg",
  "Trikonasana": "https://cdn3.vectorstock.com/i/1000x1000/74/07/extended-triangle-pose-or-utthita-trikonasana-vector-41137407.jpg",
  "Balasana": "https://i.pinimg.com/736x/d9/4b/d6/d94bd68bc664a4e50de909fd4bf80869.jpg",
  "Setu Bandhasana": "https://static.vecteezy.com/system/resources/previews/015/397/870/non_2x/man-doing-bridge-pose-setu-bandha-sarvangasana-exercise-flat-illustration-isolated-on-white-background-vector.jpg",
  "Bhujangasana": "https://cdn.vectorstock.com/i/1000v/11/57/woman-doing-cobra-pose-or-bhujangasana-exercise-vector-40991157.jpg",
  "Chakrasana": "https://cdn.vectorstock.com/i/1000v/11/54/woman-doing-wheel-pose-chakrasana-upward-bow-vector-52621154.jpg",
  "Halasana": "https://cdn.vectorstock.com/i/1000v/14/54/woman-doing-plow-pose-halasana-exercise-vector-41231454.jpg",
  "Padmasana": "https://static.vecteezy.com/system/resources/thumbnails/047/749/806/small/man-doing-bellow-breath-or-bhastrika-pranayama-yoga-exercise-vector.jpg",
  "Salamba Sirsasana": "https://cdn2.vectorstock.com/i/1000x1000/58/66/standing-in-salamba-sirsasana-exercise-headstand-vector-43425866.jpg",
  "Natarajasana": "https://cdn.vectorstock.com/i/1000v/52/23/woman-doing-lord-of-the-dance-pose-natarajasana-vector-41215223.jpg",
  "Bakasana": "https://www.shutterstock.com/image-vector/man-doing-crane-pose-bakasana-260nw-2186406917.jpg",
  "Ardha Chandrasana": "https://www.shutterstock.com/image-vector/woman-doing-half-moon-pose-600nw-2112573971.jpg",
  "Ustrasana": "https://cdn.vectorstock.com/i/1000v/57/59/man-doing-camel-pose-or-ustrasana-exercise-vector-43955759.jpg",
  "Dhanurasana": "https://static.vecteezy.com/system/resources/previews/025/767/944/non_2x/man-doing-yoga-pose-dhanurasana-bow-pose-asana-in-hatha-yoga-vector.jpg"
};

// Yoga pose data with Sanskrit names, chakra associations, and more details
const yogaPosesData = [
  {
    id: 1,
    name: "Tadasana",
    englishName: "Mountain Pose",
    icon: <Sun size={28} />,
    level: "Beginner",
    description: "Foundational standing pose that improves posture, balance and mindfulness",
    points: 10,
    duration: "1 minute",
    benefits: ["Improves posture", "Strengthens thighs and ankles", "Increases body awareness"],
    chakra: "Root",
    chakraColor: "#FF5F5F",
    chakraDescription: "Connects you to earth energy and stability",
    category: "Standing",
    contraindications: ["Low blood pressure (hold for shorter time)", "Headache"],
    alignment: "Stand with feet together, weight evenly distributed. Engage quadriceps, tuck tailbone slightly. Lengthen spine, broaden collarbones, and gaze forward.",
    modifications: "Separate feet hip-width apart for more stability if needed."
  },
  {
    id: 2,
    name: "Virabhadrasana II",
    englishName: "Warrior II",
    icon: <Award size={28} />,
    level: "Intermediate",
    description: "Powerful standing pose that builds strength and focus",
    points: 20,
    duration: "2 minutes (1 minute per side)",
    benefits: ["Strengthens legs and core", "Opens hips and chest", "Improves concentration"],
    chakra: "Sacral",
    chakraColor: "#FF9D5C",
    chakraDescription: "Enhances creativity and emotional flow",
    category: "Standing",
    contraindications: ["Knee injuries", "High blood pressure"],
    alignment: "Front knee aligned over ankle, back leg straight. Hips and shoulders face side. Arms extend strongly with soft shoulders.",
    modifications: "Shorten stance for less intensity. Use a chair for support if needed."
  },
  {
    id: 3,
    name: "Vrikshasana",
    englishName: "Tree Pose",
    icon: <Flame size={28} />,
    level: "Intermediate",
    description: "Balancing pose that enhances focus and stability",
    points: 15,
    duration: "1 minute per side",
    benefits: ["Improves balance", "Strengthens legs", "Calms the mind"],
    chakra: "Root",
    chakraColor: "#FF5F5F",
    chakraDescription: "Grounds your energy and builds stability",
    category: "Standing",
    contraindications: ["Ankle or knee injuries", "Migraines"],
    alignment: "Press foot into inner thigh or calf (not on knee). Engage standing leg. Hips level and facing forward.",
    modifications: "Use wall for support. Place foot on ankle instead of higher up the leg."
  },
  {
    id: 4,
    name: "Setu Bandhasana",
    englishName: "Bridge Pose",
    icon: <Heart size={28} />,
    level: "Beginner",
    description: "Gentle backbend that opens the chest and strengthens the spine",
    points: 12,
    duration: "1 minute",
    benefits: ["Opens chest and shoulders", "Strengthens back", "Calms the nervous system"],
    chakra: "Heart",
    chakraColor: "#5CFF8F",
    chakraDescription: "Opens your heart to love and compassion",
    category: "Supine",
    contraindications: ["Neck injuries", "Spinal injuries"],
    alignment: "Feet hip-width apart, press firmly down. Keep knees aligned with ankles. Interlace hands beneath body.",
    modifications: "Place block under sacrum for supported bridge."
  },
  {
    id: 5,
    name: "Adho Mukha Svanasana",
    englishName: "Downward-Facing Dog",
    icon: <Wind size={28} />,
    level: "Beginner",
    description: "Rejuvenating inversion that stretches and strengthens the whole body",
    points: 15,
    duration: "1 minute",
    benefits: ["Stretches hamstrings and calves", "Strengthens arms and shoulders", "Energizes the body"],
    chakra: "Solar Plexus",
    chakraColor: "#FFEF5C",
    chakraDescription: "Builds confidence and personal power",
    category: "Inversion",
    contraindications: ["Carpal tunnel syndrome", "Late-term pregnancy", "High blood pressure"],
    alignment: "Hands shoulder-width apart, feet hip-width apart. Press firmly into hands, lift hips high, heels reach toward floor.",
    modifications: "Bend knees to ease hamstring tension. Use blocks under hands if needed."
  },
  {
    id: 6,
    name: "Trikonasana",
    englishName: "Triangle Pose",
    icon: <Zap size={28} />,
    level: "Intermediate",
    description: "Standing pose that improves balance and opens the hips",
    points: 18,
    duration: "1 minute per side",
    benefits: ["Stretches legs, hips and spine", "Improves digestion", "Reduces stress"],
    chakra: "Sacral",
    chakraColor: "#FF9D5C",
    chakraDescription: "Enhances creative energy and emotional balance",
    category: "Standing",
    contraindications: ["Low blood pressure", "Migraine"],
    alignment: "Wide stance, front foot facing forward, back foot parallel to back of mat. Extend torso directly over front leg before lowering hand.",
    modifications: "Use block under bottom hand. Reduce stance width."
  },
  {
    id: 7,
    name: "Chakrasana",
    englishName: "Wheel Pose",
    icon: <Sunrise size={28} />,
    level: "Advanced",
    description: "Deep backbend that expands the chest and strengthens the back",
    points: 25,
    duration: "30 seconds",
    benefits: ["Strengthens spine and arms", "Opens chest and shoulders", "Increases energy"],
    chakra: "Heart",
    chakraColor: "#5CFF8F",
    chakraDescription: "Expands heart energy and opens to possibility",
    category: "Backbend",
    contraindications: ["Heart conditions", "Spinal injuries", "High blood pressure", "Recent abdominal surgery"],
    alignment: "Place hands by ears, fingers pointing toward shoulders. Press into hands and feet equally to lift. Keep elbows parallel.",
    modifications: "Bridge pose as alternative. Use yoga blocks under hands for easier lift."
  },
  {
    id: 8,
    name: "Balasana",
    englishName: "Child's Pose",
    icon: <Moon size={28} />,
    level: "Beginner",
    description: "Resting pose that gently stretches the back and promotes relaxation",
    points: 8,
    duration: "2 minutes",
    benefits: ["Relaxes the nervous system", "Stretches hips and thighs", "Relieves back tension"],
    chakra: "Root",
    chakraColor: "#FF5F5F",
    chakraDescription: "Grounds energy and creates feelings of safety",
    category: "Seated",
    contraindications: ["Knee injuries", "Pregnancy (third trimester)"],
    alignment: "Knees wide, big toes touching. Sink hips back toward heels. Arms extended or alongside body.",
    modifications: "Place bolster under torso/chest. Use folded blankets between calves and thighs."
  },
  {
    id: 9,
    name: "Bhujangasana",
    englishName: "Cobra Pose",
    icon: <Flame size={28} />,
    level: "Beginner",
    description: "Gentle backbend that strengthens the spine and opens the chest",
    points: 12,
    duration: "30 seconds",
    benefits: ["Strengthens back muscles", "Opens chest and lungs", "Stimulates abdominal organs"],
    chakra: "Solar Plexus",
    chakraColor: "#FFEF5C",
    chakraDescription: "Awakens personal power and confidence",
    category: "Prone",
    contraindications: ["Back injury", "Carpal tunnel", "Pregnancy"],
    alignment: "Hands under shoulders, elbows close to body. Lift chest using back strength, not arm strength. Keep pubic bone on floor.",
    modifications: "Keep elbows bent for gentler variation. Use less height if uncomfortable."
  },
  {
    id: 10,
    name: "Halasana",
    englishName: "Plow Pose",
    icon: <Moon size={28} />,
    level: "Advanced",
    description: "Inversion that calms the nervous system and stretches the back",
    points: 20,
    duration: "1 minute",
    benefits: ["Reduces stress and fatigue", "Stretches shoulders and spine", "Stimulates thyroid gland"],
    chakra: "Throat",
    chakraColor: "#5CD9FF",
    chakraDescription: "Improves communication and self-expression",
    category: "Inversion",
    contraindications: ["Neck injuries", "High blood pressure", "Glaucoma", "Pregnancy"],
    alignment: "From shoulder stand, lower legs over head with straight back. Support back with hands if possible.",
    modifications: "Use blanket under shoulders. Keep legs higher or use wall support."
  },
  {
    id: 11,
    name: "Padmasana",
    englishName: "Lotus Pose",
    icon: <Flower size={28} />,
    level: "Advanced",
    description: "Classic meditation pose that promotes deep concentration",
    points: 15,
    duration: "3 minutes",
    benefits: ["Calms the mind", "Opens hips", "Improves focus and attention"],
    chakra: "Crown",
    chakraColor: "#AF5CFF",
    chakraDescription: "Connects to higher consciousness and awareness",
    category: "Seated",
    contraindications: ["Knee or ankle injuries", "Hip problems"],
    alignment: "Sit with straight spine. Each foot placed on opposite thigh, soles facing up. Hands in preferred mudra.",
    modifications: "Half lotus with only one foot on opposite thigh. Simple cross-legged position."
  },
  {
    id: 12,
    name: "Salamba Sirsasana",
    englishName: "Supported Headstand",
    icon: <Award size={28} />,
    level: "Advanced",
    description: "King of asanas - advanced inversion that builds strength and focus",
    points: 30,
    duration: "1 minute",
    benefits: ["Builds upper body strength", "Improves focus", "Stimulates pituitary and pineal glands"],
    chakra: "Crown",
    chakraColor: "#AF5CFF",
    chakraDescription: "Enhances spiritual connection and clarity",
    category: "Inversion",
    contraindications: [" Neck injuries", "High blood pressure", "Glaucoma", "Detached retina", "Heart conditions"],
    alignment: "Forearms on ground forming triangle with hands clasped. Top of head on floor. Walk feet in and lift with core strength.",
    modifications: "Practice against wall. Try half headstand with bent knees. Use dolphin pose to build strength."
  },
  {
    id: 13,
    name: "Natarajasana",
    englishName: "Dancer's Pose",
    icon: <Flame size={28} />,
    level: "Advanced",
    description: "Beautiful balancing pose that opens the heart and builds focus",
    points: 25,
    duration: "30 seconds per side",
    benefits: ["Improves balance and focus", "Stretches shoulders and chest", "Strengthens legs and ankles"],
    chakra: "Heart",
    chakraColor: "#5CFF8F",
    chakraDescription: "Opens heart center and creative expression",
    category: "Standing",
    contraindications: ["Ankle or knee injuries", "Low blood pressure", "Migraine"],
    alignment: "Stand tall, grab inside of raised foot. Lift leg back and up while extending opposite arm forward.",
    modifications: "Use strap to hold foot. Keep chest upright if full bend is challenging. Use wall for balance."
  },
  {
    id: 14,
    name: "Bakasana",
    englishName: "Crow Pose",
    icon: <Award size={28} />,
    level: "Advanced",
    description: "Arm balance that builds core strength and concentration",
    points: 22,
    duration: "30 seconds",
    benefits: ["Strengthens arms and wrists", "Builds core power", "Improves balance and focus"],
    chakra: "Solar Plexus",
    chakraColor: "#FFEF5C",
    chakraDescription: "Develops personal power and confidence",
    category: "Arm Balance",
    contraindications: ["Wrist injuries", "Carpal tunnel", "Shoulder problems"],
    alignment: "Place hands shoulder-width apart, knees on upper arms. Shift weight forward until feet lift. Gaze slightly forward.",
    modifications: "Place block under forehead. Practice near wall. Keep feet on block and gradually lift one at a time."
  },
  {
    id: 15,
    name: "Ardha Chandrasana",
    englishName: "Half Moon Pose",
    icon: <Moon size={28} />,
    level: "Intermediate",
    description: "Balancing pose that creates length and opening in the body",
    points: 18,
    duration: "30 seconds per side",
    benefits: ["Strengthens legs and ankles", "Opens hips and chest", "Improves balance and coordination"],
    chakra: "Sacral",
    chakraColor: "#FF9D5C",
    chakraDescription: "Balances emotional energy and creativity",
    category: "Standing",
    contraindications: ["Low blood pressure", "Migraine", "Inner ear problems"],
    alignment: "From triangle, place hand 12 inches in front of front foot. Lift back leg parallel to floor. Stack shoulders and open chest.",
    modifications: "Use block under bottom hand. Keep gaze down for balance. Keep back leg lower."
  },
  {
    id: 16,
    name: "Ustrasana",
    englishName: "Camel Pose",
    icon: <Sunrise size={28} />,
    level: "Intermediate",
    description: "Deep backbend that opens the heart and strengthens the back",
    points: 20,
    duration: "30 seconds",
    benefits: ["Opens chest and shoulders", "Stretches hip flexors", "Improves posture and digestion"],
    chakra: "Heart",
    chakraColor: "#5CFF8F",
    chakraDescription: "Opens heart center and emotional expression",
    category: "Kneeling",
    contraindications: ["High or low blood pressure", "Migraine", "Serious low back or neck injuries"],
    alignment: "Kneel with knees hip-width apart. Place hands on lower back for support before reaching for heels. Keep thighs vertical.",
    modifications: "Keep hands on lower back. Tuck toes for higher heels. Use blocks beside feet to reach."
  },
  {
    id: 17,
    name: "Virabhadrasana I",
    englishName: "Warrior I",
    icon: <Award size={28} />,
    level: "Intermediate",
    description: "Powerful standing pose that builds strength and determination",
    points: 18,
    duration: "1 minute per side",
    benefits: ["Strengthens legs, arms and back", "Opens chest and shoulders", "Builds focus and stability"],
    chakra: "Root",
    chakraColor: "#FF5F5F",
    chakraDescription: "Builds foundation and courage",
    category: "Standing",
    contraindications: ["High blood pressure", "Heart problems", "Serious knee injuries"],
    alignment: "Back foot at 45° angle, hips facing forward. Bend front knee over ankle. Arms reach overhead, shoulders relaxed.",
    modifications: "Narrow stance for better stability. Keep hands on hips if shoulder issues."
  },
  {
    id: 18,
    name: "Dhanurasana",
    englishName: "Bow Pose",
    icon: <Flame size={28} />,
    level: "Intermediate",
    description: "Dynamic backbend that energizes the entire body",
    points: 20,
    duration: "30 seconds",
    benefits: ["Strengthens back and abdominals", "Opens chest and shoulders", "Improves posture and digestion"],
    chakra: "Solar Plexus",
    chakraColor: "#FFEF5C",
    chakraDescription: "Stimulates energy and personal power",
    category: "Prone",
    contraindications: ["Back injury", "High blood pressure", "Migraine", "Pregnancy"],
    alignment: "Lie on belly, bend knees and grab ankles. Lift chest and thighs, creating even curve in spine.",
    modifications: "Hold one leg at a time. Use strap to reach feet. Lift less high if uncomfortable."
  }
];

// Chakra information with colors
const chakraInfo = [
  { name: "All Chakras", color: "#FFFFFF" },
  { name: "Root", color: "#FF5F5F" },
  { name: "Sacral", color: "#FF9D5C" },
  { name: "Solar Plexus", color: "#FFEF5C" },
  { name: "Heart", color: "#5CFF8F" },
  { name: "Throat", color: "#5CD9FF" },
  { name: "Third Eye", color: "#5C75FF" },
  { name: "Crown", color: "#AF5CFF" }
];

// Pose categories
const poseCategories = [
  "All Categories",
  "Standing",
  "Seated",
  "Prone",
  "Supine",
  "Arm Balance",
  "Inversion",
  "Backbend",
  "Kneeling",
];

// Difficulty levels
const difficultyLevels = [
  "All Levels",
  "Beginner",
  "Intermediate", 
  "Advanced"
];

// Demo Video Modal Component
const VideoModal = ({ pose, onClose, darkMode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className={`${darkMode ? 'bg-gray-900 border-indigo-900' : 'bg-white border-gray-200'} rounded-2xl p-6 max-w-3xl w-full mx-4 border shadow-2xl relative`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
            {pose.name} <span className={`${darkMode ? 'text-indigo-400' : 'text-gray-600'}`}>({pose.englishName})</span>
          </h3>
          <button 
            onClick={onClose}
            className={`${darkMode ? 'text-indigo-400 hover:text-indigo-200' : 'text-gray-500 hover:text-gray-800'}`}
            aria-label="Close video modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Video placeholder - would be a real video in production */}
        <div className={`w-full aspect-video ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={poseImages[pose.name]} 
              alt={`${pose.englishName} demonstration`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle size={64} className="text-white opacity-80" />
            </div>
          </div>
        </div>
        
        {/* Alignment instructions */}
        <div className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'} p-4 rounded-xl mb-4`}>
          <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} flex items-center mb-2`}>
            <BookOpen size={18} className="mr-2" style={{ color: pose.chakraColor }} /> 
            Proper Alignment
          </h4>
          <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
            {pose.alignment}
          </p>
        </div>
        
        {/* Contraindications */}
        <div className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'} p-4 rounded-xl mb-4`}>
          <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} flex items-center mb-2`}>
            <AlertTriangle size={18} className="mr-2 text-amber-500" /> 
            Contraindications
          </h4>
          <ul className={`list-disc pl-5 ${darkMode ? 'text-indigo-300' : 'text-gray-700'} space-y-1`}>
            {pose.contraindications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Modifications */}
        <div className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'} p-4 rounded-xl`}>
          <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} flex items-center mb-2`}>
            <Shield size={18} className="mr-2 text-indigo-400" /> 
            Modifications
          </h4>
          <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
            {pose.modifications}
          </p>
        </div>
      </div>
    </div>
  );
};

// Enhanced timer modal for the pose practice
const TimerModal = ({ pose, onClose, darkMode }) => {
  const parseDuration = (duration) => {
    const [value, unit] = duration.split(" ");
    const numValue = parseInt(value);
    return unit.includes("minute") ? numValue * 60 : numValue;
  };

  const [timeLeft, setTimeLeft] = useState(parseDuration(pose.duration));
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setCompleted(true);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(parseDuration(pose.duration));
    setCompleted(false);
  };

  const progressPercent = (timeLeft / parseDuration(pose.duration)) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-md">
      <div className={`${darkMode ? 'bg-gray-900 border-indigo-900' : 'bg-white border-gray-200'} rounded-3xl p-8 max-w-md w-full mx-4 border shadow-2xl relative overflow-hidden`}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-indigo-950' : 'bg-gradient-to-br from-white to-gray-50'} opacity-50`}></div>
        <div className={`absolute top-0 left-0 w-full h-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div
            className="h-full bg-gradient-to-r"
            style={{
              width: `${100 - progressPercent}%`,
              backgroundColor: pose.chakraColor
            }}
          ></div>
        </div>

        {/* Optimized particle effects */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full blur-xl opacity-20 animate-pulse" style={{ backgroundColor: pose.chakraColor, willChange: 'transform' }}></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-xl opacity-10 animate-pulse" style={{ animationDuration: '4s', backgroundColor: pose.chakraColor, willChange: 'transform' }}></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{pose.name}</h3>
            <button
              onClick={onClose}
              aria-label="Close timer modal"
              className={`${darkMode ? 'text-indigo-400 hover:text-indigo-200' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex items-center mb-6">
            <img 
              src={poseImages[pose.name]} 
              alt={pose.englishName}
              className="w-20 h-20 rounded-xl object-cover mr-4 border-2"
              style={{ borderColor: pose.chakraColor }}
            />
            <div>
              <p className={`${darkMode ? 'text-indigo-200' : 'text-gray-600'} mb-1`}>{pose.englishName}</p>
              <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'} text-sm`}>{pose.description}</p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className={`w-40 h-40 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} border-4 flex items-center justify-center relative`} style={{ borderColor: pose.chakraColor }}>
              <div className="absolute inset-0 rounded-full border-t-4 animate-spin" style={{ borderColor: pose.chakraColor, animationDuration: '10s', willChange: 'transform' }}></div>
              <div className="absolute inset-0 rounded-full border-l-2 animate-spin" style={{ borderColor: darkMode ? '#5C75FF' : '#4B5EAA', animationDuration: '8s', animationDirection: 'reverse', willChange: 'transform' }}></div>
              <div className={`text-4xl font-bold ${darkMode ? 'text-indigo-100' : 'text-gray-800'}`}>{formatTime(timeLeft)}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {!completed ? (
              <>
                <button
                  onClick={startTimer}
                  disabled={isRunning}
                  aria-label="Start timer"
                  className={`py-2 rounded-lg font-medium ${isRunning ? (darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-500') : 'text-white hover:opacity-90'} transition-colors`}
                  style={{ backgroundColor: isRunning ? '' : pose.chakraColor }}
                >
                  Start
                </button>
                <button
                  onClick={pauseTimer}
                  disabled={!isRunning}
                  aria-label="Pause timer"
                  className={`py-2 rounded-lg font-medium ${!isRunning ? (darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-500') : 'text-white hover:opacity-90'} transition-colors`}
                  style={{ backgroundColor: !isRunning ? '' : pose.chakraColor }}
                >
                  Pause
                </button>
                <button
                  onClick={resetTimer}
                  aria-label="Reset timer"
                  className={`py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-800 text-indigo-200 hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  Reset
                </button>
              </>
            ) : (
              <button
                onClick={resetTimer}
                className="col-span-3 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-colors"
                style={{ backgroundColor: pose.chakraColor }}
              >
                Practice Again
              </button>
            )}
          </div>

          {completed && (
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 bg-opacity-70' : 'bg-gray-100'} mb-4 text-center`}>
              <ShieldCheck size={32} className="mx-auto mb-2" style={{ color: pose.chakraColor }} />
              <p className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                Great job! You've earned {pose.points} points
              </p>
            </div>
          )}

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-100'}`}>
            <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} mb-2`}>
              Practice Focus:
            </h4>
            <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
              Focus on your {pose.chakra} chakra ({pose.chakraDescription}). 
              Breathe deeply and maintain proper alignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Application Component
const YogaPoseLibrary = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChakra, setSelectedChakra] = useState("All Chakras");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteIDs, setFavoriteIDs] = useState([]);
  const [showVideo, setShowVideo] = useState(null);
  const [showTimer, setShowTimer] = useState(null);
  const [showChakraFilter, setShowChakraFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [showLevelFilter, setShowLevelFilter] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const posesPerPage = 6;

  // Filter and sort poses
  const filteredPoses = yogaPosesData.filter(pose => {
    return (
      (searchQuery === "" || 
       pose.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       pose.englishName.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedChakra === "All Chakras" || pose.chakra === selectedChakra) &&
      (selectedCategory === "All Categories" || pose.category === selectedCategory) &&
      (selectedLevel === "All Levels" || pose.level === selectedLevel)
    );
  }).sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "level") {
      const levelOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
      return levelOrder[a.level] - levelOrder[b.level];
    } else if (sortBy === "points") {
      return b.points - a.points;
    }
    return 0;
  });

  // Calculate pagination
  const indexOfLastPose = currentPage * posesPerPage;
  const indexOfFirstPose = indexOfLastPose - posesPerPage;
  const currentPoses = filteredPoses.slice(indexOfFirstPose, indexOfLastPose);
  const totalPages = Math.ceil(filteredPoses.length / posesPerPage);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    if (favoriteIDs.includes(id)) {
      setFavoriteIDs(favoriteIDs.filter(fid => fid !== id));
    } else {
      setFavoriteIDs([...favoriteIDs, id]);
    }
  };

  // Display video modal
  const openVideo = (pose) => {
    setShowVideo(pose);
  };

  // Start timer for pose practice
  const startPractice = (pose) => {
    setShowTimer(pose);
  };

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-950');
      document.body.classList.remove('bg-gray-100');
    } else {
      document.body.classList.add('bg-gray-100');
      document.body.classList.remove('bg-gray-950');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} py-4 px-4 shadow-md sticky top-0 z-30 border-b`}>
        <div className="max-w-6xl mx-auto">
          {/* App Title */}
          <div className="flex justify-between items-center mb-4">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
              Yoga Asana Library
            </h1>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
            <input
              type="text"
              placeholder="Search poses by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-white placeholder-gray-500 border-gray-700' : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          
          {/* Filter and Sort Controls */}
          <div className="grid grid-cols-4 gap-2">
            {/* Chakra Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowChakraFilter(!showChakraFilter);
                  setShowCategoryFilter(false);
                  setShowLevelFilter(false);
                  setShowSortOptions(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-700 border-gray-300'} border hover:bg-opacity-80 transition-colors`}
              >
                <span className="truncate">
                  {selectedChakra}
                </span>
                <ChevronDown size={16} />
              </button>
              
              {showChakraFilter && (
                <div className={`absolute top-full left-0 mt-1 w-full z-40 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border overflow-hidden`}>
                  {chakraInfo.map(chakra => (
                    <button
                      key={chakra.name}
                      className={`w-full text-left px-4 py-2 flex items-center ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-700'} ${selectedChakra === chakra.name ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                      onClick={() => {
                        setSelectedChakra(chakra.name);
                        setShowChakraFilter(false);
                      }}
                    >
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: chakra.color }}></div>
                      {chakra.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCategoryFilter(!showCategoryFilter);
                  setShowChakraFilter(false);
                  setShowLevelFilter(false);
                  setShowSortOptions(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-700 border-gray-300'} border hover:bg-opacity-80 transition-colors`}
              >
                <span className="truncate">
                  {selectedCategory}
                </span>
                <ChevronDown size={16} />
              </button>
              
              {showCategoryFilter && (
                <div className={`absolute top-full left-0 mt-1 w-full z-40 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border max-h-60 overflow-y-auto`}>
                  {poseCategories.map(category => (
                    <button
                      key={category}
                      className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-700'} ${selectedCategory === category ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryFilter(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Level Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLevelFilter(!showLevelFilter);
                  setShowChakraFilter(false);
                  setShowCategoryFilter(false);
                  setShowSortOptions(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-700 border-gray-300'} border hover:bg-opacity-80 transition-colors`}
              >
                <span className="truncate">
                  {selectedLevel}
                </span>
                <ChevronDown size={16} />
              </button>
              
              {showLevelFilter && (
                <div className={`absolute top-full left-0 mt-1 w-full z-40 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
                  {difficultyLevels.map(level => (
                    <button
                      key={level}
                      className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-700'} ${selectedLevel === level ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                      onClick={() => {
                        setSelectedLevel(level);
                        setShowLevelFilter(false);
                      }}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Sort Options */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowSortOptions(!showSortOptions);
                  setShowChakraFilter(false);
                  setShowCategoryFilter(false);
                  setShowLevelFilter(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-700 border-gray-300'} border hover:bg-opacity-80 transition-colors`}
              >
                <div className="flex items-center">
                  <ArrowUpDown size={16} className="mr-2" />
                  <span className="truncate">
                    {sortBy === "name" ? "By Name" : sortBy === "level" ? "By Level" : "By Points"}
                  </span>
                </div>
                <ChevronDown size={16} />
              </button>
              
              {showSortOptions && (
                <div className={`absolute top-full right-0 mt-1 w-full z-40 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
                  <button
                    className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-700'} ${sortBy === "name" ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                    onClick={() => {
                      setSortBy("name");
                      setShowSortOptions(false);
                    }}
                  >
                    By Name
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-700'} ${sortBy === "level" ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                    onClick={() => {
                      setSortBy("level");
                      setShowSortOptions(false);
                    }}
                  >
                    By Level
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-700'} ${sortBy === "points" ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                    onClick={() => {
                      setSortBy("points");
                      setShowSortOptions(false);
                    }}
                  >
                    By Points
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* View mode toggle and result count */}
          <div className="flex justify-between items-center mt-4">
            <p className={`${darkMode ? 'text-indigo-400' : 'text-gray-600'} text-sm`}>
              Showing {filteredPoses.length} poses
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? (darkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-100 text-indigo-700') : (darkMode ? 'text-indigo-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-200')}`}
                aria-label="Grid view"
              >
                <div className="grid grid-cols-2 gap-1">
                  <div className={`w-1.5 h-1.5 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                  <div className={`w-1.5 h-1.5 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                  <div className={`w-1.5 h-1.5 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                  <div className={`w-1.5 h-1.5 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? (darkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-100 text-indigo-700') : (darkMode ? 'text-indigo-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-200')}`}
                aria-label="List view"
              >
                <div className="flex flex-col space-y-1">
                  <div className={`w-4 h-1 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                  <div className={`w-4 h-1 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                  <div className={`w-4 h-1 rounded ${darkMode ? 'bg-current' : 'bg-current'}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        {currentPoses.length === 0 ? (
          <div className={`flex flex-col items-center justify-center py-12 ${darkMode ? 'text-indigo-400' : 'text-gray-600'}`}>
            <AlertTriangle size={48} className="mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>No poses found</h3>
            <p>Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedChakra("All Chakras");
                setSelectedCategory("All Categories");
                setSelectedLevel("All Levels");
              }}
              className={`mt-4 px-4 py-2 rounded-lg ${darkMode ? 'bg-indigo-700 hover:bg-indigo-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPoses.map(pose => (
                  <div 
                    key={pose.id}
                    className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-transform hover:shadow-md hover:scale-105`}
                  >
                    {/* Card Image Area */}
                    <div className="relative h-48">
                      <img 
                        src={poseImages[pose.name]} 
                        alt={pose.englishName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex justify-between items-center">
                          <h2 className="text-white font-bold text-lg drop-shadow-md">{pose.name}</h2>
                          <button
                            onClick={() => toggleFavorite(pose.id)}
                            className="text-white"
                            aria-label={favoriteIDs.includes(pose.id) ? "Remove from favorites" : "Add to favorites"}
                          >
                            <Star size={20} fill={favoriteIDs.includes(pose.id) ? "#FFEF5C" : "none"} 
                              className={favoriteIDs.includes(pose.id) ? "text-yellow-300" : "text-white"} />
                          </button>
                        </div>
                        <p className="text-gray-200 text-sm">{pose.englishName}</p>
                      </div>
                      
                      {/* Level badge */}
                      <div 
                        className="absolute top-4 left-4 px-2 py-1 rounded-md text-xs font-medium text-white"
                        style={{ backgroundColor: 
                          pose.level === "Beginner" ? "#5CFF8F" : 
                          pose.level === "Intermediate" ? "#5CD9FF" : "#FF5F5F" 
                        }}
                      >
                        {pose.level}
                      </div>
                      
                      {/* Points badge */}
                      <div className={`absolute top-4 right-4 px-2 py-1 rounded-md ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} bg-opacity-70 text-xs font-medium text-white flex items-center`}>
                        <Star size={12} className="mr-1 text-yellow-300" fill="#FFEF5C" />
                        {pose.points} pts
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-4">
                      {/* Chakra info */}
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: pose.chakraColor }}></div>
                        <span className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                          {pose.chakra} Chakra
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className={`mb-4 text-sm ${darkMode ? 'text-indigo-400' : 'text-gray-700'}`}>
                        {pose.description}
                      </p>
                      
                      {/* Benefits */}
                      <div className="mb-4">
                        <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>Key Benefits:</h3>
                        <div className="flex flex-wrap gap-1">
                          {pose.benefits.slice(0, 2).map((benefit, idx) => (
                            <span 
                              key={idx}
                              className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-gray-800 text-indigo-300' : 'bg-gray-100 text-gray-700'}`}
                            >
                              <Check size={10} className="inline mr-1" style={{ color: pose.chakraColor }} />
                              {benefit}
                            </span>
                          ))}
                          {pose.benefits.length > 2 && (
                            <span 
                              className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-gray-800 text-indigo-300' : 'bg-gray-100 text-gray-700'}`}
                            >
                              +{pose.benefits.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center mb-4">
                        <Clock size={16} className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`} />
                        <span className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                          {pose.duration}
                        </span>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openVideo(pose)}
                          className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center text-sm ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          <PlayCircle size={16} className="mr-1" />
                          Watch Demo
                        </button>
                        <button
                          onClick={() => startPractice(pose)}
                          className="flex-1 py-2 px-3 rounded-lg flex items-center justify-center text-sm text-white hover:opacity-90"
                          style={{ backgroundColor: pose.chakraColor }}
                        >
                          <Timer size={16} className="mr-1" />
                          Practice Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* List View */}
            {viewMode === "list" && (
              <div className="flex flex-col space-y-3">
                {currentPoses.map(pose => (
                  <div 
                    key={pose.id}
                    className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden flex hover:shadow-md transition-shadow`}
                  >
                    {/* Image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <img 
                        src={poseImages[pose.name]} 
                        alt={pose.englishName}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-center text-xs font-medium text-white"
                        style={{ backgroundColor: pose.chakraColor }}
                      >
                        {pose.level}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-3 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h2 className={`font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{pose.name}</h2>
                          <p className={`text-sm ${darkMode ? 'text-indigo-400' : 'text-gray-600'}`}>{pose.englishName}</p>
                        </div>
                        <div className="flex items-center">
                          <span className={`flex items-center text-sm mr-2 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                            <Star size={14} className="mr-1 text-yellow-400" fill="#FFEF5C" />
                            {pose.points}
                          </span>
                          <button
                            onClick={() => toggleFavorite(pose.id)}
                            aria-label={favoriteIDs.includes(pose.id) ? "Remove from favorites" : "Add to favorites"}
                          >
                            <Star size={18} fill={favoriteIDs.includes(pose.id) ? "#FFEF5C" : "none"} 
                              className={favoriteIDs.includes(pose.id) ? "text-yellow-300" : darkMode ? "text-indigo-400" : "text-gray-500"} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-1 mb-1">
                        <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: pose.chakraColor }}></div>
                        <span className={`text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                          {pose.chakra}
                        </span>
                        <span className={`mx-2 text-xs ${darkMode ? 'text-indigo-400' : 'text-gray-400'}`}>•</span>
                        <Clock size={12} className={`mr-1 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`}></Clock>
                        <span className={`text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                          {pose.duration}
                        </span>
                      </div>
                      
                      <p className={`text-xs mt-1 mb-auto ${darkMode ? 'text-indigo-400' : 'text-gray-600'} line-clamp-2`}>
                        {pose.description}
                      </p>
                      
                      <div className="flex mt-2 space-x-2">
                        <button
                          onClick={() => openVideo(pose)}
                          className={`py-1 px-2 rounded-lg flex items-center justify-center text-xs ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          <PlayCircle size={12} className="mr-1" />
                          Demo
                        </button>
                        <button
                          onClick={() => startPractice(pose)}
                          className="py-1 px-2 rounded-lg flex items-center justify-center text-xs text-white hover:opacity-90"
                          style={{ backgroundColor: pose.chakraColor }}
                        >
                          <Timer size={12} className="mr-1" />
                          Practice
                        </button>
                        <button
                          onClick={() => openVideo(pose)}
                          className={`py-1 px-2 rounded-lg flex items-center justify-center text-xs ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          <Info size={12} className="mr-1" />
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg ${darkMode ? 'text-indigo-400 hover:bg-gray-800 disabled:text-gray-600' : 'text-gray-600 hover:bg-gray-200 disabled:text-gray-400'}`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => paginate(page)}
                      className={`px-3 py-1 rounded-lg ${currentPage === page ? (darkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white') : (darkMode ? 'text-indigo-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-200')}`}
                      aria-label={`Page ${page}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg ${darkMode ? 'text-indigo-400 hover:bg-gray-800 disabled:text-gray-600' : 'text-gray-600 hover:bg-gray-200 disabled:text-gray-400'}`}
                    aria-label="Next page"
                  >
                    <ChevronRight size={20} />
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </main>

      {/* Modals */}
      {showVideo && (
        <VideoModal 
          pose={showVideo} 
          onClose={() => setShowVideo(null)} 
          darkMode={darkMode} 
        />
      )}
      
      {showTimer && (
        <TimerModal 
          pose={showTimer} 
          onClose={() => setShowTimer(null)} 
          darkMode={darkMode} 
        />
      )}
    </div>
  );
};

export default YogaPoseLibrary;
