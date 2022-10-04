import React, { useRef, useState, Fragment } from 'react';
import Layout from '@/Layouts/Auth';
import Icon from '@/Components/Icon';
import classNames from 'classnames';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input'
import SelectInput from '@/Components/SelectInput';
import Section from '@/Components/Courses/Section'

const Checkbox = (props) => {
    function handleChange() {
      return null
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={handleChange}/>
    )
  }

const Curriculum = () =>{
    const {menu, setMenu} = useState(false)
    const [work, setWork] = useState([
        {
            title: 'Sales manager',
            company: 'JN Enterprise',
            country: 'Canada',
            city:'Ontario',
            from:'November 2017',
            fromMonth:'November',
            fromYear: '2017',
            currently: false,
            toMonth:'January',
            toYear: '2020',
            to:'January 2021',
            description: 'Sales managers lead a sales team by providing guidance, training and mentorship, setting sales quotas and goals, creating sales plans, analyzing data, assigning sales territories and building their team.'
        }
    ])
    const [addEducation, setAddEducation] = useState(false)
    const [education, setEducation] = useState([
        {
            level: 'College Degree',
            field: 'Business',
            school: 'Canada',
            location:'Ontario',
            fromMonth:'November',
            fromYear: '2017',
            currently: false,
            toMonth:'January',
            toYear: '2020',
        }
    ])
    const [newEducation, setNewEducation] = useState({
        level: '',
        field: '',
        school: '',
        location:'',
        fromMonth:'',
        fromYear: '',
        currently: false,
        toMonth:'',
        toYear: '',
    })
    function saveEducation(){
        const educations = [...education]
        setEducation(educations.concat(newEducation))
        setAddEducation(false)
        setNewEducation({
            level: '',
            field: '',
            school: '',
            location:'',
            fromMonth:'',
            fromYear: '',
            currently: false,
            toMonth:'',
            toYear: ''
        })
    }
    function CancelAddEducation(){
        setAddEducation(false)
        setNewEducation({
            level: '',
            field: '',
            school: '',
            location:'',
            fromMonth:'',
            fromYear: '',
            currently: false,
            toMonth:'',
            toYear: ''
        })
    }
    const [skill, setSkill] = useState([{
        skill: 'Sales Management',
        experience: 7,
    }])
    const [addSkill, setAddSkill] = useState(false)
    const [newSkill, setNewSkill] = useState({
        skill: '',
        experience: '',

    })
    function saveSkill(){
        const skills = [...skill]
        setSkill(skills.concat(newSkill))
        setAddSkill(false)
        setNewSkill({
            skill: '',
            experience: '',
        })
    }
    function CancelAddSkill(){
        setAddSkill(false)
        setNewSkill({
            skill: '',
            experience: '',
        })
    }

    const [addWork, setAddWork] = useState(false)
    const [newWork, setNewWork] = useState({
        title: '',
        company: '',
        country: '',
        city:'',
        fromMonth:'',
        fromYear: '',
        currently: false,
        toMonth:'',
        toYear: '',
        description: ''
    })

    function saveWork(){
        const works = [...work]
        setWork(works.concat(newWork))
        setAddWork(false)
        setNewWork({
            title: '',
            company: '',
            country: '',
            city:'',
            fromMonth:'',
            fromYear: '',
            currently: false,
            toMonth:'',
            toYear: '',
            description: ''
        })
    }
    function CancelAdd(){
        setAddWork(false)
        setNewWork({
            title: '',
            company: '',
            country: '',
            city:'',
            fromMonth:'',
            fromYear: '',
            currently: false,
            toMonth:'',
            toYear: '',
            description: ''
        })
    }
    function setData(name,value){
        //const key = e.target.name;
        //const value = e.target.value;
    
        setNewWork(values => ({
          ...values,
          [name]: value
        })
        );
    }
    function setDataEducation(name,value){
        //const key = e.target.name;
        //const value = e.target.value;
    
        setNewEducation(values => ({
          ...values,
          [name]: value
        })
        );
    }
    function setDataSkill(name,value){
        //const key = e.target.name;
        //const value = e.target.value;
    
        setNewSkill(values => ({
          ...values,
          [name]: value
        })
        );
    }

    return(
        <div className='w-full h-full p-8 overflow-y-auto'>
            <div className='mx-auto w-full max-w-4xl  p-10 border rounded-lg'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-semibold my-2'>Amelia Smith</h1>
                    </div>
                    <div>
                        <Icon name="edit" className='w-4 h-4'/>
                    </div>
                </div>
                <div>
                    <p>Armstrong, ON. K9V 0A0</p>
                    <p>+1 12 4403 7956</p>
                </div>
                
                <div>
                    <div className='border-b border-orange py-2 my-4 flex justify-between items-center px-2'>
                        <div>
                            <p>Work Experience</p>
                        </div>
                        <div 
                            className='text-orange border border-orange rounded-full p-1'
                            onClick={() => setAddWork(!addWork)}>
                            <Icon name='plus' className='w-3 h-3 fill-current'/>
                        </div>
                    </div>
                    {
                        addWork &&
                        <div className='px-4'>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Job title - required"
                        value={newWork.title}
                        //errors={errors.newWorks}
                        onChange={e => setData('title', e.target.value)}
                        />
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Company"
                        value={newWork.company}
                        //errors={errors.newWorks}
                        onChange={e => setData('company', e.target.value)}
                        />
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="City"
                        value={newWork.city}
                        //errors={errors.newWorks}
                        onChange={e => setData('city', e.target.value)}
                        />
                        <h4 className='font-semibold my-4'>Time period</h4>
                        <div className="flex items-center mr-2" onClick={() => setData('currently', !newWork.currently)}>
                            <Checkbox checked={newWork.currently ? true : false}/><span className="ml-2">I currently work here</span>
                        </div>
                        <div className='flex items-end'>
                            <SelectInput
                            label="From"
                            //errors={errors.estadoNacimiento}
                            value={newWork.fromMonth}
                            onChange={(e) => setData('fromMonth', e.target.value)}
                            className="w-40"
                            style={{ backgroundColor: '#fff' }}
                            name="fromMonth">
                                <option value=""></option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </SelectInput>
                            <SelectInput
                            value={newWork.fromYear}
                            className="w-28 ml-2"
                            onChange={(e) => setData('fromYear', e.target.value)}
                            name="fromYear">
                            <option value=""></option>
                            <option value="1920">1920</option>
                            <option value="1921">1921</option>
                            <option value="1922">1922</option>
                            <option value="1923">1923</option>
                            <option value="1924">1924</option>
                            <option value="1925">1925</option>
                            <option value="1926">1926</option>
                            <option value="1927">1927</option>
                            <option value="1928">1928</option>
                            <option value="1929">1929</option>
                            <option value="1930">1930</option>
                            <option value="1931">1931</option>
                            <option value="1932">1932</option>
                            <option value="1933">1933</option>
                            <option value="1934">1934</option>
                            <option value="1935">1935</option>
                            <option value="1936">1936</option>
                            <option value="1937">1937</option>
                            <option value="1938">1938</option>
                            <option value="1939">1939</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            </SelectInput>
                        </div>
                        {
                            !newWork.currently &&
                            <div className='flex items-end mt-2'>
                            <SelectInput
                            label="To"
                            //errors={errors.estadoNacimiento}
                            value={newWork.toMonth}
                            onChange={(e) => setData('toMonth', e.target.value)}
                            className="w-40"
                            style={{ backgroundColor: '#fff' }}
                            name="toMonth">
                                <option value=""></option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </SelectInput>
                            <SelectInput
                            value={newWork.toYear}
                            className="w-28 ml-2"
                            onChange={(e) => setData('toYear', e.target.value)}
                            name="toYear">
                            <option value=""></option>
                            <option value="1920">1920</option>
                            <option value="1921">1921</option>
                            <option value="1922">1922</option>
                            <option value="1923">1923</option>
                            <option value="1924">1924</option>
                            <option value="1925">1925</option>
                            <option value="1926">1926</option>
                            <option value="1927">1927</option>
                            <option value="1928">1928</option>
                            <option value="1929">1929</option>
                            <option value="1930">1930</option>
                            <option value="1931">1931</option>
                            <option value="1932">1932</option>
                            <option value="1933">1933</option>
                            <option value="1934">1934</option>
                            <option value="1935">1935</option>
                            <option value="1936">1936</option>
                            <option value="1937">1937</option>
                            <option value="1938">1938</option>
                            <option value="1939">1939</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            </SelectInput>
                        </div>
                        }
                        <div>
                            <p className='mt-2 font-semibold'>Description</p>
                            <textarea className='w-full border border-black rounded appearance-none focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange' 
                            value={newWork.description}
                            onChange={(e) => setData('description', e.target.value)} />
                        </div>
                        <div className='flex'>
                            <button onClick={saveWork} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                            <button onClick={CancelAdd} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                        </div>
                    </div>
                    }
                    
                    <div>
                        {
                            work.reverse().map(({title, company, country, city, currently, description, fromMonth, fromYear, toMonth, toYear}, i) => {
                                return(
                                    <Fragment key={i}>
                                    <div className='pt-2 my-4 flex justify-between items-center px-2'>
                                        <div>
                                            <p className='font-bold'>{title}</p>
                                        </div>
                                        <div className='flex justify-end text-orange rounded-full p-1'>
                                            <Icon name='edit' className='w-4 h-4 fill-current'/>
                                            <Icon name='trash' className='ml-3 w-4 h-4 fill-current'/>
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <p>{company} - {city}, {country}</p>
                                        <p className='text-sm text-gray-500'>{fromMonth} {fromYear} to {currently == false ? (toMonth + ' ' + toYear)  : 'Present'}</p>
                                    </div>
                                    <div>
                                        <p className='px-2'>{description}</p>
                                    </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='border-b border-orange py-2 my-4 flex justify-between items-center px-2'>
                        <div>
                            <p>Education and training</p>
                        </div>
                        <div className='text-orange border border-orange rounded-full p-1'
                        onClick={() => setAddEducation(!addEducation)}>
                            <Icon name='plus' className='w-3 h-3 fill-current'/>
                        </div>
                        
                    </div>
                    {
                        addEducation &&

                        <div className='px-4'>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Level of Education"
                        value={newEducation.level}
                        //errors={errors.newWorks}
                        onChange={e => setDataEducation('level', e.target.value)}
                        />
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Field of study"
                        value={newEducation.field}
                        //errors={errors.newWorks}
                        onChange={e => setDataEducation('field', e.target.value)}
                        />
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="School"
                        value={newEducation.school}
                        //errors={errors.newWorks}
                        onChange={e => setDataEducation('school', e.target.value)}
                        />
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="School location"
                        value={newEducation.location}
                        //errors={errors.newWorks}
                        onChange={e => setDataEducation('location', e.target.value)}
                        />
                        <h4 className='font-semibold my-4'>Time period</h4>
                        <div className="flex items-center mr-2" onClick={() => setDataEducation('currently', !newEducation.currently)}>
                            <Checkbox checked={newEducation.currently ? true : false}/><span className="ml-2">I currently work here</span>
                        </div>
                        <div className='flex items-end'>
                        <SelectInput
                        label="From"
                        //errors={errors.estadoNacimiento}
                        value={newEducation.fromMonth}
                        onChange={(e) => setDataEducation('fromMonth', e.target.value)}
                        className="w-40"
                        style={{ backgroundColor: '#fff' }}
                        name="fromMonth">
                            <option value=""></option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </SelectInput>
                        
                        <SelectInput
                        value={newEducation.fromYear}
                        className="w-28 ml-2"
                        onChange={(e) => setDataEducation('fromYear', e.target.value)}
                        name="fromYear">
                        <option value=""></option>
                        <option value="1920">1920</option>
                        <option value="1921">1921</option>
                        <option value="1922">1922</option>
                        <option value="1923">1923</option>
                        <option value="1924">1924</option>
                        <option value="1925">1925</option>
                        <option value="1926">1926</option>
                        <option value="1927">1927</option>
                        <option value="1928">1928</option>
                        <option value="1929">1929</option>
                        <option value="1930">1930</option>
                        <option value="1931">1931</option>
                        <option value="1932">1932</option>
                        <option value="1933">1933</option>
                        <option value="1934">1934</option>
                        <option value="1935">1935</option>
                        <option value="1936">1936</option>
                        <option value="1937">1937</option>
                        <option value="1938">1938</option>
                        <option value="1939">1939</option>
                        <option value="1940">1940</option>
                        <option value="1941">1941</option>
                        <option value="1942">1942</option>
                        <option value="1943">1943</option>
                        <option value="1944">1944</option>
                        <option value="1945">1945</option>
                        <option value="1946">1946</option>
                        <option value="1947">1947</option>
                        <option value="1948">1948</option>
                        <option value="1949">1949</option>
                        <option value="1950">1950</option>
                        <option value="1951">1951</option>
                        <option value="1952">1952</option>
                        <option value="1953">1953</option>
                        <option value="1954">1954</option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        </SelectInput>
                        </div>
                        
                        {
                            !newEducation.currently &&
                            <div className='flex items-end mt-2'>
                            <SelectInput
                            label="To"
                            //errors={errors.estadoNacimiento}
                            value={newEducation.toMonth}
                            onChange={(e) => setDataEducation('toMonth', e.target.value)}
                            className="w-40"
                            style={{ backgroundColor: '#fff' }}
                            name="toMonth">
                                <option value=""></option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </SelectInput>
                            <SelectInput
                            value={newEducation.toYear}
                            className="w-28 ml-2"
                            onChange={(e) => setDataEducation('toYear', e.target.value)}
                            name="toYear">
                            <option value=""></option>
                            <option value="1920">1920</option>
                            <option value="1921">1921</option>
                            <option value="1922">1922</option>
                            <option value="1923">1923</option>
                            <option value="1924">1924</option>
                            <option value="1925">1925</option>
                            <option value="1926">1926</option>
                            <option value="1927">1927</option>
                            <option value="1928">1928</option>
                            <option value="1929">1929</option>
                            <option value="1930">1930</option>
                            <option value="1931">1931</option>
                            <option value="1932">1932</option>
                            <option value="1933">1933</option>
                            <option value="1934">1934</option>
                            <option value="1935">1935</option>
                            <option value="1936">1936</option>
                            <option value="1937">1937</option>
                            <option value="1938">1938</option>
                            <option value="1939">1939</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            </SelectInput>
                        </div>
                        }
                        <div className='flex my-4'>
                            <button onClick={saveEducation} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                            <button onClick={CancelAddEducation} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                        </div>
                        </div>
                    }
                    <div>
                        {
                            education.reverse().map(({level, field, school, location, fromMonth, fromYear, toMonth, toYear, currently}, i) => {
                                return(
                                    <Fragment key={i}>
                                    <div className='pt-2 my-4 flex justify-between items-center px-2'>
                                        <div>
                                            <p className='font-bold'>{level} in {field}</p>
                                        </div>
                                        <div className='flex justify-end text-orange rounded-full p-1'>
                                            <Icon name='edit' className='w-4 h-4 fill-current'/>
                                            <Icon name='trash' className='ml-3 w-4 h-4 fill-current'/>
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <p>{school} - {location}</p>
                                        <p className='text-sm text-gray-500'>{fromMonth} {fromYear} to {currently == false ? (toMonth + ' ' + toYear)  : 'Present'}</p>
                                    </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='border-b border-orange py-2 my-4 flex justify-between items-center px-2'>
                        <div>
                            <p>Skills</p>
                        </div>
                        <div className='text-orange border border-orange rounded-full p-1'
                            onClick={() => setAddSkill(!addSkill)}>
                            <Icon name='plus' className='w-3 h-3 fill-current'/>
                        </div>
                        
                    </div>
                    {
                        addSkill &&
                        <div className='px-4'>
                        <Input
                        className="text-gray-700 w-full my-2"
                        type="text"
                        label="Skill"
                        value={newSkill.skill}
                        //errors={errors.newWorks}
                        onChange={e => setDataSkill('skill', e.target.value)}
                        />
                        <SelectInput
                            value={newSkill.experience}
                            label="Years of experience"
                            className="w-full"
                            onChange={(e) => setDataSkill('experience', e.target.value)}
                            name="experience">
                            <option value=""></option>
                            <option value="less">Less than 1 year</option>
                            <option value="1">1 year</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                            <option value="6">6 years</option>
                            <option value="7">7 years</option>
                            <option value="8">8 years</option>
                            <option value="9">9 years</option>
                            <option value="10">10+ years</option>
                            </SelectInput>
                            <div className='flex my-2 mt-4'>
                                <button onClick={saveSkill} className='bg-orange p-4 px-8 rounded-lg text-white font-semibold'>Save</button>
                                <button onClick={CancelAddSkill} className='text-orange p-4 px-8 font-semibold ml-2'>Cancel</button>
                            </div>
                        </div>
                        }
                        {
                            skill.reverse().map(({skill, experience}, i) => {
                                return(
                                    <Fragment key={i}>
                                    <div className='pt-2 my-4 flex justify-between items-center px-2'>
                                        <div>
                                            <p className=''>{skill} - <span className='text-gray-500'>{experience < 1 ? 'Less than 1 year' : experience === 1 ? '1 year' : experience + ' years'}</span></p>
                                        </div>
                                        <div className='flex justify-end text-orange rounded-full p-1'>
                                            <Icon name='edit' className='w-4 h-4 fill-current'/>
                                            <Icon name='trash' className='ml-3 w-4 h-4 fill-current'/>
                                        </div>
                                    </div>
                                    
                                    </Fragment>
                                )
                            })
                        }
                </div>
            </div>
        </div>        
    )
}

Curriculum.layout = page => <Layout title="My curriculum" children={page} />;


export default Curriculum;