export const baseUrl = 'http://localhost:8080';

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