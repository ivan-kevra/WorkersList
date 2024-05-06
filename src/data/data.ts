export type WorkerType = {
    name: string
    hospitalDepartment: string
    job: JobType
    isHeadOfDepartment?: 'yes' | 'no'
}

export type JobType = 'doctor' | 'nurse' 

export const workers: WorkerType[] = [
    {
        name: 'John',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Alice',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Sarah',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Olivia',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Emma',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Mia',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Harper',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Emily',
        hospitalDepartment: 'Department B',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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
        isHeadOfDepartment: 'yes'
    },
    {
        name: 'Sofia',
        hospitalDepartment: 'Department A',
        job: 'doctor',
        isHeadOfDepartment: 'no'
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