
const wrapperElement = document.querySelector('div.wrapper');




for (let i = 1; i <= 100; i++) {

    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const headingCardElement = document.createElement('h2');

    cardElement.appendChild(headingCardElement);
    wrapperElement.appendChild(cardElement);

    if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz')
        
        headingCardElement.innerHTML = 'FizzBuzz';
        cardElement.className += ' fizz-buzz';

    }

    else if (i % 3 === 0) {       
        console.log('Fizz')
        
        headingCardElement.innerHTML = 'Fizz';
        cardElement.className += ' fizz';

    }
    else if (i % 5 === 0){
        console.log('Buzz')
        
        headingCardElement.innerHTML = 'Buzz';
        cardElement.className += ' buzz';

    }
    
    else {
        console.log(i)
        
        headingCardElement.innerHTML = i;
        cardElement.className += ' simple-number';

    }

    // const listElement = document.createElement('li');
    // listElement.className = 'box';
    // listElement.innerHTML = i

    // containerElement.appendChild(listElement)

}

