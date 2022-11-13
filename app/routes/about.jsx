import { Links } from '@remix-run/react';

import aboutImg from '../../public/img/nosotros.jpg';
import stylesAbout from '../styles/about/about.css';


export function meta() {
  return (
    {
      charset: 'utf-8',
      title: 'GuitarLA - About',
      viewport: "width=device-width,initial-scale=1"
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesAbout
    },
    {
      rel: 'preload',
      href: aboutImg,
      as: 'image'
    }
  ]
}

function About() {
  return (
    <main className="about">
      <h2 className="about__heading">Nosotros</h2>
      <div className="about__content">
        <img src={aboutImg} alt="imagen nosotros" className="about__img" />
        <div className="about__texts">
          <p className="about__paragraph">
            Curabitur dapibus eros a consequat scelerisque. Cras in purus et est euismod luctus sit amet at lorem.
            In hac habitasse platea dictumst. Quisque vel massa id justo mollis euismod sit amet vel nisl.
            Phasellus sit amet metus interdum, mattis arcu in, pulvinar leo. Aenean tristique eros nec neque vestibulum tincidunt.
            Mauris tincidunt non mi nec semper.
          </p>
          <p className="about__paragraph">
            Nullam id est eu mauris porttitor suscipit a et tortor. In vitae consectetur lacus.
            Quisque a venenatis quam. Ut lacinia sollicitudin eros. Pellentesque feugiat sapien non convallis dictum.
            Ut consectetur, libero quis gravida ullamcorper, elit tellus malesuada nunc, id eleifend ipsum turpis et ante.
          </p>
        </div>

      </div>
    </main>
  )
}

export default About