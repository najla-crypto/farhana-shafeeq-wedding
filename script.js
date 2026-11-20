// Wedding details: retained from the supplied project README.
const wedding = {
  date: "2026-12-27T12:00:00",
  dateText: "Sunday, 27 December 2026",
  timeText: "12:00 PM",
  venueName: "MCMJ Auditorium",
  venueAddress: "SPW Rd, Choornikkara, Kochi",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=MCMJ+Auditorium%2C+SPW+Rd%2C+Choornikkara%2C+Kochi",
};

// Animated invitation: runs automatically on page load.
const intro = document.getElementById("filmIntro");
const slides = [...document.querySelectorAll(".film-slide")];
const progress = document.querySelector("#filmProgress span");
const music = document.getElementById("backgroundMusic");
const audioHint = document.getElementById("audioHint");
const enableAudio = document.getElementById("enableAudio");
const enterSite = document.getElementById("enterSite");
const skipFilm = document.getElementById("skipFilm");
let currentSlide = 0;
let slideTimer = null;
let finished = false;
const slideDuration = 2600;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  currentSlide = index;
  progress.style.width = `${((index + 1) / slides.length) * 100}%`;
}

function finishIntro() {
  if (finished) return;
  finished = true;
  clearTimeout(slideTimer);
  intro.classList.add("film-finished");
  document.body.classList.add("site-ready");
  window.setTimeout(() => { intro.hidden = true; }, 1100);
}

function advanceSlide() {
  if (finished) return;
  if (currentSlide >= slides.length - 1) {
    finishIntro();
    return;
  }
  showSlide(currentSlide + 1);
  slideTimer = window.setTimeout(advanceSlide, slideDuration);
}

function startAnimation() {
  showSlide(0);
  slideTimer = window.setTimeout(advanceSlide, slideDuration);
}

async function tryAutoplay() {
  try {
    await music.play();
    document.getElementById("musicText").textContent = "Pause nasheed";
  } catch (error) {
    // Modern browsers often block audible autoplay. Offer a clear one-tap start.
    audioHint.hidden = false;
  }
}

enableAudio.addEventListener("click", async () => {
  try {
    await music.play();
    audioHint.hidden = true;
    document.getElementById("musicText").textContent = "Pause nasheed";
  } catch (error) {
    audioHint.querySelector("span").textContent = "Audio unavailable";
  }
});

enterSite.addEventListener("click", finishIntro);
skipFilm.addEventListener("click", finishIntro);
startAnimation();
tryAutoplay();

// Wedding details and countdown.
document.getElementById("dateLabel").textContent = wedding.dateText;
document.getElementById("eventDate").textContent = wedding.dateText;
document.getElementById("eventTime").textContent = wedding.timeText;
document.getElementById("venueName").textContent = wedding.venueName;
document.getElementById("venueAddress").textContent = wedding.venueAddress;
document.getElementById("mapLink").href = wedding.mapUrl;

function updateCountdown() {
  const diff = new Date(wedding.date).getTime() - Date.now();
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<p class='date-line'>The celebration day is here!</p>";
    return;
  }
  const values = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000)
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
window.setInterval(updateCountdown, 1000);


// Footer music control.
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicText.textContent = "Pause nasheed";
    } catch (error) {
      audioHint.hidden = false;
    }
  } else {
    music.pause();
    musicText.textContent = "Play nasheed";
  }
});
music.addEventListener("ended", () => { musicText.textContent = "Play nasheed"; });
