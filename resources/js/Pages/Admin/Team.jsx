import React, { useEffect, useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '@/Layouts/Auth'
import Icon from '@/Components/Icon'
import SearchUser from '@/Components/Filters/SearchUser'
import Modal from 'react-modal'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import UserRole from '@/Components/Team/UserRole'
import { Context } from '@/Components/Team/Context'
import { usePrevious } from 'react-use';
import pickBy from 'lodash/pickBy';

Modal.setAppElement('*')

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Team = () => {
    const { users, csrf, admins, instructors, team, filters } = usePage().props
    const [ opened, setOpened ] = useState(false)
    const [ prevTeam, setTeam ] = useState(team)
    const [ modal,setModal ] = useState(false)
    const [ values, setValues ] = useState({
      role: filters.role || '', // role is used only on users page
      search: filters.search || '',
      trashed: filters.trashed || ''
    });
  
    const prevValues = usePrevious(values);
  
    function reset() {
      setValues({
        role: '',
        search: '',
        trashed: ''
      });
    }
  
    useEffect(() => {
      // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
      if (prevValues) {
        const query = Object.keys(pickBy(values)).length
          ? pickBy(values)
          : { remember: 'forget' };
        Inertia.get(route(route().current()), query, {
          replace: true,
          preserveState: true
        });
      }
    }, [values]);
  
    function handleChange(e) {
      const key = e.target.name;
      const value = e.target.value;
  
      setValues(values => ({
        ...values,
        [key]: value
      }));
  
      if (opened) setOpened(false);
    }

    function closeModal() {
        setModal(false)
    }

    return(
        <Context.Provider 
        value={{
            prevTeam, setTeam, 
            opened, setOpened,
            values, setValues,
            handleChange, prevValues,
            reset,
            closeModal
        }}
        >
        <div className='w-full h-full p-2 md:p-8 overflow-y-auto'>
            <div className='mx-auto mb-4 w-full max-w-7xl rounded-lg'>
                <div className='flex flex-wrap justify-between items-center w-full'>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <h2 className='font-semibold text-xl'>Team members</h2>
                        <p>Manage your team members and their account permissions here.</p>
                    </div>
                    <div className='px-4 py-2 w-full md:w-auto'>
                        <button onClick={()=>setModal(true)} className='btn-orange'>Add member</button>
                    </div>
                    
                </div>
            </div>
            <div>
            
            </div>
            <div className='p-8 flex flex-wrap max-w-7xl mx-auto'>
                <div className='w-full lg:w-1/3 pr-4'>
                    <h2 className='font-semibold'>Admin users</h2>
                    <p>Admins can add and remove users and manage organization-level settings.</p>
                </div>
                
                <div className='w-full lg:w-2/3 '>
                    <table className='w-full bg-gray-100 rounded'>
                        <thead>
                            <tr>
                                <th className='text-left p-4'>Name</th>
                                <th className='text-left p-4'>Date added</th>
                                <th className='p-4'>Role</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                            prevTeam.map(
                                (user, i) => (
                                    user.roles[0] === 'admin' ?
                                    <UserRole key={i} user={user}/>
                                    :
                                    null
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='p-8 flex flex-wrap max-w-7xl mx-auto'>
                <div className='w-full lg:w-1/3 pr-4'>
                    <h2 className='font-semibold'>Instructors users</h2>
                    <p>Instructors can add and manage course contents.</p>
                </div>
                <div className='w-full lg:w-2/3'>
                    <table className='w-full bg-gray-100 rounded'>
                        <thead>
                            <tr>
                                <th className='text-left p-4'>Name</th>
                                <th className='text-left p-4'>Date added</th>
                                <th className='p-4'>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prevTeam.map(
                                    (user, i) => (
                                        user.roles[0] === 'instructor' ?
                                        <UserRole key={i} user={user}/>
                                        :
                                        null
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        
            <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            className="modal-search"
            overlayClassName="modal-lesson-overlay"
            contentLabel="New category"
            >
                <div className='w-full'>
                    <SearchUser />
                </div>
                <div className='w-full'>
                {
                    users !== null && 
                    <table className='w-full bg-white'>
                        <thead>
                            <tr>
                                <th className='text-left p-2 py-4'>Name</th>
                                <th className='text-left p-2 py-4'>Email</th>
                                <th><span className='sr-only p-2 py-4'>Action</span></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        users.data.map((user, i) =>
                            <UserRole key={i} user={user}/>
                        )
                        }
                         {
                                users.data.length === 0 &&
                                <tr>
                                    <td className="px-6 py-4 border-t border-gray-100" colSpan="3">
                                        No users found
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                }
                </div>
            </Modal>
        </div>
        </Context.Provider>        
    )
}

Team.layout = page => <Layout title="Team" children={page} />;


export default Team;