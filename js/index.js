    "use strict";
    // Prices
    const cardTitle = document.querySelectorAll('.prices__cardtitle'),
          pricesCard = document.querySelectorAll('.prices__card'),
          pricesCardarrow = document.querySelectorAll('.prices__cardarrow'),
          pricesImgarrow = document.querySelectorAll('.prices__imgarrow'),
          pricesCardmoree = document.querySelectorAll('.prices__cardmoree');


    cardTitle.forEach((elem, index) => {
        elem.addEventListener('click', ()=>{
            pricesCard[index].classList.toggle('prices__card-active');
            pricesCardarrow[index].classList.toggle('prices__cardarrow-active');
            pricesCardarrow[index].classList.toggle('prices__cardarrow-active');
            pricesImgarrow[index].classList.toggle('prices__imgarrow-active');
            pricesCardmoree[index].classList.toggle('prices__cardmoree-active');
        });
    });
    
    //Contacts

    const contactsNavtitle = document.querySelectorAll('.contacts__navtitle'),
          contactsMoree = document.querySelector('.contacts__moree'),
          contactsArrowbg = document.querySelector('.contacts__arrowbg'),
          contactsArrow = document.querySelector('.contacts__arrow'),
          contactsLi = document.querySelectorAll('.contacts__li'),
          contactsCard = document.querySelectorAll('.contacts__card'),
          contactsCards = document.querySelectorAll('.contacts__cards');
        
    
    contactsNavtitle.forEach(elem => {
        elem.addEventListener('click', (e)=>{
            elem.classList.toggle('contacts__navtitle-active');
            contactsMoree.classList.toggle('contacts__moree-active');
            contactsArrowbg.classList.toggle('contacts__arrowbg-active');
            contactsArrow.classList.toggle('contacts__arrow-active');
            contactsCard.forEach(elem =>{
                elem.classList.remove('contacts__card-active');
            });
            contactsLi.forEach((el, index) => {
                el.addEventListener('click', (e) => {
                    if(e.target === el){
                        elem.classList.remove('contacts__navtitle-active');
                        contactsMoree.classList.remove('contacts__moree-active');
                        contactsArrowbg.classList.remove('contacts__arrowbg-active');
                        contactsArrow.classList.remove('contacts__arrow-active');
                        contactsCard.forEach(elem =>{
                            elem.classList.remove('contacts__card-active');
                        });
                        contactsCard[index].classList.toggle('contacts__card-active');
                    }
                });
            });   
        });
    });


    //Service

    const serviceBtn = document.querySelectorAll('.service__btn'),
          serviceGarden = document.querySelectorAll('.garden'),
          servicePlant = document.querySelectorAll('.plant'),
          serviceLawn = document.querySelectorAll('.lawn');

    function clearCards () {
        serviceGarden.forEach(item => {
            item.classList.remove('filter')
        });
        servicePlant.forEach(item => {
            item.classList.remove('filter')
        });  
        serviceLawn.forEach(item => {
            item.classList.remove('filter')
        });      
    };

    serviceBtn.forEach(elem => {
        serviceBtn.forEach(elem =>{
            elem.classList.remove('service__btn-active');
        });
        elem.addEventListener('click', ()=>{
            if(elem.classList.contains('service__btn-active')){
                serviceBtn.forEach(elem =>{
                    elem.classList.remove('service__btn-active');
                });    
            } else{
                serviceBtn.forEach(elem =>{
                    elem.classList.remove('service__btn-active');
                });
                elem.classList.toggle('service__btn-active');
            }
            if (elem.textContent == "Gardens" && elem.classList.contains('service__btn-active')){
                clearCards();
                servicePlant.forEach(item => {
                    item.classList.add('filter');
                });  
                serviceLawn.forEach(item => {
                    item.classList.add('filter');
                });
            } else if (elem.textContent == "Lawn" && elem.classList.contains('service__btn-active')){
                clearCards();
                servicePlant.forEach(item => {
                    item.classList.add('filter');
                });  
                serviceGarden.forEach(item => {
                    item.classList.add('filter');
                });
            } else if (elem.textContent == "Planting" && elem.classList.contains('service__btn-active')){
                clearCards();
                serviceLawn.forEach(item => {
                    item.classList.add('filter');
                });  
                serviceGarden.forEach(item => {
                    item.classList.add('filter');
                });
            } else { 
                clearCards(); 
            }
        });
    });



// HUMBURGER

    const headerBurgersegments = document.querySelector('.header__burgersegments'),
          headerUl = document.querySelector('.header__ul'),
          headerA = document.querySelectorAll('.header__a');
          
    headerBurgersegments.addEventListener('click', () => {
        headerBurgersegments.classList.toggle('header__burgersegments-active'); 
        headerUl.classList.toggle('header__ul-active');    
    });
    
    headerA.forEach(elem => {
        elem.addEventListener('click', () => {
            headerA.forEach(el => {
                el.classList.remove('header__a-active');
            });
            elem.classList.toggle('header__a-active');
        });
        
    })
// по нажатию на header__burgersegments

// header__burgersegments-active
// header__ul-active