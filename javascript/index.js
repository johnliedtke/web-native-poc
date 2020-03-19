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

function sendScannerMessage() {
  console.log("Sending scanner message")
  const message = {
    "type": "SCANNER",
    "payload": {
      "isManualEntryEnabled": true
    }
  };

  sendMessageToBridge(JSON.stringify(message));
};

var sentMessages = new Array; 
function sendMessageToBridge(message) {
  sentMessages.unshift(message);
  const html = "<p>" + sentMessages.slice(0, 10).join("<p></p>") + "</p>";
  document.getElementById("sentMessages").innerHTML=html; 

  console.log("sending message=" + message);
  getNativeDeviceBridge().postMessage(message);
};

function getNativeDeviceBridge() {
  // Android uses window.deviceBridge, IOS uses window.webkit.messageHandlers.deviceBridge
  return (
    window.deviceBridge ||
    (window.webkit && window.webkit.messageHandlers.bridge)
  );
};

var receivedMessages = new Array; 
function sendMessage(message) {
  receivedMessages.push(message);

  const html = "<p>" + receivedMessages.slice(0, 10).join("\n") + "</p>";
  
  document.getElementById("receivedMessages").innerHTML=html; 
}

