import {Link} from '@remix-run/react'; 
import {formatDate} from '~/utils/helpers';


function BlogEntry({blog}) {
  const {attributes: {title, content, image, url, publishedAt}} = blog;

  return (
    <article className="blogCard blogCard--card-view">
      <img src={image.data.attributes.formats.small.url} alt={`imagen blog ${title}`} className="blogCard__img" />
      <div className="blogCard__texts">
        <h3 className="blogCard__title">{title}</h3>
        <p className="blogCard__date">{formatDate(publishedAt)}</p>
        <p className="blogCard__content blogCard__content--card-view">{content}</p>
        <Link className="blogCard__cta" to={`/blog/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}

export default BlogEntry