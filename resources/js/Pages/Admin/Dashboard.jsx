import React from 'react'
import Layout from '@/Layouts/Auth'

const Dashboard = () =>{
    return(
        <div className='p-4'>
            Hello
        </div>
    )
}

Dashboard.layout = page => <Layout title="Dashboard" children={page}/>

export default Dashboard