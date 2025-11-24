<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="brand">
                <i class="pi pi-bug"></i> BugTracker Pro
            </div>
            <div class="copyright">
                &copy; 2025 BugTracker Inc. Всі права захищені.
            </div>
            <div class="socials">
                <i class="pi pi-twitter"></i>
                <i class="pi pi-github"></i>
                <i class="pi pi-linkedin"></i>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: var(--p-surface-900);
    color: var(--p-surface-0);
    padding: 2rem 0;
    margin-top: 2rem;
}
.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.brand { font-weight: bold; font-size: 1.2rem; display: flex; gap: 10px; align-items: center; }
.socials { display: flex; gap: 1rem; cursor: pointer; }
.socials i:hover { color: var(--p-primary-color); }

@media (max-width: 768px) {
    .footer-content { flex-direction: column; gap: 1rem; }
}
</style>
