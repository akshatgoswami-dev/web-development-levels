const users = [
  {
    name: "Emma Wilson Allen Baker",
    pic: "https://i.pravatar.cc/300?img=5",
    bio: "living for sunsets 🌅 | book lover 📚",
  },
  {
    name: "Michael Brown",
    pic: "https://i.pravatar.cc/300?img=12",
    bio: "code. coffee. repeat. ☕💻",
  },
  {
    name: "Sophia Davis",
    pic: "https://i.pravatar.cc/300?img=23",
    bio: "dream big ✨ | travel addict 🌍",
  },
  {
    name: "Daniel Miller",
    pic: "https://i.pravatar.cc/300?img=15",
    bio: "gym > excuses 💪",
  },
  {
    name: "Olivia Taylor",
    pic: "https://i.pravatar.cc/300?img=32",
    bio: "collecting memories, not things 📸",
  },
  {
    name: "William Anderson",
    pic: "https://i.pravatar.cc/300?img=54",
    bio: "late night thinker 🌙",
  },
  {
    name: "Isabella Thomas",
    pic: "https://i.pravatar.cc/300?img=41",
    bio: "music is therapy 🎧🖤",
  },
  {
    name: "James White",
    pic: "https://i.pravatar.cc/300?img=61",
    bio: "building cool stuff with JavaScript ⚡",
  },
  {
    name: "Mia Harris",
    pic: "https://i.pravatar.cc/300?img=47",
    bio: "good vibes only 🌸",
  },
  {
    name: "Benjamin Martin",
    pic: "https://i.pravatar.cc/300?img=68",
    bio: "clouds in the sky ☁️, code in the IDE 💻",
  },
  {
    name: "Charlotte Moore",
    pic: "https://i.pravatar.cc/300?img=49",
    bio: "smile more, worry less 😊",
  },
  {
    name: "Ethan Clark",
    pic: "https://i.pravatar.cc/300?img=70",
    bio: "AI enthusiast 🤖 | curious mind",
  },
  {
    name: "Ava Johnson",
    pic: "https://i.pravatar.cc/300?img=71",
    bio: "coffee ☕ | coding till midnight 🌙",
  },
  {
    name: "Noah Walker",
    pic: "https://i.pravatar.cc/300?img=72",
    bio: "fitness 💪 | discipline > motivation",
  },
  {
    name: "Lily Scott",
    pic: "https://i.pravatar.cc/300?img=73",
    bio: "books 📚 | rainy days 🌧️",
  },
  {
    name: "Jacob Lewis",
    pic: "https://i.pravatar.cc/300?img=74",
    bio: "building ideas 🚀 | learning daily",
  },
  {
    name: "Grace Hall",
    pic: "https://i.pravatar.cc/300?img=75",
    bio: "nature 🍃 | photography 📷",
  },
  {
    name: "Henry Young",
    pic: "https://i.pravatar.cc/300?img=76",
    bio: "music 🎵 | calm mind 🧠",
  },
  {
    name: "Chloe King",
    pic: "https://i.pravatar.cc/300?img=77",
    bio: "art 🎨 | creative soul ✨",
  },
  {
    name: "Lucas Allen",
    pic: "https://i.pravatar.cc/300?img=78",
    bio: "gaming 🎮 | problem solver 🧩",
  },
  {
    name: "Zoe Wright",
    pic: "https://i.pravatar.cc/300?img=79",
    bio: "travel ✈️ | sunsets 🌅",
  },
  {
    name: "Ryan Green",
    pic: "https://i.pravatar.cc/300?img=80",
    bio: "AI 🤖 | curious forever 🔍",
  },

  {
    name: "Emily Carter",
    pic: "https://i.pravatar.cc/300?img=81",
    bio: "dream big 🌟 | stay humble 🌿",
  },
  {
    name: "Nathan Brooks",
    pic: "https://i.pravatar.cc/300?img=82",
    bio: "tech 💻 | coffee addict ☕",
  },
  {
    name: "Sofia Reed",
    pic: "https://i.pravatar.cc/300?img=83",
    bio: "music 🎶 | good vibes ✨",
  },
  {
    name: "Dylan Foster",
    pic: "https://i.pravatar.cc/300?img=84",
    bio: "adventure 🏕️ | always curious 🔍",
  },
  {
    name: "Hannah Cooper",
    pic: "https://i.pravatar.cc/300?img=85",
    bio: "cat lover 🐱 | chai enthusiast 🍵",
  },
  {
    name: "Jack Bennett",
    pic: "https://i.pravatar.cc/300?img=86",
    bio: "frontend ⚛️ | pixel perfection 🎨",
  },
  {
    name: "Ella Murphy",
    pic: "https://i.pravatar.cc/300?img=87",
    bio: "sketching ✏️ | sunshine ☀️",
  },
  {
    name: "Logan Parker",
    pic: "https://i.pravatar.cc/300?img=88",
    bio: "football ⚽ | teamwork 🤝",
  },
  {
    name: "Victoria Evans",
    pic: "https://i.pravatar.cc/300?img=89",
    bio: "reading 📖 | lifelong learner 🧠",
  },
  {
    name: "Owen Mitchell",
    pic: "https://i.pravatar.cc/300?img=90",
    bio: "JavaScript ⚡ | bugs fear me... eventually 🐛",
  },
  {
    name: "Scarlett Hughes",
    pic: "https://i.pravatar.cc/300?img=91",
    bio: "late-night coder 🌙 | tea lover 🍵",
  },
  {
    name: "Caleb Richardson",
    pic: "https://i.pravatar.cc/300?img=92",
    bio: "gym 💪 | consistency wins 🏆",
  },
  {
    name: "Aria Powell",
    pic: "https://i.pravatar.cc/300?img=93",
    bio: "capturing moments 📸 | traveler ✈️",
  },
  {
    name: "Mason Simmons",
    pic: "https://i.pravatar.cc/300?img=94",
    bio: "code. sleep. repeat. 💻",
  },
  {
    name: "Layla Foster",
    pic: "https://i.pravatar.cc/300?img=95",
    bio: "flowers 🌸 | positive energy ✨",
  },
  {
    name: "Sebastian Ross",
    pic: "https://i.pravatar.cc/300?img=96",
    bio: "basketball 🏀 | always improving 📈",
  },
  {
    name: "Aurora Price",
    pic: "https://i.pravatar.cc/300?img=97",
    bio: "painting 🎨 | dreaming big 🌈",
  },
  {
    name: "Levi Morgan",
    pic: "https://i.pravatar.cc/300?img=98",
    bio: "AI enthusiast 🤖 | future builder 🚀",
  },
  {
    name: "Natalie Bell",
    pic: "https://i.pravatar.cc/300?img=99",
    bio: "reading 📚 | coffee ☕ | peace 🌿",
  },
  {
    name: "Isaac Bailey",
    pic: "https://i.pravatar.cc/300?img=100",
    bio: "web developer 🌐 | debugging one bug at a time 🐞",
  },
];

let userContainer = document.querySelector(".users");

function showUsers(arr) {
  arr.forEach(function (user) {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const heading = document.createElement("h2");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    userCard.appendChild(heading);
    userCard.appendChild(para);

    userContainer.appendChild(userCard);
  });
}

showUsers(users);

let Search = document.querySelector("#Search");

Search.addEventListener("input", (e) => {
  const typedText = Search.value.toLowerCase();

  const filteredUsers = users.filter((user) => {
    return user.name.trim().toLowerCase().includes(typedText);
  });
  userContainer.innerHTML = "";
  showUsers(filteredUsers);

  if (filteredUsers.length === 0) {
    console.log("Yes");
    const noUser = document.createElement("h2");
    noUser.textContent = "No User Found";
    noUser.classList.add("h2-display");
    userContainer.appendChild(noUser);
  } else {
    showUsers(filteredUsers);
  }
});
