'usestrict'

window.onload   = init;
window.onresize = init;

function init() {
    initializeTriangle();
    attachEventForRange();
}

function initializeTriangle() {
    const body = document.querySelector('body');
    const triangle = document.querySelector('.triangle');
    
    if(!body || !triangle) return;
    
    const size = body.clientWidth / 2;
    triangle.style.borderLeft  = `${size}px solid transparent`;
    triangle.style.borderRight = `${size}px solid transparent`;
}

// レンジスライダーの値を表示する為のイベントを追加する
function attachEventForRange() {
    const body = document.querySelector('body');
    const range = document.querySelector('.range-input');
    
    if(!body || !range) return;
    
    range.setAttribute('max', body.clientHeight);
    range.addEventListener('input', test2);
}

function test() {
    document.addEventListener('mousemove', changeRangeValue);
    document.addEventListener('mousemove', test2);
}

function test2(event) {
    const range = document.querySelector('.range-input');

    if(!range) return;

    const y = event.offsetY;
    const e = document.querySelector('.triangle');
    // e.style.borderTop = `${y}px solid #b2ce54`;
    e.style.borderTop = `${range.value}px solid red`;
}

// マウスにあわせて要素を動かす
function changeRangeValue(event) {
    const range = document.querySelector('.range-input');
    const value = document.querySelector('.range-value');

    if(!range || !value) return;
    
    const y = event.offsetY;
    const e = document.querySelector('.range-value');
    e.innerHTML = `${range.value}px`;
}