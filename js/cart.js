
function createCartData () {
  var curCartItm = JSON.parse(window.localStorage.getItem('curCartItm')),
  cartDetail =''
  if (curCartItm.length == 0) {
    cartDetail = `<div>Your cart is empty !!!!!</div>`
  } else if (curCartItm.length > 0) {
    if (curCartItm.length >= 1 ) {
      curCartItm.forEach(ele => {
        cartDetail +=
        `
        <div class='d-flex justify-content-between py-4 pl-4 pl-sm-4 pl-md-4 pl-lg-3 pl-xl-3 align-items-top'>
          <div class='mw-100' style="width: 13%;">
            <div class='d-flex flex-column'>
              <div class='align-middle cartItemImg text-center p-1 p-sm-1 p-md-1 p-lg-2 p-xl-2'>
                <a class='text-center' href='#'>
                  <img src='${ele.cartImgUrl}' alt${ele.name} />
                </a>                          
              </div>
              <div class='d-inline-flex justify-content-center align-items-center qtyBtn'>
                <button class='rounded-circle shadow-none' type='button'>-</button>
                <div class='qtyBtnMiddle'>
                  <input type='text' value='${ele.quantity}' />
                </div>
                <button class='rounded-circle shadow-none' type='button'>+</button>
              </div>         
            </div>                        
          </div>
          <div class='mw-100 cartItemDetails ml-5' style='width: 56%;'>
            <div class='d-flex flex-column justify-content-start pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2'>
              <div class='itemNameClass'><a class href='#'>${ele.name}</a></div>
              <p class='sellerName mt-1 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-3'>Seller: ${ele.sellerName}</p>
              <div class='d-flex mt-1 mt-sm-1 mt-md-1 mt-lg-2 mt-xl-2 justify-content-start align-items-center'>
                <span class='itemPrice'>&#x20B9;${ele.price}</span>
                <del><span class='itemRealPrice ml-2'>&#x20B9;${ele.retailPrice}</span></del>
                <span class='discountPer ml-2'>${ele.discount}</span>
                <div class='offerQty ml-2 d-none d-sm-none d-md-block d-lg-block d-xl-block' id='offerQtyId'>
                  <a>
                    ${ele.offersApplied}
                    <i class='' aria-hidden='true'></i>
                  </a> 
                </div>                                            
              </div> 
              <div class='d-block justify-content-start mt-1 mt-sm-1 mt-md-2 mt-lg-4 mt-xl-4'>
                <button class='px-0 btn btn-link' type='button'>SAVE FOR LATER</button>
                <button class='btn btn-link px-0 ml-3' type='button'>REMOVE</button>
              </div>
            </div>
          </div>
          <div class='mw-100 pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2 deliveryDetails' style="width: 31%;">
            <p>
              Delivery by, ${ele.deliveryDate}
            </p>                      
          </div>                       
        </div>
        `
      });
  }     
  document.querySelector('#myCart').innerHTML = cartDetail
  document.querySelector('#totalItemInCart').textContent = `My Cart (${curCartItm.length})`
}


document.querySelector('.dropdown').addEventListener('mouseover', mouseoverFunc);
document.querySelector('.dropdown').addEventListener('mouseout', mouseoverFunc);
document.querySelector('.dropdown').addEventListener('click', clickDropdown);

function mouseoverFunc () {
  setTimeout (function() {
    document.querySelector('#caretId').classList.toggle('fa-angle-up');
  }, 125);
}

function clickDropdown () {
  document.querySelector('.dropdown').removeEventListener('mouseover');
  document.querySelector('.dropdown').removeEventListener('mouseout');
  if (document.querySelector('#caretId').classList == 'fa-angle-down') {
    document.querySelector('#caretId').classList.remove('fa-angle-down');
    document.querySelector('#caretId').classList.add('fa-angle-up');
  } else {
    document.querySelector('#caretId').classList.remove('fa-angle-up');
    document.querySelector('#caretId').classList.add('fa-angle-down');
  }
}

//function cartQtyFunc() {
//  var cartQty = parseInt(document.querySelector('#cartQty').textContent);
//  cartQty++;
//  document.querySelector('#cartQty').textContent = cartQty;
//}