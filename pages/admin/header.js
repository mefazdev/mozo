import Image from 'next/image'
import { useState } from 'react'
import logo from '../../public/images/home/logo.png'
import menuIcon from '../../public/images/mobile_menu.svg'
import CollapseBar from './collapseBar'
export default function header({career,settings,team, leadState,blog}) {
    const [state, setState] = useState(false)
    return (
        <div className='dash__header'>
            <div className='dash__header__row'>
              <div onClick={()=> setState(!state)} className='dash__header__menu'>
                  <Image src={menuIcon}/>
              </div>
              <div className='dash__header__logo__div rounded-full'>
              <div className='dash__header__logo '>
                  <Image src={logo} />
              </div>
              </div>
              
            </div>
            {state ? <CollapseBar career={career}
            blog={blog}
            settings={settings}
            leadState = { leadState}
            team ={team} /> : ''}
            
        
        </div>
    )
}
