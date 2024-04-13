import AdminTable from "../../components/AdminTable";
import AdminForm from "../../components/AdminForm";
import { useState } from "react";
import { Popup } from "../../components/Popup";
import { CvForm } from "../CV";
function Test() {
    const itemsPerPageOptions = [5, 10, 15, 20, 'All'];
    const [keySearch, setKeySearch] = useState('')

    const [tableCols, setTableCols] = useState({
        id: 'Id',
        firstName: "First Name",
        lastName: "Last Name",
        age: "Age"
    })

    const generateFakeData = () => {
        const data = [];
        for (let i = 1; i <= 150; i++) {
            data.push({
                id: `id ${i}1`,
                firstName: `First Name ${i}2`,
                lastName: `Last Name ${i}3`,
                age: `${i}4`,
                tuoi: `${i}4`,
            });
        }
        return data;
    };

    const [tableData, setTableData] = useState(generateFakeData());

    const [sort, setSort] = useState(
        { sortBy: 'id', sortOrder: 'asc' }
    )

    const fields = [
        { form: 'input', label: 'input', type: 'input', name: "inputName" },
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


    const [popup, setPopup] = useState(true)
    return (
        <div>
            <br />
            <AdminTable
                tableCols={tableCols}
                tableData={tableData}
                keySearch={keySearch}
                setKeySearch={setKeySearch}
                sort={sort}
                title={'Table Title'}
                setSort={setSort}
                itemsPerPageOptions={itemsPerPageOptions}
            />
            <AdminForm title={'Form Title'} fields={fields} onSubmit={onSubmit} formValue={formValue} setFormValue={setFormValue} errors={errors} resetValue={resetValue} />
            {/* <Popup popup={popup} setPopup={setPopup} /> */}

            {/* <CvForm></CvForm> */}
        </div>
    );
}

export default Test;