const bannerImages = [
  '/mgo-tutorial/images/ss-dragonsreach.webp',
  '/mgo-tutorial/images/ss-college-courtyard-ground.webp',
  '/mgo-tutorial/images/ss-college-hall.webp',
  '/mgo-tutorial/images/ss-falkreath-sunset.webp',
  '/mgo-tutorial/images/ss-college-courtyard-ground.webp',
  '/mgo-tutorial/images/ss-windhelm-west-bridge.webp',
  '/mgo-tutorial/images/ss-windhelm-west.webp',
  '/mgo-tutorial/images/ss-archmage-alchemy-wide.webp',
  '/mgo-tutorial/images/ss-archmage-enchanter.webp',
  '/mgo-tutorial/images/ss-archmage-potions.webp',
  '/mgo-tutorial/images/ss-archmage-staff.webp',
  '/mgo-tutorial/images/ss-archmage.webp',
  '/mgo-tutorial/images/ss-barrow-akaviri.webp',
  '/mgo-tutorial/images/ss-rorikstead.webp',
  '/mgo-tutorial/images/ss-archaeology.webp'
];
window.onload = function() {
  const cover = document.querySelector('.cover');
  if (cover) {
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
    cover.style.backgroundImage = `url(${randomImage})`;
  }
};
