import React, { useState } from 'react';
import "./Input.css"
export default function Input() {
  const [titleContent, setTitleContent] = useState('');
  const [descriptionContent, setDescriptionContent] = useState('');
  const [submittedForms, setSubmittedForms] = useState([]);

  function handleTitleChange(event) {
    setTitleContent(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescriptionContent(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log('Title:', titleContent);
    console.log('Description:', descriptionContent);
    // Optionally, clear the input fields after saving
    const newForm = {title : titleContent, description: descriptionContent}
    setSubmittedForms([...submittedForms,newForm])
    setTitleContent('');
    setDescriptionContent('');
  }

  function handleDelete(index) {
    const newForms = submittedForms.filter((_, i) => i !== index);
    setSubmittedForms(newForms);
  }

  return (
    
    <div className = 'full-page'>
        
        <div className='main-page'>
          <div className='form-container'>
            <form>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={titleContent}
                onChange={handleTitleChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={descriptionContent}
                onChange={handleDescriptionChange}
              />
              <button type="submit" onClick={handleClick}>SAVE</button>
            </form>
          </div>
          <div className="submitted-forms">
            {submittedForms.map((form, index) => (
              <div key={index} className="submitted-form">
                <h3>{form.title}</h3>
                <p>{form.description}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
          
        </div>
        
    </div>
  );
}