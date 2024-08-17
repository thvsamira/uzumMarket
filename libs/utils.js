function reload(arr, place, Element) {
    let box = document.querySelector(`#${place}`);

    box.innerHTML = ''

    for (let item of arr) {
        
        let elem = Element(item);
        box.append(elem);
    }
}

export{ reload }