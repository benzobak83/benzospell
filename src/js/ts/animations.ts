import ScrollMagic from "scrollmagic";

const animation = (selector: string, animate: string, delay: number): void => {
  const item = document.querySelector(selector);

  setTimeout(() => {
    item.classList.add(animate);
  }, delay);
};

const scrollMagick = () => {
  let controller = new ScrollMagic.Controller();
  const screenWidth: number = window.screen.width;

  const activateAnim = (trigger, selector, nameAnim) => {
    {
      let scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        offset: -50,
      });

      // trigger animation by adding a css class
      scene.setClassToggle(selector, nameAnim);

      scene.addTo(controller);
    }
  };

  for (let i = 1; i <= 4; i++) {
    let scene;
    if (screenWidth < 540) {
      scene = new ScrollMagic.Scene({
        triggerElement: `${
          i === 1 ? ".guide__title_animate" : ".guide__item_" + (i - 1)
        }`,
      });
    } else {
      scene = new ScrollMagic.Scene({
        triggerElement: `.guide__title_animate`,
      });
    }

    scene.setClassToggle(`.guide__item_${i}`, "swipeOutLeft");

    scene.addTo(controller);
  }

  for (let i = 1; i <= 2; i++) {
    setTimeout(() => {
      activateAnim(`.formats`, `.formats__list${i}`, "swipeOutBottom");
    }, i * 500);
  }

  const liAdvantagesLength =
    document.querySelectorAll(".advantages__item").length;
  for (let i = 1; i <= liAdvantagesLength; i++) {
    if (screenWidth < 540) {
      activateAnim(
        `.advantages__item${i}`,
        `.advantages__item${i}`,
        "swipeOutBottom"
      );
    } else {
      activateAnim(
        `.advantages__item`,
        `.advantages__item${i}`,
        "swipeOutBottom"
      );
    }
  }
  const capabilitiesItemLength = document.querySelectorAll(
    ".capabilities__item"
  ).length;
  for (let i = 1; i <= capabilitiesItemLength; i++) {
    if (screenWidth < 540) {
      activateAnim(
        `.capabilities__item${i}`,
        `.capabilities__item${i}`,
        "swipeOutBottom"
      );
    } else {
      activateAnim(
        `.advantages__item_last`,
        `.capabilities__item${i}`,
        "swipeOutBottom"
      );
    }
  }

  activateAnim(".guide ", ".guide__title_animate", "fadeIn");
  activateAnim(".guide ", ".guide__line", "fadeIn");

  activateAnim(".advantages", ".advantages__title", "swipeOutRight");
  activateAnim(
    ".advantages__item_last",
    ".capabilities__title_animate",
    "fadeIn"
  );
};
export { animation, scrollMagick };
