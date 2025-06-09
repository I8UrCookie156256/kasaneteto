module.exports = () => {
  const symbols = ["🍒", "🍋", "🍇", "💰", "🔔", "🍀"/*, "❌"*/];

  const payAmount = {
    "💰💰💰": 42,
    "🍀🍀🍀": 21,
    "🔔🔔🔔": 16,
    "❌❌❌": 2,
    
    "🍒🍒🍒": 12,
    "🍇🍇🍇": 9,
    "🍋🍋🍋": 7,

    "💰💰": 4,
    "🍀🍀": 3.14,
    "🔔🔔": 2.5,
    "🍒🍒": 2,
    "🍇🍇": 1.75,
    "🍋🍋": 1.5,
    "❌❌": 1.1, 
  }

  let reel = [];
  for (let i = 0; i < 3; i++) {
    reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  const result = reel.join("");
  let payout = 0;

  for (let i = 0; i < Object.keys(payAmount).length; i++) {
    const element = Object.keys(payAmount)[i];

    if(!result.includes(element)) continue;
    if(payout == 0) payout = 1;
    payout *= payAmount[element]
    break;
  }

  return {
    reel: reel,
    payout: payout,
  };
};
