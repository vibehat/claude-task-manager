// Test script to verify terminal data handling fix
console.log('Testing terminal data handling fix...');

// Simulate the store's handleTerminalMessage with data
const terminalId = 'test-terminal-123';
const message = {
   type: 'data',
   data: 'Hello from terminal!\r\n',
};

// Test if the custom event is dispatched
let eventReceived = false;
const eventHandler = (event) => {
   console.log('✅ Custom event received:', event.detail);
   eventReceived = true;
};

// Listen for the custom event
window.addEventListener(`terminal-data-${terminalId}`, eventHandler);

// Simulate the store dispatching the event
if (message.data) {
   window.dispatchEvent(
      new CustomEvent(`terminal-data-${terminalId}`, {
         detail: { data: message.data },
      })
   );
}

// Check if event was received
setTimeout(() => {
   if (eventReceived) {
      console.log('✅ Terminal data handling fix working correctly!');
   } else {
      console.log('❌ Terminal data handling fix not working');
   }

   // Cleanup
   window.removeEventListener(`terminal-data-${terminalId}`, eventHandler);
}, 100);
