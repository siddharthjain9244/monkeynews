const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className='my-2 mx-2' style={{ width: '353px', height: '550px' }}>
            <div className="card h-100">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1, left: "90%" }}>
                    {source}
                </span>
                <div style={{ margin: '0.5px' }}>
                    <img className="card-img-top" src={imageUrl || 'https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png'} alt="..." style={{ width: '350px', height: '200px' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description || 'No Description'}</p>
                    <p className="card-text">by {author ? author : 'unknown'} </p>
                    <p className="card-text">on {new Date(date).toGMTString()}</p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary" style={{ position: 'absolute', bottom: '10px' }}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems
