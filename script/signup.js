update();        
document.querySelector('.submit').addEventListener('click', () =>{
    addUser();
    });
    function addUser(){
        const nameElem = document.querySelector('.name');
        const name = nameElem.value;
        const emailElem = document.querySelector('.email');
        const email = emailElem.value;
        const phoneElem = document.querySelector('.phone');
        const phone = phoneElem.value;
        
        const user ={
        name,
        email,
        phone
        };

        client.push(user);
        store();

        nameElem.value = '';
        emailElem.value = '';
        phoneElem.value = '';
    }

const client = getStore() || [];

function store() {
    localStorage.setItem('client', JSON.stringify(client));
}

function getStore() {
    const data = localStorage.getItem('client');
    return data ? JSON.parse(data) : null;
}