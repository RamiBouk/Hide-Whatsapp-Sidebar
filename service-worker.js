chrome.scripting
  .updateContentScripts([{
    id: "session-script",
    excludeMatches: ["*://admin.example.com/*"],
  }])
  .then(() => console.log("registration updated"));
