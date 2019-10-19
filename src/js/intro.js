function intro() {
    TweenMax.to('.loading-screen', 4, {
        delay: 6.6,
        top: '-110%',
        ease: Expo.easeInOut
  });
    TweenMax.staggerFrom(".social-media ul li", 2, {
        delay: 8.7,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, 0.1);
    TweenMax.staggerFrom(".sidebar-menu-container ul li", 2, {
        delay: 8.7,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, 0.1);
    TweenMax.from(".menu-icon", 3, {
        delay: 8.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
  });
  TweenMax.from(".greeting", 3, {
    delay: 8.2,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
});

TweenMax.from(".name", 3, {
    delay: 8.5,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
});

TweenMax.from(".position", 3, {
    delay: 8.8,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
});

TweenMax.from(".phrase", 3, {
    delay: 9.1,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
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