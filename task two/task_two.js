const likes = 
    {
        "item_id": "item1",
        "likes": 1
    }

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MXhejTfiBgboTYBCO329/likes'
const great = document.getElementById('requeststatus')
great.style.height = '200px'
great.style.fontSize = '50px'
function project() {
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(likes)
    })

    .then(fetchData => {
        if(fetchData = 200){
            great.innerText= "Successful Ajax request"
            great.style.backgroundColor = "green"
        }
        // else{
        //     great.innerText = 'Request failed...'
        //     great.style.backgroundColor = "red"
        //     }
    })
    .catch(error => {
        great.innerText = 'Request failed...'
        great.style.backgroundColor = "red"        

    })
}
    
project()