// Helper Selector
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// DOM Elements
const balance = $('#total-balance');
const income = $('#total-income');
const expense = $('#total-expense');
const list = $('#transaction-list');
const form = $('#transaction-form');
const text = $('#text');
const amount = $('#amount');
const modal = $('#modalOverlay');
const openModalBtn = $('#openModal');
const closeModalBtn = $('#closeModal');
const searchInput = $('#search-input');
const filterBtns = $$('.filter-btn');
const typeButtons = $$('.type-btn');

// Category Icons
const categoryIcons = {
    salary: '💰',
    food: '🍔',
    entertainment: '🎬',
    shopping: '🛍️',
    utilities: '⚡',
    other: '📦'
};

// Initial State
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let currentFilter = 'all';
let selectedType = 'income';

// ==========================
// TYPE TOGGLE
// ==========================
typeButtons.forEach(button => {
    button.addEventListener('click', () => {
        typeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedType = button.dataset.type;
    });
});

// ==========================
// ADD TRANSACTION
// ==========================
function addTransaction(e) {
    e.preventDefault();

    const value = parseFloat(amount.value);

    if (!text.value.trim() || isNaN(value)) return;

    const finalAmount =
        selectedType === 'expense'
            ? -Math.abs(value)
            : Math.abs(value);

    const transaction = {
        id: Date.now(),
        text: text.value.trim(),
        amount: finalAmount,
        type: selectedType,
        category: $('#category').value,
        date: new Date().toLocaleDateString()
    };

    transactions.push(transaction);
    updateLocalStorage();
    init();

    form.reset();
    selectedType = 'income';
    typeButtons.forEach(btn => btn.classList.remove('active'));
    typeButtons[0].classList.add('active');

    modal.classList.remove('active');
}

// ==========================
// REMOVE TRANSACTION
// ==========================
function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

// ==========================
// LOCAL STORAGE
// ==========================
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// ==========================
// UPDATE TOTALS
// ==========================
function updateValues() {
    let total = 0;
    let inc = 0;
    let exp = 0;

    transactions.forEach(t => {
        total += t.amount;
        if (t.amount > 0) inc += t.amount;
        else exp += t.amount;
    });

    balance.innerText = `$${total.toFixed(2)}`;
    income.innerText = `$${inc.toFixed(2)}`;
    expense.innerText = `$${Math.abs(exp).toFixed(2)}`;
}

// ==========================
// RENDER TRANSACTIONS
// ==========================
function renderTransactions() {
    list.innerHTML = '';

    let filtered = [...transactions];

    // Search Filter
    const query = searchInput.value.toLowerCase();
    if (query) {
        filtered = filtered.filter(t =>
            t.text.toLowerCase().includes(query)
        );
    }

    // Type Filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(t => t.type === currentFilter);
    }

    filtered.forEach(transaction => {
        const sign = transaction.amount < 0 ? '-' : '+';
        const itemClass =
            transaction.amount < 0
                ? 'amount-expense'
                : 'amount-income';

        const item = document.createElement('li');
        item.classList.add('transaction-item');

        item.innerHTML = `
            <div class="item-icon">
                ${categoryIcons[transaction.category] || '📦'}
            </div>
            <div class="item-details">
                <p>${transaction.text}</p>
                <span>${transaction.date}</span>
            </div>
            <div class="item-amount ${itemClass}">
                ${sign}$${Math.abs(transaction.amount).toFixed(2)}
            </div>
            <button class="delete-btn">
                🗑️
            </button>
        `;

        // Delete button event
        item.querySelector('.delete-btn')
            .addEventListener('click', () =>
                removeTransaction(transaction.id)
            );

        list.appendChild(item);
    });
}

// ==========================
// INIT
// ==========================
function init() {
    renderTransactions();
    updateValues();
}

// ==========================
// EVENTS
// ==========================
form.addEventListener('submit', addTransaction);

openModalBtn.addEventListener('click', () =>
    modal.classList.add('active')
);

closeModalBtn.addEventListener('click', () =>
    modal.classList.remove('active')
);

window.addEventListener('click', (e) => {
    if (e.target === modal)
        modal.classList.remove('active');
});

searchInput.addEventListener('input', renderTransactions);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTransactions();
    });
});

// Start App
init();