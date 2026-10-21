document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    if (loadingScreen && mainContent) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContent.classList.add('show');

            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 600);
        }, 200);
    } else if (mainContent) {
        mainContent.style.display = 'block';
    }

    const laporanForm = document.getElementById('laporanForm');
    const successPage = document.getElementById('success-page');
    const btnKembali = document.getElementById('btnKembali');

    if (laporanForm) {
        laporanForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (mainContent) mainContent.style.display = 'none';
            if (successPage) successPage.style.display = 'block';

            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.reset();
        });
    }

    if (btnKembali) {
        btnKembali.addEventListener('click', function (e) {
            e.preventDefault();

            if (successPage) successPage.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
        });
    }
});