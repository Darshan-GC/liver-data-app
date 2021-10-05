import '../Topbar/index.css'
import { useEffect} from 'react'
import io from 'socket.io-client'
import React from 'react'
import { connect } from 'react-redux'
import { dataAction } from '../../redux/actions';


let socket;



export const Topbar = (props) => {
   
    const ENDPOINT = 'https://live-server-db.herokuapp.com/';
   

    useEffect(()=>{
         const {dataSendAction} = props
        socket = io(ENDPOINT,{
            transports: ['websocket']
        })

          socket.on('getDB',(data)=>{
          dataSendAction(data)
          })

    },[props])

    useEffect(()=>{
        return()=>{
          socket.emit('clear')
        }
        },[])

    const startUpload= ()=>{
        socket.emit('startUpload')
    }

    const stopUpload= ()=>{
        socket.emit('stopUpload')
    }
    return (
        <section id="topbar">
        <div>
        <h2>Start Uploading Data to DB</h2>
        </div>
        <div>
        <button onClick={startUpload}>START</button>
        <button onClick={stopUpload}>STOP</button>
        </div>
        
    </section>
    )
}



const mapDispatchToProps =(dispatch)=>({
   dataSendAction: (payload)=> dispatch(dataAction(payload)) 
})

export default connect(null, mapDispatchToProps)(Topbar)

