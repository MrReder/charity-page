import React, { useState } from 'react';
import { AssistanceBox } from '../../components/assistance-type-box/assistance-type-box';
import { EntityBox } from '../../components/entity-box/entity-box';
import { FormInput } from '../../components/form-input/form-input';
import { Title } from '../../components/title-template/title-template';
import make from '../../assets/make.svg';
import finAssist from '../../assets/fin-assist.svg';
import finAssistA from '../../assets/fin-assist-active.svg';
import matAssist from '../../assets/mat-assist.svg';
import charity from '../../assets/charity.svg';
import './kind-heart-form-page.styles.scss';
import { charityDscr, finAssDscr, makeDscr, matAssDscr } from '../../helpers/descriptions';
import { SubmitBtn } from '../../components/submit-btn/submit-btn';
import { FinAssSctn } from '../../components/financial-assistance-section/financial-asssitance-section';


export const KindHeartFormPage = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [company, setCompany] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [email, setEmail ] = useState('');
    const [phone, setPhone ] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [adress, setAdress] = useState('');
    const [postIdx, setPostIdx] = useState('');
    const [finAssistActive, setFinAssistActive] = useState('unactive');

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleSurname = (e) => {
        setSurname(e.target.value);
    }
    
    const handleCompany = (e) => {
        setCompany(e.target.value);
    }
    
    const handleCompanyLogo = (e) => {
        setCompanyLogo(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    
    const handleCountry = (e) => {
        setCountry(e.target.value);
    }
    
    const handleCity = (e) => {
        setCity(e.target.value);
    }
    
    const handleState = (e) => {
        setState(e.target.value);
    }
    
    const handleAdress = (e) => {
        setAdress(e.target.value);
    }
    
    const handlePostIdx = (e) => {
        setPostIdx(e.target.value);
    }

    const isEmailValid = () => {
        const check = /\S+@\S+\.\S+/;
        return check.test(email.toLowerCase())
    };

    const handleFinAssistActive = () => {
        if(finAssistActive === 'unactive'){
           return setFinAssistActive('active')
        } else if(finAssistActive === 'active'){
            return setFinAssistActive('unactive')
        }
        
    }
      
    const sendData = () => {
        if(isEmailValid()){
            const helperData = [name, surname, company, companyLogo, 
                email, phone, country, city, state, adress, postIdx,
            field1, field2, field3, field4, expDateM, expDateY, cvv];
                  localStorage.setItem('name', helperData[0]);
                  localStorage.setItem('surname', helperData[1]);
                  localStorage.setItem('company', helperData[2]);
                  localStorage.setItem('companyLogo', helperData[3]);
                  localStorage.setItem('email', helperData[4]);
                  localStorage.setItem('phone', helperData[5]);
                  localStorage.setItem('country', helperData[6]);
                  localStorage.setItem('city', helperData[7]);
                  localStorage.setItem('state', helperData[8]);
                  localStorage.setItem('adress', helperData[9]);
                  localStorage.setItem('postIdx', helperData[10]);
        } else if(!isEmailValid()){
            alert('????????-??????????, ?????????????????? ???????????????????????? ?????????????????????? ??????????.')
        }
      
      
    }

return <form>
    <Title 
    titleName={"?????????????????? ??????????"}
    />
    <div className='entity-box-wrapper'>
        <EntityBox 
        boxName={'??????. ??????????'}
        />
        <EntityBox 
        boxName={'????. ??????????'}
        />
    </div>
        <div className='inputs-wrapper'>
        <div className='left-inputs-side'>
            <div className="full-name-wrapper">
            <FormInput
        className="short-input"
        inputTitle={"????'??"} 
        type={'text'}
        value={name}
        onChange={handleName}
        required
        />
        <FormInput
        className="short-input" 
        inputTitle={"????????????????"} 
        type={'text'}
        value={surname}
        onChange={handleSurname}
        required
        />
            </div>
        <div className='company-info'>
        <FormInput 
        className="company-name"
        inputTitle={"?????????? ????????????????, ??????????????????????"} 
        type={'text'}
        value={company}
        onChange={handleCompany}
        />
        <div className='adding-logo'>
        <label htmlFor='logo' className='add-logo'>+ ??????????????</label>
        <input id='logo' style={{visibility:"hidden"}} 
        type="file" onChange={handleCompanyLogo} value={companyLogo}/>
        </div>
        </div>
        <FormInput 
        inputTitle={"E-mail ????????????"} 
        type={'email'}
        value={email}
        onChange={handleEmail}
        style={{width:"311px"}}
        required
        />
        <FormInput 
        inputTitle={"?????????? ????????????????"} 
        type={'phone'}
        value={phone}
        onChange={handlePhone}
        style={{width:"311px"}}
        required
        />
        </div>
        <div className='right-inputs-side'>
        <FormInput 
        inputTitle={"????????????"} 
        type={'text'}
        value={country}
        onChange={handleCountry}
        style={{width:"311px"}}
        required
        />
        <div className="city-state-wrapper">
        <FormInput
        className="short-input" 
        inputTitle={"??????????"} 
        type={'text'}
        value={city}
        onChange={handleCity}
        required
        />
        <FormInput
        className="short-input" 
        inputTitle={"????????, ??????????"} 
        type={'text'}
        value={state}
        onChange={handleState}
        required
        />
        </div>
        
        <FormInput 
        inputTitle={"????????????"} 
        type={'text'}
        value={adress}
        onChange={handleAdress}
        style={{width:"311px"}}
        required
        />
        <FormInput
        className="short-input" 
        inputTitle={"???????????????? ????????????"} 
        type={'text'}
        value={postIdx}
        onChange={handlePostIdx}
        />
        </div>
        </div>
        
    
    <Title
    titleName={"???????? ????????????????"}
    />
   <h3 className='secondary-title'>
       ???? ???????????? ?????????????? ?????? ????????????????
   </h3>
   <div className='assistance-boxes-wrapper'>
   <AssistanceBox
   title={"??????????????"}
   imgSrc={make}
   imgAltDscr="make-img"
   dscrStyle={{marginTop: "150px"}}
   description={
    finAssistActive === 'active' ? ' ' : makeDscr
    }
   />
   <AssistanceBox 
   title={"?????????????????? ????????????????"}
   imgSrc={finAssistActive === 'unactive' ? finAssist : finAssistA}
   imgAltDscr="fin-assist-img"
   description={
    finAssistActive === 'active' ? ' ' : finAssDscr
   }
   handleIconColor={handleFinAssistActive}
   onClick={handleFinAssistActive}
   />
   <AssistanceBox
   title={"?????????????????????? ????????????????"} 
   imgSrc={matAssist}
   imgAltDscr="mat-assist-img"
   description={
    finAssistActive === 'active' ? ' ' : matAssDscr  
    }
   />
   <AssistanceBox
   title={"????????????????????????"} 
   imgSrc={charity}
   imgAltDscr="charity-img"
   description={
    finAssistActive === 'active' ? ' ' : charityDscr
    }
   />
   </div>
   {
       finAssistActive === 'active' ? <FinAssSctn /> : null
   }
  
   <footer className='form-footer'>
    <SubmitBtn 
    btnText={'??????????????????'}
    onSubmit={sendData}
    />
   </footer>
</form>

};