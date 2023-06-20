export { }

const login = document.getElementById('login') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const table = document.querySelector('table');
const tbody = document.getElementById('info') as HTMLTableSectionElement;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
const editUserBtn = document.getElementById('editBtn') as HTMLButtonElement;
const error = document.getElementById('error');
const users: User[] = [];
let num = 0;
let editIndex: number;

const loginRegExp = /^[a-zA-Z]{4,16}$/;
const passRegExp = /^[a-zA-Z0-9-._]{4,16}$/;
const emailRegExp = /^[a-zA-Z0-9-.]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/;

interface User {
    index: number;
    login: string;
    password: string;
    email: string;
}

addBtn.addEventListener('click', function addUser(): void {
    const testLogin = loginRegExp.test(login.value);
    const testPass = passRegExp.test(password.value);
    const testEmail = emailRegExp.test(email.value);

    if (testLogin && testPass && testEmail) {
        num++;
        const ind = num;
        const log = login.value;
        const pas = password.value;
        const ema = email.value;
        const user: User = {
            index: ind,
            login: log,
            password: pas,
            email: ema,
        };
        users.push(user);
        render();
        login.value = '';
        password.value = '';
        email.value = '';
        error?.classList.add('hide');
    } else {
        error?.classList.remove('hide');
    }
})

function render() {
    tbody.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        const row = document.createElement('tr');
        const index = document.createElement('td');
        index.innerHTML = users[i].index.toString();
        const log = document.createElement('td');
        log.innerHTML = users[i].login;
        const pass = document.createElement('td');
        pass.innerHTML = users[i].password;
        const em = document.createElement('td');
        em.innerHTML = users[i].email;
        const edit = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'editButton';
        const del = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        deleteButton.addEventListener('click', function () {
            deleteUser(i);
        });

        editBtn.addEventListener('click', function () {
            editUser(i);
        });

        row.appendChild(index);
        row.appendChild(log);
        row.appendChild(pass);
        row.appendChild(em);
        row.appendChild(edit);
        row.appendChild(del);
        edit.appendChild(editBtn);
        del.appendChild(deleteButton);
        tbody.appendChild(row);
    }
}

function deleteUser(index: number) {
    users.splice(index, 1);
    num--;

    for (let i = 0; i < users.length; i++) {
        if (users[i].index > 0) {
            users[i].index = i + 1;
        }
    }

    render();
}

function editUser(numEdit: number) {
    addBtn.classList.add('hide');
    editUserBtn.classList.remove('hide');
    users[numEdit].index = numEdit;
    editIndex = users[numEdit].index;
    login.value = users[numEdit].login;
    password.value = users[numEdit].password;
    email.value = users[numEdit].email;
}

editUserBtn.addEventListener('click', function saveEditUser() {
    const log = login.value;
    const pas = password.value;
    const ema = email.value;
    const user: User = {
        index: editIndex + 1,
        login: log,
        password: pas,
        email: ema,
    };
    users[editIndex] = user;
    render();
    addBtn.classList.remove('hide');
    editUserBtn.classList.add('hide');
    login.value = '';
    password.value = '';
    email.value = '';
}) 
