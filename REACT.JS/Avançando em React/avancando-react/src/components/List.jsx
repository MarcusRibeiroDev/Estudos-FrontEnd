import { useState } from "react"

const List = ()=>{

    const [list] = useState(["Marcus", "Amanda", "Sabrina"])

    let [users, setUsers] = useState([
        {name:"Marcus", age:20, id:1256465},
        {name:"Sabrina", age:19, id:1256463},
        {name:"Amanda", age:45, id:1256468},
    ])

    const deleteUser = ()=>{

        let idRemoved = parseInt(prompt("Digite o ID que será deletado"))

        setUsers((previusState)=>{
            return previusState.filter((el)=>{return el.id !== idRemoved})
        })

    }

    return(

        <div>
        
            <ul>
                {
                    list.map((e,i) => (
                        <li key={i}>{e}</li>
                    ))
                }
            </ul>

            <ul>
                {
                    users.map((e) => (
                        <li key={e.id}>{e.name} - {e.age}</li>
                    ))
                }
            </ul>

            <button onClick={deleteUser}>Remover Usuário</button>

        </div>
    )

}

export default List