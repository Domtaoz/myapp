import {useRef,useState} from 'react'
const BmiText=({bmi})=>{
    if(bmi<18.5) return (<h1>UnderWeight</h1>)
    if(bmi>30) return (<h1>Overweight</h1>)
    return (<h1>Normal</h1>)
}
export default function Bmi(){
    const w_input=useRef(null)
    const h_input=useRef(null)
    const [Bmi,setBmi]=useState(0)
    const calBmi=()=>{
        let w=w_input.current.value
        let h=h_input.current.value/100
        setBmi(w/Math.pow(h,2))
    }
    return(
        <>
        <h3>Bmi Calculator</h3>
        Weight: <input
           type="text"
           ref={w_input} /> kg.<br/>
        Height: <input
           type="text"
           ref={h_input} /> cm.<br/>
        <button onClick={()=>calBmi()}>
            Calculate
        </button><br/>
        Bmi value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi}></BmiText>
        </>
    )
}