import React from 'react'

function Delete({prop}) {
    function handleDelete(){
        fetch(`http://localhost:4000/questions/${prop}`,{
            method:"DELETE"
        })
    }
  return (
    <div>
        <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}

export default Delete