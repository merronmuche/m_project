
const cont = document.getElementById('cont')

let urls = ["url('http://127.0.0.1:5501/images/mark.jpg')",
            "url('http://127.0.0.1:5501/images/abi.jpg')",
            "url('http://127.0.0.1:5501/images/mery.jpg')",
            "url('http://127.0.0.1:5501/images/mekdi.jpg')",
            "url('http://127.0.0.1:5501/images/meklit.jpg')",
            "url('http://127.0.0.1:5501/images/meku.jpg')"]
let names = ['Markos', 'Abi', "Mery", 'Mekdi', 'Meklit', 'Meku']

for (let idx=0; idx<urls.length; idx++){

    let panel = document.createElement('div')
    panel.classList.add('panel')
    // console.log(panel.classList)
    panel.style.backgroundImage = urls[idx];
    panel.innerHTML=names[idx]
    if (idx == 0){
        panel.classList.add('active')
    }
    else{
        panel.classList.remove('active')
    }
    cont.append(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses()
      panel.classList.add('active')
    })
}


let panels = document.querySelectorAll('.panel')
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


