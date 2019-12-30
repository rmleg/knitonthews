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
const update = document.querySelector('#result');

function handleChange() {
    const p = form.querySelector('#find-out');
    if (abbrv.value) {
        p.classList.remove('hide');
    }
    else {
        p.classList.add('hide');
        update.innerHTML = '';
        update.classList.remove('found');
    }
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
        update.innerHTML = reverse;
        update.classList.add('found');
    }
    else {
        const emailLink = "mailto:rachel@arbortwist.com"
            + '&subject=text';
            /* + "&subject=" + `Add%20${abbrv.value}%20to%20knitonthe.ws`;
            + "&body=" + `Could%20you%20add%20${abbrv.value}%20to%20knitonthe.ws?`; */
        update.classList.remove('found');
        update.innerHTML = `Not found.<br />
            <a href="mailto:rachel@arbortwist.com?subject=Add ${abbrv.value} to knitonthe.ws
                &body=Please add ${abbrv.value} to knitonthe.ws.">
                Suggest "${abbrv.value}" 
                as a new abbreviation?</a>`;
    }
}

abbrv.addEventListener('change', handleChange);
abbrv.addEventListener('keyup', handleChange);

form.addEventListener('submit', handleSubmit);