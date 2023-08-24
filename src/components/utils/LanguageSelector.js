import { useRouter } from 'next/router';
import React from 'react'

const LanguageSelector = () => {
  const router = useRouter();


  const changeLanguage = (e) => {
    console.log(e.target.value);
    router.push(router.pathname, router.pathname, {locale:e.target.value});
  }

  return (
    <select onChange={changeLanguage}>
      <option value="es">Español</option>
      <option value="en">Ingles</option>
      <option value="pt">Portugués</option>
    </select>
  )
}

export default LanguageSelector
