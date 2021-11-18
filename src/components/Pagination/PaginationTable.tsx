import React from 'react';
import s from './Pagination.module.sass'

type PaginationProps = {
    totalCount: number,
    countPerPage: number | string,
    currentPage: number,
    onChange: (page: number) => void
    step?: number
}

// const sass = require('sass'); // or require('node-sass');
//
// const result = sass.renderSync({file: "style.scss"});
// console.log(result.css.toString());

export const Pagination = ({totalCount, countPerPage, currentPage, onChange, step = 5}: PaginationProps) => {

    let pageNumbers: number = Math.ceil(totalCount / +(countPerPage))
    let pages = []
    for (let i = 1; i <= pageNumbers; i++) {
        pages.push(i)
    }

    const previousPage = currentPage !== 1 ? currentPage - 1 : 1
    const nextPage = currentPage !== pageNumbers ? currentPage + 1 : pageNumbers
    let pageNextStep = (currentPage + step) > pageNumbers ? pageNumbers : currentPage + step
    let pagePreviousStep = (currentPage - step) < 1 ? 1 : currentPage - step


    return (
        <div className={s.container}>
            {/*<button onClick={() => onChange(1)}>Start</button>*/}
            <button onClick={() => onChange(previousPage)} className={s.button}>{'<'}</button>
            <button onClick={() => onChange(pagePreviousStep)} className={s.button}>{'<<'}</button>

            <span className={s.currentPageScreen}>{currentPage}</span>

            <button onClick={() => onChange(pageNextStep)} className={s.button}>{'>>'}</button>
            <button onClick={() => onChange(nextPage)} className={s.button}>{'>'}</button>
            {/*<button onClick={() => onChange(pageNumbers)}>End</button>*/}
        </div>
    )
}
