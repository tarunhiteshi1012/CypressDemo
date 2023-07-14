describe('Testing sorting', ()=>{
    
    
it.only('Verify Sorting on the basis of price low to high in camera and photos:', ()=>{

    cy.visit("https://demo.nopcommerce.com/")
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(3) > [href="/apparel"]').click()
    cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()



   /* cy.get(':nth-child(1) > .category-item > .picture > a > img').click()
    cy.get(':nth-child(1) > .sub-category-item > .picture > a > img').click()*/
    cy.get('[class="item-grid"]>div>div>div[class="details"]>div>div>span').then(($Prices)=>{
        const actualPriceBefore = Array.from($Prices).map((el) => el.innerText);              //
        cy.log(actualPriceBefore)

        for(let i=0;i<actualPriceBefore.length ;i++){
            const integer = parseFloat(actualPriceBefore[i].replace(/[^0.-9-]+/g, ""))
            actualPriceBefore[i] = integer
        }
        cy.log(actualPriceBefore)


    
        const sortedBefore = actualPriceBefore.sort((a, b) => a - b);
        cy.log(sortedBefore)


   cy.get('select[aria-label="Select product sort order"]').select("Price: Low to High")
   cy.wait(2000)
    cy.get('[class="item-grid"]>div>div>div[class="details"]>div>div>span').then(($Prices)=>{
        const actualPriceAfter = Array.from($Prices).map((el) => el.innerText);
        cy.log(actualPriceAfter)
        
        for(let i=0;i<actualPriceAfter.length ;i++)
        {
            const integer = parseFloat(actualPriceAfter[i].replace(/[^0.-9-]+/g, ""))
            actualPriceAfter[i] = integer
        }
        
        
        //const numberArrayAfter = actualPriceAfter.map((text) => +text.replace(/\D/g, ''));
        //cy.log(numberArrayAfter)
        
        cy.log(actualPriceAfter)
        
        expect(sortedBefore).to.deep.eq(actualPriceAfter)

        

    })
})
})

it.skip('Verify number of items displayed ', ()=>{

    cy.visit("https://demo.nopcommerce.com/")
        cy.get('.menu-toggle').click()
        cy.get('ul[class="top-menu mobile"]>li>a[href="/computers"]').click({force: true})
        cy.get('.item-grid>div>div>div>a[href="/notebooks"]').click()
        cy.get('.item-grid>div').then((Items)=>{
            cy.log(Items.length)
        })
        
        cy.get('#products-pagesize').select("3")
        cy.get('.products-wrapper>div>div>div>div>div>a')
        })

        it.only('Verify number of items displayed new ', ()=>{
            cy.visit("https://demo.nopcommerce.com/")
            cy.get('.menu-toggle').click()
            cy.get('ul[class="top-menu mobile"]>li>a[href="/apparel"]').click({force: true})
            cy.get('.item-grid>div>div>div>a[href="/clothing"]').click()
            cy.get('.item-grid>div').then((Items)=>{
                cy.log(Items.length)
            })
            
            cy.get('#products-pagesize').select("3")
            cy.get('.products-container>div>div>div')
            })  

        
})


