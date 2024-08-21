import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import { outHandler } from 'src/utils/cookie'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from 'src/services/user'


function Header() { 
    const { data } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile
       });
  return (
       <header className={styles.header}>
        <div>
            <Link to="/">
                <img src='divar.svg'  className={styles.logo}/>
            </Link>
            <span>
                <img src="location.svg"  />
                <p>تهران</p>
            </span>
        </div>
        <div className>
            <Link to="/auth">
                <span className>
                    <img src="profile.svg"  />
                    <p>دیوار من</p>
                </span>
                </Link>
                <div className={styles.under}>
                    {data?.data?.role === "ADMIN" ? (
                        <Link to="/admin" className={styles.panel}>پنل ادمین</Link>
                    ) : null }
                        <Link className={styles.panel}>پنل ادمین</Link>
                        <Link className={styles.panel}>پنل ادمین</Link>
                        <Link className={styles.panel}>پنل ادمین</Link>
                        <Link className={styles.panel}>پنل ادمین</Link>
                </div>
            <Link to="/dashboard" className={styles.button}>ثبت اگهی</Link>
            <Link to="/auth" onClick={outHandler} className={styles.out}>خروج</Link>
        </div>
       </header>
  )
}

export default Header