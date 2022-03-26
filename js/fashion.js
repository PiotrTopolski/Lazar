const galleryList = document.querySelectorAll(".--portfolio .column .item");
const galleryContentList = document.querySelectorAll(".--portfolio .sub-gallery__wrapper");
const backBtn = document.querySelector(".sub-gallery__header");

galleryList.forEach((item, id) => {
  item.addEventListener("click", () => {
    backBtn.classList.add("--active");
    galleryContentList[id].classList.add("--active");

    const masonryMc = new Macy({
      container: `#sub-gallery-column-${id + 1}`,
      mobileFirst: true,
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
  })
})

backBtn.addEventListener("click", () => {
  backBtn.classList.remove("--active");
  galleryContentList.forEach(item => {
    item.classList.remove("--active");
  })
})

const masonryFs = new Macy({
  container: '.column.--fashion',
  mobileFirst: true,
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
    }
  }
})