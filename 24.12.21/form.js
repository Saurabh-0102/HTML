let count = 0;

function addreview() {

    let parent = document.querySelector("#parent");

    let prevchildtag = parent.innerHTML;

    let moviename = document.querySelector("#mn").value;
    let movieReview = document.querySelector("#mr").value;

    count++;
    let moviepic = (300 + count);

    let newchildtag = `
        <div class="col-6 col-md-3 mt-4">
            <div class="card">
                <div class="card-header">${moviename}</div>
                <div class="card-body ">
                    <img src="https://www.picsum.photos/${moviepic}" style="width: 100%; height: 200px; object-fit: cover; padding: 0%;">
                </div>
                <div style="height: 100px; width: 100%; overflow-y: auto;" class="d-flex justify-content-center">
                   ${movieReview}
                </div>
                <div class="d-flex justify-content-center w-100">
                    <input type="button" value="watch on amazon" class="btn btn-danger w-75 mt-2">
                </div>
            </div>
    </div>`

    parent.innerHTML = `${prevchildtag}${newchildtag}`

    document.querySelector("#mn").value = ""
    document.querySelector("#mr").value = ""


}