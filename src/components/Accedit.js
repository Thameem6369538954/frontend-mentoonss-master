import React,{useState} from 'react'
import '../css/Accedit.css'

const Accedit = () => {

    const [toggel, setToggle] = useState();
    const data = [
        {
          id: 1,
          heading: "Profile",
       
          
        },
        {
          id: 2,
          heading: "Order",
   
      
        },
        {
          id: 3,
          heading: "Rewards",
         
        
        },
      ];

  return (
    <div>
            <h1 className='heading-acc'>Account Details</h1>
         <div className="main-empower-container">
         <div className="empower-side-btns">
          {data.map(({ heading, id }) => {
            return (
              <div className='acc-btn'>
                <button onClick={() => setToggle(id)}>{heading}</button>
              </div>
            );
          })}
        </div>
        <div className="empower-box">
          {data.map(({ heading, linea, lineb, linec, id }) => {
            return (
              <div>
                {toggel === id ? (
                  <div className="main-starup-conatiner">
                    <div className="startup-image">
                
                    </div>
                    <div className="startup-text">
                      <h1>{heading}</h1>
                      <ul>
                        <li>{linea}</li>
                        <li>{lineb}</li>
                        <li>{linec}</li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
       
      </div>
                <div className="acc-btns">
                    <button>Add Accound</button>
                    <button>Delete Accound</button>
                </div>
    </div>
  )
}

export default Accedit