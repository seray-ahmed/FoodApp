import FirstTable from '../components/FirstTable'
import SecondTable from '../components/SecondTable'
import { React, useState } from 'react'

const Index = ({ data }) => {

    const [selectedFoods, setSelectedFoods] = useState([])
    return (
        <>
            <SecondTable data={selectedFoods} setSelectedFoods={setSelectedFoods}></SecondTable>
            <FirstTable data={data} setSelectedFoods={setSelectedFoods} ></FirstTable>
        </>
    )
}

export default Index