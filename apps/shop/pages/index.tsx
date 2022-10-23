import Link from 'next/link';
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

export function Index({ lessons }) {  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
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
