import React, { useEffect, useState } from 'react'
const SearchBar = ({ setData }) => {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        let url = `http://localhost:8080/nutrition?criteria=${value}`
        fetch(url).then((response) => response.json()).then((json) => {
            console.log(json)
            setData(json)
        }
        )
    }
    const onChange = (value) => {
        setInput(value)
        fetchData(value)

    }
    useEffect(() => onChange(""), [])

    return (
        <>
            <input type="text" placeholder="Search.." name="search"
                onChange={(e) => onChange(e.target.value)}
                value={input}
            />
        </>
    )
}

export default SearchBar