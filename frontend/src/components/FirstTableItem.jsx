import React from 'react'

const FirstTableItem = ({ data, setSelectedFoods }) => {
    const setOnClick = (selected) => {
        const modifySelected = { ...selected, id: Date.now() }
        setSelectedFoods(prev => [...prev, modifySelected])
    }
    return (
        <>
            <tr onClick={() => setOnClick(data)}>
                <td>{data.name}</td>
                <td>{data.calories}</td>
                <td>{data.proteins}</td>
                <td>{data.carbs}</td>
                <td>{data.fats}</td>
            </tr>
        </>
    )
}

export default FirstTableItem