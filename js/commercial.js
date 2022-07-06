const masonryFs = new Macy({
  container: '.column.--commercial',
  mobileFirst: true,
  waitForImages: true,
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
    }
  }
})

// macy_instance.runOnImageLoad(function () { macy_instance.recalculate(true); }, true);