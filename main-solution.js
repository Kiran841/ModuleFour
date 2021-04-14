const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRandomCat);
//dog_btn.addEventListener('click', getRandomDog);

function getRandomCat(){
  fetch('https://aws.random.cat/meow')
  .then(res => res.json())
  .then(data => {
    cat_result.innerHTML = '<img src="https:\/\/purr.objects-us-east-1.dream.io\/i\/img_3499.jpg"/>'
  })
}

function getRandomDog(){
  fetch('https://random.dog/woof.json')
  .then(res => res.json())
  .then(data => {
    if(data.url.includes('.mp4')){
      getRandomDog();
    }
    else{
      dog_result.innerHTML = '<img src="https://random.dog/ef38fc20-7a55-492f-87c7-2ace1e88dee3.jpg"/>';
    }
  })
}