export const generateOptions = (amount)=>{
    return Array.from({length:amount},(_,index)=>{
        let number = index+1;
        return <option value={number}>{number}</option>
    })
}