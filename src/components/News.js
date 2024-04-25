import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string
    }
    constructor() {
        super();
        console.log('hello i am constructor from news component')
        this.state = {
            articles: [],
            loading:true,
            page:1,
            loadedArticles:0,
            totalArticles:0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbcde97f09414a69beae1db195851661&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData=await data.json();
        //console.log(parsedData.articles)
        this.setState({articles:parsedData.articles,loadedArticles:parsedData.articles.length,totalArticles:parsedData.totalResults,loading:false})
    }
    handlePreviousClick = async() => {
        const currPage = this.state.page;
        this.setState({loading:true,articles:[]})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbcde97f09414a69beae1db195851661&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({ page: currPage - 1 ,articles:parsedData.articles,loadedArticles:this.state.loadedArticles-parsedData.articles.length,loading:false})
    }
    handleNextClick = async() => {
        const currPage = this.state.page;
        this.setState({loading:true,articles:[]})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbcde97f09414a69beae1db195851661&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({ page: currPage + 1 ,articles:parsedData.articles,loadedArticles:this.state.loadedArticles+parsedData.articles.length,loading:false})
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{marginTop:"50px"}}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                {this.state.articles.map((element)=>{
                    return(
                        <div className='col-md-4' key={element.urlToImage}>
                        <NewsItems title={element?.title?.slice(0,45)} description={element?.description?.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element?.source?.name}/>
                    </div> 
                    )
                })} 
                </div>
                <div className='container d-flex justify-content-between'>  
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick }>&larr; Previous</button>
                <button type="button" disabled={this.state.totalArticles<=this.state.loadedArticles} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>//
        )
    }
}

export default News
