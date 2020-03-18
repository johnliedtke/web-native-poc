function sendDeepLinkMessage() {
  console.log("Sending deep link message")
  const message = {
    "type": "DEEP_LINK",
    "payload": {
      "deepLinkURL": "walmart://tools"
    }
  };

  sendMessage(JSON.stringify(message));
}

function sendMessage(message) {
  if (window.webkit.messageHandlers == undefined) {
    console.log("sending message on iOS");
    window.webkit.messageHandlers.bridge.postMessage(message);
  } else {
    console.log("sending message on android");
    window.deviceBridge.postMessage(message);
  }
}