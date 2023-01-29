'use strict';

const restaurant = {
    name: 'Trần Linh',
    location: 'Nam Từ Liêm, Hà Nội',
    categories: ['Keo','Banh','Rau'],
    starterMenu:['My Y','Banh Mi','Salad'] ,
    mainMenu: ['Pizza','Lau','Banh Ngot'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log (x,y,z);

let [main ,,secondary] = restaurant.categories;
console.log(main, secondary);
 
//Chuyển đổi các biến
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary]=[secondary, main]
console.log(main,secondary);

//cách nhận 2 giá trị về từ một hàm
const [starter, mainCourse] = restaurant.order(1,0);
console.log(starter, mainCourse);

//Cấu trúc hủy nồng nhau
const nested = [2,4,[5,6]];
// const [i,,j] = nested;
// console.log(i,j);

const [i, ,[j,k]] = nested;
console.log(i,j,k);

//Giá trị mặc định
const [p=1 ,q=1 ,r=1] = [8,9];
console.log(p,q,r);