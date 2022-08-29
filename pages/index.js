import styles from '../styles/Home.module.css'
import React from 'react'
//
//import {supabase} from './utils/supabase'

export async function getStaticProps() {
  return {
    props: {
      user : [],
    },
  };
}


 function Home({ user }) {
  //console.log(supabase.auth.user());

  return (
    <div className={styles.container}>
      <h1>Hello user!</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Home