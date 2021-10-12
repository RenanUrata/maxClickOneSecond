let startTime, remainingTime
const Holder = document.getElementById('Holder');

let clickCount = 0
const timeout = 1000
const refreshRate = 240

function incrementClick(e) {
    return ++clickCount;
}

function refresh() {

    setInterval(() => {
        remainingTime = startTime - Date.now() + timeout;
        remainingTime >= 0 ? remainingTime : remainingTime = 0;
        Holder.textContent = ` ${clickCount} Click(s) | remaining Time: ${remainingTime || timeout} ms`;
    }, 1000 / refreshRate);

}

function spaceUp(e) {

    if (e.code === 'Space') {
        document.addEventListener('mousedown', incrementClick);
        clickCount = 0;
        startTime = Date.now();
        setTimeout(() => {
            document.removeEventListener('mousedown', incrementClick);
        }, timeout);
    }

}

function app() {
    document.addEventListener('keyup', spaceUp);
    refresh();
}

app()


