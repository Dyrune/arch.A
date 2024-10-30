// src/utils/scrollAnimation.js

import $ from 'jquery';

export function initializeScrollAnimation() {
  const $animationElements = $('.animation-element');
  const $window = $(window);

  function checkIfInView() {
    const windowHeight = $window.height();
    const windowTopPosition = $window.scrollTop();
    const windowBottomPosition = windowTopPosition + windowHeight;

    $.each($animationElements, function () {
      const $element = $(this);
      const elementHeight = $element.outerHeight();
      const elementTopPosition = $element.offset().top;
      const elementBottomPosition = elementTopPosition + elementHeight;

      // Check if this element is within the viewport
      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition &&
        !$element.hasClass('in-view') // Ensure animation only triggers once
      ) {
        $element.addClass('in-view');
      }
    });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');

  // Cleanup event listeners when called
  return () => {
    $window.off('scroll resize', checkIfInView);
  };
}
