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
  console.log("android bridge" + window.deviceBridge);
  getNativeDeviceBridge().postMessage(message);
};

function getNativeDeviceBridge() {
  // Android uses window.deviceBridge, IOS uses window.webkit.messageHandlers.deviceBridge
  console.log(window);
  console.log("android bridge" + window.deviceBridge);
  return (
    window.deviceBridge ||
    (window.webkit && window.webkit.messageHandlers.bridge)
  );
};
