import React from 'react'
import s from './PeriodicTable.module.sass'
import Container from '../../components/Container/Container'
import {periodic_table} from '../../utils/elements'
import SingleElement from '../../components/SingleElement/SingleElement'

const PeriodicTable = () => {
console.log(periodic_table)
  return (
    <div className={s.main}>
        <Container>
            <div className={s.wrap}>
                <div className={s.table}>
                    <div className={s.top}>
                        {new Array(7).fill(0).map((e, i)=> <div className={s.period} style={{gridColumn: 1, gridRow: i+2}}>{i + 1}</div>)}
                        {new Array(18).fill(0).map((e, i)=> <div className={s.group} style={{gridRow: 1, gridColumn: i+2}}>{i + 1}</div>)}
                       
                        {
                            periodic_table
                            .filter(e => !(e.atomic_number >= 57 && e.atomic_number <= 71) && !(e.atomic_number >= 89 && e.atomic_number <= 103) )
                            .map(el => <SingleElement info={el} className={s.element}>{el.name.am}</SingleElement>)
                        }
                    </div>
                    <div className={s.bottom}>

                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default PeriodicTable