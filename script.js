// ========== CONFIG ==========

// Dec 24, 2024  →  Jan 29, 2025
// Use numeric Date constructor (no timezone weirdness)
const START_DATE = new Date(2025, 11, 24); // month 11 = December
const END_DATE   = new Date(2026, 0, 29);  // month 0 = January

// While testing, keep this TRUE so all days are clickable
// When you give him the link, set to false so future days lock
const IS_DEBUG = false;

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Parse "YYYY-MM-DD" → local Date
function parseLocalDateFromKey(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d); // m-1 because JS months are 0-based
}

// ================= CUSTOM CONTENT =================
// Key format: "YYYY-MM-DD"
// 👉 You can fill out everything from 2024-12-24 to 2025-01-29
const daysData = {
  "2025-12-24": {
    note: "Welcome to your advent calendar ˚ʚ♡ɞ˚",
    memory: "Since our Christmas advent calendars have come to an end... I thought the fun shouldn't just stop there 😆!!!\n\n This is a birthday advent calendar website I made for you! Each door has a new message or thought from me. \n\nToday is the first day. There are many days to come, so today will just be a introduction and an I love you!",
  },

  "2025-12-25": {
    note: "Merry Christmas :))",
    memory: "It's quite awesome that we are together during the holiday season for the first time. It is the most wonderful time of the year and I'm grateful I get to be with the most wonderful person! I'm happy that I have an excuse to show you even more affection and love than normal. I really like gift giving because it shows what you remember and know about the other person. Even though we've known each other for a long time, I'm excited to learn more about you so that I can give you even more awesome things that you would like in the future. You make me feel super loved and I hope I can do the same for you!\n Here is a happy festive dog.\n",
    images: ["images/day25.jpg"],
  },
  
  "2025-12-26": {
    note: "S.U.N.G.J.A.I.",
    memory: "<strong>S</strong> uper strong and attractive\n<strong>U</strong> nderstanding\n<strong>N</strong> oble-hearted\n<strong>G</strong> reat guy\n<strong>J</strong> oyful\n<strong>A</strong> wesome\n<strong>I</strong> rreplaceable in my life!",
  },
  "2025-12-27":{
    note: "Song That Reminds Me of You ⋆‧°𓏲ּ𝄢",
    memory: "https://open.spotify.com/track/5mF2GbaqwIjzONJ5OLyZTt?si=21aed44204404173 \n\n Go listen to the song.\n\n It's the song from Yumi's Cells! This is the only K-drama that I've watched fully and it was with you! It's cool that this song is about needing to break up with your partner in order to become better version of yourselves because I feel like it's kind of like us! I think we both have matured a lot and are now better version of ourselves. This song brings good vibes and memories. Listen to it!",
  },

  "2025-12-28": {
    note: "National Pledge of Allegiance Day ⋆˚࿔",
    memory: "Because of this national holiday today, I would like to bring up a patriotic memory. \n\nThis is on July 3rd, 2022. We were watching the sunset in the back of the car and then randomly fireworks started to go off!! I remember thinking it was one of the most romantic things ever. I'm pretty sure at the time, we were in a weird place, but in that moment I felt super appreciative and lucky. It's funny how we always come back to each other and I like to think that it's meant to be that we're together!",
    video: "videos/day28.mp4",
  },

  "2025-12-29":{
    note: "Spot the Difference: Impossible Edition!",
    images: ["images/day29.jpg","images/day291.jpg", "images/day292.jpg"]
  },

  "2025-12-30":{
    note: "It's my birthday 🥳🙌🥂🎂",
    memory: "Hello! Today is my birthday! But you already know that of course! \n\n I think this is the first birthday where we're officially together! I'm super lucky to have an amazing boyfriend to celebrate my birthday with! You are the best gift of all.\n I'm super fortunate to have a partner that is super caring, kind, supportive, sweet, and loving to me. Thank you for everything that you do for me and everything that you are. I love you! I can't wait to celebrate with you :)",
    images: ["images/day30.jpg"]
  },

  "2025-12-31":{
    note: "New Year's Eve 🔥🔥",
    memory: "Small date recap :p. Hope to go on more awesome, fun dates with you in the new year :D Let us take more photos tgt on our next dates.\n\n The first one was when we went to the germantown center and we did work at the library and took some photos on your digi cam. Even though it was simple I thought the date was cute and fun. Look at you staring at me like you're in love with me! \n\n The second photo is from King's Dominion. I like rollercoasters. I was happy to ride some with you even though you don't like them as much! I'm happy you drove going back home too.\n\n Third photo is a calm lil lunch date at the Thai place. You look cute in this sweater. Thanks for taking me out to yummy places. Eating food is always more fun when it's with you.",
    images: ["images/day31.jpg", "images/day311.jpg", "images/day312.jpg"]
  },
  "2026-01-02": {
    note: "Ins and Outs for the big 26",
    memory: "<strong>Ins:</strong> \n\n - Being with you \n - Loving you \n - Awesome dates \n - Making love with you \n\n <strong>Outs:</strong>\n - Arguments xD",
  },
  "2026-01-01": {
    note: "Happy New Year 💖💖💖💖",
    memory: "I'm used to only make resolutions for myself, but I think it could be cool if we have resolutions for our relationship too! \n\n Some ideas I have in mind are to \n - support each other more in our personal goals \n - decorate CDs together \n - go on a trip together :D \n\n Let me know when you see this and your thoughts on mine for our relationship and what yours are for us this year :). I can't wait to see what this year has in store for us !",
  },
  "2026-01-03": {
    note: "Austin Moon",
    memory: "You told me that you don't know who Austin Moon is.. so I wanted to share him with you. He is from disney. And these are my favorite songs from him because it is so cute and romantic and awesome and it makes me happy to be in love. \n \n <strong>I Think About You:</strong> https://open.spotify.com/track/77UkBSuKMG0JrIByQIRdeS?si=d43e07f73c234b54 \n <strong>Steal Your Heart:</strong> https://open.spotify.com/track/3BvnlPEMgrNJwWqWOvZF2L?si=2e0e6fd63b7242cb",
  },
  "2026-01-04": {
    note: "Tb photo",
    memory: "I braided your hair.",
    images: ["images/day4.jpg"],
  },
  "2026-01-05": {
    note: "Haiku",
    memory: "Sungjai is awesome. \n This word is meant for great things. \n It's perfect for you.",
  },
  "2026-01-06": {
    note: "6",
    images: ["images/day6.jpg"],
  },
  "2026-01-07": {
    note: "7",
    images: ["images/7.jpg"],
  },
  "2026-01-08": {
    memory: "was that funny",
  },
  "2026-01-09": {
    note: "Dog bouquet",
    memory: "For you",
    images: ["images/day9.jpg"],
  },
  "2026-01-10": {
    note: "10 Reasons Why I Like You",
    memory: "1. You have a big heart \n 2. You have opinions and care about things that are important to you \n 3. You are the best looking ever \n 4. You play games with me \n 5. You are super smart and hard working \n 6. You treat me like a princess \n 7. You're very genuine \n 8. You're considerate and care about others \n 9. You're my sunshine in the pouring rain \n 10. You're a pick me",
  },
  "2026-01-11": {
    note: "Taylor Swift Song",
    memory: "Yesterday I took a Taylor Swift cycling class. You know a few songs but I'm going to share another one. \n \n It's called Labyrinth and it's about her being in love and I like this song because it reminds me that I am in love with the love of my life! \n \n https://open.spotify.com/track/43q586vP8gGkYypKoSddhl?si=40aecf82c12d455d",
  },
  "2026-01-12": {
    note: "Last First Day",
    memory: "This photo is too cute. I'm happy I got to spend the last first day of school together and I'm excited for all of the other firsts that are yet to come.",
    images: ["images/day12.jpg"],
  },
  "2026-01-13": {
    note: "hello",
    memory: "hello. you make me happy and i love you and i can't wait for the next time i see you. it's a privilege to feel this kind of love and all the feelings that come with it.",
    images: ["images/day13.gif"]
  },
  "2026-01-14": {
    note: "Kayaking",
    memory: "2018 and 2024",
    images: ["images/day14.jpg", "images/day141.jpg"],
  },
  
  // Example birthday day
  "2026-01-29": {
    note: "HAPPY BIRTHDAY 🎉",
    memory: "The absolute best part of my life = you.",
    image: "images/birthday.jpg",
  }
};

// Default template if a day isn't filled yet
function createDefault(label) {
  return {
    note: `${label} 💌`,
    memory: "",
    image: "",
  };
}

// ========== DATE UTILITIES ==========

function getDateList(start, end) {
  const dates = [];
  let current = new Date(start);

  while (current <= end) {
    const y = current.getFullYear();
    const m = String(current.getMonth() + 1).padStart(2, "0");
    const d = String(current.getDate()).padStart(2, "0");
    dates.push(`${y}-${m}-${d}`);
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

const allDates = getDateList(START_DATE, END_DATE);

// Ensure every date has some content
for (const date of allDates) {
  if (!daysData[date]) {
    const dt = parseLocalDateFromKey(date);
    const label = `${MONTH_NAMES[dt.getMonth()]} ${dt.getDate()}`;
    daysData[date] = createDefault(label);
  }
}

// Current real date
const today = new Date();
let maxUnlockedDate = today;

// Debug: unlock everything
if (IS_DEBUG) {
  maxUnlockedDate = new Date(2999, 0, 1);
}

// ========== DOM ELEMENTS ==========

const calendarDecEl = document.getElementById("calendar-dec");
const calendarJanEl = document.getElementById("calendar-jan");

const modalEl = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalNote = document.getElementById("modal-note");
const modalMemory = document.getElementById("modal-memory");
const modalImage = document.getElementById("modal-image");
const modalGallery = document.getElementById("modal-gallery");
const modalVideo = document.getElementById('modal-video')
const openSound = document.getElementById("open-sound");

// Track opened doors in localStorage
const STORAGE_KEY = "advent_opened_days_v3";
let openedDays = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

function saveOpenedDays() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...openedDays]));
}

// ========== BUILD CALENDAR ==========

function createDoor(dateStr) {
  const dt = parseLocalDateFromKey(dateStr);
  const label = `${MONTH_NAMES[dt.getMonth()]} ${dt.getDate()}`;
  const [monthLabel, dayNum] = label.split(" ");

  const door = document.createElement("button");
  door.classList.add("door");
  door.innerHTML = `
    <span class="door-month">${monthLabel}</span>
    <span class="door-day">${dayNum}</span>
  `;

  const isFuture = dt > maxUnlockedDate;
  const isOpened = openedDays.has(dateStr);

  if (isFuture) {
    door.classList.add("door-locked");
  } else if (isOpened) {
    door.classList.add("door-opened");
  } else if (dt.toDateString() === today.toDateString()) {
    door.classList.add("door-today");
  }

  door.addEventListener("click", () => {
    if (dt > maxUnlockedDate) return; // future → locked
    openDoor(dateStr, door);
  });

  return door;
}

function renderCalendar() {
  for (const dateStr of allDates) {
    const dt = parseLocalDateFromKey(dateStr);
    const month = dt.getMonth(); // 11 = Dec, 0 = Jan

    const door = createDoor(dateStr);

    if (month === 11 && calendarDecEl) {
      calendarDecEl.appendChild(door);
    } else if (month === 0 && calendarJanEl) {
      calendarJanEl.appendChild(door);
    }
  }
}

// ========== OPEN DOOR ==========

function openDoor(dateStr, doorEl) {
  const data = daysData[dateStr];

  // Play sound
  if (openSound) {
    openSound.currentTime = 0;
    openSound.play().catch(() => {});
  }

  openedDays.add(dateStr);
  saveOpenedDays();

  doorEl.classList.remove("door-today");
  doorEl.classList.add("door-opened");

  const dt = parseLocalDateFromKey(dateStr);
  modalTitle.textContent = `${MONTH_NAMES[dt.getMonth()]} ${dt.getDate()}`;

  modalNote.textContent = data.note || "";
  modalMemory.innerHTML = data.memory || "";

  // ---- RESET media every time (prevents "works once then breaks") ----
  if (modalImage) {
    modalImage.src = "";
    modalImage.style.display = "none";
  }

  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.style.display = "none";
  }

  if (modalGallery) {
    modalGallery.innerHTML = "";
    modalGallery.classList.remove("show", "cols-1", "cols-2", "cols-3");
  }

  // ---- IMAGES (supports image OR images[]) ----
  const imgs = (data.images && data.images.length)
    ? data.images
    : (data.image ? [data.image] : []);

  if (imgs.length && modalGallery) {
    modalGallery.innerHTML = imgs.map(src => `<img src="${src}" alt="">`).join("");
    modalGallery.classList.add("show", `cols-${Math.min(imgs.length, 3)}`);
  }

  // ---- VIDEO ----
  if (data.video && modalVideo) {
    modalVideo.src = data.video;
    modalVideo.style.display = "block";
  }

  // Finally show modal
  modalEl.classList.remove("hidden");
}


function closeModal() {
  modalEl.classList.add("hidden");

  // stop video
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";
    modalVideo.style.display = "none";
  }
}

closeModalBtn.addEventListener("click", closeModal);

modalEl.addEventListener("click", (e) => {
  if (e.target === modalEl) closeModal();
});

// ========== INIT ==========

renderCalendar();
