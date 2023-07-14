describe("Search", ()=>{
    
    
    it("Verify search",() =>{
        cy.fixture("SearchData").then((Query)=>{

        Query.forEach((search)=>{
            cy.log(search.SearchQuery)
        
            cy.visit("https://themes.woocommerce.com/")
        cy.frameLoaded('iframe[src="https://themes.woocommerce.com/homestore/"]')
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]').find('ul[class="menu nav-menu"]').click()
        cy.wait(2000)
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]').find('input[placeholder="Search …"]').type(search.SearchQuery).type('{enter}')
        cy.wait(2000)
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]').find('header[class="page-header"]>h1').invoke('text').then((title)=>{
            const X = title;
            
        

            if(X != "Nothing Found")
            {            
        cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]').find('main[class="site-main"]>article>header>h1>a').then((header)=>{
            const productName = Array.from(header).map((el) => el.innerText)
            
            
            for(let i=0; i<productName.length; i++){
            let Name = productName[i]  
            cy.log(Name)
            expect(Name).to.contain(search.SearchQuery)}
        
            })}

            else
            {
                cy.iframe('iframe[src="https://themes.woocommerce.com/homestore/"]').find('h1[class="page-title"]').should("have.text", "Nothing Found")
            }

        })
    })

    })
})
})