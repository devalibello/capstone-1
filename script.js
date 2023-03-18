const menu = document.querySelector('.nav-icon');
const menuClose = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.side-menu');

menu.addEventListener('click', () => {
  const showMenu = document.querySelector('.slide-menu-background');
  showMenu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
  const showMenu = document.querySelector('.slide-menu-background');
  showMenu.classList.add('active');
});

menuLinks.forEach((element) => {
  element.addEventListener('click', () => {
    const showMenu = document.querySelector('.slide-menu-background');
    showMenu.classList.add('active');
  });
});

const keySpeakers = [
  {
    image: './img/speaker_01 1.svg',
    name: 'Adamu Yakubu',
    school: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    image: './img/speaker_01 1(1).svg',
    name: 'Kilnam Chon',
    school: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    image: './img/speaker_01 1(2).svg',
    name: 'Julia Leda',
    school: 'Executive Director of the Wikimedia Foundation',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: './img/speaker_01 1(3).svg',
    name: 'Lila tretikov',
    school: 'Executive Director of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    image: './img/speaker_01 1(4).svg',
    name: ' Ryan Merkley',
    school: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
  {
    image: './img/speaker_01 1(5).svg',
    name: 'Ali Yakubu',
    school: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const card = document.getElementById('speakers-container');
function displaySpeakers(id) {
  card.innerHTML
            += `<div class="key-speakers-details-one">
                <div class="key-speakers-pic">
                    <img src='${keySpeakers[id].image}' alt=""/>
                </div>
                <div class="key-speakers-text">
                    <ul class="key-speakers-text-list">
                        <li class="key-speaker-name">${keySpeakers[id].name}</li>
                        <li class="key-speaker-school">${keySpeakers[id].school}</li>
                        <li><i class="fa-solid fa-horizontal-rule line-ash-main"></i></li>
                        <li class="key-speaker-bio">${keySpeakers[id].bio}</li>
                    </ul>
                </div>
            </div>`;
}

for (let i = 0; i < keySpeakers.length; i += 1) {
  displaySpeakers(i);
}
