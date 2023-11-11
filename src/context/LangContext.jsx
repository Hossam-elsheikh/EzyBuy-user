import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export let LangContext = createContext();

export default function LangContextProvider(props) {
  let [lang, setLang] = useState("en");
  let [title,setTitle] = useState("تصفح بالعربية")
  let [dir,setDir] = useState("ltr")
  let {t,i18n} = useTranslation()
  useEffect(()=>{
    i18n.changeLanguage(lang)
  },[lang])
  return (
    <LangContext.Provider value={{ lang, setLang,t,title,setTitle,dir,setDir }}>
      {props.children}
    </LangContext.Provider>
  );
}
