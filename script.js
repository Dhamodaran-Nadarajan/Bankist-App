'use strict';

// All Accounts Data
const adminAccount = {
  owner: 'Dhamodaran Nadarajan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  userName: 'dhamu',
  pin: 2915,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-12-03T23:36:17.929Z',
    '2020-12-09T10:51:36.790Z',
  ],
};

const janniAccount = {
  owner: 'Janani Dhamodaran',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  userName: 'janni',
  pin: 2512,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-12-02T18:49:59.371Z',
    '2020-12-07T12:01:20.894Z',
  ],
};

const yogaAccount = {
  owner: 'Yogalakshmi Nadarajan',
  movements: [200, -200, 3340, -300, -200, 50, 400, -460],
  userName: 'chellam',
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
};

const kokiAccount = {
  owner: 'Kokila',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  userName: 'koki',
  pin: 1234,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
  ],
};

const testAccount = {
  owner: 'Test_User',
  movements: [120, -50, 700, 500, -90],
  interestRate: 1,
  userName: 'test',
  pin: 1234,
  movementsDates: [
    '2019-10-10T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-09-25T14:18:46.235Z',
    '2020-10-05T16:33:06.386Z',
  ],
};

const raviAccount = {
  owner: 'Ravi Varman',
  movements: [120, -500, 7000, 500, -90],
  interestRate: 1,
  userName: 'poos',
  pin: 1234,
  movementsDates: [
    '2019-10-01T13:15:33.035Z',
    '2019-12-05T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-10-25T14:18:46.235Z',
    '2020-12-10T16:33:06.386Z',
  ],
};

const moniAccount = {
  owner: 'Monisha',
  movements: [120, -500, 7000, 250, -100],
  interestRate: 1,
  userName: 'moni',
  pin: 1234,
  movementsDates: [
    '2019-10-01T13:15:33.035Z',
    '2019-12-05T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-10-25T14:18:46.235Z',
    '2020-12-10T16:33:06.386Z',
  ],
};

const satzAccount = {
  owner: 'Sathish Kumar',
  movements: [120, -500, 3500, 500, -100],
  interestRate: 1,
  userName: 'satz',
  pin: 1234,
  movementsDates: [
    '2019-10-01T13:15:33.035Z',
    '2019-12-05T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-10-25T14:18:46.235Z',
    '2020-12-10T16:33:06.386Z',
  ],
};

const vikyAccount = {
  owner: 'Vigneshwaran',
  movements: [120, -500, 350, 5000, 500],
  interestRate: 1,
  userName: 'viky',
  pin: 1234,
  movementsDates: [
    '2019-10-01T13:15:33.035Z',
    '2019-12-05T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-10-25T14:18:46.235Z',
    '2020-12-10T16:33:06.386Z',
  ],
};

const balajiAccount = {
  owner: 'Balaji',
  movements: [120, -500, 350, 250, -100],
  interestRate: 1,
  userName: 'balaji',
  pin: 1234,
  movementsDates: [
    '2019-10-01T13:15:33.035Z',
    '2019-12-05T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-10-25T14:18:46.235Z',
    '2020-12-10T16:33:06.386Z',
  ],
};

let accounts = [
  adminAccount,
  janniAccount,
  yogaAccount,
  kokiAccount,
  testAccount,
  raviAccount,
  moniAccount,
  satzAccount,
  vikyAccount,
  balajiAccount,
];

// DOM Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogOut = document.querySelector('.logout__btn');
const btnCloseModal = document.querySelector('.close-modal');
const alertmessage = document.querySelector('.alert__message');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let timer;
let currentAccount;
let sorted = false;
let sessionActive = false;

// ****************************************************** Functions ***********************************************************
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  //This sorting logic needs to be refracted such that dates also needs to be sorted.
  //Currently I am leaving this logic as is such that user will not be able to sort the transactions.
  const sortedMovements = sort
    ? account.movements
        .slice()
        .sort((currValue, nextValue) => currValue - nextValue)
    : account.movements;

  sortedMovements.forEach(function (mov, i) {
    const date = new Date(account.movementsDates[i]);
    const displayDate = calcMovementsDate(date);
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const credOrDebit = movType === 'deposit' ? 'Credit' : 'Debit';
    const htmlContent = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movType}">
          ${i + 1}. ${credOrDebit}
        </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)} &#8377;</div>
      </div>
    `;
    // <div class="movements__value">${formattedCurrency}</div>
    containerMovements.insertAdjacentHTML('afterbegin', htmlContent);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (acc, currMov) => acc + currMov,
    0
  );
  const formattedCurrency = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'IND',
  }).format(account.balance);
  labelBalance.textContent = `${formattedCurrency} ₹`;
};

const clacDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * 0.012)
    .filter(mov => mov >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)} ₹`;
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)} ₹`;
  labelSumInterest.textContent = `${(Math.round(interest * 100) / 100).toFixed(
    2
  )} ₹`;
};

const updateUI = function (currentAccount) {
  displayMovements(currentAccount);
  calcDisplayBalance(currentAccount);
  clacDisplaySummary(currentAccount.movements);
};

const updateCurrentDateTime = function () {
  const now = new Date();
  const locale = navigator.language;
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'long',
  };

  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
};

const calcMovementsDate = function (date) {
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

const setLogOutTimer = function () {
  let time = 180;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    time--;

    if (time < 0) {
      sessionActive = false;
      clearInterval(timer);
      commitChangesToLocalStorage();
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const commitChangesToLocalStorage = function () {
  let temp = [];
  accounts.forEach(function (acc) {
    temp.push(acc);
  });
  localStorage.setItem('Accounts', JSON.stringify(temp));
};

const loadLocalStorage = function () {
  const localData = JSON.parse(localStorage.getItem('Accounts'));
  if (localData != null) {
    accounts = [];
    localData.forEach(acc => accounts.push(acc));
  }
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

//************************************************** Event Listeners ************************************************

// Login Logic
btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); //This will prevent the page reload when we are working with Forms.

  if (sessionActive) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    alert('Please log out to sign-in into other user');
    return;
  }

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value.toLowerCase()
  );
  if (!currentAccount) {
    //Clear Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    alert(`Could not find the Account ☹️. Check your username.`);
  } else if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    sessionActive = true;
    labelWelcome.textContent = `Welcome, ${currentAccount.owner}`;
    containerApp.style.opacity = 100;
    //Clear Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    //Update UI
    updateUI(currentAccount);
    updateCurrentDateTime();
    if (timer) clearInterval(timer);
    timer = setLogOutTimer();
  } else {
    //Clear Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    alert(`Incorrect Password.`);
  }
});

// Logout Logic
btnLogOut.addEventListener('click', function (event) {
  event.preventDefault();
  sessionActive = false;
  commitChangesToLocalStorage();
  containerApp.style.opacity = 0;
  clearInterval(timer);
  labelWelcome.textContent = `Adios..👋👋`;
});

// Transfer Logic
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  let transferValid = true;
  const trasferAmount = Number(inputTransferAmount.value);
  const trasferToAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value.toLowerCase()
  );
  if (!trasferToAccount) {
    transferValid = false;
    inputTransferTo.value = '';
    inputTransferTo.blur();
    alert(`Could not find the Receiver's Account ☹️`);
  }
  if (trasferAmount <= 0) {
    transferValid = false;
    inputTransferAmount.value = '';
    inputTransferAmount.blur();
    alert('Invalid Transfer Amount ☹️');
  }
  if (trasferAmount > currentAccount.balance) {
    transferValid = false;
    inputTransferAmount.value = '';
    inputTransferAmount.blur();
    alert('Insufficient Balance to make the Transfer.. ☹️');
  }
  if (trasferToAccount?.userName === currentAccount.userName) {
    transferValid = false;
    inputTransferTo.value = '';
    inputTransferTo.blur();
    alert(`You cannot transfer money to yourself ☹️`);
  }

  if (transferValid) {
    currentAccount.movements.push(-trasferAmount);
    trasferToAccount.movements.push(trasferAmount);
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    inputTransferTo.blur();

    //Update transfer dates for both sender and receiver
    currentAccount.movementsDates.push(new Date().toISOString());
    trasferToAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = setLogOutTimer();
  }
});

// Request Loan Logic
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const reqLoanAmount = Number(inputLoanAmount.value);

  if (reqLoanAmount <= 0) alert(`Invalid Loan Amount.. ☹️`);
  else if (currentAccount.movements.some(mov => mov >= reqLoanAmount * 0.1)) {
    alertmessage.textContent = `Requested Loan amount will be credited soon.. 😊😊`;
    openModal();
    setTimeout(function () {
      currentAccount.movements.push(reqLoanAmount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 5000);

    inputLoanAmount.value = '';
    inputLoanAmount.blur();
    clearInterval(timer);
    timer = setLogOutTimer();
  } else {
    alert(`Loan request is outside the policy.`);
  }
});

// Sorting the movements logic - Needs to be upgraded
// btnSort.addEventListener('click', function (event) {
//   event.preventDefault(); //This will prevent the page reload when we are working with Forms.
//   displayMovements(currentAccount, !sorted);
//   sorted = !sorted;
// });

// Alert Logic
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

loadLocalStorage();

//Fake always logged in - Only for testing purpose
// currentAccount = adminAccount;
// updateUI(currentAccount);
// updateCurrentDateTime();
// containerApp.style.opacity = 100;
