import Link from 'next/link';
import { useUser } from '../context/user';
import { supabase } from '../utils';
import styles from './index.module.scss';

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from('lessons').select('*');
  return {
    props: {
      lessons,
    },
  };
};

export function Index({ lessons }) {  

  const {user} = useUser()
  console.log({user})

  return (
    <div
      className={`${styles.page} w-full max-w-3xl mx-auto my-16 px-2`}
    >
      {lessons.map((lesson) => (
        <Link href={`/lessons/${lesson.id}`} key={lesson.id}>
          <a className='p-8 h-40 mb-4 rounded shadow text-xl flex'>{lesson.title}</a>
        </Link>
      ))}
    </div>
  );
}

export default Index;
