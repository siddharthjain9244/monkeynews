import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import countryList from './CountryIsoList.json'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
   // document.title = `${props.category}-News Monkey`
    const handleNews = async (page, setTotal) => {
        //setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=712347cf452d4dfaafa5ebd09de47fed&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page);
        const currArtNow=articles.concat(parsedData.articles)
        setArticles(currArtNow)
        if(setTotal){
            setTotalPages(Math.ceil(parsedData.totalResults / props.pageSize));
            setTotalResults(parsedData.totalResults)
        }
    }

    useEffect(()=>{
        props.setProgress(10);
        document.title = `${props.category}-News Monkey`
        handleNews(1, true)
        props.setProgress(100);
          // eslint-disable-next-line
    },[])
    // const handlePreviousClick = async () => {
    //     const currPage =page;
    //     handleNews(currPage - 1) 
    // }
    // const handleNextClick = async () => {
    //     const currPage = page;
    //     handleNews(currPage + 1)
    // }

    const fetchMoreData = () => {
        handleNews(page + 1)
    }
    return (
        <>
            <h1 className="text-center" style={{ marginTop: "90px", marginBottom: "30px" }}>{`NewsMonkey - Top Headlines (${countryList[props.country.toUpperCase()]})`}</h1>
            {/* {loading && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={ fetchMoreData}
                // style={{ display: 'flex' }} //To put endMessage and loader to the top.
                // inverse={false} //
                hasMore={page !== totalPages}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return (
                                <div className='col-md-4' key={element?.urlToImage}>
                                    <NewsItems title={element?.title} description={element?.description?.slice(0, 88)} imageUrl={element?.urlToImage} newsUrl={element?.url} author={element?.author} date={element?.publishedAt} source={element?.source?.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className='container d-flex justify-content-between'>  
                <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePreviousClick }>&larr; Previous</button>
                <button type="button" disabled={page>=totalPages} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
