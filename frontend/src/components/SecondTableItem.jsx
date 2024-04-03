import React from 'react'

const SecondTableItem = ({ data, setSelectedFoods }) => {
    const deleteSelectedFood = (selected) => {
        const foodToRemove = selected.id;
        setSelectedFoods(prev => prev.filter(item => item.id !== foodToRemove))
    }
    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.calories}</td>
                <td>{data.proteins}</td>
                <td>{data.carbs}</td>
                <td>{data.fats}</td>
                <td><button onClick={() => deleteSelectedFood(data)}>Delete</button></td>
            </tr>
        </>
    )
}

export default SecondTableItem