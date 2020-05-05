export interface ICar {
    name: string,
    id: number,
    models: { name: string }[]
}

export type IYear={
    year: string
}

export enum Statuses {
    notInit = 0,
    isLoading = 1,
    success = 2,
    error = 3
}

export type Step1 = {
    carName: string
    carModel: string
    yearFrom: string
    yearTo: string
}
export type Step2 = {
    engine: string
    transmission: string
    driving: string
    colors: string
}
export type Step3 = {
    currency: string
}
export type FinalStep = {
    information: string
    fullName: string
    email: string
    number: string
    city: string
}
export type FormValues = Step1 & Step2 & Step3 & FinalStep
export type addedValues = Step1 | Step2 | Step3 | FinalStep

export interface myOption {
    value: string
    label: string
}