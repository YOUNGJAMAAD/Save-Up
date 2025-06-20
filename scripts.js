// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulate splash screen delay
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
    }, 2000);

    // Login form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('balance-screen').classList.remove('hidden');
    });

    // Tab navigation
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.add('hidden');
            });
            document.getElementById(`${tabName}-screen`).classList.remove('hidden');
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Round Up toggle and confirm
    document.querySelector('.continue').addEventListener('click', () => {
        document.getElementById('round-up-screen').classList.add('hidden');
        document.getElementById('transaction-feedback-screen').classList.remove('hidden');
    });

    // Back to Dashboard
    document.querySelector('.back-to-dashboard').addEventListener('click', () => {
        document.getElementById('transaction-feedback-screen').classList.add('hidden');
        document.getElementById('balance-screen').classList.remove('hidden');
    });

    // Set Goal form submission
    document.getElementById('set-goal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('set-goals-screen').classList.add('hidden');
        document.getElementById('savings-goals-screen').classList.remove('hidden');
    });

    // Set New Goal
    document.querySelector('.set-new-goal').addEventListener('click', () => {
        document.getElementById('savings-goals-screen').classList.add('hidden');
        document.getElementById('set-goals-screen').classList.remove('hidden');
    });

    // Back buttons
    document.querySelectorAll('.back').forEach(backBtn => {
        backBtn.addEventListener('click', () => {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.add('hidden');
            });
            document.getElementById('balance-screen').classList.remove('hidden');
        });
    });
});