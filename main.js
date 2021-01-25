

const container = document.getElementById('container');

container.addEventListener('click', function(event) {

    const childrenArray = event.target.children;
    
    for (i = 0; i < childrenArray.length; i++) {
        if (childrenArray[i].style.display != 'block') {
            childrenArray[i].style.display = 'block';
        } else {
            childrenArray[i].style.display = 'none';
        }
    }
    
})


