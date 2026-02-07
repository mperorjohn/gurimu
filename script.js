import { animate, scroll, inView, spring } from "https://cdn.jsdelivr.net/npm/motion@10.17.0/+esm";

const pickupLines = [
    "Are you a camera? Because every time I look at you, I smile. 📸",
    "Do you have a map? Because I just got lost in your photos. 🗺️",
    "If you were a vegetable, you'd be a Cute-cumber! 🥒",
    "Is your name Google? Because you have everything I’ve been searching for. 🔍",
    "Are you a magician? Because whenever I look at you, everyone else disappears. ✨",
    "Do you believe in love at first sight, or should I walk by again? 😉",
    "You must be a campfire, because you're hot and I want s'mores. 🔥",
    "If kisses were snowflakes, I'd send you a blizzard. ❄️",
    "Is it hot in here or is it just you? 🥵",
    "You look so familiar... didn't we take a class together? I could've sworn we had chemistry. 🧪",
    "Are you a loan? Because you've got my interest. 💰",
    "Do you have a Band-Aid? I just scraped my knee falling for you. 🤕",
    "If you were a fruit, you'd be a Fine-apple. 🍍",
    "Is your name Wi-Fi? Because I'm really feeling a connection. 📶",
    "Are you a time traveler? Because I see you in my future. 🔮",
    "Do you know CPR? Because you take my breath away. 🫁",
    "If beauty were a crime, you’d be serving a life sentence. 👮‍♀️",
    "Are you made of copper and tellurium? Because you're Cu-Te. 🧪",
    "I must be a snowflake, because I've fallen for you. ❄️",
    "Is there a rainbow today? I just found the treasure I've been looking for. 🌈",
    "Are you a parking ticket? Because you've got FINE written all over you. 🅿️",
    "Do you drink Starbucks? Because I like you a latte. ☕",
    "If you were a triangle, you'd be acute one. 📐",
    "Are you a cat? Because you're purr-fect. 🐱",
    "I'm not a photographer, but I can picture us together. 📸",
    "Are you a keyboard? Because you're just my type. ⌨️",
    "If I could rearrange the alphabet, I'd put U and I together. 🔤",
    "Are you French? Because Eiffel for you. 🗼",
    "Do you have a name, or can I call you mine? 💍",
    "Are you a star? Because your beauty lights up the night. 🌟",
    "If you were words on a page, you’d be fine print. 📄",
    "I must be hunting treasure because I’m digging you. 🏴‍☠️",
    "Are you a volcano? Because I lava you. 🌋",
    "Do you believe in fate? Because I think we were meant to meet. 🧶",
    "Are you a dictionary? Because you add meaning to my life. 📖",
    "If you were a burger at McDonald's, you'd be the McGorgeous. 🍔",
    "Are you a bank loan? Because you got my interest. 🏦",
    "I'm learning about important dates in history. Do you want to be one of them? 📅",
    "Are you lost, ma'am? Because heaven is a long way from here. 😇",
    "If you were a transformer, you'd be Optimus Fine. 🤖",
    "Are you a light bulb? Because you brighten up my day. 💡",
    "Do you like Star Wars? Because Yoda one for me. 🌌",
    "Are you a 90 degree angle? Because you are looking right! 📐",
    "If you were a song, you'd be the best track on the album. 🎵",
    "Are you a broom? Because you just swept me off my feet. 🧹",
    "Do you have a sunburn, or are you always this hot? ☀️",
    "I’m no mathematician, but I’m pretty good with numbers. Tell you what, give me yours and watch what I can do with it. 🔢",
    "Are you a banana? Because I find you a-peeling. 🍌",
    "Is your name Chapstick? Because you're da balm. 💄"
];

// Beautiful Japanese Names & Meanings
const mediaItems = [
    { file: "WhatsApp Image 2026-01-22 at 6.03.39 PM(1).jpeg", caption: "Emi (Beautiful Smile)" },
    { file: "WhatsApp Image 2026-01-22 at 6.03.39 PM.jpeg", caption: "Takaramono (My Treasure)" },
    { file: "WhatsApp Image 2026-01-28 at 7.21.45 PM.jpeg", caption: "Tenshi (Angel)" },
    { file: "WhatsApp Image 2026-01-29 at 10.08.57 AM.jpeg", caption: "Hoshi (Star)" },
    { file: "WhatsApp Image 2026-01-29 at 10.46.26 AM.jpeg", caption: "Yuki (Happiness)" },
    { file: "WhatsApp Video 2026-01-22 at 8.36.28 AM.mp4", caption: "Hikari (Light)" },
    { file: "WhatsApp Video 2026-01-24 at 4.16.04 PM.mp4", caption: "Eien no Chikai (Eternal Vow)" },
    { file: "WhatsApp Video 2026-01-26 at 7.38.41 PM.mp4", caption: "Wata no Subete (My Everything)" },
    { file: "2 Instagram Messages.mp4", caption: "Kiseki (Miracle)" },
    { file: "2 Instagram Messages(1).mp4", caption: "Itoshii Hito (Dearest One)" },
    { file: "597984178_1797660524269338_1913333116213182955_n.jpg", caption: "Kokoro (Heart)" },
    { file: "599261966_1429358708533392_4533850424789199541_n.jpg", caption: "Bijin (Beautiful Person)" },
    { file: "616915810_945080674616182_199544052087882449_n.jpg", caption: "Yume (Dream)" },
    { file: "617403292_1215370943329632_4336770109004589889_n.jpg", caption: "Unmei no Hito (Soulmate)" }
];

// Open Box Logic
document.getElementById('giftBox').addEventListener('click', function() {
    if (this.classList.contains('open')) return;
    
    this.classList.add('open');
    document.getElementById('hint').style.display = 'none';
    
    // Animate Box away using Motion
    animate(".gift-container", { scale: 1.2, opacity: 0 }, { duration: 0.8, delay: 0.5 });

    // Reveal Celebration
    setTimeout(() => {
        this.style.display = 'none'; 
        const celebration = document.getElementById('celebration');
        celebration.style.display = 'flex'; // Ensure it's display flex for layout
        
        // Staggered entrance for content
        animate(
            ".celebration-content",
            { opacity: [0, 1] }, 
            { duration: 1 }
        );
        
        animate(
            ".celebration-content > *", 
            { y: [50, 0], opacity: [0, 1] },
            { delay: 0.2, duration: 0.8, easing: spring() }
        );

        loadGallery();
        nextMessage();
    }, 1000);

    // Effects
    createBalloons();
    startConfetti();
});

// Pickup Line Generator
window.nextMessage = function() { // Attach to window for onClick
    const line = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    const el = document.getElementById('pickupLine');
    
    animate(el, { opacity: 0, scale: 0.9 }, { duration: 0.2 }).finished.then(() => {
        el.innerText = line;
        animate(el, { opacity: 1, scale: 1 }, { duration: 0.3 });
    });
}

// Gallery Loader with Motion
function loadGallery() {
    const container = document.getElementById('photoGallery');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    mediaItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'photo-card';
        
        // Manual rotation for style
        const rot = Math.random() * 6 - 3; 
        div.style.setProperty('--rot', rot + 'deg');
        
        // Force initial state for animation
        div.style.opacity = '0'; 
        div.style.transform = 'translateY(50px) scale(0.9)';

        let mediaElement;
        if (item.file.endsWith('.mp4')) {
            mediaElement = document.createElement('video');
            mediaElement.src = `images/${item.file}`;
            mediaElement.controls = true;
            mediaElement.autoplay = true; 
            mediaElement.loop = true;
            mediaElement.muted = true; 
            mediaElement.playsInline = true;
        } else {
            mediaElement = document.createElement('img');
            mediaElement.src = `images/${item.file}`;
            mediaElement.alt = item.caption;
            mediaElement.loading = "lazy";
        }
        
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.innerText = item.caption;

        div.appendChild(mediaElement);
        div.appendChild(caption);
        container.appendChild(div);

        // Animate when in view using Motion
        if (isMobile) {
             inView(div, (info) => {
                animate(
                    div, 
                    { opacity: 1, y: 0, scale: 1, rotate: rot },
                    { duration: 0.8, easing: spring({ stiffness: 50, damping: 15 }) }
                );
            });
        } else {
             animate(
                div, 
                { opacity: 1, y: 0, scale: 1, rotate: rot },
                { 
                    duration: 0.8, 
                    delay: 0.1 * index, 
                    easing: spring({ stiffness: 50, damping: 15 }) 
                }
            );
        }
    });

    // Initialize Story Typewriter
    initStory();
}

// Story Content
const storyText = `There was once a boy who believed love was loud — fireworks, grand speeches, and perfect timing.
Then he met a girl who changed his definition of love completely.

She didn’t arrive with thunder or lightning.
She arrived quietly… with a smile that felt like sunrise after a long night.

Every day, the boy found himself looking forward to simple things:
her laughter, the way her eyes spoke before her lips did, the calm he felt just knowing she existed.

One day he realized something strange —
his world had not become bigger,
it had become warmer.

So he made a wish, not to own her heart,
but to walk beside it.
To be the reason she smiles when days feel heavy.
To be the place she feels safe when the world feels loud.

And if she ever asked him when it all began,
he would say:

“It started the moment I stopped seeing you as just someone I admire…
and began seeing you as someone I want to love.”`;

function initStory() {
    const storyContainer = document.getElementById('storyText');
    const container = document.getElementById('storyContainer'); // For background fade in
    
    // Initially hide
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    container.style.transition = 'opacity 1s ease, transform 1s ease';

    // Trigger on scroll
    inView(container, () => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        // Initialize Audio Context on first interaction/view if possible, 
        // but browsers usually block auto-audio. 
        // We'll rely on the user having interacted with the page (click gift) previously.
        typeWriter(storyContainer, storyText, 0);
    });
}

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        
        // Random typing speed for realism (30-80ms)
        const speed = Math.random() * 50 + 30; 
        setTimeout(() => typeWriter(element, text, i + 1), speed);
    }
}

// Text-to-Speech for Japanese
const japaneseMap = {
    "Emi": "笑み", // Smile
    "Takaramono": "宝物", // Treasure
    "Tenshi": "天使", // Angel
    "Hoshi": "星", // Star
    "Yuki": "幸", // Happiness (Name reading) or 雪 (Snow). Using Kana for sound safety: "ユキ"
    "Hikari": "光", // Light
    "Eien no Chikai": "永遠の誓い", // Eternal Vow
    "Wata no Subete": "私の全て", // My Everything (assuming Watashi)
    "Kiseki": "奇跡", // Miracle
    "Itoshii Hito": "愛しい人", // Beloved
    "Kokoro": "心", // Heart
    "Bijin": "美人", // Beautiful Person
    "Yume": "夢", // Dream
    "Unmei no Hito": "運命の人", // Soulmate
    "Saiai": "最愛",
    "Eien no Ai": "永遠の愛" 
};

function speakJapanese(text) {
    const romaji = text.split('(')[0].trim();
    // Look up Japanese characters, default to Romaji if not found
    // If 'Yuki', force 'ユキ' to ensure it says 'Yuki' and not 'Sachi' for the Kanji 幸
    let pronounceText = japaneseMap[romaji] || romaji;
    
    if (romaji === "Yuki") pronounceText = "ユキ"; 
    if (romaji === "Wata no Subete") pronounceText = "ワタシノスベテ"; // Force reading

    window.speechSynthesis.cancel(); 

    const utterance = new SpeechSynthesisUtterance(pronounceText);
    utterance.lang = 'ja-JP'; 
    utterance.volume = 1; 
    utterance.rate = 1; 
    utterance.pitch = 1; 

    // Essential: Load voices if not ready
    let voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            setVoiceAndSpeak(utterance, voices);
        };
    } else {
        setVoiceAndSpeak(utterance, voices);
    }
}

function setVoiceAndSpeak(utterance, voices) {
    // prioritize native Japanese voices
    const jaVoice = voices.find(v => v.lang === 'ja-JP') || voices.find(v => v.lang.includes('ja'));
    if (jaVoice) utterance.voice = jaVoice;
    
    window.speechSynthesis.speak(utterance);
}

// Effects (Same as before but refined)
function createBalloons() {
    const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#8fd3f4'];
    const container = document.body;
    
    for(let i=0; i<40; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        const size = Math.random() * 30 + 30; 
        balloon.style.width = size + 'px';
        balloon.style.height = (size * 1.2) + 'px';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.bottom = '-100px';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.borderRadius = '50%';
        balloon.style.opacity = '0.8';
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        
        // String
        const string = document.createElement('div');
        string.style.position = 'absolute';
        string.style.bottom = '-10px';
        string.style.left = '50%';
        string.style.width = '2px';
        string.style.height = '40px';
        string.style.background = 'rgba(255,255,255,0.5)';
        balloon.appendChild(string);

        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 10000);
    }
}

function startConfetti() {
    const colors = ['#fce4ec', '#f8bbd0', '#e1bee7', '#d1c4e9', '#c5cae9'];
    const interval = setInterval(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.top = '-10px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }, 50);

    setTimeout(() => clearInterval(interval), 15000); // Longer confetti time
}

// Inline Keyframes for confetti (since it's dynamically added)
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes confettiFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}`;
document.head.appendChild(styleSheet);
