const abbreviations = {
    'k': 'p',
    'k2tog': 'p2tog',
    'ssk': 'ssp',
    'k3tog': 'p3tog',
    'yo': 'yo',
    'sk2p': 'sp2p',
    'sk2psso': 'sp2psso'
};

const form = document.querySelector('form');
const abbrv = form.querySelector('input');
//const inputAbbrv = document.querySelector('.form-container input');

function handleChange() {
    const p = form.querySelector('#find-out');
    abbrv.value ? p.classList.remove('hide') : p.classList.add('hide');
}

function findReverse(x) {
    if (abbreviations[x]) {
        return abbreviations[x];
    }
    else {
        for (key in abbreviations) {
            if (abbreviations[key] === x) {
                return key;
            }
        }
    }
}

function handleSubmit(e) {
    e.preventDefault();
    const reverse = findReverse(abbrv.value);
    if (reverse) {
        console.log('something to show');
    }
    else {
        console.log('do you want to suggest it');
    }
}

abbrv.addEventListener('change', handleChange);
abbrv.addEventListener('keyup', handleChange);

form.addEventListener('submit', handleSubmit);