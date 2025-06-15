
const inputName = document.querySelector('#inputName')

const inputText = document.querySelector('#inputText')

const submitBtn = document.querySelector('#submitBtn')

const reviewsList = document.querySelector('.reviewsList')

// Yeh likha kyoki main chahta hu ki agar ham review mein kuch bhi likhe toh submit button green ho jaaye

inputText.addEventListener('input', () => {
    if(inputText.value.trim()!==''){
        submitBtn.disabled = false
        submitBtn.style.backgroundColor = 'green'
        submitBtn.style.color = 'white'
    }
    else{
        submitBtn.disabled = true
        submitBtn.style.backgroundColor = 'white'; 
        submitBtn.style.color = 'black'
    }
})

submitBtn.addEventListener('click', () => {

    if(inputText.value.trim() === '') return; 

    const newReview = document.createElement('div'); // hawaa mein naya div bann gaya

    if(inputName.value == ''){
        inputName.value = 'Anonymous'
    }

    // joh naya div bana uska structure hai yeh
    newReview.innerHTML = `
        <h3 class="reviewName">${inputName.value}</h3>
        <p class="reviewText">${inputText.value}</p>
        <button class="deleteBtn">Delete</button>
    `;

    // CSS lagaya new div mein
    newReview.classList.add('reviewBox');

    reviewsList.prepend(newReview); // appendChild ki jagah prepend kiya kyoki latest review upar chahiye
    

    const deleteBtn = newReview.querySelector('.deleteBtn');
    
    deleteBtn.addEventListener('click', () => {
        newReview.remove(); // delete button pe click karte hi new review delete ho jayega
    });

    inputName.value = ''
    inputText.value = ''
    
    inputText.dispatchEvent(new Event('input')) // inputText ke upar jitne bhi input listeners lage hain, unhe turant chala deta hai.

});




