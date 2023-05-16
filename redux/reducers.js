import { combineReducers } from 'redux'
import { closeAppQuote } from './actions'
import * as types from './types'

// COUNTER REDUCER
const commonDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__COMMON:
      return state =  true
    case types.CLOSE__DETAIL__COMMON:
      return state= false
    
    default:
      return state
  }
}
const webDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__WEB:
      return state =  true
    case types.CLOSE__DETAIL__WEB:
      return state= false
    
    default:
      return state
  }
}


const appDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__APP:
      return state =  true
    case types.CLOSE__DETAIL__APP:
      return state= false
    
    default:
      return state
  }
}



const softwareDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__SOFTWARE:
      return state =  true
    case types.CLOSE__DETAIL__SOFTWARE:
      return state= false
    
    default:
      return state
  }
}

const gameDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__GAME:
      return state =  true
    case types.CLOSE__DETAIL__GAME:
      return state= false
    
    default:
      return state
  }
}
const graphicDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__GRAPHIC:
      return state =  true
    case types.CLOSE__DETAIL__GRAPHIC:
      return state= false
    
    default:
      return state
  }
}

const animationDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__ANIMATION :
      return state =  true
    case types.CLOSE__DETAIL__ANIMATION :
      return state= false
    
    default:
      return state
  }
}
const digitalDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__DIGITAL:
      return state =  true
    case types.CLOSE__DETAIL__DIGITAL:
      return state= false
    
    default:
      return state
  }
}
const brandingDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__BRANDING :
      return state =  true
    case types.CLOSE__DETAIL__BRANDING :
      return state= false
    
    default:
      return state
  }
}
const seoDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__SEO:
      return state =  true
    case types.CLOSE__DETAIL__SEO:
      return state= false
    
    default:
      return state
  }
}
const smmDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__SMM:
      return state =  true
    case types.CLOSE__DETAIL__SMM:
      return state= false
    
    default:
      return state
  }
}
const smsDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__SMS:
      return state =  true
    case types.CLOSE__DETAIL__SMS:
      return state= false
    
    default:
      return state
  }
}
const emailDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__EMAIL:
      return state =  true
    case types.CLOSE__DETAIL__EMAIL:
      return state= false
    
    default:
      return state
  }
}
const influencerDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__INFLUENCER:
      return state =  true
    case types.CLOSE__DETAIL__INFLUENCER:
      return state= false
    
    default:
      return state
  }
}
const domainDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__DOMAIN :
      return state =  true
    case types.CLOSE__DETAIL__DOMAIN :
      return state= false
    
    default:
      return state
  }
}
const hostingDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__HOSTING:
      return state =  true
    case types.CLOSE__DETAIL__HOSTING:
      return state= false
    
    default:
      return state
  }
}
const cloudDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__CLOUD :
      return state =  true
    case types.CLOSE__DETAIL__CLOUD :
      return state= false
    
    default:
      return state
  }
}
const aiDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__AI:
      return state =  true
    case types.CLOSE__DETAIL__AI:
      return state= false
    
    default:
      return state
  }
}
const roboticsDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__ROBOTICS:
      return state =  true
    case types.CLOSE__DETAIL__ROBOTICS:
      return state= false
    
    default:
      return state
  }
}
const businessDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__BUSINESS:
      return state =  true
    case types.CLOSE__DETAIL__BUSINESS:
      return state= false
    
    default:
      return state
  }
}
const researchDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__RESEARCH:
      return state =  true
    case types.CLOSE__DETAIL__RESEARCH:
      return state= false
    
    default:
      return state
  }
}
const dataDetailReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DETAIL__DATA:
      return state =  true
    case types.CLOSE__DETAIL__DATA:
      return state= false
    
    default:
      return state
  }
}


//  QOUTE FORM REDUCERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const commenQuoteReducer = (state = false, {type}) =>{
  switch (type) {
    case types.OPEN__COMMEN__QUOTE:
      return state =   true
    case types.CLOSE__COMMEN__QUOTE:
      return state= false
    
    default:
      return state
  }
}
const webQuoteReducer = (state = false, {type}) =>{
  switch (type) {
    case types.OPEN__WEB__QUOTE:
      return state = true
      
    case types.CLOSE__WEB__QUOTE:
      return state= false
    
    default:
      return state
  }
}




const appQuoteReducer = (state = false, {type}) =>{
  switch (type) {
    case types.OPEN__APP__QUOTE:
      return state =   true
    case types.CLOSE__APP__QUOTE:
      return state= false
    
    default:
      return state
  }
}
const softwareQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__SOFTWARE__QUOTE:
      return state =  true
    case types.CLOSE__SOFTWARE__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const businessQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__BUSINESS__QUOTE:
      return state =  true
    case types.CLOSE__BUSINESS__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const digitalQuoteReducer= (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DIGITAL__QUOTE:
      return state =  true
    case types.CLOSE__DIGITAL__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const brandingQuoteReducer= (state = false, { type }) => {
  switch (type) {
    case types.OPEN__BRANDING__QUOTE:
      return state =  true
    case types.CLOSE__BRANDING__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const seoQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__SEO__QUOTE:
      return state =  true
    case types.CLOSE__SEO__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const smmQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__SMM__QUOTE:
      return state =  true
    case types.CLOSE__SMM__QUOTE:
      return state= false
    
    default:
      return state
  }
}
const smsQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__SMS__QUOTE:
      return state =  true
    case types.CLOSE__SMS__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const emailQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__EMAIL__QUOTE:
      return state =  true
    case types.CLOSE__EMAIL__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const influencerQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__INFLUENCER__QUOTE:
      return state =  true
    case types.CLOSE__INFLUENCER__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const domainQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DOMAIN__QUOTE:
      return state =  true
    case types.CLOSE__DOMAIN__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const hostingQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__HOSTING__QUOTE:
      return state =  true
    case types.CLOSE__HOSTING__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const animtaionQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__ANIMATION__QUOTE :
      return state =  true
    case types.CLOSE__ANIMATION__QUOTE :
      return state= false
    
    default:
      return state
  }
}

const aiQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__AI__QUOTE:
      return state =  true
    case types.CLOSE__AI__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const gameQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__GAME__QUOTE:
      return state =  true
    case types.CLOSE__GAME__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const cloudQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__CLOUD__QUOTE:
      return state =  true
    case types.CLOSE__CLOUD__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const roboticsQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__ROBOTICS__QUOTE:
      return state =  true
    case types.CLOSE__ROBOTICS__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const researchQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__RESEARCH__QUOTE:
      return state =  true
    case types.CLOSE__RESEARCH__QUOTE:
      return state= false
    
    default:
      return state
  }
}

const graphicQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__GRAPHIC__QUOTE:
      return state =  true
    case types.CLOSE__GRAPHIC__QUOTE:
      return state= false
    
    default:
      return state
  }
}


const dataQuoteReducer = (state = false, { type }) => {
  switch (type) {
    case types.OPEN__DATA__QUOTE:
      return state =  true
    case types.CLOSE__DATA__QUOTE:
      return state= false
    
    default:
      return state
  }
}




// ADMIN PANEL

const userControl = (state = false, { type }) => {
  switch (type) {
    case types.USER__IN:
      return state =  true
    case types.USER__OUT:
      // return state= false
    
    default:
      return state = true
  }
}

const superAdmin = (state= false, {type}) =>{
  switch(type) {
    case types.SUPER__ADMIN:
      return state = true
      case types.SUPER__ADMIN__NULL :
        return state = false
        default:
          return state
  }
}




const formIdReducer = (state = null, {type, id}) => {
  switch(type) {
    case types.ADD__FORM__ID:
      return id

      default :
      return state  
  }
}
const idReducer = (state = null, {type, id}) => {
  switch(type) {
    case types.FETCH__ID:
      return id

      default :
      return state
  }
}
const blogIdReducer = (state = null, {type, id}) => {
  switch(type) {
    case types.FETCH__BLOG__ID:
      return id

      default :
      return state
  }
}

// SUCCESS ALERT

const successAlert = (state = null,{ type })=>{
  switch(type){
    case types.SUCCESS__ALERT:
      return state = true
      case types.CLOSE__SUCCESS__ALERT:
        return state = false
      default :
      return state
  }
}


// COMBINED REDUCERS
const reducers = {
commonFormControl :commonDetailReducer,
webFormControl : webDetailReducer,
softwareFormControl : softwareDetailReducer,
appFormControl : appDetailReducer,
gameFormControl : gameDetailReducer,
graphicFormControl : graphicDetailReducer,  
animationFormControl : animationDetailReducer,
digitalFormControl : digitalDetailReducer,
brandingFormControl : brandingDetailReducer,
seoFormControl : seoDetailReducer,
smmFormControl : smmDetailReducer,
smsFormControl : smsDetailReducer,
emailFormControl : emailDetailReducer,
influencerFormControl : influencerDetailReducer,
domainFormControl : domainDetailReducer,
hostingFormControl : hostingDetailReducer,
cloudFormControl : cloudDetailReducer,
aiFormControl : aiDetailReducer,
roboticsFormControl : roboticsDetailReducer,
businessFormControl : businessDetailReducer,
researchFormControl : researchDetailReducer,
dataFormControl : dataDetailReducer,

// QUOTS 
commenQuoteControl : commenQuoteReducer ,
webQuoteControl:  webQuoteReducer ,
appQuoteControl:  appQuoteReducer ,
softwareQuoteControl: softwareQuoteReducer ,
businessQuoteControl: businessQuoteReducer ,
digitalQuoteControl: digitalQuoteReducer ,
brandingQuoteControl: brandingQuoteReducer ,
seoQuoteControl: seoQuoteReducer ,
smmQuoteControl: smmQuoteReducer ,
smsQuoteControl: smsQuoteReducer ,
emailQuoteControl:emailQuoteReducer,
influencerQuoteControl:influencerQuoteReducer,
domainQuoteControl:domainQuoteReducer,
hostingQuoteControl:hostingQuoteReducer,
animationQuoteControl:animtaionQuoteReducer,
aiQuoteControl:aiQuoteReducer,
gameQuoteControl:gameQuoteReducer,
cloudQuoteControl:cloudQuoteReducer,
roboticsQuoteControl:roboticsQuoteReducer,
researchQuoteControl:researchQuoteReducer,
graphicQuoteControl:graphicQuoteReducer,
dataQuoteControl:dataQuoteReducer,

userControl : userControl,
superAdminControll : superAdmin,


formIdReducer:formIdReducer,
idReducer : idReducer,
blogIdReducer :blogIdReducer ,


// success alert

successAlertControl:successAlert 
}






export default combineReducers(reducers)
