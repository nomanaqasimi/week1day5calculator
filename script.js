
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

display.value = '0';

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');   
        const action = btn.getAttribute('data-action');

        if (value) {
            if (display.value === '0' || display.value === 'Error') {
                
                display.value = value;
            } else {
                display.value += value;
            }
        }

        if (action === 'clear') {
            display.value = '0';
        }

        if (action === 'delete') {
            display.value = display.value.slice(0, -1);
            
            if (display.value === '') {
                display.value = '0';
            }
        }

        if (action === 'calculate') {
            if (display.value === '0') {
                alert('Please enter a number');
                return;
            }else{
            try {
                display.value = eval(display.value);
            } catch (err) {
                display.value = 'Error';
            }
        }
    }
    });
});