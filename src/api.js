const baseUrl = "https://randomapi.com/api/";
const apiKey = "8csrgnjw?key=LEIX-GF3O-AG7I-6J84";

let add;
let previousNumber = 1;
export async function getData(data) {
    if (data % 2 == 1) { add = "&page="+data }
    else if (data % 2 == 0) {
        if (data === previousNumber){
            add = ""}
        else {
            add = "&page="+data
            previousNumber = data
        }
        
    }
    const response = await fetch(`${baseUrl+apiKey+add}`)
    .then(response => response.json())
    .catch(err => err.json())

    console.log(response)
    return response

  }

    
