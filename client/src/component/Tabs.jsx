import React from 'react'
import { TABS } from '../redux/actions/type'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/actions'

const Tabs = ({currentTab}) => {
    const dispatch = useDispatch()
  return (<>
    {
        TABS.map((tab)=>{
            return(
            <button className={tab===currentTab ? 'buttonAction selected' : 'buttonAction'  } 
            onClick={()=>dispatch(toggleTab(tab))} >{tab}
            </button>)
        })
    }
  </>)
}

export default Tabs