import React from 'react';
import styles from './Header.module.css';

const Header = ({ setSearch, setQuery, search }) => {

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <header onClick={getSearch} className={styles.searchForm}>
            <input
                autoFocus
                placeholder='Search Your Favourite Dish'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchBar}
                type="text" />
            <button className={styles.searchButton} type='submit'>Search</button>
        </header>
    )
}

export default Header