const rootDOM = document.getElementById('root');
const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur eini?', 'Namo einu'];
// ---------------------------
const Elem = (t, el, cl) => {
    const div = document.createElement(el);
    div.classList.add(cl);
    const text = document.createTextNode(t);
    div.appendChild(text);
    rootDOM.appendChild(div);
}
// ---------------------------
let state;
const setState = (def = true) => {
    if (def) {
        state = 0;
    } else {
        state++;
    }
    document.getElementById('root').innerHTML = '';
    data.forEach((s, nr) =>  {
        if (state >= nr) {
            Elem(s, 'h1', nr%2 ? 'pink' : 'goth' )
        }
    })
}
// ---------------------------
document.querySelector('button').addEventListener('click', () => {
    setState(false);
});
// ---------------------------

setState(true);
