function hideDifficulty() {
  const spans = document.querySelectorAll('span');

  spans.forEach(span => {
    if(span.textContent==="Easy"||span.textContent==="Medium"||span.textContent==="Hard"){span.classList.add('bg-transparent')}
    if (span.textContent===('Easy')) {
      span.textContent = ' ';

    }else if(span.textContent===('Medium')){
      span.textContent='  '
    }else if(span.textContent===('Hard')){
      span.textContent='   '
    }
  });
 const divs = document.querySelectorAll('div');
    
      divs.forEach(div=> {
        if ((div.textContent===('Easy') || div.textContent===('Medium') || div.textContent===('Hard')) ) {
          div.style.display = 'none'
        }
      });
}

function showDifficulty() {
  const spans = document.querySelectorAll('span');

  spans.forEach(span => {
  if(span.textContent===' '||span.textContent==='  '||span.textContent==='   '){  span.classList.remove('bg-transparent')}
    if ( (span.textContent===(' ') )) {
      span.textContent= 'Easy';
      
    }else if (span.textContent==='  '){
      span.textContent='Medium'
    }else if (span.textContent==='   '){
      span.textContent='Hard'
    }
  });
 const divs = document.querySelectorAll('div');
    
      divs.forEach(div=> {
        if ((div.textContent===('Easy') || div.textContent===('Medium') || div.textContent===('Hard')) ) {
          div.style.display = ''
        }
      });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.enabled) {
    hideDifficulty();
  } else {
    showDifficulty();
  }
});

chrome.storage.sync.get('enabled', (data) => {
  if (data.enabled) {
    hideDifficulty();
  }
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach(chrome.storage.sync.get('enabled', (data) => {
    if (data.enabled) {
      hideDifficulty();
    }
  }));
});

observer.observe(document.body, { childList: true, subtree: true });


