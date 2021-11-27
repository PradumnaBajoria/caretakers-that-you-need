import React from 'react'
import Home from '../../home/home'
import NewsCards from '../news-cards/NewsCards'
import "./NewsBoard.scss"

function NewsBoard() {
    return (
        <Home>
            <div className='news-board'>
                <div className="heading">
                    <h1>LATEST NEWS</h1>
                    <hr />
                </div>
                <NewsCards />
            </div>
        </Home>
    )
}

export default NewsBoard
