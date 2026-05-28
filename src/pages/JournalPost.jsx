import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Clock, ArrowLeft, Quote } from 'lucide-react'
import { postBySlug, POSTS } from '../data/journal.js'
import { Button, Reveal } from '../components/common.jsx'
import Seo from '../components/Seo.jsx'

export default function JournalPost() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-serif text-4xl text-forest">Story not found</h1>
        <Button to="/journal" variant="dark" className="mt-6">Back to the Journal</Button>
      </div>
    )
  }

  return (
    <article>
      <Seo title={post.title} description={post.excerpt || post.summary} image={post.img} />
      <div className="relative h-[60vh] min-h-[420px] grain overflow-hidden">
        <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="overlay-bottom" />
        <div className="absolute bottom-0 inset-x-0">
          <div className="container-luxe pb-12">
            <nav className="flex items-center gap-1.5 text-[12px] text-ivory/70 mb-4">
              <Link to="/" className="hover:text-ivory">Home</Link><ChevronRight size={13} />
              <Link to="/journal" className="hover:text-ivory">Journal</Link>
            </nav>
            <span className="text-[11px] uppercase tracking-[0.16em] text-gold-300">{post.category}</span>
            <h1 className="display-2 text-ivory max-w-3xl mt-2">{post.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-[13px] text-ivory/70">
              <span>{post.date}</span>{post.readTime && <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>}
              {post.author && <span>· By {post.author}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="container-narrow py-14">
        <Reveal>
          <p className="font-serif text-2xl text-forest leading-relaxed">{post.excerpt}</p>
          <div className="hairline-dark my-8" />
          <div className="space-y-5 text-[16px] leading-[1.8] text-charcoal/85">
            <p>Across the eight states of Northeast India, craft is never merely decoration. It is memory made tangible — a record of migration, marriage, harvest and prayer, carried in motif and colour. To understand a textile here is to read a community's history without a single written word.</p>
            <p>The makers behind these pieces work largely as their grandmothers did: with natural fibres, plant dyes and looms built by hand. What has changed is the world's willingness to listen. Through Nature Trade, these stories travel — from a village loom on the banks of the Brahmaputra to a home on the other side of the world.</p>
            <blockquote className="border-l-2 border-gold pl-6 my-8">
              <Quote size={24} className="text-gold-700 mb-2" />
              <p className="font-serif text-2xl text-forest italic leading-snug">"When you carry our craft into your home, you carry a piece of our land, our rivers and our people."</p>
            </blockquote>
            <p>Every purchase supports the artisan directly, helping preserve a heritage that might otherwise fade. This is slow commerce — patient, ethical and rooted in respect for both the maker and the earth.</p>
          </div>
          <Button to="/journal" variant="outline-dark" iconLeft={ArrowLeft} className="mt-10">Back to the Journal</Button>
        </Reveal>
      </div>

      <section className="bg-paper py-16 border-t border-line">
        <div className="container-luxe">
          <h2 className="font-serif text-2xl text-forest mb-8">More Stories</h2>
          <div className="grid sm:grid-cols-3 gap-7">
            {more.map((p) => (
              <Link key={p.slug} to={`/journal/${p.slug}`} className="group block">
                <div className="img-zoom ratio-wide rounded-xl overflow-hidden"><img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" /></div>
                <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.14em] text-gold-700">{p.category}</span>
                <h3 className="font-serif text-lg text-forest group-hover:text-gold-700 transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
