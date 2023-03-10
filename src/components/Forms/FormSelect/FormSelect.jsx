import Select from 'react-select';

import './FormSelect.scss';

export function FormSelect({
    label, name, values, onChange
}) {

    const handleChange = (e) => {
        console.log('handleChange', e)
        if(e !== null && e !== undefined)
        {
            onChange(e);
        }
        else
        {
            onChange({selectid: name, value: ""})
        }
    }

    const selectStyles = {
        control: (styles) => ({
            ...styles,
            border: "2px solid #D9D9D9",
            borderRadius: 15,
            backgroundColor: "transparent",
            fontSize: 18,
            height: 57,
            minHeight: 57,
            maxWidth: 800,
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
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
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: '#3FB9E5',
                        primary25: '#3FB9E5',
                        neutral30: '#3FB9E5',
                        neutral50: '#bebebe',
                        neutral80: '#bebebe',
                    } 
                })}
                placeholder={label}
            />
        </div>
    )
}