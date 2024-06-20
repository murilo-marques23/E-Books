import * as yup from 'yup';

export const LoginValidation = yup.object().shape({
    email: yup.string().email().required("Email é obrigatório"),
    senha: yup.string().required("Senha é obrigatória"),
})

export const RegisterValidation = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup.string().email().matches(/^[\w.-]+@[\w-]+\.\w+$/, "Formato de email inválido").required("Email é obrigatório"),
    senha: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número").required("Senha é obrigatória"),
    confirmacaosenha: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required("Confirmação de senha é obrigatória")
})
