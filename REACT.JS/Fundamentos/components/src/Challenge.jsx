const Challenge = ()=>{

    const n1 = 5
    const n2 = 9

    const somar = ()=>{
        console.log(n1 + n2)
    }

    return(
        <div>
            <p>A = {n1}</p>
            <p>B = {n2}</p>

            <button onClick={somar}>Somar</button>
        </div>
    )
}

export default Challenge