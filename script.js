// Register Service Worker buat PWA Offline Mode
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('✅ PWA Service Worker Terdaftar!'))
            .catch(err => console.log('❌ SW Gagal:', err));
    });
}

// Interactive Logic
document.getElementById('action-btn').addEventListener('click', () => {
    const statusText = document.getElementById('status-text');
    statusText.style.color = '#d4af37';
    statusText.innerHTML = '⚡ Sinkronisasi Berhasil!';

    setTimeout(() => {
        statusText.style.color = '#00ffcc';
        statusText.innerHTML = '● 100% Valid & Sinkron';
    }, 2000);
});
