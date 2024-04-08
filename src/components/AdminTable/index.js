import style from './index.module.scss';
import Pagination from '../Pagination';
import { useState, useEffect } from 'react';
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Popup } from '../Popup';
import AdminForm from '../AdminForm';
// const itemsPerPageOptions = [5, 10, 15, 20, 'All'];
// const [keySearch, setKeySearch] = useState('')

// const [tableCols, setTableCols] = useState({
//     id: 'Id',
//     firstName: "First Name",
//     lastName: "Last Name",
//     age: "Age"
// })

// const generateFakeData = () => {
//     const data = [];
//     for (let i = 1; i <= 150; i++) {
//         data.push({
//             id: `id ${i}1`,
//             firstName: `First Name ${i}2`,
//             lastName: `Last Name ${i}3`,
//             age: `${i}4`,
//         });
//     }
//     return data;
// };

// const [tableData, setTableData] = useState(generateFakeData());

// const [sort, setSort] = useState(
//     { sortBy: 'id', sortOrder: 'asc' }
// )

///

{/* <AdminTable
    tableCols={tableCols}
    tableData={tableData}
    keySearch={keySearch}
    setKeySearch={setKeySearch}
    sort={sort}
     title={'Table Title'}
    setSort={setSort}
    itemsPerPageOptions={itemsPerPageOptions}
/> */}
function AdminTable({ title, tableCols, tableData, itemsPerPageOptions, keySearch, setKeySearch, sort, setSort }) {
    const defaultItemsPerPage = itemsPerPageOptions[0];
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0)
    const [totalPages, setTotalPages] = useState(0);
    const [displayedData, setDisplayedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

    useEffect(() => {
        const newStartIndex = currentPage * itemsPerPage;
        const newEndIndex = Math.min(newStartIndex + itemsPerPage, tableData.length);
        setDisplayedData(tableData.slice(newStartIndex, newEndIndex));
        setStartIndex(newStartIndex);
        setEndIndex(newEndIndex);
    }, [currentPage, itemsPerPage, tableData]);

    // Update the total number of pages when tableData or itemsPerPage changes
    useEffect(() => {
        setTotalPages(Math.ceil(tableData.length / itemsPerPage));
    }, [tableData, itemsPerPage]);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    /// sort

    const handleSort = (columnName) => {
        if (sort.sortBy === columnName) {
            setSort({ ...sort, sortOrder: sort.sortOrder === 'asc' ? 'desc' : 'asc' });
        } else {
            setSort({ sortBy: columnName, sortOrder: 'asc' });
        }
    };

    const rowClick = (formValue) => {
        setEditPopup(true)
        setFormValue(formValue)
        setResetValue(formValue)
    }

    // edit
    const [editPopup, setEditPopup] = useState(false);


    const fields = [
        { form: 'input', label: 'ID', type: 'input', name: "id" },
        { form: 'input', label: 'First name', type: 'input', name: "firstName" },
        { form: 'input', label: 'Last name', type: 'input', name: "lastName" },
        { form: 'input', label: 'tuoi', type: 'input', name: "tuoi" },
        { form: 'input', label: 'email', type: 'email', name: "emailName" },
        { form: 'select', label: 'select', type: 'select', name: "selectName", options: ['Option 1', 'Option 2', 'Option 3'] },
        { form: 'radio', label: 'radios', name: "radioName", options: ['Option 1', 'Option 2', 'Option 3'] },
        { form: 'checkbox', label: 'Checkbox', name: "checkboxName", options: ['Option 1', 'Option 2', 'Option 3'] },
        { form: 'textarea', label: 'TextArea', name: "textareaName" },
        [
            { form: 'input', label: 'input', type: 'input', name: "inputName1" },
            { form: 'input', label: 'email', type: 'email', name: "emailName1" },
            { form: 'select', label: 'select', type: 'select', name: "selectName1", options: ['Option 1', 'Option 2', 'Option 3'] },
            { form: 'radio', label: 'radios', name: "radioName1", options: ['Option 1', 'Option 2', 'Option 3'] },
            { form: 'checkbox', label: 'Checkbox', name: "checkboxName1", options: ['Option 1', 'Option 2', 'Option 3'] },
            { form: 'textarea', label: 'TextArea', name: "textareaName1" }
        ],
    ];

    const [errors, setErrors] = useState({
        inputName: "",
        emailName: "",
        selectName: "",
        radioName: "",
        checkboxName: "",
        textareaName: "",

        inputName1: "",
        emailName1: "",
        selectName1: "",
        radioName1: "",
        checkboxName1: "",
        textareaName1: ""
    });

    const [formValue, setFormValue] = useState({
        inputName: "",
        emailName: "",
        selectName: "",
        radioName: "",
        checkboxName: "",
        textareaName: "",

        inputName1: "",
        emailName1: "",
        selectName1: "",
        radioName1: "",
        checkboxName1: "",
        textareaName1: ""
    });

    const [resetValue, setResetValue] = useState({
        inputName: "",
        emailName: "",
        selectName: "",
        radioName: "",
        checkboxName: "",
        textareaName: "",

        inputName1: "",
        emailName1: "",
        selectName1: "",
        radioName1: "",
        checkboxName1: "",
        textareaName1: ""
    });

    const onSubmit = () => {
        setErrors({
            inputName: "inputName",
        })
    }

    return (
        <div className={style.container}>
            <div className={style.row1}>
                <p className={style.titleTable}>{title}</p>
            </div>

            <div className={style.row2}>
                <div className={style.entriesPerPage}>
                    <select value={itemsPerPage} onChange={(e) => {
                        const value = e.target.value;
                        setItemsPerPage(parseInt(value));
                    }}>
                        {itemsPerPageOptions.map((item, index) => (
                            item !== 'All' ?
                                <option key={index}>{item}</option> :
                                <option value={tableData.length} key={index}>{item}</option>
                        ))}
                    </select>

                    <label>entries per page</label>
                </div>

                <div className={style.search}>
                    <input value={keySearch} onChange={(e) => setKeySearch(e.target.value)} placeholder='Search...'></input>
                </div>
            </div>

            <div className={style.row3}>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(tableCols).map((key) => (
                                <th key={key} onClick={() => handleSort(key)}>
                                    {tableCols[key]}
                                    {sort.sortBy === key && sort.sortOrder === 'asc' && (
                                        <MdOutlineArrowDropUp className={style.icon} />
                                    )}
                                    {sort.sortBy === key && sort.sortOrder === 'desc' && (
                                        <MdOutlineArrowDropDown className={style.icon} />
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((row, rowIndex) => (
                            <tr key={rowIndex} onClick={() => rowClick(row)}>
                                {Object.keys(tableCols).map((colKey, colIndex) => (
                                    <td key={colIndex}>{row[colKey]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className={style.row4}>
                <div className={style.dataTableInfor}>
                    <p>Showing {startIndex + 1} to {endIndex} of {tableData.length} entries</p>
                </div>

                <div className={style.pagination}>
                    <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
                </div>
            </div>

            <Popup popup={editPopup} setPopup={setEditPopup}>
                <div style={{ width: '80vw' }}>
                    <AdminForm title={'Form Title'} fields={fields} onSubmit={onSubmit} formValue={formValue} setFormValue={setFormValue} errors={errors} resetValue={resetValue} />
                </div>
            </Popup>
        </div>
    );
}

export default AdminTable;
