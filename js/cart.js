

let curCartItm = JSON.parse(window.localStorage.getItem('curCartItm'))

function createCartData () {
  let cartDetail =''
    cartDetail =
      `
        <div class='d-flex justify-content-between py-4 pl-4 pl-sm-4 pl-md-4 pl-lg-3 pl-xl-3 align-items-top'>
          <div class='mw-100' style="width: 13%;">
            <div class='d-flex flex-column'>
              <div class='align-middle cartItemImg text-center p-1 p-sm-1 p-md-1 p-lg-2 p-xl-2'>
                <a class='text-center' href='#'>
                  <img src='${curCartItm.indexImgUrl}' alt${curCartItm.name} />
                </a>
              </div>
              <div class='d-inline-flex justify-content-center align-items-center qtyBtn'>
                <button class='rounded-circle shadow-none' type='button'>-</button>
                <div class='qtyBtnMiddle'>
                  <input type='text' value='${curCartItm.quantity}' />
                </div>
                <button class='rounded-circle shadow-none' type='button'>+</button>
              </div>         
            </div>                        
          </div>
          <div class='mw-100 cartItemDetails ml-5' style='width: 56%;'>
            <div class='d-flex flex-column justify-content-start pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2'>
              <div class='itemNameClass'><a class href='#'>${curCartItm.name}</a></div>
              <p class='sellerName mt-1 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-3'>Seller: ${curCartItm.sellerName}</p>
              <div class='d-flex mt-1 mt-sm-1 mt-md-1 mt-lg-2 mt-xl-2 justify-content-start align-items-center'>
                <span class='itemPrice'>&#x20B9;${curCartItm.price}</span>
                <del><span class='itemRealPrice ml-2'>&#x20B9;${curCartItm.retailPrice}</span></del>
                <span class='discountPer ml-2'>${curCartItm.discount}% Discount</span>
                <div class='offerQty ml-2 d-none d-sm-none d-md-block d-lg-block d-xl-block' id='offerQtyId'>
                  <a>
                    ${curCartItm.offersApplied}
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
              Delivery by, ${curCartItm.deliveryDate}
            </p>                      
          </div>                       
        </div>
      `
    document.querySelector('#myCart').innerHTML = cartDetail
    document.querySelector('#totalItemInCart').textContent = `My Cart (${curCartItm.length})`
  }