import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article.js'

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  // const [allArticles, setAllArticles] = useState([])

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  // useEffect(() => {
  //   const articlesFromLocalStrage = JSON.parse(localStorage.getItem('articles'))

  //   if (articlesFromLocalStrage) {
  //     setAllArticles(articlesFromLocalStrage)
  //   }
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getSummary({ articleUrl: article.url })

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      // const updatedAllArticles = [newArticle, ...allArticles]
    }
    setArticle({ newArticle })
    // setAllArticles(updatedAllArticles)
    console.log(newArticle)

    e.preventDefault()

    console.log('submitted')
  }
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link_icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />
          <input
            type='url'
            placeholder='Enter url...'
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            className='url_input peer'
          />
          <button
            type='submit'
            className='submit_btn peer-focus:text-gray-700 peer-focus:border-gray-700'
          >
            ↵
          </button>
        </form>

        {/* URL History */}
      </div>

      {/* Display Results */}
    </section>
  )
}

export default Demo
