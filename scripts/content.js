function hideDifficulty() {
  const spans = document.querySelectorAll('span');

  spans.forEach(span => {
    if (span.textContent==='Easy' || span.textContent==='Medium' || span.textContent==='Hard') {
      span.style.display = 'none';
    }
  });
  const divs = document.querySelectorAll('div');

  divs.forEach(div=> {
    if ((div.textContent===('Easy') || div.textContent===('Medium') || div.textContent===('Hard')) ) {
      div.textContent = '';
    }
  });
}

hideDifficulty();

const observer = new MutationObserver(hideDifficulty);

observer.observe(document.body, { childList: true, subtree: true });
