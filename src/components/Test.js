import { useParams } from "react-router-dom"


export default function Test(){
    const list = useParams()
console.log(list)
    return(
        <>
        <h2>Hello World</h2>
        </>
    )
}