import { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const [currentConditions, setCurrentConditions] = useState({})
    const [address, setAddrees] = useState("")
    const [days, setDays] = useState([])
    const [description, setDescription] = useState("")
    const [search, setSearch] = useState("London")

    const [data, setData] = useState({})



    const fetchData = async () => {
        await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search},UK?key=M56H4DC4PGYUNJ9N5XXGTPZBF`)
            .then(response => {
                setAddrees(response.data.address)
                setCurrentConditions(response.data.currentConditions)
                setDays(response.data.days[0].hours)
                setDescription(response.data.description)
                setData(response.data)
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    const searchCity = (city) => {
        setSearch(city)
    }

    return <AppContext.Provider value={{ currentConditions, address, days, description, data, searchCity, fetchData }}>
        {children}
    </AppContext.Provider>
}