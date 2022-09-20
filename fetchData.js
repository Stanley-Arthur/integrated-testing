const axios= require("axios")

const baseUrl="https://jsonplaceholder.typicode.com"

exports.fetchData =async (endPoint)=>{
    try{
        const results = await axios(`${baseUrl}/${endPoint}`);
        return results.data

    } catch(error){
        console.log(error.message)

    }
}

