export const UseLocalStorage=(key)=>{
    const setItem=(value)=>{
        try {
                window.localStorage.setItem(key,(value))
            }
        catch (error) {
            console.log(error);
        }
    }
    const getItem=()=>{
        try{
        const value=window.localStorage.getItem(key)
        return value? value:undefined
        }catch(error){
            console.log(error)
        }
    };
    const deleteItem=()=>{
        try {
            return window.localStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
       
    }

    return {setItem, getItem, deleteItem};
}
