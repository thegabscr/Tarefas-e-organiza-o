import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const Organizacao = () => {
    return (
        <div className='organizacao'>
            <h1>Organização</h1>
            <button> <Link to={`/Tarefas`}> Tarefas </Link> </button>
        </div>
    )
}

export default Organizacao