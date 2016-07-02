var encryptor = require('file-encryptor');

var key = 'luvbug';

// Encrypt file.
encryptor.encryptFile('keys.js', 'encryptedKeys.dat', key, function(err) {
  // Encryption complete.
});



// Decrypt file.
//encryptor.decryptFile('encryptedKeys.dat', 'keys.js', key, function(err) {
  // Decryption complete.
//});