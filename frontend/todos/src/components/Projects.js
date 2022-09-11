import React from 'react'
import {Link} from "react-router-dom"


function filterProjects() {
    console.log("!");
    const searchText = document.querySelector(".project-search").value;
    const projectEls = document.querySelectorAll(".project-row");
    console.log('searchtext:' + searchText);
    projectEls.forEach(
        (item) => {
            const title = item.querySelector(".project-name").textContent;
            console.log(title);
            if (title.includes(searchText)) {
                item.style.display = ""
            } else {
                item.style.display = "none"
            }
        }
    )

}

function ProjectItem({project, deleteProject}) {
    return (
        <tr class="project-row">
            <td class="project-name">
                {project.title}
            </td>
            <td>
                {project.repo}
            </td>
            <td>
                <button onClick={() => deleteProject(project.id)} type='button'>Delete</button>
            </td>
        </tr> 
    )
}


function ProjectList({projects, deleteProject}) {
    return (
        <div>
            <form class="pure-form" onSubmit={()=> filterProjects()}>
                <button>
                    <Link to="/projects/create/" class="pure-button">
                        Создать
                    </Link>
                </button>
                <input type="text" class="pure-input-rounded project-search" onInput={()=> filterProjects()}/>
            </form>
            <table class="pure-table">
                <thead>
                    <th>
                        Title
                    </th>
                    <th>
                        Repository
                    </th>
                    <th></th>
                </thead>
                <tbody>
                    {projects.map((item) => <ProjectItem project={item} deleteProject={deleteProject}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectList