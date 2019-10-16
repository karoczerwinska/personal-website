function intro() {
    TweenMax.to('.loading-screen', 4, {
        delay: 6.6,
        top: '-110%',
        ease: Expo.easeInOut
  });

let timeline = new TimelineMax();

timeline.from('.ring-one', 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
  }).from('.ring-two', 4, {
      delay: 0.9,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
  }, '-=5').to('.ring-one', 4, {
      delay: 0.4,
      x: 40,
      ease: Expo.easeInOut
  }).to('.ring-two', 4, {
      delay: 0.9,
      x: 40,
      ease: Expo.easeInOut
  },'-=5');
}

export { intro }