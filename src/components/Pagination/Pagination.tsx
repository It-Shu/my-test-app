import React from 'react';
import s from './Pagination.module.sass'

type PaginationProps = {
    totalCount: number,
    countPerPage: number | string,
    currentPage: number,
    onChange: (page: number) => void
    step?: number
}

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
            <button onClick={() => onChange(1)} className={s.button}>Start</button>
            <button onClick={() => onChange(previousPage)} className={s.button}>
                <p className={s.arrowLeft}></p>
            </button>
            <button onClick={() => onChange(pagePreviousStep)} className={s.button}>
                <p className={s.doubleArrowLeft}></p>
                <p className={s.doubleArrowLeft}></p>
            </button>

            <span className={s.currentPageScreen}>{currentPage}</span>

            <button onClick={() => onChange(pageNextStep)} className={s.button}>
                <p className={s.doubleArrowRight}></p>
                <p className={s.doubleArrowRight}></p></button>
            <button onClick={() => onChange(nextPage)} className={s.button}>
                <p className={s.arrowRight}></p>
            </button>
            <button onClick={() => onChange(pageNumbers)} className={s.button}>End</button>
        </div>
    )
}
