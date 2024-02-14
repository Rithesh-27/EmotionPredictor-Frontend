import React from 'react'

const Footer = () => {
    const today = new Date()
    return (
        <footer className='Footer'>
            Copyright &copy; {today.getFullYear()} S K Rithesh Akash
        </footer>
    )
}

export default Footer