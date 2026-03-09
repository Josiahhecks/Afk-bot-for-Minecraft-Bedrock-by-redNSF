// Complete working code that connects to the Minecraft server and handles events properly
const mineflayer = require('mineflayer');

// Create a bot instance to connect to the Minecraft server
const bot = mineflayer.createBot({
  host: 'your_server_ip',  // IP address of the Minecraft server
  port: 25565,             // Port number
  username: 'your_username', // Username for the bot
});

// Event listener for when the bot has successfully logged in
bot.on('spawn', () => {
  console.log('Bot has spawned in the game!');
});

// Event listener for chat messages
bot.on('chat', (username, message) => {
  if (username === bot.username) return; // Ignore messages from the bot itself
  console.log(`${username}: ${message}`);

  // Example of responding to a specific message
  if (message === 'hello') {
    bot.chat(`Hello ${username}!`);
  }
});

// Event listener for when the bot encounters an error
bot.on('error', (err) => {
  console.error('Error:', err);
});

// Event listener for when the bot unexpectedly disconnects
bot.on('end', () => {
  console.log('Bot has disconnected from the server.');
  // Optionally, you can implement reconnection logic here
});
