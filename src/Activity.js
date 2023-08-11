import React, { useState, useEffect } from 'react';
import './Activity.css'

async function fetchData() {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity/');
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
  
    useEffect(() => {
      async function fetchDataAndSetState() {
        const jsonData = await fetchData();
        if (jsonData) {
          setData(jsonData);
          setActivity(jsonData.activity);
          console.log(jsonData);
        }
      }
  
      fetchDataAndSetState();
    }, []);

    async function generate() {
        const jsonData = await fetchData(); 
        if (jsonData) {
            setData(jsonData);
            setActivity(jsonData.activity);
            console.log(jsonData);
          };
    };
    
  
    return (
      <div className="Activity">
        <div className="content">
          <div className="activity-box">{activity}</div>
          <button className='generate' onClick={generate}>Generate Activity</button>

        <div>
          <input type="radio" name='type' value="random"  id='random'/>
          <label htmlFor="random"> random</label>

          <input type="radio" name='type' value="social"  id='social'/>
          <label htmlFor="social"> social</label>

          <input type="radio" name='type' value="education"  id='education'/>
          <label htmlFor="education"> education</label>

          <input type="radio" name='type' value="recreational"  id='recreational'/>
          <label htmlFor="recreational"> recreational</label>

          <input type="radio" name='type' value="diy"  id='diy'/>
          <label htmlFor="diy"> diy</label>

          <input type="radio" name='type' value="charity"  id='charity'/>
          <label htmlFor="charity"> charity</label>

          <input type="radio" name='type' value="cooking"  id='cooking'/>
          <label htmlFor="cooking"> cooking</label>

          <input type="radio" name='type' value="relaxation"  id='relaxation'/>
          <label htmlFor="relaxation"> relaxation</label>

          <input type="radio" name='type' value="music"  id='music'/>
          <label htmlFor="music"> music</label>

          <input type="radio" name='type' value="busywork"  id='busywork'/>
          <label htmlFor="busywork"> busywork</label>

          </div>
          
        </div>
      </div>
    );
  }
  
  export  default Activity;