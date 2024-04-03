import { React, useState } from 'react'
import '../components/Add.css'

const Add = ({ setData }) => {
    const [formData, setFormData] = useState({
        name: '',
        calories: 0,
        proteins: 0,
        carbs: 0,
        fats: 0
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/nutrition', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            alert('Item saved successfully!');
            setData(prev => [...prev, formData])

            setFormData({
                name: '',
                calories: 0,
                proteins: 0,
                carbs: 0,
                fats: 0
            });
        } catch (error) {
            console.error('Error saving the item:', error);
            alert('Failed to save item.');
        }
    };

    return (
        <div className="nutritionFormContainer">
            <form onSubmit={handleSubmit} className="nutritionForm">
                <label>
                    Nutrition Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nutrition Name"
                    />
                </label>
                <label>
                    Calories:
                    <input
                        type="number"
                        name="calories"
                        value={formData.calories}
                        onChange={handleChange}
                        placeholder="Calories"
                    />
                </label>
                <label>
                    Proteins (g):
                    <input
                        type="number"
                        name="proteins"
                        value={formData.proteins}
                        onChange={handleChange}
                        placeholder="Proteins"
                    />
                </label>
                <label>
                    Carbs (g):
                    <input
                        type="number"
                        name="carbs"
                        value={formData.carbs}
                        onChange={handleChange}
                        placeholder="Carbs"
                    />
                </label>
                <label>
                    Fats (g):
                    <input
                        type="number"
                        name="fats"
                        value={formData.fats}
                        onChange={handleChange}
                        placeholder="Fats"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Add