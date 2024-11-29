// export const fetchlugares= async()=>{
//     const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${ciudad}';
//     const ciudad= "q60"

// import { ErrorCode } from "wft-geodb-js-client";



//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '91d628c5abmshc3f685fca526e49p185717jsn798336a83d82',
// 		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
// 	}};
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }



// export const fetchlugares= async(city)=>{
//     const Base_Url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const key= "wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd";
//     const querry= `?apiKey=${key}&${city}`;

//     try {
//         const response = await fetch(Base_Url + querry);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
//     return (
        
//         data[0]


//     )
// }

// console.log("hola")


// const fetchl= async(city)=>{
//     const Base_Url = 'http://dataservice.accuweather.com/locations/v1/cities/';
//     const key= "wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd";
//     const querry= `?apiKey=${key}&${city}`;
    
    
//     const response = await fetch('https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=manchester');
//     const data = await response.json();
    
//     console.log(data)
//     }

// fetchl('manchester')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// const key= "682500PcukwQUtq1UDd6XimUfAmBASHL";
const key= "wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd";

export const getCity= async (id) =>{
    // export const getCity= async (city) =>{
    const Base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const querry= `?apikey=${key}&q=${id}`;
    
    
    const response = await fetch(Base + querry);
    const data = await response.json();
   

    
    
    return data[0]
    
};
    // try{
    //     const response=await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=${id}`);
    //     const data=await response.json();
    //     return data[0];
    // } catch(error){
    //     console.error("Error fetch data",error);
    //     throw error;
    // }
    

   


// getCity('manchester')