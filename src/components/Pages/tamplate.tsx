import { useParams } from "react-router-dom"




export default function Tamplate() {
    type URLParams = {firstname:string}
    const {firstname} = useParams<URLParams>()
  return (
    <div>
      My name is : {firstname}
    </div>
  )
}
