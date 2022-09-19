import styles from '../styles/Home.module.css'
import React from 'react'
import { createClient } from '@supabase/supabase-js'
//import {supabase} from './utils/supabase'



export async function getStaticProps() {


const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_API_KEY || ''
)

const { data} = await supabaseAdmin
.from('user')
.select('*')
.user('id');

return {
  props: {
    user: data,
  },
};
}
// function cn({...classes: "string"}){
//   return classes.filter(Boolean).join(' ')
// }


// function Home({ user }:{user:user[]})
//  return (
//     <div className={styles.container}>
//       <h1>Hello user!</h1>

//       {user.map((user) =>(userkey={user.id} user={user}))}
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }

export default Home