// Query selectors
const track = document.querySelector(".speaker-slider__track");
const prevButton = document.querySelector(
  ".speaker-slider-container__button--prev"
);
const nextButton = document.querySelector(
  ".speaker-slider-container__button--next"
);
const cards = document.querySelectorAll(".speaker-slider__card");
const speakerOne = document.querySelector("#speaker-1");
const speakerSection = document.querySelector(".speaker");
const speakerImage = document.querySelector(".speaker__image");
const speakerName = document.querySelector(".speaker__name");
const speakerTitle = document.querySelector(".speaker__title");
const speakerCompany = document.querySelector(".speaker__company");
const speakerBio = document.querySelector(".speaker__bio p");
const speakerSocials = document.querySelector(".speaker__socials");
const closeProfileBtn = document.querySelector(".speaker__close");

const socialIcons = {
  drupal: document.getElementById("speaker-drupal"),
  twitter: document.getElementById("speaker-twitter"),
  linkedin: document.getElementById("speaker-linkedin"),
};

let currentIndex = 0;
const cardWidth =
  document.querySelector(".speaker-slider__card").offsetWidth + 40;
const totalCards = document.querySelectorAll(".speaker-slider__card").length;
console.log(speakerOne);

function updateSliderPosition() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextButton.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

const speakerData = [
  {
    id: 1,
    name: "John Smith",
    title: "Chief Executive Officer",
    company: "Horizon Global",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    socials: {
      drupal: "/images/drupal.svg",
      twitter: "/images/X.svg",
      linkedin: "/images/linkedIn.svg",
    },
    image: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Emily Anderson",
    title: "Chief Marketing Officer",
    company: "Innovatech Solutions",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    socials: {
      drupal: "/images/drupal.svg",
      twitter: "/images/X.svg",
      linkedin: "/images/linkedIn.svg",
    },
    image: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Chief Technology Officer",
    company: "TechAdvance",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    socials: {
      drupal: "/images/drupal.svg",
      twitter: "/images/X.svg",
      linkedin: "/images/linkedIn.svg",
    },
    image: "/images/user3.jpg",
  },
  {
    id: 4,
    name: "James Davis",
    title: "VP of Sales",
    company: "CloudShift",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    socials: {
      drupal: "/images/drupal.svg",
      twitter: "/images/X.svg",
      linkedin: "/images/linkedIn.svg",
    },
    image: "/images/user4.jpg",
  },
  {
    id: 5,
    name: "William Clark",
    title: "Director of Operations",
    company: "Synergy Labs",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    socials: {
      drupal: "/images/drupal.svg",
      twitter: "/images/X.svg",
      linkedin: "/images/linkedIn.svg",
    },
    image: "/images/user5.jpg",
  },
  {
    id: 6,
    name: "Ava Roberts",
    title: "Chief Financial Officer",
    company: "Brightwave",
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    socials: {
      drupal: "/images/drupal.svg",
      twitter: "/images/X.svg",
      linkedin: "/images/linkedIn.svg",
    },
    image: "/images/user6.jpg",
  },
];

speakerOne.addEventListener("click", () => {
  speakerOne.style.display = "flex";
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const speakerCard = document.querySelector(`#speaker-${index + 1}`);
    speakerCard.style.display = "flex";
    // const speakerId = card.getAttribute("data-speaker-id");
    // const speaker = speakerData.find(
    //   (speaker) => speaker.id === parseInt(speakerId)
    // );

    // speakerImage.src = speaker.image;
    // speakerName.textContent = speaker.name;
    // speakerTitle.textContent = speaker.title;
    // speakerCompany.textContent = speaker.company;
    // speakerBio.textContent = speaker.bio;

    // Object.entries(speaker.socials).forEach(([key, value]) => {
    //   if (socialIcons[key]) socialIcons[key].src = value;
    // });

    // speakerSection.style.display = "flex";
  });
});

closeProfileBtn.addEventListener("click", () => {
  speakerSection.style.display = "none";
});
