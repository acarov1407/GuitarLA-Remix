import {getGuitars} from '~/models/guitar.server';
import {getBlogs} from '~/models/blog.server';
import {getCourse} from '~/models/course.server';
import { useLoaderData } from '@remix-run/react';
import stylesCourse from '~/styles/index/course.css';
import stylesShop from '~/styles/shop/shop.css';
import stylesBlog from '~/styles/blog/blog.css';
import stylesBlogCard from '~/styles/blog/blogCard.css';
import GuitarList from '~/components/guitarList';
import BlogList from '~/components/blogList';
import Course from '~/components/course';

export function meta(){

}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesShop
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
    {
      rel: 'stylesheet',
      href: stylesBlogCard
    },
    {
      rel: 'stylesheet',
      href: stylesCourse
    }
  ]
}

export async function loader(){
  const [guitars, blogs, course] = await Promise.all([
    getGuitars(),
    getBlogs(),
    getCourse()

  ])

  return {
    guitars: guitars.data,
    blogs: blogs.data,
    course: course.data
  }
}

function Index() {

  const {guitars, blogs, course} = useLoaderData();

  return (
    <>
    <main className="shop">
      <GuitarList guitars={guitars}/>
    </main>
    <Course course={course}/>
    <section className="blog">
      <BlogList blogs={blogs} />
    </section>
  
    </>
  )
}

export default Index