const client = getStore() || [];
update();   

function update(){
    let displayData = ''; 
    client.forEach((object, index) =>{
        const {name, email, phone} = object;
        const data = `
        <div class="list">
            <div class="entries">${name}</div>
            <div class="entries">${email}</div>
            <div class="entries">${phone}</div>
            <div class="entries"><button class="del-btn">Delete</button></div>
        </div>
        `;

        displayData += data;
    });
    document.querySelector('.people').innerHTML = displayData;

    document.querySelectorAll('.del-btn')
    .forEach((delBtn, index) => {
        delBtn.addEventListener('click', () => {
            client.splice(index, 1);
            update();
            store();
        });
    });
};

function store(){
    localStorage.setItem('client', JSON.stringify(client));
};

function getStore(){
    const data = localStorage.getItem('client');
    return data ? JSON.parse(data) : null;
};