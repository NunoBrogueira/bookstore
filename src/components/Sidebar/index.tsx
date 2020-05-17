import React, { useState, useEffect } from 'react';

import './Sidebar.scss';
import { checkAvailableFilters } from '../../utils/helper';
import { Books } from '../../store/ducks/books/types';

interface DispatchProps {
    handleFilterBy: (filterAttribute: string, option: string) => void;
}

interface OwnProps {
    books: Books[];
    isSidebarOpen: boolean;
}

type Props = DispatchProps & OwnProps;

const Sidebar: React.FC<Props> = ({
    books,
    isSidebarOpen,
    handleFilterBy
}) => {

    const [filterActive, setFilterActive] = useState('All Books');
    const sections = [
        {
            id: "random",
            filter: '',
            options: ["All Books"]
        },
        {
            id: "best-authors",
            title: "Best Authors",
            filter: 'author.name',
            options: checkAvailableFilters(books, 'author.name')
        },
        {
            id: "categories",
            title: "Categories",
            filter: 'genre',
            options: checkAvailableFilters(books, 'genre')
        },
        {
            id: "published-on",
            title: "Published On",
            filter: '',
            options: ["Last Friday of the Month"]
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSidebarOpen])

    const handleFilterClick = (filter: string, value: any) => {
        setFilterActive(value);
        handleFilterBy(filter, value)
    }

    const filtersDisplay = (id: string, options: Array<Object>, filter: string, title?: string ) => {
        return (
            <div key={id} className="section">
                <p className="title">{title}</p>
                <div className="elements">
                    {options?.slice(0, 5).map((value, index) => (
                        <p key={index}
                            className={value === filterActive ? "filter-active" : "filter"}
                            onClick={() => handleFilterClick(filter, value)}>
                            { id === "categories" ? `${value} Book` : value}
                        </p>
                    ))}
                    
                </div>
            </div>
        )
    }

    return (
        <div id="sidebar" className={isSidebarOpen ? "sidebar-open" : ""}>
            <div className="content">
                <div id="brand">
                    <p className="title">Bookstore</p>
                </div>
                {sections.map(section => (
                    filtersDisplay(section.id, section.options, section.filter, section?.title )
                ))}
            </div>
        </div>
    )
};

export default (Sidebar);