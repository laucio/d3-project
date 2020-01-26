export default interface Response<T>{
    error:number,
    mensaje:string,
    datos:T
}