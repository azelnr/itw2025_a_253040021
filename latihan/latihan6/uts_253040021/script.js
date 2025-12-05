document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery .item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemPosisi = item.getAttribute('data-posisi');
                
                if (filterValue === 'Semua' || itemPosisi === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const modal = document.getElementById('player-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalDetail = document.getElementById('modal-detail');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('h4').textContent;
            const imgUrl = this.querySelector('img').src;
            const detailContainer = this.querySelector('.detail-pemain');
            const jerseyNumber = this.getAttribute('data-jersey-number');
            
            const position = detailContainer.querySelector('.data-posisi').textContent;
            const nationality = detailContainer.querySelector('.data-kewarganegaraan').textContent;
            const birthplace = detailContainer.querySelector('.data-tempat-lahir').textContent;
            const dob = detailContainer.querySelector('.data-tanggal-lahir').textContent;
            const joinDate = detailContainer.querySelector('.data-tanggal-gabung').textContent;
            const descriptionHTML = detailContainer.querySelector('.data-deskripsi').innerHTML;

            modalDetail.innerHTML = `
                <div class="modal-layout">
                    <div class="modal-photo">
                        <span class="jersey-number">#${jerseyNumber}</span>
                        <img src="${imgUrl}" alt="${name}" class="player-photo">
                    </div>
                    <div class="modal-content-text">
                        <h3 class="player-name">${name}</h3>
                        <div class="player-info">
                            <p><strong>Posisi</strong>: ${position || 'N/A'}</p>
                            <p><strong>Kewarganegaraan</strong>: ${nationality || 'N/A'}</p>
                            <p><strong>Tempat Lahir</strong>: ${birthplace || 'N/A'}</p>
                            <p><strong>Tanggal Lahir</strong>: ${dob || 'N/A'}</p>
                            <p><strong>Bergabung Sejak</strong>: ${joinDate || 'N/A'}</p>
                        </div>
                        <div class="career-desc">
                            <h4>Deskripsi Karir</h4>
                            ${descriptionHTML.trim() || '<p>Deskripsi pemain belum tersedia.</p>'}
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});