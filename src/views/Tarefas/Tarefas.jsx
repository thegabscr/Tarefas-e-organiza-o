import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const Tarefas = () => {
    return (
        <div className='tarefas'>
            <h1>Tarefas</h1>
            <button>
                <Link to={`/Organizacao`}> Tarefas </Link>
            </button>
        </div>
    )
}

export default Tarefas