import '../Body/index.css'
import { Link } from 'react-router-dom';
 import { useEffect, useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'
export const Body = (props) => {

const[read, setRead]=useState({})
const[count, setCount]=useState(0)

useEffect(()=>{
  setRead(props.data.Data)
    setCount(1)
},[props])

useEffect(()=>{
  setCount(0)
},[])

// 12 hr

// function formatAMPM(date) {
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   var strTime = hours + ':' + minutes + ' ' + ampm;
//   return strTime;
// }


  return (
    <section>
            <div id ="viewer">
            <div id ='header'>
                      <p>TEMPERATURE (°F)</p>
                      <p>BATTERY LEVEL (%) </p>
                      <p>TIME STAMP</p>
            </div>

            { (count)? read.map((payload,index)=>{
                return(
                  <div id="reader" key = {index}>
                  <div id="temperature">
                    <div>{payload.temp}</div>
                  </div>
                  <div id="Battery">
                    <div>{payload.battery}</div>
                  </div>
                  <div id ="TimeStamp">
                    <div>{payload.createdAt}</div>
                  </div>
                  </div>
                )
            }):''}
            </div >
            <div id='SearchBox'>
            <Link to="/search">
            <button id="search">SEARCH PAGE</button>
            </Link>
            </div>
        </section>
  )
}

const mapStateToProps = (state) => ({
  data: state
})

export default connect(mapStateToProps,null)(Body)


