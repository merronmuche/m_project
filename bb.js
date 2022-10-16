const cont = document.getElementById('cont')

let urls = ["url('http://127.0.0.1:5500/images/mark.jpg')",
            "url('http://127.0.0.1:5500/images/abi.jpg')",
            "url('http://127.0.0.1:5500/images/mery.jpg')",
            "url('http://127.0.0.1:5500/images/mekdi.jpg')",
            "url('http://127.0.0.1:5500/images/meklit.jpg')",
            "url('http://127.0.0.1:5500/images/meku.jpg')"]
names = ['Markos', 'Abi', "Mery", 'Mekdi', 'Meklit', 'Meku']
let idx = 0;

urls.forEach(url => {
    let panel = document.createElement('div')
    panel.classList.add('panel')
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
    panel.style.backgroundImage = urls[idx];
    panel.innerHTML=names[idx]
    cont.appendChild(panel)
    idx++;
})

let panels = document.querySelectorAll('.panel')
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


