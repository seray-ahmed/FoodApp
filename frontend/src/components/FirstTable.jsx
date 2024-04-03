import React from 'react'
import './FirstTable.css'
import FirstTableItem from './FirstTableItem'


const FirstTable = ({ data, setSelectedFoods }) => {
    console.log(data)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Kcal</th>
                        <th>Proteins</th>
                        <th>Carbs</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food) => <FirstTableItem key={food.id} data={food} setSelectedFoods={setSelectedFoods} />)}
                </tbody>
            </table>
        </>
    )
}

export default FirstTable