function sendDeepLinkMessage() {
  console.log("Sending deep link message")
  const message = {
    "type": "DEEP_LINK",
    "payload": {
      "deepLinkURL": "walmart://tools"
    }
  };

  sendMessage(message);
}

function sendMessage(message) {
  if (window.webkit.messageHandlers == undefined) {
    window.webkit.messageHandlers.bridge.postMessage(JSON.stringify(message));
  } else {
    window.deviceBridge.postMessage(message);
  }
}