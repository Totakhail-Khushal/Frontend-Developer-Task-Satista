import React from 'react'
import Quality from './Quality'
import Header from './Header'


function Content() {
    const data = [
    {name:"Quality", score: "90%", status:"up"}, 
    {name:"Safety", score: "72%", status: "up"},
    {name:"Design", score: "93%", status:"up"},
    {name:"Service", score: "64%", status:"down"},
    {name:"Cleaning", score: "61%", status:"up"},
    {name:"Food Taste", score: "87%", status:"down"},
];


  return (
    <div className="content">
      <div className="top">
      <Header/>
      <Header/>
      <Header/>
      <Header/>

      </div>
      <div className='content-title'><h1>Aspect- based sentiment</h1></div>
      <div className="bottom">
        <div className="bottom-left">
          <Quality />
          <Quality />

        </div>

        <div className="bottom-right">
            {/* {console.log(data)} */}
            {data.map(obj => <Quality {...obj}/>)}

          {/* <Quality />
          <Quality />
          <Quality />
          <Quality />
          <Quality />
          <Quality /> */}
        </div>
      </div>
    </div>
  )
}

export default Content
