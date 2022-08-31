const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`];
let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = destination.concat(native, hero);
rainbow.reverse();
rainbow.pop();
rainbow.push(`Vain`);
rainbow[0] = `Richard`;
rainbow.splice(3,0,`Gave`, `Battle`);

document.write(`<div class="wrapper">`)
for (let i=0; i<rainbow.length; i++) {
    document.write(`<div class="items">
<div class="colors" style="background:${colors[i]}"></div>
<span class="words">${rainbow[i]}</span>
</div>`)
}
document.write(`</div>`)