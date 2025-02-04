import { useQuery } from "@tanstack/react-query"
// import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic"

const useMenu = () => {
        const axiosPublic = useAxiosPublic()

        const {data: menu = [], isPending:loading} = useQuery({
                queryKey: ['menu'],
                queryFn: async () => {
                        const res = await axiosPublic.get('/menu')
                        return res.data;
                }

        })
	// const [menu, setMenu] = useState([])
	// const [loading, setLoading] = useState(true)

	// useEffect(() => {
	// 	fetch('http://localhost:3000/menu')
	// 	.then(res => res.json())
	// 	.then(data =>{
			
	// 		setMenu(data)
	// 		setLoading(false)
	// 	} )
		
	// },[])
	return [menu, loading]

}

export default useMenu