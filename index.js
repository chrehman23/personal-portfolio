function modalOpen(data) {
    console.log(data)
    let modal = `
    <div class="modal-dialog modal-xl ">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">${data.project_title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-lg-5">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                        ${data.images.map((data, index) => {
        return (
            `
                                <li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${index == 0 ? 'active' : ''}"></li>
                                `)
    }).join('')}
                        </ol>
                        <div class="carousel-inner">
                        ${data.images.map((data, index) => {
        return (
            `<div class="carousel-item ${index == 0 ? 'active' : ''}  ">
                                                    <img src='${data}' class="d-block w-100"
                                                        alt="Image">
                                                </div>`)
    }).join('')}
                         
                        </div>
                        <button class="carousel-control-prev" type="button"
                            data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-7">
                <h4>${data.project_title}</h4>
                    <p style="line-height: 17px;"><small>${data.project_description}</small></p>
                    <h6>Features</h6>
                    <p style="line-height: 17px;"><small>${data.features}</small></p>
                    <h6>My Role</h6>
                    <p style="line-height: 17px;"><small class="">${data.role}</small></p>
                    <h6>Languages Used</h6>
                    <div class="d-flex flex-wrap" style="line-height: 17px;">
                    ${data.languages.map(data => {
        return (`<span class="badge badge-secondary m-1">${data}</span>`)
    }).join('')}
                   </div>
                    <h6>Stacks Used</h6>
                    <ul style="line-height: 17px;">
                     ${data.frameworks.map(data => {
        return (
            `<li><span class="badge badge-secondary me-1">${data.framework}</span> <small>${data.title}</small> ${data.link_ul && (
                ` <a href='${data.link_ul}' target="_blank" class="text-info" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:15px"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
               </a>`
            )}</li>`
        )
    }).join(' ')}
                    </ul>
                    <br/>
                    <p style="line-height: 17px;" class="text-danger"><small>Note:${data.note}</small></p>
                </div>
            </div>
        </div>
        
    </div>
</div>
    `
    $('#projectsModal').html(modal)


    $('#projectsModal').modal('show')
}