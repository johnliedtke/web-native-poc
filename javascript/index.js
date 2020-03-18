function sendDeepLinkMessage() {
  console.log("Sending deep link message")
  const message = {
    "type": "deepLink",
    "payload": {
      "deepLinkURL": "walmart://tools"
    }
  };
  window.webkit.messageHandlers.bridge.postMessage(JSON.stringify(message));
}