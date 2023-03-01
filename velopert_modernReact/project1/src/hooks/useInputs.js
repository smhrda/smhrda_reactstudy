import {useState, useCallback} from 'react';

function useInputs(initialForm){
    const [form, setForm] = useState(initialForm);

    // change
    const onChange = useCallback(e=>{
        const {name, value} = e.target;
        setForm(form => ({
            ...form,
            [name] : value
        }));
    }, []);

    // 초기화
    const reset = useCallback(()=> setForm(initialForm), [initialForm]);
    
    return [form, onChange, reset];
}

export default useInputs;