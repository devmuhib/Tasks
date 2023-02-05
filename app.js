

// set data to the localstorage with an expires date
const setDataToLocalStorage = (key, value, minute)=>{
    const currentDate = new Date().getTime()

    const dataObj = {
        value: value,
        expiresIn: currentDate + minute
    }

  return localStorage.setItem(key, JSON.stringify(dataObj))

}


// get data from localstorage 
const getDataFromLocalStorage = (key)=>{

    // get data by key
    const dataObj = localStorage.getItem(key)

    
    if(!dataObj) {
        return null
    }

     const data = JSON.parse(dataObj)
     const currentDate = new Date()

    //  check current date with expires date
     if(currentDate.getTime() > data.expiresIn){

        // if the time is expires then remove the dataObj from localstorage
        localStorage.removeItem(key)
        return null
     }

     return data.value

}

// call the funtions
setDataToLocalStorage('test', 'this is the test value', 30)
getDataFromLocalStorage('test')