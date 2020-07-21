chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    x = document.createElement("script")
    x.innerHTML = `
      keys = "";
      for(key in window){
        keys += key + "#" + typeof window[key] + "\\n"
      }
      result = document.createElement("div")
      result.id = "getKey-result"
      result.innerHTML = keys
      document.head.appendChild(result)
    `
    document.head.appendChild(x)
    response(document.getElementById("getKey-result").innerHTML.split("\n"));
  }
});