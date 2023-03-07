async function encryptString(str, password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);

  const key = await crypto.subtle.digest('SHA-256', encoder.encode(password));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    data
  );

  const encryptedArray = new Uint8Array(iv.length + encryptedData.byteLength);
  encryptedArray.set(iv);
  encryptedArray.set(new Uint8Array(encryptedData), iv.length);

  return btoa(String.fromCharCode(...encryptedArray));
}

async function decryptString(str, password) {
  const decoder = new TextDecoder();
  const encryptedArray = new Uint8Array(
    atob(str)
      .split('')
      .map((char) => char.charCodeAt(0))
  );

  const iv = encryptedArray.slice(0, 12);
  const encryptedData = encryptedArray.slice(12);

  const key = await crypto.subtle.digest('SHA-256', encoder.encode(password));

  const decryptedData = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    encryptedData
  );

  return decoder.decode(decryptedData);
}
