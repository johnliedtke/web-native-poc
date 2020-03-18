function sendDeepLinkMessage() {
  console.log("Sending deep link messae")
  webkit.messageHandlers.callback.postMessage("meow");
}