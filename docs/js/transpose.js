const chords = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'h'];
const capitalize = str => str[0].toUpperCase() + str.slice(1);
const mod = (n, m) => ((n % m) + m) % m;

function transposeChord(chord, direction) {
  const match = chord.match(/^(c#|d#|f#|g#|a#|[a-h])/i);
  if (!match) return chord;

  const root = match[0];
  const isMinor = root[0] === root[0].toLowerCase();
  const base = root.toLowerCase();
  const index = chords.indexOf(base);
  if (index === -1) return chord;

  const newIndex = mod(index + direction, chords.length);
  const transposedRoot = isMinor ? chords[newIndex] : capitalize(chords[newIndex]);
  return transposedRoot + chord.slice(root.length);
}

function transposeAllChords(direction) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentNode && node.parentNode.nodeName === 'CODE') {
      textNodes.push(node);
    }
  }

  textNodes.forEach(node => {
    const chords = node.textContent.split(/\s+/);
    const transposed = chords.map(ch => transposeChord(ch, direction));
    node.textContent = transposed.join(' ');
  });
}

const h1 = document.querySelector("h1");
const buttonWrap = document.createElement("div");
buttonWrap.style.display = "flex";
buttonWrap.style.gap = ".8rem";
buttonWrap.style.marginTop = ".8rem";

const buttonStyle = `
font-size: 1.5em;
width: 56px;
height: 56px;
border-radius: 4px;
border: none;
background-color: #444;
color: white;
cursor: pointer;
`;

const minusBtn = document.createElement("button");
minusBtn.textContent = "−";
minusBtn.style.cssText = buttonStyle;
minusBtn.title = "Transponuj wszystkie akordy w dół";
minusBtn.onclick = () => transposeAllChords(-1);

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
plusBtn.style.cssText = buttonStyle;
plusBtn.title = "Transponuj wszystkie akordy w górę";
plusBtn.onclick = () => transposeAllChords(1);

buttonWrap.appendChild(minusBtn);
buttonWrap.appendChild(plusBtn);
h1.insertAdjacentElement("afterend", buttonWrap);
