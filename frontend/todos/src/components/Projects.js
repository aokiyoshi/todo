import React from 'react'


function ProjectItem({project}) {
    return (
        <tr>
            <td>
                {project.title}
            </td>
            <td>
                {project.repo}
            </td>
        </tr> 
    )
}


function ProjectList({projects}) {
    return (
        <table class="pure-table">
            <thead>
                <th>
                    Title
                </th>
                <th>
                    Repository
                </th>
            </thead>
            <tbody>
                {projects.map((item) => <ProjectItem project={item} />)}
            </tbody>
        </table>
    )
}

export default ProjectList