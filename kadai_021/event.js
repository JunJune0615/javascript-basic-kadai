const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', () =>{
    const changeWord = document.getElementById('text');
    setTimeout(()=>{
        changeWord.textContent = 'ボタンをクリックしました'
     },2000);
});