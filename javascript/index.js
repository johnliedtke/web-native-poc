function sendDeepLinkMessage() {
  console.log("Sending deep link message")
  const message = {
    "type": "DEEP_LINK",
    "payload": {
      "deepLinkURL": "walmart://tools"
    }
  };

  sendMessage(JSON.stringify(message));
};

function sendMessage(message) {
  console.log("sending message=" + message);
  if (window.deviceBridge) {
    window.deviceBridge.postMessage(message);
  } else {
    window.webkit.messageHandlers.bridge.postMessage(message);
  }
};