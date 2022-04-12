import { useEffect, useState } from "react"

const usePackages = () =>{
    const [packages, setPackages] = useState([])
    console.log(packages);
    useEffect(()=>{
        fetch("packages.json")
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    return [packages, setPackages]
}

export default usePackages;