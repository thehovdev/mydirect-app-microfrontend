import React, {ChangeEvent, useState} from "react";
import { useAppSelector, useAppDispatch } from '../hooks'
import { insert, update, remove } from '../reducers/citateClise'
import {ICitate, ICitates} from "../interfaces/Citate";
import { RootState } from "../store/store";

export function Citates() {
  const dispatch = useAppDispatch()
  const citates = useAppSelector((state: RootState) => state.citate.items)
  const citateItem : ICitate = {
    id: null,
    title: '',
    content: '',
    operation: null
  }
  const [citate, setCitate] = useState<ICitate>(citateItem)
  const resetCitate = () => setCitate(citateItem)
  const insertCitate = (e) => {
    e.preventDefault()
    dispatch(insert({
      id: Math.floor(Math.random() * 1000),
      operation: 'INSERT',
      ...citate
    }))
    resetCitate()
  }
  const updateCitate = (e) => {
    e.preventDefault()
    dispatch(update({
      operation: 'UPDATE',
      ...citate
    }))
    resetCitate()
  }
  const editCitate = (i: number) => {
    setCitate({...citates[i], operation: 'UPDATE'})
  }
  const removeCitate = (i: number) => {
    dispatch(remove(i))
  }

  return <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>Please insert title for your citate</h2>
            <form onSubmit={citate.operation === 'INSERT' ? insertCitate : updateCitate}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" placeholder="Some title" onChange={(e:ChangeEvent<HTMLInputElement>) => setCitate({...citate, title: e.target.value})} value={citate.title}/>
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" rows={3} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCitate({...citate, content: e.target.value})} value={citate.content}></textarea>
              </div>

              {
                citate.operation === 'UPDATE' ?
                <button type="submit" className="btn btn-sm btn-outline-success my-2">Update</button> :
                <button type="submit" className="btn btn-sm btn-outline-success my-2">Add</button>
              }
            </form>
          </div>
          <div className="col-sm-12">
            <div className="accordion" id="accordionExample">
              { citates.map((citate, i) => {
                return <div className="accordion-item" key={citate.id}>
                  <div className="accordion-header py-2" id={`heading${citate.id}`}>
                    <i className="fa-default-icon fa-solid fa-xmark-circle mx-2" onClick={() => removeCitate(i)}></i>
                    <i className="fa-default-icon fa-solid fa-pencil mx-2" onClick={() => editCitate(i)}></i>
                    <i className="fa-default-icon fa-solid fa-eye eye-show mx-2"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${citate.id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${citate.id}`}/>
                    { citate.title }
                  </div>
                  <div id={`collapse${citate.id}`}
                       className="accordion-collapse collapse"
                       aria-labelledby={`heading${citate.id}`}
                       data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{ citate.content }</div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>



}

// export function Citates () {
//   // The `state` arg is correctly typed as `RootState` already
//   const count = useAppSelector((state) => state.counter.value)
//   const dispatch = useAppDispatch()
//
//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }
