import { React, useState } from 'react'
import SecondTableItem from './SecondTableItem'

const SecondTable = ({ data, setSelectedFoods }) => {
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food) => <SecondTableItem key={food.id} data={food} setSelectedFoods={setSelectedFoods} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th>{data.reduce((sum, data) => sum + data.calories, 0)}</th>
                        <th>{data.reduce((sum, data) => sum + data.proteins, 0)}</th>
                        <th>{data.reduce((sum, data) => sum + data.carbs, 0)}</th>
                        <th>{data.reduce((sum, data) => sum + data.fats, 0)}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default SecondTable