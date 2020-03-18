function sendDeepLinkMessage() {
  console.log("Sending deep link message")
  window.webkit.messageHandlers.callback.postMessage("meow");
}