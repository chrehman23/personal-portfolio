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
        return (`<span class="badge badge-secondary mr-1">${data}</span>`)
    }).join('')}
                   </div>
                    <h6>Stacks Used</h6>
                    <ul style="line-height: 17px;">
                     ${data.frameworks.map(data => {
        return (
            `<li><span class="badge badge-secondary me-1">${data.framework}</span> <small>${data.title}</small> ${data.link_ul && (
                ` <a href='${data.link_ul}' target="_blank" class="text-info">
               <img src="link-solid.svg" style="height:15px" />
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