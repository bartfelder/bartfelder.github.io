export const createBlock = function(content, parent) {
    let container = document.createElement('div');
    container.classList.add('block-wrapper');
    let title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = content.title;
    let date = document.createElement('p');
    date.classList.add('date');
    date.innerText = content.date;
    let desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerText = content.desc;
    container.appendChild(title);
    container.appendChild(date);
    container.appendChild(desc);
    parent.appendChild(container);
}

export const createLinks = function(link, parent) {
    let li = document.createElement('li');
    li.classList.add('li-wrapper');
    let anch = document.createElement('a');
    anch.setAttribute('href', link.url);
    let icon = document.createElement('i');
    icon.classList.add(link.icon[0], link.icon[1]);
    let text = document.createElement('p');
    text.innerText = ` ${link.title}`;
    anch.appendChild(icon);
    anch.appendChild(text);
    li.appendChild(anch);
    parent.appendChild(li);
}