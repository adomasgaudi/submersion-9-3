import {a,n} from '@/composables/types'
import { Callbacks } from 'jquery';



const cqueA = (cssclass: string)=> {
  const items = document.querySelectorAll<HTMLElement>(cssclass);
  return items
}
const cque = (cssclass: string)=> {
  const item = document.querySelector<HTMLElement>(cssclass);
  if(item){
    return item
  }
}

const cLenEqual = (items: a, str: string, len: string, callback: a = console.log('callback empty')) =>{

  console.log(items)
  // if(Array.isArray(items) || NodeList.prototype.isPrototypeOf(items)){

    if(len === 'width'){
      items.forEach((item: a) => {
        item.style.width = str;
      });
    } else if(len === 'height') {
      items.forEach((item: a) => {
        callback(item)
      });
    } else{
      console.log('bad length')
    }
  }
  console.log('not array')

// }














let count = 0;
const slide = (direction: n, cards: n, sliderClass: string, itemClass: string ) => {

  //
  console.log({sliderClass, itemClass})
  const slider = cque(sliderClass);
  const outer = cque(itemClass)
  const width = outer?.offsetWidth
  //
  console.log({direction, count})
  direction > 0 //forward direction
    ? count > cards - 2
      ? (count = 0)
      : (count += direction)
    : direction < 0 //backwards direction
    ? count < 1
      ? (count = cards - 1)
      : (count += direction)
    : (count += direction);
  console.log({direction, count})
  if (slider && width) {
    slider.style.transform = `translateX(${(width * -count).toString()}px)`;
    slider.style.transition = `1s`;
  }
};























const useCss = () =>{
  return {slide, count,cqueA, cque, cLenEqual }
}

export default useCss