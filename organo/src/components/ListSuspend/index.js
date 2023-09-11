import './ListSuspended.css'

function ListSuspended(props) {
    return (
        <div className='list-suspended'>
            <label>{props.label}</label>
            <select>
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListSuspended;