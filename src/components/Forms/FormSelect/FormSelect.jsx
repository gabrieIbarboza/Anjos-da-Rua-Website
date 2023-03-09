import Select from 'react-select';

export function FormSelect({
    values
}) {

    const handleChange = (selectedOption) => {
        console.log('handleChange', selectedOption)
    }

    const selectStyles = {
        control: (styles) => ({
            ...styles,
            borderRadius: 15,
            borderColor: "#D9D9D9",
            backgroundColor: "transparent",
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            console.log("option", styles)
            return {...styles}
        }
    }

    return (
        <div className='selectWrapper'>
            <Select
                options={ values }
                isClearable
                isSearchable
                onChange={handleChange}
                styles={selectStyles}
            />
        </div>
    )
}