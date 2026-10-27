// Coursework prototype catalog and fees. 15% VAT is charged after a booking discount.
export const packages = [
  {
    "id": "ultimate-gamer",
    "name": "Ultimate Gamer Pass",
    "category": "Gaming packages",
    "price": 1500,
    "icon": "🎮",
    "tag": "Most popular",
    "short": "Full access to our gaming stations.",
    "description": "Take your gaming to the next level with access to premium PC rigs, modern consoles and our gaming lounge.",
    "includes": [
      "Access to all gaming stations",
      "3-hour gaming session",
      "Complimentary drinks",
      "Free Wi-Fi",
      "Member lounge access"
    ]
  },
  {
    "id": "vip-gaming",
    "name": "VIP Gaming Experience",
    "category": "Gaming packages",
    "price": 1500,
    "icon": "👑",
    "tag": "VIP",
    "short": "Premium gaming setup with a dedicated host.",
    "description": "Enjoy premium gaming stations and a host who can help you plan a memorable gaming session.",
    "includes": [
      "Dedicated gaming station",
      "3-hour gaming session",
      "VIP seating area",
      "Dedicated host"
    ]
  },
  {
    "id": "esports-training",
    "name": "Esports Training Package",
    "category": "Gaming packages",
    "price": 1500,
    "icon": "🏆",
    "tag": "Competitive",
    "short": "Competitive esports coaching and team practice.",
    "description": "Get practice time and guided esports activities designed for individuals and teams.",
    "includes": [
      "Competitive gaming sessions",
      "Coaching activities",
      "Team play and practice",
      "Performance feedback"
    ]
  },
  {
    "id": "birthday-party",
    "name": "Birthday Party Package",
    "category": "Gaming packages",
    "price": 1500,
    "icon": "🎉",
    "tag": "Groups",
    "short": "A gaming party experience for groups.",
    "description": "Celebrate with a group gaming session and a party-friendly setup at the arena.",
    "includes": [
      "Party group gaming session",
      "Reserved gaming area",
      "Assisted setup",
      "Gaming activities"
    ]
  },
  {
    "id": "vr-experience",
    "name": "Virtual Reality Experience",
    "category": "Individual experiences",
    "price": 1500,
    "icon": "🥽",
    "tag": "Immersive",
    "short": "Explore interactive virtual worlds.",
    "description": "Experience virtual reality with guided setup and immersive activities.",
    "includes": [
      "Virtual reality experience",
      "Equipment setup",
      "Safety orientation",
      "Guided assistance"
    ]
  },
  {
    "id": "racing-simulator",
    "name": "Racing Simulator Challenge",
    "category": "Individual experiences",
    "price": 650,
    "icon": "🏎️",
    "tag": "Fast-paced",
    "short": "Try your skills in a racing simulator.",
    "description": "Get behind the wheel with our racing simulation setup and compete for your best lap time.",
    "includes": [
      "Racing simulator station",
      "Session orientation",
      "Lap-time challenge",
      "Staff assistance"
    ]
  },
  {
    "id": "escape-room",
    "name": "Escape Room Challenge",
    "category": "Individual experiences",
    "price": 750,
    "icon": "🧩",
    "tag": "Team challenge",
    "short": "Solve puzzles together in themed rooms.",
    "description": "Enjoy a teamwork-focused puzzle experience where communication and creativity matter.",
    "includes": [
      "Themed puzzle challenge",
      "Team briefing",
      "Facilitated experience",
      "Group participation"
    ]
  }
];
export const tournaments = [
  { title: 'Valorant Masters Cup', caption: 'Schedule to be confirmed', icon: '🏆' },
  { title: 'Grand Simulator Race', caption: 'Registration details coming soon', icon: '🏎️' },
];
export const money = (amount) => 'R' + Number(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export function discountRate(count) {
  if (count >= 4) return .15;
  if (count === 3) return .10;
  if (count === 2) return .05;
  return 0;
}
export function calculateQuote(quantities = {}) {
  let count = 0;
  let subtotal = 0;
  for (const item of packages) {
    const raw = Number(quantities[item.id]);
    const quantity = Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 0;
    count += quantity;
    subtotal += quantity * item.price;
  }
  const rate = discountRate(count);
  const discount = Math.round(subtotal * rate * 100) / 100;
  const vat = Math.round((subtotal - discount) * 0.15 * 100) / 100;
  return {count, subtotal, rate, discount, vat, total: Math.round((subtotal - discount + vat) * 100) / 100};
}
