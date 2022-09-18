interface ProjectItem {
    prjName: string,
    prjTeamSize: 7,
    prjResponsibilities: Array<String>,
    prjTechnologies: Array<String>,
}
interface WorkExperienceItem {
    company: string,
    time: {
        period: string,
        from: string,
        to: string,
    },
    locate: string,
    projects: Array<ProjectItem>
}

//------------------------------------------

interface Quote {
    _id: string,
    content: string,
    author: string,
    authorSlug: string,
    length: number,
    tags: string[]
}

export type {ProjectItem, WorkExperienceItem, Quote}