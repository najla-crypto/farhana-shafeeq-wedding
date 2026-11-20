// EDIT YOUR WEDDING DETAILS IN THIS SECTION
const wedding = {
  // Nikkah date and time in India Standard Time (device-local time is used).
  date: "2026-12-27T12:00:00",
  dateText: "Sunday, 27 December 2026",
  timeText: "12:00 PM",
  venueName: "MCMJ Auditorium",
  venueAddress: "SPW Rd, Choornikkara, Kochi",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=MCMJ+Auditorium%2C+SPW+Rd%2C+Choornikkara%2C+Kochi",
  // RSVP WhatsApp number with India country code, digits only.
  whatsappNumber: "918590568975"
};

document.getElementById("openInvite").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  window.setTimeout(() => document.getElementById("intro").style.display = "none", 950);
});

document.getElementById("dateLabel").textContent = wedding.dateText;
document.getElementById("eventDate").textContent = wedding.dateText;
document.getElementById("eventTime").textContent = wedding.timeText;
document.getElementById("venueName").textContent = wedding.venueName;
document.getElementById("venueAddress").textContent = wedding.venueAddress;
const mapLink = document.getElementById("mapLink");
if (wedding.mapUrl) mapLink.href = wedding.mapUrl;
else { mapLink.href = "https://www.google.com/maps"; }

function updateCountdown() {
  if (!wedding.date) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "—");
    return;
  }
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
  Object.entries(values).forEach(([id,value]) => document.getElementById(id).textContent = String(value).padStart(2,"0"));
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guestCount").value;
  if (!wedding.whatsappNumber) {
    alert("RSVP contact details will be available soon. Please contact the families directly for now.");
    return;
  }
  const message = `Wedding RSVP - Farhana & Shafeeq%0AName: ${encodeURIComponent(name)}%0AResponse: ${encodeURIComponent(attendance)}%0ANumber of guests: ${guests}`;
  window.open(`https://wa.me/${wedding.whatsappNumber}?text=${message}`, "_blank");
});

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); musicText.textContent = "Pause music"; }
    catch { alert("Add your MP3 file as assets/music/wedding-music.mp3 first."); }
  } else {
    music.pause(); musicText.textContent = "Play music";
  }
});
