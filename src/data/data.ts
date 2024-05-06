export type WorkerType = {
    name: string
    hospitalDepartment: string
    job: JobType
    isHeadOfDepartment?: boolean
}

export type JobType = 'doctor' | 'nurse' 


export const workers: WorkerType[] = [
    {
        name: 'John',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Alice',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'Emily',
        hospitalDepartment: 'Department A',
        job: 'nurse'
    },
    {
        name: 'David',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Michael',
        hospitalDepartment: 'Department C',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Sarah',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'Jessica',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Daniel',
        hospitalDepartment: 'Department C',
        job: 'nurse'
    },
    {
        name: 'Robert',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Olivia',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'William',
        hospitalDepartment: 'Department A',
        job: 'nurse'
    },
    {
        name: 'Sophia',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'James',
        hospitalDepartment: 'Department C',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Emma',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'Benjamin',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Ava',
        hospitalDepartment: 'Department C',
        job: 'nurse'
    },
    {
        name: 'Joseph',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Mia',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'Ethan',
        hospitalDepartment: 'Department A',
        job: 'nurse'
    },
    {
        name: 'Charlotte',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Alexander',
        hospitalDepartment: 'Department C',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Harper',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'Daniel',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Abigail',
        hospitalDepartment: 'Department C',
        job: 'nurse'
    },
    {
        name: 'Matthew',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Emily',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'David',
        hospitalDepartment: 'Department A',
        job: 'nurse'
    },
    {
        name: 'Grace',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Andrew',
        hospitalDepartment: 'Department C',
        job: 'doctor',
        isHeadOfDepartment: true
    },
    {
        name: 'Sofia',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: false
    },
    {
        name: 'Henry',
        hospitalDepartment: 'Department B',
        job: 'nurse'
    },
    {
        name: 'Ella',
        hospitalDepartment: 'Department C',
        job: 'nurse'
    }
];