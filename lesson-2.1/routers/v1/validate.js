import * as yup from "yup";
const validateGetTodo = yup.object({
    query: yup.object({
        id: yup.string().required('id required'),
    })
})
const validateUpdateTodo = yup.object({
    params: yup.object({
        id: yup.string().required('id required'),
    }),
    body: yup.object({
        todoName: yup.string().required('name required'),
        date: yup.number().typeError('must be a number')
            .test('len', 'date number must be 13', value => value.toString.length === 12)
            .required('date required'),
    }),
})

export {
    validateGetTodo,
    validateUpdateTodo
};