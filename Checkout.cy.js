describe("checkout", ()=>{
    
    
    it("Verify checkout after buying a product",() =>{

        cy.visit("https://themes.woocommerce.com/")
        cy.frameLoaded('iframe[src="https://themes.woocommerce.com/homestore/"]')
        
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]')
        .find('#menu-primary-menu>li>a[href="https://themes.woocommerce.com/homestore/shop/"]').click()
        cy.wait(2000)

        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]')
        .find('ul[class="products columns-4"]>li>')
        
        let Y
        let X
        for(let i=1; i<=3; i++){
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]')
        .find('ul[class="products columns-4"]>li:nth-child(1)>a[href="?add-to-cart=127"]').click()
        
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]')
        .find('ul[class="products columns-4"]>li:nth-child(1)>a>span[class="price"]>ins>span>bdi').then((Price)=>{
            const Rate = Array.from(Price).map(($el)=> $el.innerText)
            cy.log(Rate)    
            X = parseFloat(Rate[0].replace("£", ""))  
            cy.log(X)
            Y = X*i
            cy.log(Y)

           cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]')
            .find('a[class="cart-contents"]').should("to.contain",parseFloat(Y).toFixed(2))


            })
        }
        

        
  /*      for(let i=1; i<=3; i++){
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]')
        .find('ul[class="products columns-4"]>li:nth-child(12)>a>span[class="price"]>span>bdi').then((Price)=>{
            const Rate = Array.from(Price).map(($el)=> $el.innerText)
            cy.log(Rate)
            X = parseInt(Rate[0].replace(/[^0-9.-]+/g, ""))    
            Y = X *3
        })
        }*/
        
    })

})
