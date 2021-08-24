const dots = document.querySelector('.items__button');
const allWidth = document.body.clientWidth;
const allHeight = document.body.clientHeight;


const moveSlide = (indexItem = 0, triggerBlock, widthItem = 0) => {
  
  if (allWidth > 1224) {
    document.querySelector(triggerBlock).style.transform = `translate3d(${widthItem - (((allWidth-20)/3) * indexItem)}px, 0px, 0px)`;
    const imageItems = document.querySelectorAll('.all__items .item__photo');
    imageItems.forEach((item) => {
      item.style.height = allHeight*0.2;
      item.style.width = `${(allWidth-20)/3}px`;
      item.style.opacity = 1;
    })
  }
  if (allWidth < 1224) {
    document.querySelector(triggerBlock).style.transform = `translate3d(${widthItem - (((allWidth-10)/2) * indexItem)}px, 0px, 0px)`;
    const imageItems = document.querySelectorAll('.all__items .item__photo');
    imageItems.forEach((item) => {
      item.style.height = allHeight*0.15;
      item.style.width = `${(allWidth-10)/2}px`;
      item.style.opacity = 1;
    })
  }
  if (allWidth < 768) {
    document.querySelector(triggerBlock).style.transform = `translate3d(${widthItem - ((allWidth) * indexItem)}px, 0px, 0px)`;
    const imageItems = document.querySelectorAll('.all__items .item__photo');
    imageItems.forEach((item) => {
      item.style.height = allHeight*0.2;
      item.style.width = `${allWidth}px`;
      item.style.paddingRight = '30px';
      item.style.opacity = 1;
    })
  }
  
  
}

const putActiveDot = () => {
  let activeIndex = 0;
  const items = document.querySelectorAll('.items__button li');

  items.forEach((item, index) => {
    if (item.classList.contains('dot__active')) {
      activeIndex = index;
    }
  })

  return activeIndex + 1;
}

const getActiveSlide = () => {
  const allWidth = document.body.clientWidth;
  const activeDot = putActiveDot();
  let result = 0;

  result = (allWidth - 920) / 2;
  moveSlide(activeDot, '.all__items', 0);
}

const putActiveSlide = (nextActive) => {
  //let indexActive = 0;
  const imageItems = document.querySelectorAll('.all__items .item__photo');

  imageItems.forEach((image, index) => {
    if (image.classList.contains('active__item')) {
      image.classList.remove('active__item')
    }
    if (image.classList.contains('prev__item')) {
      image.classList.remove('prev__item')
    }
    if (image.classList.contains('next__item')) {
      image.classList.remove('next__item')
    }

  })

  imageItems[nextActive - 1].classList.add('prev__item');
  imageItems[nextActive].classList.add('active__item');
  imageItems[nextActive + 1].classList.add('next__item');
}


dots.addEventListener('click', e => {
  //console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'LI') {
    const prevActive = document.querySelector('.dot__active');
    prevActive.classList.remove('dot__active');
    e.target.closest('li').classList.add('dot__active');
  }


  //moveSlide(0, '.all__items', 0);
  //console.log(putActiveDot());
  const activeIndex = putActiveDot();
  getActiveSlide();
  putActiveSlide(activeIndex);
});

window.addEventListener('load', getActiveSlide);




/* const adaptiv = function() {
  if(allWidth > 1224 ){
    const imageItems = document.querySelectorAll('.all__items .item__photo');
    imageItems.forEach((item)=>{
      item.style.height = '280px';
      item.style.width = '500px';
      document.querySelector('.all__items').style.transform = `translate3d(${(400*item)}px, 0px, 0px)`;
      console.log(item);
    })

}
} */