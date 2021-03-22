export type Step = {
    name: string
    list: string[]
}
export type StepType<T> = {
    title: string
    steps: T
}

export type WorkflowDetailType = {
    type: string
    title: string
    subTitle: string
    main?: StepType<string>[]
    content?: StepType<Step[]>[]
    seoTitle: string
    seoKeywords: string
    seoDescription: string
}
