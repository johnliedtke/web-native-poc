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
  getNativeDeviceBridge().postMessage(message);
};

function getNativeDeviceBridge() {
  // Android uses window.deviceBridge, IOS uses window.webkit.messageHandlers.deviceBridge
  return (
    window.deviceBridge ||
    (window.webkit && window.webkit.messageHandlers.deviceBridge)
  );
};