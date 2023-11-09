//functionality that triggers the div/button when either Enter or Space key is hit

function onKeyDown(event) {
    event.preventDefault();
    if(event.key === 'Enter' || event.key === ' ') {
        onClick();
    }

    const onClick = () => {
        console.log('Click!');

    }

}

export default onKeyDown;