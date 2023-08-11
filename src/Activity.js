import React, { useState, useEffect } from 'react';
import './Activity.css'


// 1. this functions gets the full object but only works when invoked by the other

async function fetchData(type) {
    try {
      // Use different URLs based on the selected type
      const apiUrl = type === 'random'
      ? 'https://www.boredapi.com/api/activity/'
      : `https://www.boredapi.com/api/activity?type=${type}`;


      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data', error);
      return null;
    }
  }
  
  function Activity() {

    const [data, setData] = useState(null);
    const [activity, setActivity] = useState(null);

    // 1. [filter by type]
    const [selectedType, setSelectedType] = useState('random'); // first type is random

  
    // 2. the useEffect will invoke fetchData() and use it as jsondata variable
    useEffect(() => {
      async function fetchDataAndSetState() {

        // 3. jsonData now has the data returned in the fetcheddata()
        const jsonData = await fetchData(selectedType);

        // 4. if the fetch is successful the setData and setActivity is updated
        if (jsonData) {
          setData(jsonData);
          setActivity(jsonData.activity);
          console.log(jsonData);
        }
      }
  
      fetchDataAndSetState();
    }, []);

    // [generate] 1.2 this uses the btn to get invoked
    async function generate() {
      // 2. we get the jsonData just like before
        const jsonData = await fetchData(selectedType); 
        // 3. if the fetch is successful we update the setActivity to the new string value
        if (jsonData) {
            setData(jsonData);
            setActivity(jsonData.activity);
            console.log(jsonData);
          };//
    };
    

    // 2. [filter by type]
     // Function to handle radio button change
    function handleTypeChange(event) {
      setSelectedType(event.target.value);
      console.log(selectedType);
    }
  
    return (
      <div className="Activity">
        <div className="content">
          <div className="activity-box">{
          // 5. the Activity is used in the dom
          activity}</div>
          <button className='generate' onClick={
            //1.1. button invokes function
            generate}>Generate Activity</button>

        <div>
          <input type="radio" name='type' value="random"  id='random' checked={selectedType === 'random'}
            onChange={handleTypeChange}/>
          <label htmlFor="random"> random</label>

          <input type="radio" name='type' value="social"  id='social' checked={selectedType === 'social'}
            onChange={handleTypeChange}/>
          <label htmlFor="social"> social</label>

          <input type="radio" name='type' value="education"  id='education' checked={selectedType === 'education'}
            onChange={handleTypeChange}/>
          <label htmlFor="education"> education</label>

          <input type="radio" name='type' value="recreational"  id='recreational' checked={selectedType === 'recreational'}
            onChange={handleTypeChange}/>
          <label htmlFor="recreational"> recreational</label>

          <input type="radio" name='type' value="diy"  id='diy' checked={selectedType === 'diy'}
            onChange={handleTypeChange}/>
          <label htmlFor="diy"> diy</label>

          <input type="radio" name='type' value="charity"  id='charity' checked={selectedType === 'charity'}
            onChange={handleTypeChange}/>
          <label htmlFor="charity"> charity</label>

          <input type="radio" name='type' value="cooking"  id='cooking' checked={selectedType === 'cooking'}
            onChange={handleTypeChange}/>
          <label htmlFor="cooking"> cooking</label>

          <input type="radio" name='type' value="relaxation"  id='relaxation' checked={selectedType === 'type'}
            onChange={handleTypeChange}/>
          <label htmlFor="relaxation"> relaxation</label>

          <input type="radio" name='type' value="music"  id='music' checked={selectedType === 'music'}
            onChange={handleTypeChange}/>
          <label htmlFor="music"> music</label>

          <input type="radio" name='type' value="busywork"  id='busywork' checked={selectedType === 'bustywork'}
            onChange={handleTypeChange}/>
          <label htmlFor="busywork"> busywork</label>

          </div>
          
        </div>
      </div>
    );
  }
  
  export  default Activity;