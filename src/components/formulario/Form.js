import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

const Form = () => {
  const [date, setDate] = useState(null);
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);

  const handleDateChange = (date) => {
    if (date >= new Date()) {
      setDate(date);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : '';
    console.log('Date:', formattedDate);
    console.log('Small Dogs:', smallDogs);
    console.log('Large Dogs:', largeDogs);
    // Aqui você pode enviar os dados para o backend
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Data:</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecione uma data"
        />
      </div>
      <div className="form-group">
        <label htmlFor="small-dogs">Número de Cães Pequenos:</label>
        <input
          type="number"
          id="small-dogs"
          value={smallDogs}
          onChange={(e) => setSmallDogs(Math.max(0, e.target.value))}
          min="0"
        />
      </div>
      <div className="form-group">
        <label htmlFor="large-dogs">Número de Cães Grandes:</label>
        <input
          type="number"
          id="large-dogs"
          value={largeDogs}
          onChange={(e) => setLargeDogs(Math.max(0, e.target.value))}
          min="0"
        />
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default Form;