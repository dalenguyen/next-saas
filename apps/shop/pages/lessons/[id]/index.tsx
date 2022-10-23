import { supabase } from "apps/shop/utils"

const LessonDetails = ({lesson}) => {
    return <div>{lesson.title}</div>
}


export const getStaticPaths = async () => {
    const {data: lessons} = await supabase.from('lessons').select("id")
    const paths = lessons.map(({id}) => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {id}}) => {
    const {data: lesson} = await supabase.from('lessons').select('*').eq('id', id).single()
    return {
        props: {
            lesson
        }
    }
}


export default LessonDetails