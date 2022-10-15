// const panels = document.querySelectorAll('panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//       panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }

  }

  let a = new Car('djfaklj')
//   a.carname = 'another'
//   console.log(a.carname) 
  console.log(a.present())
  

  
//   class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//       }
      
//       show() {
//         return this.present() + ', it is a ' + this.model;
//       }
//   }

// let x = new Model("BMW", 'bm15')

// console.log(x.present())