import Select from 'react-select';

export function FormSelect({
    values, onChange
}) {
    return (
        <div className='selectWrapper'>
            <Select
                options={ values }
                isClearable
                isSearchable
            />
        </div>
    )
}