

    
    /* App is an ordering/billing system
    Menu items on left in boxes, buttons below used to add items to order.
    Order section shows order and price, when order complete click send button
    to send copy of chit to kitchen and display total plus tax in total section.
    Click tip button to have alert asking what percent to tip, tip and total created in
    total section(bottom right), thank alert with total due pops up, asks customer to tap card
    */
    
    
    
    let myArray = [];
    let sum = 0;
    let i = 0; 
    var para;//variable for li creation in order list
    
                      
    // prices set here               
    
    let bu = 5.50;
    let be = 3.50;
    let fr = 2.50;
    let sa = 3.75;
    let so = 3.00;
    
    
    
    
    //start of menu button functions
    function addBurger() {
     
     para = document.createElement("LI"); // creates an li element for order section
    
    
        
        para.innerHTML = "Burger"+ " " + bu.toFixed(2);  //adds menu item name and price to second decimal
        
        document.getElementById("chit").appendChild(para).addEventListener("click", delItem);  //allows the item to be deleted when clicked on order section, doesnt remove price from total though, couldnt figure this out
        
        myArray.push(bu);//adds item to array for order total
    
        
    }
    
    //all menu buttons have similar functionality
    
    function addBeer() {
     
     para = document.createElement("LI");
     para.innerHTML = "Beer"+ " " + be.toFixed(2);
     document.getElementById("chit").appendChild(para).addEventListener("click", delItem);
    
        myArray.push(be);
    }
    
    
    function addFries() {
     
     para = document.createElement("LI");
     para.innerHTML = "Fries"+ " " + fr.toFixed(2);
     document.getElementById("chit").appendChild(para).addEventListener("click", delItem);
    
     myArray.push(fr);
    }
    
       
    function addSalad() {
     
     para = document.createElement("LI");
     para.innerHTML = "Salad"+ " " + sa.toFixed(2);
     document.getElementById("chit").appendChild(para).addEventListener("click", delItem);
    
     myArray.push(sa);
    }
    
    function addSoup() {
     
     para = document.createElement("LI");
     para.innerHTML = "Soup"+ " " + so.toFixed(2);
     document.getElementById("chit").appendChild(para).addEventListener("click", delItem);
    
     myArray.push(so);
    }
    
    // end of menu button functions
    
    
    //send order button functions
    function sendOrder() {
        
    
    for (let i = 0; i < myArray.length; i++) {  //loops through the array of ordered items
        
        sum += myArray[i];
        
    }
    document.getElementById("order").disabled = true;//only allow one click on send button
    
    var tot = document.createElement("LI");//creates li in bill section
    document.getElementById("bill").appendChild(tot);
    tot.innerHTML = "$" + (sum*1.05).toFixed(2) + " " + "order";//adds total and tax to bill section, tax set at 5% for everything
    
    
    
        
    }
    
    //tip button functionality
    function sendTip() {
    
    var tip = prompt("what percent would you like to tip?");//pop up ask input for tip percentage
    var tipamount = sum * (tip/100);//calculates tip amount
    
      if(tip != null) {
    
    var tot = document.createElement("LI");//creates li
    document.getElementById("bill").appendChild(tot);
    tot.innerHTML = "$" + tipamount.toFixed(2) + " " + "tip";//updates li with tip amound, tip is applied to cost before tax
    
    var tot = document.createElement("LI");
    document.getElementById("bill").appendChild(tot);
    tot.innerHTML =  "$" + ((sum*1.05) + tipamount).toFixed(2) + " " + "total";//updates li with tip and order amount for total
    
    }

    prompt("Your total is" + " " + "$" + ((sum*1.05) + tipamount).toFixed(2)  + "." + " " + "Thank you, please tap your card here.");//pop up for tapping card payment
    }
      
    //function used to delete li on order list with click event listener.  Couldnt figure out how to get item amount to subtract from total
      
    
    
    
    
    function delItem(e){ 
        
     e.target.remove();
    
    }
    
    
    

    
    
    
    
    