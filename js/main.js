

window.onload = function() {
  const masonry = new Macy({
    container: '.column',
    mobileFirst: true,
    waitForImages: false,
    columns: 2,
    margin: {
      x: 4,
      y: 4
    },
    breakAt: {
      757: {
        margin: {
          x: 14,
          y: 14,
        },
        columns: 3
      },
      1440: {
        margin: {
          x: 14,
          y: 14,
        },
        columns: 4
      },
      1620: {
        margin: {
          x: 14,
          y: 14,
        },
        columns: 5
      }
    }
  })
};


// macy_instance.runOnImageLoad(function () { macy_instance.recalculate(true); }, true);