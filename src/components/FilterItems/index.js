import './index.css'

const FilterItems = (props) => {
    const {customiableData}=props
    return customiableData.map(items=>{
        return(
            <li>
                <select className='filter-select-items'>
                    <option value={items.men}>{items.id}</option>
                    <option value={items.men} >
                        
                        <label >{items.men}</label>
                    </option>
                    <option value={items.men}>
                        
                        <label >{items.women}</label>
                    </option>
                    <option value={items.men}>

                        <label >{items.kids}</label>
                    </option>
                </select>
            </li>
        )
    })
}
export default FilterItems


