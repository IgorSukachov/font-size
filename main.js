document.querySelector('.buttons').addEventListener('click', event => {
    const id = event.target.getAttribute('data-id');
    const p = document.querySelector('p')
   
    if (id === '1') {
        p.style.fontSize = '1em'
        toggle()
    } else if (id === '2') {
        p.style.fontSize = '1.25em'
        toggle()
    } else if (id === '3') {
        p.style.fontSize = '1.75em'
        toggle()
    } 
    if (!id) return       
    
    function toggle() {
    [].forEach.call(document.querySelectorAll('.btn'), function(i) {
        i.classList.remove('active');
      });
      event.target.classList.add('active');
    }
})
