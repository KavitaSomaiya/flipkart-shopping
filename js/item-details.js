
var curItem = JSON.parse(window.localStorage.getItem('curItem'))

function itemDetailBody () {
  let mainImgStrng =
    `
      <div class="container-fluid">
        <div class='row no-gutters mt-5 pt-3'>
          <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div class='mainImgSectionP'>
              <p class>On offer</p>
            </div>
          </div>
          <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div class='mainImgSectionImage'>
              <img class alt src='${curItem.indexImgUrl}' />
            </div>
          </div>
        <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' onclick='heartFunc();' type='button'>
          <div class='rounded-circle shadow-lg mainImgSectionHeart'>
            <i class='fa fa-heart p-3 heartClassFontSize heartClassGray' onclick='toggleHeartColor();' id='like-btn' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    `
  document.querySelector('#mainImgSection').innerHTML = mainImgStrng

  let itemDetailStrng =
    `
      <div class='container-fluid'>
        <div class='row mt-4 pt-2'>
          <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div class='d-flex flex-column' id='productDesc'>
              <div>
                <h1>
                  ${curItem.name}
                  <span><a href='#'>#JustHere</a></span>
                </h1>
              </div>
              <div class='d-flex' id='ratings'>
                <div class='bg-success h-25 rounded justify-content-center align-items-center px-2 py-1 mr-4 w-auto d-flex'>
                  <p class='mb-0 text-white mr-1'>4.6</p>
                  <i class='fa fa-star text-white' aria-hidden='true'></i>
                </div>
                <div class='inline-block' id='reviews'>
                  <p class='mr-4 text-secondary font-weight-bold align-middle'>
                    69,458 Ratings & 7,914 Reviews
                    <i class='material-icons align-middle text-secondary'>&#xe315;</i>
                  </p>
                </div>
                <img class alt src='images/fa_8b4b59.png' width='auto' height='24px;' />
              </div>
              <p class='text-success font-weight-bold mt-3'>
                Extra discount
              </p>
              <p class='text-black font-weight-bold'>
                ₹${curItem.price}
                <span class='mx-4 text-mute' style='text-decoration: line-through;'>
                  ₹${curItem.retailPrice}
                </span>
                <del class='text-success'>
                  ${curItem.discount}
                </del>
              </p>
              <div class='d-inline-flex align-items-bottom' id='creditCardScheme'>
                <img class='mr-1' height='18' width='18' alt src='images/scheme-icon.png' /> 
                <p class=''>Extra 5% off with Axis Bank Buzz Credit Card</p>
                <i class='material-icons text-secondary' style='font-size: 19.5px;'>&#xe315;</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  document.querySelector('#itemDetail').innerHTML = itemDetailStrng
}

function toggleHeartColor () {
  document.querySelector('#like-btn').classList.toggle('text-danger')
}

function toggleDown (e) {
  if (e.target.querySelector('i').classList.contains('fa-chevron-right')) {
    e.target.querySelector('i').classList.remove('fa-chevron-right')
    e.targetquerySelector('i').classList.add('fa-chevron-down')
  } else {
    e.target.querySelector('i').classList.remove('fa-chevron-down') 
    e.target.querySelector('i').classList.add('fa-chevron-right')
  }
}

function addToCart (e) {
  window.localStorage.setItem('curCartItm', JSON.stringify(curItem))
}

function goToCartPage () {
  window.location.href = './cart.html'
}