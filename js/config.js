/**
 * Romantic Date Proposal - Configuration
 * Customized for Raina
 */
const DATE_APP_CONFIG = {
  // Default names
  crushName: "Raina 🍊💖",
  crushFullName: "Raina",
  senderName: "Josh",
  
  // WhatsApp number (Unused in simplified version)
  whatsappNumber: "",

  // Language settings
  defaultLanguage: "en",

  // Runaway button settings
  runawaySensitivity: 90,
  yesGrowStep: 0.16,
  maxYesScale: 2.6,

  // Personalized funny pleading phrases for the "No" button
  pleadingTexts: {
    en: [
      "No 🙈",
      "Are you sure, Raina? 🥺",
      "I'll peel an orange for you! 🍊",
      "Think again, Raina! 😭",
      "Wait—even if I peel ALL your oranges?! 🍊✨",
      "Really sure? 💔",
      "Look at the big YES! 👉👈",
      "You can't catch me! 😜",
      "Wrong answer! Try again 💖",
      "Who else is gonna peel your oranges? 🍊🥺",
      "Give it another thought! ✨",
      "Still No? Impossible! 🙈",
      "Just click YES already! 🥰"
    ],
    bn: []
  },

  // Kept as empty arrays so app.js doesn't throw errors looking for them
  foodOptions: [],
  activityOptions: [],
  dressCodeOptions: []
};
