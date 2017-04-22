function transpile(e, inputEl, outputEl) {
    var code = (e.keyCode || e.which);
    if(code !== 37 && code !== 38 && code !== 39 && code !== 40) {
        try {
            const transformed = Babel.transform(inputEl.innerText, {
                presets: ['es2015', 'stage-0']
            });
            if (outputEl.classList.contains('error')) {
                outputEl.classList.remove('error');
            }
            outputEl.innerHTML = transformed.code;
            window.hljs.highlightBlock(outputEl);
        } catch (ex) {
            if (!outputEl.classList.contains('error')) {
                outputEl.classList.add('error');
            }
            outputEl.innerText = 'ERROR: ' + ex.message;
        }
    }
}

function ready() {
    const transpilers = document.getElementsByClassName('transpiler');

    [].forEach.call(transpilers, function(transpiler) {
        var input = transpiler.querySelectorAll('.transpiler__input')[0];
        var output = transpiler.querySelectorAll('.transpiler__output')[0];
        input.addEventListener('keydown', function (e) {
            transpile(e, input, output);
        });
        input.addEventListener('keyup', function (e) {
            transpile(e, input, output);
        });
    });
}

if (document.readyState === 'complete' || document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}
