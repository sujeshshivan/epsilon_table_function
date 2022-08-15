import React, { useState } from 'react'

const sortTypes = {
    up: {
        class: 'sort-up',
        fn: (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? 1 : (a[sortBy] < b[sortBy] ? -1 : 0)
    },
    down: {
        class: 'sort-down',
        fn: (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0
    },
    default: {
        class: 'sort',
        fn: (sortBy) => (a, b) => a
    }
}


const Table = ({ data }) => {

    const [currentSort, setCurrentSort] = useState('default')
    const [sortBy, setSortBy] = useState('')
    const onSortChange = (sortBy) => {
        let nextSort;
        if (currentSort === 'down') {
            nextSort = 'up';
        } else if (currentSort === 'up') {
            nextSort = 'default';
        } else if (currentSort === 'default') {
            nextSort = 'down';
        }
        setSortBy(sortBy);
        setCurrentSort(nextSort)
    }
    return (
        data.length > 0 && (
            <table>
                <thead>
                    <tr>
                        <th align="left">Product Name
                            <button onClick={() => onSortChange('name')}>
                                <i className={`fas fa-${(sortBy === 'name') ? sortTypes[currentSort].class : 'sort'}`}></i>
                            </button>
                        </th>
                        <th align="left">
                            Price
                            <button onClick={() => onSortChange('price')}>
                                <i className={`fas fa-${(sortBy === 'price') ? sortTypes[currentSort].class : 'sort'}`}></i>
                            </button>
                        </th>
                        <th align="left">Category
                            <button onClick={() => onSortChange('category')}>
                                <i className={`fas fa-${sortBy === 'category' ? sortTypes[currentSort].class : 'sort'}`}></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[...data].sort(sortTypes[currentSort].fn(sortBy)).map((item, key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td className="price">{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    )
}

export default Table