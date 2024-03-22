
function applyTextProperties(id, fontWeight, fontStyle, textDecoration, fontSize, color) {
    const element = document.getElementById(id);
    if (fontWeight) {
        element.style.fontWeight = fontWeight;
    }
    if (fontStyle) {
        element.style.fontStyle = fontStyle;
    }
    if (textDecoration) {
        element.style.textDecoration = textDecoration;
    }
    if (fontSize) {
        element.style.fontSize = fontSize + 'px';
    }
    if (color) {
        element.style.color = color;
    }
}

function makeBold(id) {
    applyTextProperties(id, 'bold', '', '', '', '');
}

function makeItalic(id) {
    applyTextProperties(id, '', 'italic', '', '', '');
}

function makeUnderline(id) {
    applyTextProperties(id, '', '', 'underline', '', '');
}

function changeFontSize(id, size) {
    applyTextProperties(id, '', '', '', size, '');
}

function changeColor(id, color) {
    applyTextProperties(id, '', '', '', '', color);
}

document.getElementById('fontSize1').addEventListener('input', function () {
    changeFontSize('sentence1', this.value);
});

document.getElementById('color1').addEventListener('input', function () {
    changeColor('sentence1', this.value);
});

document.getElementById('fontSize2').addEventListener('input', function () {
    changeFontSize('sentence2', this.value);
});

document.getElementById('color2').addEventListener('input', function () {
    changeColor('sentence2', this.value);
});
document.getElementById('fontSize3').addEventListener('input', function () {
    changeFontSize('sentence3', this.value);
});

document.getElementById('color3').addEventListener('input', function () {
    changeColor('sentence3', this.value);
});
document.getElementById('fontSize4').addEventListener('input', function () {
    changeFontSize('sentence4', this.value);
});

document.getElementById('color4').addEventListener('input', function () {
    changeColor('sentence4', this.value);
});
