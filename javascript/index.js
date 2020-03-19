function sendDeepLinkMessage() {
  console.log("Sending deep link message")
  const message = {
    "type": "DEEP_LINK",
    "payload": {
      "deepLinkURL": "walmart://tools"
    }
  };

  sendMessageToBridge(JSON.stringify(message));
};

function sendMessageToBridge(message) {
  console.log("sending message=" + message);
  console.log("android bridge" + window.deviceBridge);
  getNativeDeviceBridge().postMessage(message);
};

function getNativeDeviceBridge() {
  // Android uses window.deviceBridge, IOS uses window.webkit.messageHandlers.deviceBridge
  return (
    window.deviceBridge ||
    (window.webkit && window.webkit.messageHandlers.bridge)
  );
};

var messages = new Array; 
function sendMessage(message) {
  messages.push(message);

  const html = "<p>" + messages.join("</p><p>") + "</p>";
  
  document.getElementById("messages").innerHTML=html; 
}

