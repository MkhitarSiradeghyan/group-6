import React from 'react'
import s from './PeriodicTable.module.sass'
import Container from '../../components/Container/Container'
import {periodic_table} from '../../utils/elements'

const PeriodicTable = () => {

  return (
    <div className={s.main}>
        <Container>
            <div className={s.wrap}>
                <div className={s.table}>
                    <div className={s.top}>
                        {
                            periodic_table.filter(e => e.atomic_number < 57 && e.atomic_number > 71 && e.atomic_number < 89 && e.atomic_number > 103 ).map(el => <div className={s.element}>{el.name.am}</div>)
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