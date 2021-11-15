import React from 'react'


type PaginationPropsType = {
    totalOrderCount: any
    countPerPage: number
    paginate: (n: number) => void
    currentPage: number
}

export const Pagination = ({countPerPage, totalOrderCount, paginate, currentPage}: PaginationPropsType) => {

    // const [prevIsHidden, setPrevIsHidden] = useState(false)
    // const [nextIsHidden, setNextIsHidden] = useState(false)

    let pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalOrderCount / countPerPage); i++) {
        pageNumbers.push(i)
    }

    // const previousPage = currentPage !== 1 ? currentPage - 1 : 1
    // const nextPage = currentPage !== pageNumbers ? currentPage + 1 : pageNumbers
    // let pageNextStep = (currentPage + step) > pageNumbers ? pageNumbers : currentPage + step
    // let pagePreviousStep = (currentPage - step) < 1 ? 1 : currentPage - step
    //
    // useEffect(() => {
    //     previousPage === currentPage ? setPrevIsHidden(true) : setPrevIsHidden(false)
    //     nextPage === currentPage ? setNextIsHidden(true) : setNextIsHidden(false)
    // }, [currentPage, nextPage, previousPage])
    //
    // if (isNaN(pageNumbers) || totalCount === 0 || pageNumbers === 1) {
    //     return <></>
    // }

    return (

    <nav>
        <div style={{marginTop: '40px'}}>
            <span onClick={() => pageNumbers.map(p => p - 1)}>{'<'}</span>
            {pageNumbers.map(n => (
                <span key={n} style={{paddingLeft: '20px'}}>
                    <span onClick={()=> paginate(n)}>{n}</span>
                </span>
            ))}
            <span onClick={() => pageNumbers.map(p => p + 1)} style={{paddingLeft: '20px'}}>{'>'}</span>
        </div>



            {/*<span className={`${prevIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(1)}>Start</span>*/}

            {/*<span className={`${prevIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(pagePreviousStep)}>{'<<'}</span>*/}

            {/*<span className={`${prevIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(previousPage)}>{previousPage !== currentPage && previousPage}</span>*/}

            {/*<span className={s.active}>{currentPage}</span>*/}

            {/*<span className={`${nextIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(nextPage)}>{nextPage !== currentPage && nextPage}</span>*/}

            {/*<span className={`${nextIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(pageNextStep)}>{'>>'}</span>*/}

            {/*<span className={`${nextIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(pageNumbers)}>End</span>*/}


    </nav>
    )
}
