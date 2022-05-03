const factory = (el)=> {
  const io = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.intersectionRatio > 0)) {
      el.style.transform = "translate(0,0)"
    } else {
      el.style.transform = "translate(-20rem,0)"
    }
  })
  io.observe(el)
  return io
}

const innerItems = document.querySelectorAll('.inner-item')
innerItems.forEach(innerItem => factory(innerItem))


const init = () => {
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");
  const description = document.querySelector(".description")
  const box_items = document.querySelector(".box-items")

  setTimeout(() => {
    title.classList.add("change");
      setTimeout(() => {
        subtitle.classList.add("change");
          setTimeout(() => {
            box_items.classList.add("change");
            setTimeout(() => {
              description.classList.add("change");
            }, 500)
          }, 500)
      }, 500)
  }, 500)
}

init()