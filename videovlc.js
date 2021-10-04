const closure=()=>{const e=document.querySelector("video");return e&&e.src},result=closure();completion(result);

window.location.href = 'vlc-x-callback://x-callback-url/stream?url=' + result;
