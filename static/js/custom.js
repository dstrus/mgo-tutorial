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

const backgroundImages = [
  '/mgo-tutorial/images/bg-amulet-of-mara.webp',
  '/mgo-tutorial/images/bg-clavicus-vile.webp',
  '/mgo-tutorial/images/bg-golden-claw.webp',
  '/mgo-tutorial/images/bg-miraak.webp',
  '/mgo-tutorial/images/bg-molag-bal.webp',
  '/mgo-tutorial/images/bg-nightingales.webp',
  '/mgo-tutorial/images/bg-krosis.webp',
  '/mgo-tutorial/images/bg-daedric-helmet.webp'
];
window.onload = function() {
  const alertBoxes = document.querySelectorAll('.aside-alert .body');
  alertBoxes.forEach(function(alertBox) {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    alertBox.style.backgroundImage = `url(${randomImage})`;
  });
};