var messageElement = document.querySelector('div.main-messages');
var but = document.querySelector('[data-mod]');

but.addEventListener('click', event => {
    console.log('aaa');
    let content = document.createElement("div");
    let content_left = document.createElement("div");
    let content_right = document.createElement("div");
    let ava = document.createElement('img');
    let active = document.createElement('div');
    let l1 = document.createElement('div');
    let l2 = document.createElement('div');
    let l3 = document.createElement('div');
    let tN;

    content.className = 'main-messages-content';
    content_left.className = 'main-messages-content-left';
    content_right.className = 'main-messages-content-right';
    ava.className = 'main-messages-content-ava';
    active.className = 'main-messages-content-active';
    l1.className = 'main-messages-content-textL1';
    l2.className = 'main-messages-content-textL2';
    l3.className = 'main-messages-content-textL3';

    ava.src = 'assets/images/ava1.jpg';

    messageElement.appendChild(content);
    content.appendChild(content_left);
    content.appendChild(content_right);

    content_left.appendChild(ava);
    content_left.appendChild(active);

    tN = document.createTextNode('test1');
    l1.appendChild(tN);
    content_right.appendChild(l1);
    tN = document.createTextNode('test2');
    l2.appendChild(tN);
    content_right.appendChild(l2);
    tN = document.createTextNode('test3');
    l3.appendChild(tN);
    content_right.appendChild(l3);

});