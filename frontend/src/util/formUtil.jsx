import axios from 'axios'

export function InsertData(data) {

    console.log(data);

    axios.post('/api/v1/transaction/insert', { data })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })


}

 

