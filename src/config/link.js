export const baseUrl = 'https://api.socialsphere.vn';

export const accountServiceUrl = {
    login: "login",
    register: "register",
    confirmEmail: "management/email-confirmation",
    resendEmail: "management/send-email-confirmation",
    sendMailforgotPassword: 'send-forgot-password-confirmation'
}

export const recruitmentServiceUrl = {
    save: "management/job-position",
    get: "job-position",
    update: "management/job-position",
    delete: "management/job-position",
}

export const resumeServiceUrl = {
    save: "resume",
    get: "management/resume",
    update: "management/resume",
    delete: "management/resume",
}

export const productServiceUrl = {
    get: "product",
    getById: "product/getById",
}

export const categoryServiceUrl = {
    get: "category",
}